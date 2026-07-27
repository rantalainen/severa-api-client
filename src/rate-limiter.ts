/**
 * Token bucket rate limiter for Severa API requests.
 *
 * Severa enforces a fixed quota (10 requests per second by default) and does not
 * return any rate limit headers, so the bucket cannot be synchronised from responses.
 * Because of that the defaults are deliberately kept below the documented quota and
 * `backOff()` is used to slow the bucket down whenever the API answers with a 429.
 */
export class RateLimiter {
  /** Amount of current tokens */
  private tokens: number;
  /** Timestamp of the last refill */
  private lastRefill: number;
  /** Rate at which tokens are replenished (tokens per second) */
  private replenishRate: number;
  /** Maximum burst capacity (max tokens that can be used at once) */
  private burstCapacity: number;
  /** Timestamp until which all requests are held back, set by `backOff()` */
  private pausedUntil = 0;

  /**
   * Creates a new RateLimiter instance.
   * @param replenishRate Rate at which tokens are replenished (tokens per second).
   *                      Defaults to 8 tokens per second, which leaves some headroom
   *                      below Severa's documented quota of 10 requests per second.
   * @param burstCapacity Maximum burst capacity (max tokens that can be used at once).
   *                      Defaults to 8 tokens.
   */
  constructor(replenishRate = 8, burstCapacity = 8) {
    this.replenishRate = replenishRate;
    this.burstCapacity = burstCapacity;
    this.tokens = burstCapacity; // start full
    this.lastRefill = Date.now();
  }

  private refillTokens() {
    const now = Date.now();
    const elapsedSeconds = (now - this.lastRefill) / 1000;
    const tokensToAdd = elapsedSeconds * this.replenishRate;

    this.tokens = Math.min(this.tokens + tokensToAdd, this.burstCapacity);
    this.lastRefill = now;
  }

  private async sleep(milliseconds: number): Promise<void> {
    await new Promise((resolve) => setTimeout(resolve, milliseconds));
  }

  /**
   * Waits until the rate limiter has a token available to proceed.
   * @returns A promise that resolves when the request is allowed to proceed.
   */
  public async waitUntilAvailable(): Promise<void> {
    while (true) {
      // Hold back everything while the API has told us that we are over the quota
      const pauseMs = this.pausedUntil - Date.now();
      if (pauseMs > 0) {
        await this.sleep(pauseMs);
        continue;
      }

      this.refillTokens();

      if (this.tokens >= 1) {
        this.tokens -= 1;
        return;
      }

      await this.sleep(Math.ceil(1000 / this.replenishRate));
    }
  }

  /**
   * Empties the bucket and holds back all requests for the given time.
   * Called when the API responds with 429 so that the retry and any other
   * requests in flight are spaced out instead of hitting the quota again.
   * @param waitMilliseconds Time to hold back requests for.
   */
  public backOff(waitMilliseconds: number) {
    this.tokens = 0;
    this.lastRefill = Date.now();
    this.pausedUntil = Math.max(this.pausedUntil, Date.now() + waitMilliseconds);
  }
}
