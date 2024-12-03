/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface AddressModel {
  /** @format date-time */
  createdDateTime?: string;
  createdBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  /** @format date-time */
  lastUpdatedDateTime?: string | null;
  lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  guid?: string | null;
  addressline?: string | null;
  postalCode?: string | null;
  city?: string | null;
  isBillingAddress?: boolean;
  isPostalAddress?: boolean;
  isVisitAddress?: boolean;
  phone?: string | null;
  fax?: string | null;
  country?: AddressCountry | null;
  countryRegion?: ModelWithName | null;
  customer?: AddressCustomer | null;
  contacts?: ModelWithName[] | null;
}

export interface UserWithFirstNameLastNameAndPhotoFileModel {
  code?: string | null;
  name?: string | null;
  guid?: string | null;
  firstName?: string | null;
  lastName?: string | null;
}

export interface AddressCountry {
  name?: string | null;
  guid?: string | null;
  englishName?: string | null;
  hasRegions?: CountryRegionsStatus;
}

export enum CountryRegionsStatus {
  NoRegion = 'NoRegion',
  Unknown = 'Unknown',
  HasRegions = 'HasRegions'
}

export interface ModelWithName {
  guid?: string | null;
  name?: string | null;
}

export interface AddressCustomer {
  name?: string | null;
  guid?: string | null;
  /** @format int64 */
  number?: number | null;
}

export interface ExceptionModel {
  error?: ErrorModel | null;
}

export interface ErrorModel {
  /** @format int32 */
  httpStatusCode?: number;
  type?: ExceptionTypeEnum;
  details?: ExceptionDetailModel[] | null;
  stack?: string | null;
}

export enum ExceptionTypeEnum {
  InternalSystemError = 'InternalSystemError',
  AuthenticationRequired = 'AuthenticationRequired',
  AddonMissing = 'AddonMissing',
  FeatureIsNotEnabled = 'FeatureIsNotEnabled',
  InvalidParameter = 'InvalidParameter',
  InvalidOperation = 'InvalidOperation',
  InvalidRequest = 'InvalidRequest',
  InsufficientApiScope = 'InsufficientApiScope',
  InvalidApiVersion = 'InvalidApiVersion',
  ConfigurationError = 'ConfigurationError',
  UserLicenseType = 'UserLicenseType',
  TermsOfServiceNotApproved = 'TermsOfServiceNotApproved',
  HttpsRequired = 'HttpsRequired',
  OrganizationNotActive = 'OrganizationNotActive',
  PermissionDenied = 'PermissionDenied',
  TrialExpired = 'TrialExpired',
  NotAvailableInTrial = 'NotAvailableInTrial',
  InvalidRecaptcha = 'InvalidRecaptcha',
  AddonMissingTermsOfServiceApproval = 'AddonMissingTermsOfServiceApproval',
  ExcludedFromTrial = 'ExcludedFromTrial'
}

export interface ExceptionDetailModel {
  message?: string | null;
  url?: string | null;
  location?: ExceptionLocationModel | null;
}

export interface ExceptionLocationModel {
  type?: ExceptionLocationTypeEnum;
  name?: string | null;
  identifier?: string | null;
}

export enum ExceptionLocationTypeEnum {
  PathParameter = 'PathParameter',
  RequestBody = 'RequestBody',
  RequestHeader = 'RequestHeader',
  UriParameter = 'UriParameter'
}

export interface PatchOperation {
  op: PatchOperationType;
  path?: string | null;
  value?: string | null;
  from?: string | null;
}

export enum PatchOperationType {
  Add = 'Add',
  Copy = 'Copy',
  Move = 'Move',
  Remove = 'Remove',
  Replace = 'Replace'
}

export interface BusinessUnitModel {
  guid?: string | null;
  /** @minLength 1 */
  name: string;
  /** @format date-time */
  createdDateTime?: string;
  createdBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  /** @format date-time */
  lastUpdatedDateTime?: string | null;
  lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  parentGuid?: string | null;
  /** @default true */
  isActive?: boolean;
  costCenter?: BusinessUnitCostCenterModel | null;
  vatNumber?: string | null;
  /**
   * @minLength 0
   * @maxLength 25
   */
  kvkNumber?: string | null;
  companyGuid?: string | null;
  companyName?: string | null;
  companyBusinessUnitGuid?: string | null;
  companyCountryGuid?: string | null;
  companyCurrencyGuid?: string | null;
  code?: string | null;
}

export interface BusinessUnitCostCenterModel {
  /** @minLength 1 */
  guid: string;
  name?: string | null;
  identifier?: string | null;
}

export interface CommunicationTypeModel {
  guid?: string | null;
  /** @minLength 1 */
  name: string;
  /** @format date-time */
  createdDateTime?: string;
  createdBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  /** @format date-time */
  lastUpdatedDateTime?: string | null;
  lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  /** @default true */
  isActive?: boolean;
  type?: CommunicationMethodType;
}

export enum CommunicationMethodType {
  Phone = 'Phone',
  Fax = 'Fax',
  MobilePhone = 'MobilePhone',
  IPPhone = 'IPPhone',
  InstantMessenger = 'InstantMessenger',
  EmailAddress = 'EmailAddress'
}

export interface KeyValuePairOfStringAndSortDirection {
  key?: string | null;
  value?: SortDirection;
}

export enum SortDirection {
  Asc = 'Asc',
  Desc = 'Desc',
  AscNullsFirst = 'AscNullsFirst',
  AscNullsLast = 'AscNullsLast',
  DescNullsFirst = 'DescNullsFirst',
  DescNullsLast = 'DescNullsLast'
}

export interface ContactCommunicationModel {
  /** @format date-time */
  createdDateTime?: string;
  createdBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  /** @format date-time */
  lastUpdatedDateTime?: string | null;
  lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  guid?: string | null;
  /** @minLength 1 */
  value: string;
  /** @default true */
  isForbiddenToUse?: boolean;
  contact: ModelBaseWithRequiredGuid;
  communicationType: CommunicationTypeSubModel;
}

export interface ModelBaseWithRequiredGuid {
  /** @minLength 1 */
  guid: string;
  name?: string | null;
}

export interface CommunicationTypeSubModel {
  /** @minLength 1 */
  guid: string;
  name?: string | null;
  /** @default true */
  isActive?: boolean;
  type?: CommunicationMethodType;
}

export interface ContactRoleModel {
  guid?: string | null;
  /** @minLength 1 */
  name: string;
  /** @format date-time */
  createdDateTime?: string;
  createdBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  /** @format date-time */
  lastUpdatedDateTime?: string | null;
  lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  /** @default true */
  isActive?: boolean;
}

export interface ContactModel {
  /** @minLength 1 */
  firstName: string;
  /** @minLength 1 */
  lastName: string;
  salutation?: SalutationType | null;
  /** @format date-time */
  createdDateTime?: string;
  createdBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  /** @format date-time */
  lastUpdatedDateTime?: string | null;
  lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  guid?: string | null;
  name?: string | null;
  description?: string | null;
  jobTitle?: string | null;
  /** @default true */
  isActive?: boolean;
  isDeleted?: boolean;
  customer: ContactCustomer;
  addressGuid?: string | null;
  phoneNumbers?: string[] | null;
  emails?: string[] | null;
  satisfactionLevel?: SatisfactionLevelType | null;
  timeZone?: ModelWithName | null;
  /** @format date */
  dateOfBirth?: string | null;
  role?: ModelWithName | null;
  language?: ModelWithName | null;
  /** @default false */
  isEmailAllowed?: boolean;
}

export enum SalutationType {
  Mr = 'Mr.',
  Mrs = 'Mrs.',
  Ms = 'Ms.'
}

export interface ContactCustomer {
  /** @minLength 1 */
  guid: string;
  name?: string | null;
  /** @format int64 */
  number?: number | null;
}

export enum SatisfactionLevelType {
  Unsatisfied = 'Unsatisfied',
  Neutral = 'Neutral',
  Satisfied = 'Satisfied',
  Unknown = 'Unknown'
}

export interface KeyValuePairOfStringAndObject {
  key?: string | null;
  value?: string | null;
}

export interface CostAccountModel {
  guid?: string | null;
  /** @minLength 1 */
  name: string;
  /** @format date-time */
  createdDateTime?: string;
  createdBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  /** @format date-time */
  lastUpdatedDateTime?: string | null;
  lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  /** @minLength 1 */
  number: string;
  /** @default true */
  isActive?: boolean;
  isTravelTypeDefault?: boolean;
}

export interface CostCenterModel {
  guid?: string | null;
  /** @minLength 1 */
  name: string;
  /** @format date-time */
  createdDateTime?: string;
  createdBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  /** @format date-time */
  lastUpdatedDateTime?: string | null;
  lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  /** @minLength 1 */
  identifier: string;
  /** @default true */
  isActive?: boolean;
  isDefault?: boolean;
}

export interface CountryModel {
  name?: string | null;
  guid?: string | null;
  englishName?: string | null;
  code2?: string | null;
  code3?: string | null;
  hasRegions?: CountryRegionsStatus;
  companyRegisterUrl?: string | null;
  isInEU?: boolean;
  defaultCulture?: string | null;
  isRegistrationCountry?: boolean;
  currency?: CurrencyBaseModel | null;
  defaultLanguage?: CountryLanguage | null;
  timezone?: CountryTimezone | null;
}

export interface CurrencyBaseModel {
  /** @minLength 1 */
  guid: string;
  name?: string | null;
  code?: string | null;
  symbol?: string | null;
}

export interface CountryLanguage {
  name?: string | null;
  guid?: string | null;
}

export interface CountryTimezone {
  name?: string | null;
  guid?: string | null;
}

export interface CountryRegionModel {
  name?: string | null;
  guid?: string | null;
  code?: string | null;
  timezone?: CountryRegionTimezoneModel | null;
}

export interface CountryRegionTimezoneModel {
  name?: string | null;
  guid?: string | null;
}

export interface CustomerMarketSegmentModel {
  /** @format date-time */
  createdDateTime?: string;
  createdBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  /** @format date-time */
  lastUpdatedDateTime?: string | null;
  lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  guid?: string | null;
  customer?: ModelWithName | null;
  marketSegment?: MarketSegmentSubModel | null;
  parentMarketSegment?: MarketSegmentSubModel | null;
}

export interface MarketSegmentSubModel {
  name?: string | null;
  guid?: string | null;
  isActive?: boolean | null;
}

export interface FileModel {
  /** @minLength 1 */
  name: string;
  /** @format double */
  size?: number | null;
  description?: string | null;
  contentType?: string | null;
  category?: FileCategory;
  isInternal?: boolean | null;
  /** @format date-time */
  createdDateTime?: string;
  createdBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  /** @format date-time */
  lastUpdatedDateTime?: string | null;
  lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  guid?: string | null;
}

export enum FileCategory {
  Misc = 'Misc',
  Application = 'Application',
  Projects = 'Projects',
  Proposal = 'Proposal',
  ProjectFees = 'ProjectFees',
  Invoice = 'Invoice',
  Users = 'Users',
  ProjectTravelExpense = 'ProjectTravelExpense',
  Customer = 'Customer'
}

export interface ProjectFileModel {
  /** @minLength 1 */
  name: string;
  /** @format double */
  size?: number | null;
  description?: string | null;
  contentType?: string | null;
  category?: FileCategory;
  isInternal?: boolean | null;
  /** @format date-time */
  createdDateTime?: string;
  createdBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  /** @format date-time */
  lastUpdatedDateTime?: string | null;
  lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  guid?: string | null;
  fileGuid?: string | null;
  usages?: UsageModel[] | null;
  isReadOnly?: boolean;
  /** @minLength 1 */
  projectGuid: string;
}

export interface UsageModel {
  name?: string | null;
  guid?: string | null;
  type?: ReferenceType;
  isReadOnly?: boolean;
}

export enum ReferenceType {
  Invoice = 'Invoice',
  Proposal = 'Proposal',
  InvoiceTemplate = 'InvoiceTemplate',
  Other = 'Other'
}

export interface InvoiceFileModel {
  /** @minLength 1 */
  name: string;
  /** @format double */
  size?: number | null;
  description?: string | null;
  contentType?: string | null;
  category?: FileCategory;
  isInternal?: boolean | null;
  /** @format date-time */
  createdDateTime?: string;
  createdBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  /** @format date-time */
  lastUpdatedDateTime?: string | null;
  lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  guid?: string | null;
  fileGuid?: string | null;
  invoiceGuid?: string | null;
  /** @format int32 */
  sortOrder?: number | null;
}

export interface ProjectTravelExpenseFileModel {
  /** @minLength 1 */
  name: string;
  /** @format double */
  size?: number | null;
  description?: string | null;
  contentType?: string | null;
  category?: FileCategory;
  isInternal?: boolean | null;
  /** @format date-time */
  createdDateTime?: string;
  createdBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  /** @format date-time */
  lastUpdatedDateTime?: string | null;
  lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  guid?: string | null;
  fileGuid?: string | null;
  travelExpenseGuid?: string | null;
  source?: TravelReimbursementAttachmentSource;
}

export enum TravelReimbursementAttachmentSource {
  Severa = 'Severa',
  VismaScanner = 'VismaScanner',
  Google = 'Google'
}

export interface FlextimeModel {
  /** @format double */
  totalFlextimeBalance?: number | null;
  /** @format double */
  monthFlextimeBalance?: number | null;
}

export interface FormattingCultureModel {
  name?: string | null;
  guid?: string | null;
  englishName?: string | null;
  code?: string | null;
  /** @default true */
  isActive?: boolean | null;
}

export interface HolidayModel {
  guid?: string | null;
  /** @minLength 1 */
  name: string;
  /** @format date */
  date: string;
  /** @minLength 1 */
  countryGuid: string;
  /** @default true */
  isActive?: boolean;
  isRecurringYearly?: boolean;
  /**
   * @format int32
   * @min 1900
   * @max 2075
   */
  recurringEndYear?: number | null;
  isPublicHoliday?: boolean;
}

export interface IndustryModel {
  guid?: string | null;
  /** @minLength 1 */
  name: string;
  /** @format date-time */
  createdDateTime?: string;
  createdBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  /** @format date-time */
  lastUpdatedDateTime?: string | null;
  lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  /** @default true */
  isActive?: boolean;
  code?: string | null;
}

export interface InvoiceStatusModel {
  guid?: string | null;
  /** @minLength 1 */
  name: string;
  /** @format date-time */
  createdDateTime?: string;
  createdBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  /** @format date-time */
  lastUpdatedDateTime?: string | null;
  lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  /** @default true */
  isActive?: boolean;
  isDefault?: boolean;
  isReadOnly?: boolean;
  hasInvoiceNumber?: boolean;
  isSent?: boolean;
  isWaitingPayment?: boolean;
  isPaid?: boolean;
  isDefaultForCreditNote?: boolean;
  /** @format int32 */
  sortOrder?: number;
}

export interface InvoiceTemplateModel {
  /** @format date-time */
  createdDateTime?: string;
  createdBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  /** @format date-time */
  lastUpdatedDateTime?: string | null;
  lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  guid?: string | null;
  /** @minLength 1 */
  title: string;
  /** @default true */
  isActive?: boolean;
  isDefault?: boolean;
  canDelete?: boolean;
}

export enum InvoiceType {
  Invoice = 'Invoice',
  Reminder = 'Reminder'
}

export enum InvoicePdfGetOptions {
  All = 'All',
  InvoiceOnly = 'InvoiceOnly',
  AttachmentAndBreakdown = 'AttachmentAndBreakdown'
}

export interface PermissionProfileModel {
  guid?: string | null;
  /** @minLength 1 */
  name: string;
  /** @default true */
  isActive?: boolean;
  isDefault?: boolean;
  isAccessible?: boolean | null;
}

export interface PriceListModel {
  guid?: string | null;
  /** @minLength 1 */
  name: string;
  /** @format date-time */
  createdDateTime?: string;
  createdBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  /** @format date-time */
  lastUpdatedDateTime?: string | null;
  lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  isDefault?: boolean;
  /** @default true */
  isActive?: boolean;
  isCustom?: boolean;
  isVolumePricing?: boolean;
  currency: PriceListCurrency;
}

export interface PriceListCurrency {
  /** @minLength 1 */
  guid: string;
  name?: string | null;
  symbol?: string | null;
  code?: string | null;
}

export interface KeywordModel {
  /** @minLength 1 */
  keyword: string;
  /** @default true */
  isActive?: boolean;
  /** @format date-time */
  createdDateTime?: string;
  createdBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  /** @format date-time */
  lastUpdatedDateTime?: string | null;
  lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  guid?: string | null;
  category: KeywordCategory;
}

export enum KeywordCategory {
  Case = 'Project',
  Contact = 'Contact',
  User = 'User',
  File = 'File'
}

export interface ProjectKeywordModel {
  /** @minLength 1 */
  keyword: string;
  /** @default true */
  isActive?: boolean;
  /** @format date-time */
  createdDateTime?: string;
  createdBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  /** @format date-time */
  lastUpdatedDateTime?: string | null;
  lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  guid?: string | null;
  /** @default "Case" */
  category?: KeywordCategory;
}

export interface FileKeywordModel {
  /** @minLength 1 */
  keyword: string;
  /** @default true */
  isActive?: boolean;
  /** @format date-time */
  createdDateTime?: string;
  createdBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  /** @format date-time */
  lastUpdatedDateTime?: string | null;
  lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  guid?: string | null;
  /** @default "File" */
  category?: KeywordCategory;
}

export interface UserKeywordModel {
  /** @minLength 1 */
  keyword: string;
  /** @default true */
  isActive?: boolean;
  /** @format date-time */
  createdDateTime?: string;
  createdBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  /** @format date-time */
  lastUpdatedDateTime?: string | null;
  lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  guid?: string | null;
  /** @default "User" */
  category?: KeywordCategory;
  userGuid?: string | null;
}

export interface KpiFormulaModelBase {
  name?: string | null;
  guid?: string | null;
  unit?: string | null;
  dataType?: SearchFieldDataType | null;
  /** @default true */
  isActive?: boolean;
  category?: KpiFormulaCategory;
}

export enum SearchFieldDataType {
  String = 'String',
  Boolean = 'Boolean',
  Integer = 'Integer',
  Percentage = 'Percentage',
  Numeric = 'Numeric',
  Money = 'Money',
  Date = 'Date',
  DateTime = 'DateTime',
  Time = 'Time',
  Object = 'Object',
  ObjectCollection = 'ObjectCollection',
  IpAddress = 'IpAddress'
}

export enum KpiFormulaCategory {
  Unknown = 'Unknown',
  Functions = 'Functions',
  Project = 'Project',
  User = 'User',
  Invoice = 'Invoice'
}

export interface LeadSourceModel {
  guid?: string | null;
  /** @minLength 1 */
  name: string;
  /** @format date-time */
  createdDateTime?: string;
  createdBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  /** @format date-time */
  lastUpdatedDateTime?: string | null;
  lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  /** @default true */
  isActive?: boolean;
}

export interface MarketSegmentModel {
  guid?: string | null;
  /** @minLength 1 */
  name: string;
  /** @format date-time */
  createdDateTime?: string;
  createdBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  /** @format date-time */
  lastUpdatedDateTime?: string | null;
  lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  /** @default true */
  isActive?: boolean;
  parentMarketSegment?: ModelWithName | null;
}

export interface OrganizationSettingsModel {
  quickSearchSetting?: QuickSearchOptions;
  projectNameDisplaySetting?: ProjectNameDisplayOptions;
  displayProjectNumber?: boolean;
  projectNameDisplayFormatSetting?: ProjectNameDisplayFormatOptions;
  /** @format int64 */
  nextProjectNumber?: number;
  /** @format int64 */
  lastProjectNumber?: number | null;
  /** @format int64 */
  nextCustomerNumber?: number;
  /** @format int64 */
  lastCustomerNumber?: number;
  /** @format int32 */
  nextTravelReimbursementNumber?: number;
  /** @format int64 */
  lastTravelReimbursementNumber?: number | null;
  travelReimbursementInstructions?: string | null;
  isTravelExpenseImmediatelyInvoiceable?: boolean | null;
  /** @format date */
  travelEntryClosingDate?: string | null;
  /** @format date */
  travelExpenseReimbursementStartDate?: string | null;
  /** @format int32 */
  nextPurchaseOrderNumber?: number | null;
  /** @format int64 */
  lastPurchaseOrderNumber?: number | null;
  /**
   * @minLength 0
   * @maxLength 20
   */
  purchaseOrderNumberPrefix?: string | null;
  currencyRoundingType?: TotalRoundingType;
  /** @format double */
  overdueInterest?: number | null;
  /** @format int32 */
  paymentTerm?: number | null;
  /** @format int32 */
  nextInvoiceNumber?: number;
  /** @format int64 */
  lastInvoiceNumber?: number | null;
  workWeek: Workweek[];
  workHourApprovalMode?: WorkHourApprovalMode | null;
  workHourEntryFormat?: EntryFormat;
  /** @format date */
  worktimeEntryClosingDate?: string | null;
  paymentReferenceNumberDisplaySetting?: ReferenceNumberDisplay;
  uniqueIdentifierForProductsAndWorktypes?: boolean;
  isAddingNewKeywordsFromProjectAllowed?: boolean;
  /** @default false */
  isIdenticalPhaseCodesAllowed?: boolean;
  /** @default false */
  isWorkHourDescriptionMandatory?: boolean;
  setCreditNoteInvoiceNumber?: boolean;
  isCustomerSearchAllowed?: boolean;
  /** @format date */
  flextimeCalculationStartDate?: string | null;
  /**
   * @format double
   * @min 0
   * @max 1000
   */
  maxFlextimeBalanceLimit?: number | null;
  /**
   * @format double
   * @min -1000
   * @max 0
   */
  minFlextimeBalanceLimit?: number | null;
  /** @format date-time */
  lastFlextimeCalculationEndTime?: string | null;
  lastFlextimeCalculationUser?: UserWithFirstNameLastNameModel | null;
  defaultFooterColumn1?: FreeTextModel | null;
  defaultFooterColumn2?: FreeTextModel | null;
  defaultFooterColumn3?: FreeTextModel | null;
  /** @default false */
  isEnteringHourPlannedInvoiceQuantityAllowed?: boolean;
}

export enum QuickSearchOptions {
  ShowOpenProjectsSalesCasesAndCustomers = 'ShowOpenProjectsSalesCasesAndCustomers',
  ShowOpenAndClosedProjectsSalesCasesAndCustomers = 'ShowOpenAndClosedProjectsSalesCasesAndCustomers'
}

export enum ProjectNameDisplayOptions {
  ShowProjectLongName = 'ShowProjectLongName',
  ShowProjectShortName = 'ShowProjectShortName'
}

export enum ProjectNameDisplayFormatOptions {
  ProjectNamePhaseName = 'ProjectNamePhaseName',
  CustomerNameProjectNamePhaseName = 'CustomerNameProjectNamePhaseName'
}

export enum TotalRoundingType {
  AwayFromZero = 'AwayFromZero',
  NearestInteger = 'NearestInteger'
}

export enum Workweek {
  Monday = 'Monday',
  Tuesday = 'Tuesday',
  Wednesday = 'Wednesday',
  Thursday = 'Thursday',
  Friday = 'Friday',
  Saturday = 'Saturday',
  Sunday = 'Sunday'
}

export enum WorkHourApprovalMode {
  None = 'None',
  RequiredForInvoicing = 'RequiredForInvoicing',
  InvoicableAlways = 'InvoicableAlways'
}

export enum EntryFormat {
  StartTimeEndTime = 'StartTimeEndTime',
  Quantity = 'Quantity',
  StartTimeEndTimeNoOverlapping = 'StartTimeEndTimeNoOverlapping'
}

export enum ReferenceNumberDisplay {
  ReferenceNumber = 'ReferenceNumber',
  Kid = 'Kid'
}

export interface UserWithFirstNameLastNameModel {
  /** @minLength 1 */
  guid: string;
  firstName?: string | null;
  lastName?: string | null;
}

export interface FreeTextModel {
  value?: string | null;
  text?: string | null;
  allowTags?: boolean | null;
  tagContext?: string | null;
}

export interface ProductCategoryModel {
  guid?: string | null;
  /** @minLength 1 */
  name: string;
  /** @format date-time */
  createdDateTime?: string;
  createdBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  /** @format date-time */
  lastUpdatedDateTime?: string | null;
  lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  /** @default true */
  isActive?: boolean;
  isDefault?: boolean;
  code?: string | null;
}

export interface ProjectWorkTypeModel {
  guid?: string | null;
  /** @minLength 1 */
  projectGuid: string;
  worktype: WorkTypeSubModel;
  isDefault?: boolean;
}

export interface WorkTypeSubModel {
  /** @minLength 1 */
  guid: string;
  name?: string | null;
  code?: string | null;
  /** @default true */
  isActive?: boolean;
  isProductive?: boolean;
}

export interface SalesAccountModel {
  guid?: string | null;
  /** @minLength 1 */
  name: string;
  /** @format date-time */
  createdDateTime?: string;
  createdBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  /** @format date-time */
  lastUpdatedDateTime?: string | null;
  lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  /** @minLength 1 */
  number: string;
  /** @default true */
  isActive?: boolean;
  isProductDefault?: boolean;
  isWorkTypeDefault?: boolean;
  isTravelTypeDefault?: boolean;
}

export interface ActivityParticipantModel {
  guid?: string | null;
  name?: string | null;
  type?: ParticipantType;
  /** @minLength 1 */
  participantGuid: string;
  /** @minLength 1 */
  activityGuid: string;
  email?: string | null;
  phone?: string | null;
  mobilePhone?: string | null;
  status?: MemberStatus;
  isActive?: boolean;
}

export enum ParticipantType {
  User = 'User',
  Contact = 'Contact',
  Resource = 'Resource',
  Other = 'Other'
}

export enum MemberStatus {
  Unknown = 'Unknown',
  Invited = 'Invited',
  Accepted = 'Accepted',
  Tentative = 'Tentative',
  Declined = 'Declined'
}

export interface GuidConversionModel {
  guid?: string | null;
  converted?: string | null;
}

export interface CustomerCountrySettingsOutputModel {
  guid?: string | null;
  customer?: ModelBase | null;
  country?: CustomerCountry | null;
  valueAddedTax?: ValueAddedTaxSubModel | null;
  isTaxFree?: boolean;
  taxFreeDescription?: string | null;
  zeroVatCategoryCodeEn16931?: string | null;
}

export interface ModelBase {
  guid?: string | null;
}

export interface CustomerCountry {
  name?: string | null;
  guid?: string | null;
  englishName?: string | null;
}

export interface ValueAddedTaxSubModel {
  guid?: string | null;
  /** @format double */
  percentage?: number;
}

export interface CustomerCountrySettingsInputModel {
  customer: SimpleInputRequiredModel;
  country: SimpleInputRequiredModel;
  valueAddedTax?: SimpleInputModel | null;
  isTaxFree?: boolean;
  taxFreeDescription?: string | null;
  zeroVatCategoryCodeEn16931?: string | null;
}

export interface SimpleInputRequiredModel {
  /** @minLength 1 */
  guid: string;
}

export interface SimpleInputModel {
  guid?: string | null;
}

export interface CustomerCustomPropertySelectionItemOutputModel {
  guid?: string | null;
  /** @minLength 1 */
  name: string;
  /** @format date-time */
  createdDateTime?: string;
  createdBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  /** @format date-time */
  lastUpdatedDateTime?: string | null;
  lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  customerCustomProperty?: CustomPropertyShortModel | null;
  isActive?: boolean;
  /** @format int32 */
  sortOrder?: number | null;
}

export interface CustomPropertyShortModel {
  /** @minLength 1 */
  guid: string;
  name?: string | null;
  type?: CustomPropertyType;
  parameters?: string | null;
}

export enum CustomPropertyType {
  Numeric = 'Numeric',
  Money = 'Money',
  String = 'String',
  Date = 'Date',
  Selection = 'Selection'
}

export interface CustomerCustomPropertySelectionItemInputModel {
  name?: string | null;
  customerCustomProperty: SimpleInputModel;
  /** @default true */
  isActive?: boolean;
  /** @format int32 */
  sortOrder?: number | null;
}

export interface FlatRateOutputModel {
  guid?: string | null;
  project?: FlatrateProjectSubModel | null;
  phase?: ModelBaseWithRequiredGuid | null;
  billingSchedule?: BillingScheduleType | null;
  /** @format date */
  plannedBillingDate?: string | null;
  price?: MoneyOutputModel | null;
  /**
   * @format double
   * @default 0
   */
  includesHours?: number | null;
  /** @default true */
  billAdditionalHours?: boolean | null;
  pricePerAdditionalHour?: MoneyOutputModel | null;
  invoiceGuid?: string | null;
}

export interface FlatrateProjectSubModel {
  guid?: string | null;
  name?: string | null;
  /** @format int64 */
  number?: number | null;
}

export enum BillingScheduleType {
  Immediately = 'Immediately',
  WhenPhaseCompleted = 'WhenPhaseCompleted',
  OnDate = 'OnDate'
}

export interface MoneyOutputModel {
  /** @format double */
  amount?: number | null;
  currencyCode?: string | null;
  multiCurrencyInfo?: MultiCurrencyInfoModel[] | null;
}

export interface MultiCurrencyInfoModel {
  /** @format double */
  amount?: number | null;
  currencyCode?: string | null;
  purpose?: CurrencyPurpose[];
}

export enum CurrencyPurpose {
  ProjectPrice = 'ProjectPrice',
  ProjectCost = 'ProjectCost',
  UserCost = 'UserCost',
  ExpenseCost = 'ExpenseCost'
}

export interface FlextimeAdjustmentOutputModel {
  /** @format date-time */
  createdDateTime?: string;
  createdBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  /** @format date-time */
  lastUpdatedDateTime?: string | null;
  lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  guid?: string | null;
  user?: UserWithFirstNameLastNamePhotoFileModelAndRequiredGuid | null;
  /** @format date */
  adjustmentDate?: string | null;
  /** @format double */
  amount?: number | null;
  notes?: string | null;
}

export interface UserWithFirstNameLastNamePhotoFileModelAndRequiredGuid {
  code?: string | null;
  /** @minLength 1 */
  guid: string;
  name?: string | null;
  firstName?: string | null;
  lastName?: string | null;
}

export interface FlextimeAdjustmentInputModel {
  user: SimpleInputRequiredModel;
  /** @format date */
  adjustmentDate: string;
  /** @format double */
  amount: number;
  notes?: string | null;
}

export interface ContactKeywordModel {
  /** @minLength 1 */
  keyword: string;
  /** @default true */
  isActive?: boolean;
  /** @format date-time */
  createdDateTime?: string;
  createdBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  /** @format date-time */
  lastUpdatedDateTime?: string | null;
  lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  guid?: string | null;
  /** @default "Contact" */
  category?: KeywordCategory;
}

export interface ProjectCustomPropertySelectionItemOutputModel {
  guid?: string | null;
  /** @minLength 1 */
  name: string;
  /** @format date-time */
  createdDateTime?: string;
  createdBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  /** @format date-time */
  lastUpdatedDateTime?: string | null;
  lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  projectCustomProperty?: CustomPropertyShortModel | null;
  isActive?: boolean;
  /** @format int32 */
  sortOrder?: number | null;
}

export interface ProjectCustomPropertySelectionItemInputModel {
  name?: string | null;
  projectCustomProperty: SimpleInputModel;
  /** @default true */
  isActive?: boolean;
  /** @format int32 */
  sortOrder?: number | null;
}

export interface ProjectInvoiceSettingsOutputModel {
  /** @format date-time */
  createdDateTime?: string;
  createdBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  /** @format date-time */
  lastUpdatedDateTime?: string | null;
  lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  guid?: string | null;
  project?: ModelBase | null;
  freeText1?: TemplateFreeTextModel | null;
  htmlText1?: TemplateFreeTextModel | null;
  freeText2?: TemplateFreeTextModel | null;
  htmlText2?: TemplateFreeTextModel | null;
  showQuantity?: boolean | null;
  showUnit?: boolean | null;
  showUnitPrice?: boolean | null;
  showValueAddedTax?: boolean | null;
  showPriceExcludingValueAddedTax?: boolean | null;
  showAttachmentUnit?: boolean | null;
  showAttachmentUnitPrice?: boolean | null;
  showAttachmentValueAddedTax?: boolean | null;
  showAttachmentPriceExcludingValueAddedTax?: boolean | null;
  workHourDescriptionFormat?: string | null;
  projectTravelExpenseDescriptionFormat?: string | null;
  projectFeeDescriptionFormat?: string | null;
  workHourGrouping?: InvoiceGrouping | null;
  projectFeeGrouping?: InvoiceGrouping | null;
  projectTravelExpenseGrouping?: InvoiceGrouping | null;
  workHourPrimaryGroupBy?: string | null;
  workHourSecondaryGroupBy?: string | null;
  projectFeePrimaryGroupBy?: string | null;
  projectFeeSecondaryGroupBy?: string | null;
  projectTravelExpensePrimaryGroupBy?: string | null;
  projectTravelExpenseSecondaryGroupBy?: string | null;
  showCategories?: boolean | null;
  showReferenceNumber?: boolean | null;
  showLogoAndTitle?: boolean | null;
  showFooter?: boolean | null;
  style?: InvoiceSkin | null;
}

export interface TemplateFreeTextModel {
  value?: string | null;
  allowTags?: boolean | null;
  tagContext?: string | null;
}

export enum InvoiceGrouping {
  OneByOne = 'OneByOne',
  Group = 'Group',
  GroupWithAttachment = 'Group+Attachment'
}

export enum InvoiceSkin {
  BlackAndWhite = 'BlackAndWhite',
  Blue = 'Blue',
  Cyan = 'Cyan',
  Green = 'Green',
  Lilac = 'Lilac',
  Orange = 'Orange',
  Plain = 'Plain',
  Red = 'Red',
  Yellow = 'Yellow'
}

export interface ProjectInvoiceSettingsInputModel {
  project: SimpleInputRequiredModel;
  freeText1?: TemplateFreeTextModel | null;
  htmlText1?: TemplateFreeTextModel | null;
  freeText2?: TemplateFreeTextModel | null;
  htmlText2?: TemplateFreeTextModel | null;
  showQuantity?: boolean | null;
  showUnit?: boolean | null;
  showUnitPrice?: boolean | null;
  showValueAddedTax?: boolean | null;
  showPriceExcludingValueAddedTax?: boolean | null;
  showAttachmentUnit?: boolean | null;
  showAttachmentUnitPrice?: boolean | null;
  showAttachmentValueAddedTax?: boolean | null;
  showAttachmentPriceExcludingValueAddedTax?: boolean | null;
  workHourDescriptionFormat?: string | null;
  projectTravelExpenseDescriptionFormat?: string | null;
  projectFeeDescriptionFormat?: string | null;
  workHourGrouping?: InvoiceGrouping | null;
  projectFeeGrouping?: InvoiceGrouping | null;
  projectTravelExpenseGrouping?: InvoiceGrouping | null;
  workHourPrimaryGroupBy?: string | null;
  workHourSecondaryGroupBy?: string | null;
  projectFeePrimaryGroupBy?: string | null;
  projectFeeSecondaryGroupBy?: string | null;
  projectTravelExpensePrimaryGroupBy?: string | null;
  projectTravelExpenseSecondaryGroupBy?: string | null;
  showCategories?: boolean | null;
  showReferenceNumber?: boolean | null;
  showLogoAndTitle?: boolean | null;
  showFooter?: boolean | null;
  style?: InvoiceSkin | null;
}

export interface ProjectProductOutputModel {
  guid?: string | null;
  project?: ProjectSubModel | null;
  product: ProjectProductSubModel;
}

export interface ProjectSubModel {
  guid?: string | null;
  name?: string | null;
  /** @format int64 */
  number?: number | null;
}

export interface ProjectProductSubModel {
  /** @minLength 1 */
  guid: string;
  name?: string | null;
  productCategory?: string | null;
  productCode?: string | null;
  productType?: TypeOfProduct;
  isActive?: boolean;
}

export enum TypeOfProduct {
  OwnWork = 'OwnWork',
  Products = 'Products',
  Subcontracting = 'Subcontracting',
  Travels = 'Travels'
}

export interface ProjectProductInputModel {
  guid?: string | null;
  project: SimpleInputRequiredModel;
  product: SimpleInputRequiredModel;
}

export interface ProjectWorkHourPriceOutputModel {
  phase?: ModelBaseWithRequiredGuid | null;
  isAvailable?: boolean;
  isBillable?: boolean | null;
  user?: ModelWithName | null;
  workType?: ModelWithName | null;
  unitPrice?: MoneyOutputModel | null;
  /** @format date-time */
  createdDateTime?: string;
  createdBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  /** @format date-time */
  lastUpdatedDateTime?: string | null;
  lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  guid?: string | null;
  project?: ProjectSubModel | null;
}

export interface ProjectWorkHourPriceInputModel {
  phase?: SimpleInputRequiredModel | null;
  /** @default true */
  isBillable?: boolean | null;
  user?: SimpleInputModel | null;
  workType?: SimpleInputModel | null;
  unitPrice: MoneyInputModel;
  project: SimpleInputModel;
}

export interface MoneyInputModel {
  /** @format double */
  amount: number;
  /** @minLength 1 */
  currencyCode: string;
}

export interface ProposalSubtotalOutputModel {
  name?: string | null;
  guid?: string | null;
  proposal?: ModelBase | null;
  phase?: ModelBase | null;
  projectFee?: ModelBase | null;
  description?: string | null;
  /** @format int32 */
  sortOrder?: number | null;
  isShownOnProposal?: boolean;
}

export interface ProposalSubtotalInputModel {
  /**
   * @minLength 0
   * @maxLength 200
   */
  name: string;
  proposal: SimpleInputRequiredModel;
  phase?: ModelBase | null;
  description?: string | null;
  /** @format int32 */
  sortOrder?: number | null;
  /** @default true */
  isShownOnProposal?: boolean;
}

export interface ProposalFeeRowOutputModel {
  name?: string | null;
  guid?: string | null;
  product?: ModelBase | null;
  projectFee?: ModelBase | null;
  proposal?: ModelBase | null;
  subtotal?: ModelBase | null;
  description?: string | null;
  /** @format double */
  quantity?: number | null;
  measurementUnit?: string | null;
  unitPrice?: MoneyOutputModel | null;
  unitCost?: MoneyOutputModel | null;
  /** @format int32 */
  sortOrder?: number | null;
  isShownOnProposal?: boolean;
  /** @format double */
  vatRate?: number | null;
}

export interface ProposalFeeRowInputModel {
  /**
   * @minLength 0
   * @maxLength 200
   */
  name: string;
  product?: SimpleInputModel | null;
  projectFee?: SimpleInputModel | null;
  proposal: SimpleInputRequiredModel;
  subtotal?: SimpleInputModel | null;
  description?: string | null;
  /** @format double */
  quantity: number;
  measurementUnit?: string | null;
  unitPrice?: MoneyInputModel | null;
  unitCost?: MoneyInputModel | null;
  /** @format int32 */
  sortOrder?: number | null;
  /** @default true */
  isShownOnProposal?: boolean;
  /** @format double */
  vatRate?: number | null;
}

export interface ProposalStatusOutputModel {
  name?: string | null;
  guid?: string | null;
  isActive?: boolean;
  /** @format int32 */
  sortOrder?: number;
  isWon?: boolean;
  isLost?: boolean;
  isDefault?: boolean;
}

export interface UsageModel2 {
  context?: string | null;
  /** @format int32 */
  count?: number | null;
}

export interface ProposalStatusInputModel {
  /**
   * @minLength 0
   * @maxLength 200
   */
  name: string;
  /** @default true */
  isActive?: boolean;
  /** @format int32 */
  sortOrder?: number;
  isWon?: boolean;
  isLost?: boolean;
  isDefault?: boolean;
}

export interface ProposalOutputModel {
  /** @format date-time */
  createdDateTime?: string;
  createdBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  /** @format date-time */
  lastUpdatedDateTime?: string | null;
  lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  guid?: string | null;
  name?: string | null;
  /** @format date */
  proposalDate?: string | null;
  number?: string | null;
  language?: ProposalLanguageSubModel | null;
  culture?: FormattingCultureSubModel | null;
  customer?: ProposalCustomerSubModel | null;
  customerContactPerson?: CustomerContactPersonSubModel | null;
  project?: ProposalProjectSubModel | null;
  proposalStatus?: ModelWithName | null;
  billingAddress?: ProposalBillingAddressSubModel | null;
  totalIncludingVat?: MoneyOutputModel | null;
  totalExcludingVat?: MoneyOutputModel | null;
  freeText1?: FreeTextModel2 | null;
  freeText2?: FreeTextModel2 | null;
  pricelist?: ModelWithName | null;
}

export interface ProposalLanguageSubModel {
  name?: string | null;
  guid?: string | null;
  englishName?: string | null;
  code?: string | null;
}

export interface FormattingCultureSubModel {
  name?: string | null;
  guid?: string | null;
  englishName?: string | null;
  code?: string | null;
}

export interface ProposalCustomerSubModel {
  name?: string | null;
  guid?: string | null;
  /** @format int64 */
  number?: number | null;
}

export interface CustomerContactPersonSubModel {
  guid?: string | null;
  name?: string | null;
}

export interface ProposalProjectSubModel {
  name?: string | null;
  guid?: string | null;
  /** @format int64 */
  number?: number | null;
}

export interface ProposalBillingAddressSubModel {
  guid?: string | null;
  addressline?: string | null;
  postalCode?: string | null;
  city?: string | null;
  country?: string | null;
}

export interface FreeTextModel2 {
  value?: string | null;
  text?: string | null;
  plainText?: string | null;
  allowTags?: boolean;
  tagContext?: string | null;
}

export interface ProposalInputModel {
  /**
   * @minLength 0
   * @maxLength 50
   */
  name: string;
  /** @format date */
  proposalDate?: string | null;
  language?: SimpleInputModel | null;
  culture?: SimpleInputModel | null;
  customerContactPerson?: SimpleInputModel | null;
  project: SimpleInputRequiredModel;
  proposalStatus?: SimpleInputModel | null;
  billingAddress?: SimpleInputModel | null;
  freeText1?: FreeTextInputModel | null;
  freeText2?: FreeTextInputModel | null;
}

export interface FreeTextInputModel {
  value?: string | null;
}

export interface ProposalSettingsOutputModel {
  /** @default false */
  isTaxFree?: boolean;
  /** @default true */
  showQuantity?: boolean;
  /** @default true */
  showUnit?: boolean;
  /** @default true */
  showUnitPrice?: boolean;
  /** @default true */
  showTotalPrice?: boolean;
  /**
   * @deprecated
   * @default false
   */
  showBillingDetails?: boolean;
  /** @default false */
  showProjectMembers?: boolean;
  /**
   * @deprecated
   * @default false
   */
  showGanttChart?: boolean;
  /**
   * @deprecated
   * @default false
   */
  showTreeview?: boolean;
  /** @default false */
  showProjectPlan?: boolean;
  /** @default false */
  showOurReference?: boolean;
  /** @default false */
  showYourReference?: boolean;
  /** @default false */
  showOrderNumber?: boolean;
  /** @default false */
  showBillingContact?: boolean;
  /** @default false */
  showPaymentTerms?: boolean;
  style?: InvoiceSkin | null;
  /** @default "PrintToProposalBoth" */
  printTotalInPdf?: PrintToPdf;
  /** @format date-time */
  createdDateTime?: string;
  createdBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  /** @format date-time */
  lastUpdatedDateTime?: string | null;
  lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  guid?: string | null;
}

export enum PrintToPdf {
  DoNotPrintToProposal = 'DoNotPrintToProposal',
  PrintToProposalBottom = 'PrintToProposalBottom',
  PrintToProposalBoth = 'PrintToProposalBoth'
}

export interface ProposalWorkhourRowOutputModel {
  name?: string | null;
  guid?: string | null;
  workType?: ModelBase | null;
  phase?: ModelBase | null;
  proposal?: ModelBase | null;
  subtotal?: ModelBase | null;
  projectFee?: ModelBase | null;
  description?: string | null;
  /** @format double */
  quantity?: number | null;
  unitPrice?: MoneyOutputModel | null;
  unitCost?: MoneyOutputModel | null;
  /** @format int32 */
  sortOrder?: number | null;
  /** @default true */
  isShownOnProposal?: boolean;
}

export interface ProposalWorkhourRowInputModel {
  /**
   * @minLength 0
   * @maxLength 200
   */
  name: string;
  /** @format double */
  quantity: number;
  workType: SimpleInputRequiredModel;
  proposal: SimpleInputRequiredModel;
  phase?: SimpleInputModel | null;
  subtotal?: SimpleInputModel | null;
  description?: string | null;
  /** @format int32 */
  sortOrder?: number | null;
  /** @default true */
  isShownOnProposal?: boolean;
}

export interface RoleAllocationOutputModel {
  /** @format date-time */
  createdDateTime?: string;
  createdBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  /** @format date-time */
  lastUpdatedDateTime?: string | null;
  lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  guid?: string | null;
  role?: ModelWithName | null;
  /** @format double */
  allocationHours?: number | null;
  /** @format date */
  startDate?: string | null;
  /** @format date */
  endDate?: string | null;
  customer?: ModelWithName | null;
  project?: ModelWithName | null;
  phase?: PhaseSubModel | null;
}

export interface PhaseSubModel {
  name?: string | null;
  guid?: string | null;
  /** @format date */
  startDate?: string | null;
  /** @format date */
  endDate?: string | null;
}

export interface RoleAllocationInputModel {
  role: SimpleInputRequiredModel;
  /** @format double */
  allocationHours: number;
  project: SimpleInputRequiredModel;
  phase?: SimpleInputModel | null;
  /** @format date */
  startDate?: string | null;
  /** @format date */
  endDate?: string | null;
}

export interface RoleOutputModel {
  /** @format date-time */
  createdDateTime?: string;
  createdBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  /** @format date-time */
  lastUpdatedDateTime?: string | null;
  lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  guid?: string | null;
  name?: string | null;
  /** @default true */
  isActive?: boolean;
}

export interface RoleInputModel {
  guid?: string | null;
  /** @minLength 1 */
  name: string;
  /** @format date-time */
  createdDateTime?: string;
  createdBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  /** @format date-time */
  lastUpdatedDateTime?: string | null;
  lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  /** @default true */
  isActive?: boolean;
}

export interface ProjectSalesNoteOutputModel {
  note?: string | null;
  isDeleted?: boolean;
  user?: ModelBase | null;
  /** @format date-time */
  createdDateTime?: string;
  createdBy?: ModelBase | null;
  /** @format date-time */
  lastUpdatedDateTime?: string | null;
  lastUpdatedBy?: ModelBase | null;
  guid?: string | null;
  project?: ModelBase | null;
}

export interface CustomerSalesNoteOutputModel {
  note?: string | null;
  isDeleted?: boolean;
  user?: ModelBase | null;
  /** @format date-time */
  createdDateTime?: string;
  createdBy?: ModelBase | null;
  /** @format date-time */
  lastUpdatedDateTime?: string | null;
  lastUpdatedBy?: ModelBase | null;
  guid?: string | null;
  customer?: ModelBase | null;
}

export interface SalesNoteOutputModel {
  note?: string | null;
  isDeleted?: boolean;
  user?: ModelBase | null;
  /** @format date-time */
  createdDateTime?: string;
  createdBy?: ModelBase | null;
  /** @format date-time */
  lastUpdatedDateTime?: string | null;
  lastUpdatedBy?: ModelBase | null;
  guid?: string | null;
  project?: ModelBase | null;
  customer?: ModelBase | null;
}

export interface ProjectSalesNoteInputModel {
  user: SimpleInputRequiredModel;
  note?: string | null;
  project: SimpleInputRequiredModel;
}

export interface CustomerSalesNoteInputModel {
  user: SimpleInputRequiredModel;
  note?: string | null;
  customer: SimpleInputRequiredModel;
}

export interface UserCustomPropertyOutputModel {
  /** @format date-time */
  createdDateTime?: string;
  createdBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  /** @format date-time */
  lastUpdatedDateTime?: string | null;
  lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  guid?: string | null;
  name?: string | null;
  permission?: PermissionLevel;
  type?: CustomPropertyType;
  parameters?: string | null;
  isActive?: boolean;
  /** @format int32 */
  usageCount?: number;
}

export enum PermissionLevel {
  View = 'View',
  Edit = 'Edit'
}

export interface UserCustomPropertyInputModel {
  /** @minLength 1 */
  name: string;
  type: CustomPropertyType;
  /** @default "View" */
  permission?: PermissionLevel;
  parameters?: string | null;
  /** @default true */
  isActive?: boolean;
}

export interface UserCustomValueOutputModel {
  customProperty?: CustomPropertyShortModel | null;
  value?: string | null;
  /** @format date-time */
  createdDateTime?: string;
  createdBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  /** @format date-time */
  lastUpdatedDateTime?: string | null;
  lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  guid?: string | null;
  user?: ModelBase | null;
}

export interface UserCustomValueInputModel {
  customProperty: SimpleInputRequiredModel;
  value?: string | null;
  user: SimpleInputRequiredModel;
}

export interface UserCustomPropertySelectionItemOutputModel {
  guid?: string | null;
  /** @minLength 1 */
  name: string;
  /** @format date-time */
  createdDateTime?: string;
  createdBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  /** @format date-time */
  lastUpdatedDateTime?: string | null;
  lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  userCustomProperty?: CustomPropertyShortModel | null;
  isActive?: boolean;
  /** @format int32 */
  sortOrder?: number | null;
}

export interface UserCustomPropertySelectionItemInputModel {
  name?: string | null;
  userCustomProperty: SimpleInputModel;
  /** @default true */
  isActive?: boolean;
  /** @format int32 */
  sortOrder?: number | null;
}

export interface WorkContractOutputModel {
  /** @minLength 1 */
  title: string;
  /** @format date */
  startDate: string;
  /** @format date */
  endDate?: string | null;
  /** @format double */
  dailyHours?: number;
  isOvertimeAllowed?: boolean;
  /** @default true */
  isFlextimeActive?: boolean;
  /** @format double */
  flextimeLimitPerDay?: number | null;
  workWeek?: Workweek[] | null;
  guid?: string | null;
  hourCost?: MoneyOutputModel | null;
  user?: UserWithPhotoFileModelAndRequiredGuid | null;
  role?: ModelWithName | null;
  /** @format date-time */
  createdDateTime?: string;
  createdBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  /** @format date-time */
  lastUpdatedDateTime?: string | null;
  lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
}

export interface UserWithPhotoFileModelAndRequiredGuid {
  /** @minLength 1 */
  guid: string;
  name?: string | null;
  code?: string | null;
}

export interface WorkContractInputModel {
  /** @minLength 1 */
  title: string;
  /** @format date */
  startDate: string;
  /** @format date */
  endDate?: string | null;
  /** @format double */
  dailyHours?: number;
  isOvertimeAllowed?: boolean;
  /** @default true */
  isFlextimeActive?: boolean;
  /** @format double */
  flextimeLimitPerDay?: number | null;
  hourCost: MoneyInputModelWithNotNegativeAmount;
  user: SimpleInputRequiredModel;
  workWeek?: Workweek[] | null;
  role?: SimpleInputModel | null;
}

export interface MoneyInputModelWithNotNegativeAmount {
  /** @format double */
  amount?: number | null;
  /** @minLength 1 */
  currencyCode: string;
}

export interface WorkHourPriceOutputModel {
  isBillable?: boolean | null;
  user?: ModelWithName | null;
  workType?: ModelWithName | null;
  unitPrice?: MoneyOutputModel | null;
  /** @format date-time */
  createdDateTime?: string;
  createdBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  /** @format date-time */
  lastUpdatedDateTime?: string | null;
  lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  guid?: string | null;
  pricelistVersion?: ModelBase | null;
}

export interface CustomPropertyModel {
  guid?: string | null;
  /** @minLength 1 */
  name: string;
  /** @format date-time */
  createdDateTime?: string;
  createdBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  /** @format date-time */
  lastUpdatedDateTime?: string | null;
  lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  type: CustomPropertyType;
  parameters?: string | null;
  /** @default true */
  isActive?: boolean;
  /** @format int32 */
  usageCount?: number;
}

export interface CustomerCustomValueModel {
  customProperty: CustomPropertyShortModel;
  value?: string | null;
  /** @format date-time */
  createdDateTime?: string;
  createdBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  /** @format date-time */
  lastUpdatedDateTime?: string | null;
  lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  guid?: string | null;
  customerGuid?: string | null;
}

export interface ProjectCustomValueModel {
  customProperty: CustomPropertyShortModel;
  value?: string | null;
  /** @format date-time */
  createdDateTime?: string;
  createdBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  /** @format date-time */
  lastUpdatedDateTime?: string | null;
  lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  guid?: string | null;
  projectGuid?: string | null;
}

export interface ActivityTypeModel {
  /** @default true */
  isActive?: boolean;
  isDefault?: boolean;
  isPaidLeave?: boolean | null;
  category: ActivityCategory;
  code?: string | null;
  guid?: string | null;
  /** @minLength 1 */
  name: string;
  /** @format date-time */
  createdDateTime?: string;
  createdBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  /** @format date-time */
  lastUpdatedDateTime?: string | null;
  lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
}

export enum ActivityCategory {
  Personal = 'Personal',
  Absences = 'Absences',
  CalendarEntry = 'CalendarEntry',
  SalesEvent = 'SalesEvent',
  Task = 'Task'
}

export interface InvoiceOutputModel {
  /** @format date-time */
  createdDateTime?: string;
  createdBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  /** @format date-time */
  lastUpdatedDateTime?: string | null;
  lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  guid?: string | null;
  /** @format int32 */
  number?: number | null;
  referenceNumber?: string | null;
  status?: InvoiceStatusSubModel | null;
  customer?: InvoiceCustomerSubModel | null;
  projects?: InvoiceProjectSubModel[] | null;
  /** @format date */
  date?: string;
  /** @format date */
  dueDate?: string;
  /** @format date */
  paymentDate?: string | null;
  /** @format date */
  entryDate?: string | null;
  /** @format int32 */
  paymentTerm?: number;
  /** @format double */
  overdueInterest?: number;
  ourReference?: string | null;
  yourReference?: string | null;
  currency?: CurrencySubModel | null;
  /** @format double */
  currencyRate?: number;
  totalIncludingTax?: MoneyOutputModel | null;
  totalExcludingTax?: MoneyOutputModel | null;
  totalTax?: MoneyOutputModel | null;
  workHoursTotalExcludingTax?: MoneyOutputModel | null;
  projectFeesTotalExcludingTax?: MoneyOutputModel | null;
  projectTravelExpensesTotalExcludingTax?: MoneyOutputModel | null;
  flatRatesTotalExcludingTax?: MoneyOutputModel | null;
  /** @format double */
  workHoursQuantity?: number;
  receiverCustomerName?: string | null;
  receiverContactGuid?: string | null;
  receiverContactName?: string | null;
  receiverContactEmail?: string | null;
  receiverAddress?: InvoiceReceiverAddressSubModel | null;
  receiverVatNumber?: string | null;
  receiverKvkNumber?: string | null;
  senderName?: string | null;
  senderContactName?: string | null;
  senderContactGuid?: string | null;
  senderAddress?: InvoiceSenderAddressSubModel | null;
  senderVatNumber?: string | null;
  senderKvkNumber?: string | null;
  isCreditNote?: boolean;
  reimburseInvoice?: RelatedInvoiceSubModel | null;
  creditNoteInvoice?: RelatedInvoiceSubModel | null;
  invoiceNumberBusinessUnitGuid?: string | null;
  orderNumber?: string | null;
  invoiceTemplate?: ModelWithName | null;
  culture?: FormattingCultureSubModel2 | null;
  billingCustomer?: InvoiceCustomerSubModel | null;
  notes?: string | null;
  freeText1?: FreeTextModel2 | null;
  freeText2?: FreeTextModel2 | null;
  language?: InvoiceLanguageSubModel | null;
  canBeDeleted?: boolean;
  /** @format double */
  workHourValueAddedTax?: number | null;
}

export interface InvoiceStatusSubModel {
  /** @minLength 1 */
  guid: string;
  name?: string | null;
  isSent?: boolean;
  isWaitingPayment?: boolean;
  isPaid?: boolean;
}

export interface InvoiceCustomerSubModel {
  name?: string | null;
  guid?: string | null;
  /** @format int64 */
  number?: number | null;
}

export interface InvoiceProjectSubModel {
  name?: string | null;
  guid?: string | null;
  /** @format int64 */
  number?: number | null;
}

export interface CurrencySubModel {
  /** @minLength 1 */
  guid: string;
  name?: string | null;
  code?: string | null;
  symbol?: string | null;
}

export interface InvoiceReceiverAddressSubModel {
  addressline?: string | null;
  postalCode?: string | null;
  city?: string | null;
  state?: string | null;
  country?: string | null;
}

export interface InvoiceSenderAddressSubModel {
  addressline?: string | null;
  postalCode?: string | null;
  city?: string | null;
  state?: string | null;
  country?: string | null;
}

export interface RelatedInvoiceSubModel {
  guid?: string | null;
  /** @format int32 */
  number?: number | null;
}

export interface FormattingCultureSubModel2 {
  name?: string | null;
  englishName?: string | null;
  code?: string | null;
}

export interface InvoiceLanguageSubModel {
  name?: string | null;
  guid?: string | null;
  englishName?: string | null;
  code?: string | null;
}

export interface CreateInvoiceModel {
  projects: CreateInvoiceProjectModel[];
  groupProjects?: boolean;
  invoiceStatusGuid?: string | null;
  billingCustomerGuid?: string | null;
  /** @format date */
  date?: string | null;
}

export interface CreateInvoiceProjectModel {
  /** @minLength 1 */
  guid: string;
}

export interface CustomerModel {
  guid?: string | null;
  /** @minLength 1 */
  name: string;
  /** @format date-time */
  createdDateTime?: string;
  createdBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  /** @format date-time */
  lastUpdatedDateTime?: string | null;
  lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  /** @format int64 */
  number?: number | null;
  /** @default true */
  isActive?: boolean;
  isInternal?: boolean;
  notes?: string | null;
  email?: string | null;
  website?: string | null;
  vatNumber?: string | null;
  /**
   * @minLength 0
   * @maxLength 25
   */
  kvkNumber?: string | null;
  /** @format int32 */
  numberOfEmployees?: number | null;
  /** @format int64 */
  annualRevenue?: number | null;
  language?: CustomerLanguage | null;
  currency?: CustomerCurrency | null;
  owner?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  industry?: ModelWithName | null;
  headquarterAddress?: CustomerHeadquarterAddress | null;
  timezone?: ModelWithName | null;
  pricelist?: ModelWithName | null;
  /** @format int32 */
  paymentTerm?: number | null;
  /** @format double */
  overdueInterest?: number | null;
  invoicingVat?: CustomerInvoicingVat | null;
  eInvoiceAddress?: string | null;
  eInvoiceOperator?: string | null;
  organizationUnitNumber?: string | null;
  invoiceTemplate?: ModelWithName | null;
}

export interface CustomerLanguage {
  name?: string | null;
  guid?: string | null;
  englishName?: string | null;
  code?: string | null;
}

export interface CustomerCurrency {
  name?: string | null;
  guid?: string | null;
  symbol?: string | null;
  code?: string | null;
}

export interface CustomerHeadquarterAddress {
  guid?: string | null;
  addressline?: string | null;
  postalCode?: string | null;
  city?: string | null;
  country?: string | null;
}

export interface CustomerInvoicingVat {
  guid?: string | null;
  /** @format double */
  percentage?: number;
  code?: string | null;
}

export interface InvoiceSettingsOutputModel {
  /** @format date-time */
  createdDateTime?: string;
  createdBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  /** @format date-time */
  lastUpdatedDateTime?: string | null;
  lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  guid?: string | null;
  /** @format date */
  entryDate?: string | null;
  /** @format date */
  paymentDate?: string | null;
  isReverseCharged?: boolean;
  reverseChargeDescription?: string | null;
  style?: InvoiceSkin | null;
  showLogoAndTitle?: boolean;
  showFooter?: boolean;
  showQuantity?: boolean;
  showUnit?: boolean;
  showUnitPrice?: boolean;
  showValueAddedTax?: boolean;
  showPriceExcludingValueAddedTax?: boolean;
  showAttachmentQuantity?: boolean;
  showAttachmentUnit?: boolean;
  showAttachmentUnitPrice?: boolean;
  showAttachmentValueAddedTax?: boolean;
  showAttachmentPriceExcludingValueAddedTax?: boolean;
  /** @default "" */
  workHourDescriptionFormat?: string | null;
  /** @default "" */
  projectTravelExpenseDescriptionFormat?: string | null;
  /** @default "" */
  projectFeeDescriptionFormat?: string | null;
  workHourGrouping?: InvoiceGrouping;
  projectFeeGrouping?: InvoiceGrouping;
  projectTravelExpenseGrouping?: InvoiceGrouping;
  workHourPrimaryGroupBy?: string | null;
  workHourSecondaryGroupBy?: string | null;
  projectFeePrimaryGroupBy?: string | null;
  projectFeeSecondaryGroupBy?: string | null;
  projectTravelExpensePrimaryGroupBy?: string | null;
  projectTravelExpenseSecondaryGroupBy?: string | null;
  /** @default true */
  showCategories?: boolean;
  categorySortOrder?: string | null;
  /** @default true */
  showReferenceNumber?: boolean;
}

export interface InvoiceRowOutputModel {
  /** @format date-time */
  createdDateTime?: string;
  createdBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  /** @format date-time */
  lastUpdatedDateTime?: string | null;
  lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  guid?: string | null;
  invoiceGuid?: string | null;
  rowType?: InvoiceRowType;
  description?: string | null;
  /** @format double */
  quantity?: number;
  unitPrice?: MoneyOutputModel | null;
  measurementUnit?: string | null;
  /** @format double */
  vatRate?: number | null;
  /** @format int32 */
  sortOrder?: number;
  salesAccount?: InvoiceRowAccountingSubModel | null;
  recurringSalesAccount?: InvoiceRowAccountingSubModel | null;
  costCenter?: InvoiceRowAccountingSubModel | null;
  vatAccount?: InvoiceRowAccountingSubModel | null;
  salesReceivableAccount?: InvoiceRowAccountingSubModel | null;
  category?: InvoiceRowCategory;
  flatRateGuid?: string | null;
  hasInvoiceComment?: boolean;
  code?: string[] | null;
}

export enum InvoiceRowType {
  FlatRate = 'FlatRate',
  Hours = 'Hours',
  ProjectFees = 'ProjectFees',
  TravelExpenses = 'TravelExpenses'
}

export interface InvoiceRowAccountingSubModel {
  number?: string | null;
  name?: string | null;
}

export enum InvoiceRowCategory {
  Hours = 'Hours',
  ProjectFees = 'ProjectFees',
  Travels = 'Travels'
}

export interface LanguageModel {
  name?: string | null;
  guid?: string | null;
  englishName?: string | null;
  code?: string | null;
  isInvoiceLanguage?: boolean;
}

export interface OrganizationDetailsOutputModel {
  guid?: string | null;
  name?: string | null;
  vatNumber?: string | null;
  /**
   * @minLength 0
   * @maxLength 25
   */
  kvkNumber?: string | null;
  isVatRegistered?: boolean;
  registeredOffice?: string | null;
  address?: string | null;
  postalCode?: string | null;
  city?: string | null;
  country?: OrganizationDetailsCountrySubModel | null;
  phone?: string | null;
  fax?: string | null;
  termsOfServiceApprover?: UserWithNameAndPhotoFileModel | null;
  eInvoiceAddress?: string | null;
  eInvoiceOperatorCode?: string | null;
  odpCompany?: string | null;
  currency?: CurrencyBaseModel | null;
  language?: OrganizationDetailsLanguageSubModel | null;
  formatting?: OrganizationDetailsFormattingSubModel | null;
  timezone?: ModelWithName | null;
  activeCompanies?: CompanyModel[] | null;
  activeAddons?: string[] | null;
}

export interface OrganizationDetailsCountrySubModel {
  name?: string | null;
  code?: string | null;
  guid?: string | null;
  englishName?: string | null;
}

export interface UserWithNameAndPhotoFileModel {
  name?: string | null;
  guid?: string | null;
  code?: string | null;
}

export interface OrganizationDetailsLanguageSubModel {
  name?: string | null;
  code?: string | null;
  guid?: string | null;
}

export interface OrganizationDetailsFormattingSubModel {
  name?: string | null;
  code?: string | null;
  guid?: string | null;
}

export interface CompanyModel {
  name?: string | null;
  guid?: string | null;
  rootBusinessUnitGuid?: string | null;
  country?: CompanyCountry | null;
  currencyGuid?: string | null;
  /** @format double */
  currencyRate?: number;
  currencyCode?: string | null;
  currencySymbol?: string | null;
}

export interface CompanyCountry {
  name?: string | null;
  guid?: string | null;
  code3?: string | null;
  englishName?: string | null;
}

export interface PhaseMemberOutputModel {
  /** @format date-time */
  createdDateTime?: string;
  createdBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  /** @format date-time */
  lastUpdatedDateTime?: string | null;
  lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  guid?: string | null;
  user?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  /** @default true */
  isActive?: boolean;
  currentWorkContractTitle?: string | null;
  phase?: ModelWithName | null;
}

export interface DeletedPhaseMemberOutputModel {
  /** @format date-time */
  deletedDateTime?: string;
  /** @format date-time */
  createdDateTime?: string;
  createdBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  /** @format date-time */
  lastUpdatedDateTime?: string | null;
  lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  guid?: string | null;
  user?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  /** @default true */
  isActive?: boolean;
  currentWorkContractTitle?: string | null;
  phase?: ModelBase | null;
}

export interface ModelBaseReadOnly {
  guid?: string | null;
}

export interface PhaseOutputModel {
  guid?: string | null;
  /** @minLength 1 */
  name: string;
  /** @format date-time */
  createdDateTime?: string;
  createdBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  /** @format date-time */
  lastUpdatedDateTime?: string | null;
  lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  project?: PhaseProjectSubModel | null;
  parentPhase?: ModelBaseWithRequiredGuid | null;
  /** @default false */
  isCompleted?: boolean;
  /** @default false */
  isLocked?: boolean;
  /** @format date */
  startDate?: string | null;
  /** @format date */
  deadline?: string | null;
  /** @format double */
  workHoursEstimate?: number | null;
  /** @format double */
  originalWorkHoursEstimate?: number | null;
  /** @format date */
  originalStartDate?: string | null;
  /** @format date */
  originalDeadline?: string | null;
  /** @format int32 */
  sortOrder?: number | null;
  defaultWorkType?: ModelWithName | null;
  code?: string | null;
  currencyCode?: CurrencyBaseModel | null;
  phaseStatus?: PhaseStatusOutputModel | null;
}

export interface PhaseProjectSubModel {
  /** @minLength 1 */
  guid: string;
  name?: string | null;
  /** @format int64 */
  number?: number | null;
  isInternal?: boolean;
  isClosed?: boolean;
}

export interface PhaseStatusOutputModel {
  description?: string | null;
  phaseStatusTypeGuid?: string | null;
  name?: string | null;
}

export interface PhaseInputModel {
  /** @minLength 1 */
  name: string;
  project?: ModelBaseWithRequiredGuid | null;
  parentPhase: ModelBaseWithRequiredGuid;
  /** @format date */
  startDate?: string | null;
  /** @format date */
  deadline?: string | null;
  /** @format double */
  workHoursEstimate?: number | null;
  /** @format double */
  originalWorkHoursEstimate?: number | null;
  /** @format date */
  originalStartDate?: string | null;
  /** @format date */
  originalDeadline?: string | null;
  /** @format int32 */
  sortOrder?: number | null;
  defaultWorkType?: ModelWithName | null;
  code?: string | null;
  phaseStatus?: PhaseStatusInputModel | null;
  /** @default false */
  isCompleted?: boolean;
  /** @default false */
  isClosed?: boolean;
  /** @default false */
  isLocked?: boolean;
}

export interface PhaseStatusInputModel {
  description?: string | null;
  phaseStatusTypeGuid?: string | null;
}

export interface PhaseModelWithHierarchyInfo {
  project?: PhaseProjectSubModel | null;
  parentPhase?: ModelBaseWithRequiredGuid | null;
  /** @default false */
  isCompleted?: boolean;
  /** @default false */
  isLocked?: boolean;
  /** @format date */
  startDate?: string | null;
  /** @format date */
  deadline?: string | null;
  /** @format double */
  workHoursEstimate?: number | null;
  /** @format double */
  originalWorkHoursEstimate?: number | null;
  /** @format date */
  originalStartDate?: string | null;
  /** @format date */
  originalDeadline?: string | null;
  /** @format int32 */
  sortOrder?: number | null;
  defaultWorkType?: ModelWithName | null;
  code?: string | null;
  currencyCode?: CurrencyBaseModel | null;
  phaseStatus?: PhaseStatusOutputModel | null;
  guid?: string | null;
  /** @minLength 1 */
  name: string;
  /** @format date-time */
  createdDateTime?: string;
  createdBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  /** @format date-time */
  lastUpdatedDateTime?: string | null;
  lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  customer?: PhaseCustomerSubModel | null;
  hasChildren?: boolean;
  /** @format int32 */
  level?: number;
}

export interface PhaseCustomerSubModel {
  name?: string | null;
  guid?: string | null;
  /** @format int64 */
  number?: number | null;
  isInternal?: boolean;
}

export interface ActivityModel {
  /** @format date-time */
  startDateTime: string;
  /** @format date-time */
  endDateTime?: string | null;
  isClosed?: boolean;
  isAllDay?: boolean;
  hasDuration?: boolean;
  isUnassigned?: boolean;
  hasHours?: boolean;
  notes?: string | null;
  /**
   * @minLength 0
   * @maxLength 1000
   */
  location?: string | null;
  activityType: ActivityActivityType;
  ownerUser: ActivityOwnerModel;
  customer?: ActivityCustomer | null;
  phase?: ActivityPhase | null;
  recurrenceParentActivityGuid?: string | null;
  projectTaskStatus?: ModelWithName | null;
  recurrence?: ActivityRecurrenceModel | null;
  recurrenceRule?: string | null;
  recurrenceType?: RecurrenceType;
  guid?: string | null;
  /** @minLength 1 */
  name: string;
  /** @format date-time */
  createdDateTime?: string;
  createdBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  /** @format date-time */
  lastUpdatedDateTime?: string | null;
  lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
}

export interface ActivityActivityType {
  /** @minLength 1 */
  guid: string;
  name?: string | null;
  category?: ActivityCategory;
}

export interface ActivityOwnerModel {
  code?: string | null;
  /** @minLength 1 */
  guid: string;
  name?: string | null;
  keywords?: ActivityOwnerKeyword[] | null;
}

export interface ActivityOwnerKeyword {
  guid?: string | null;
  value?: string | null;
}

export interface ActivityCustomer {
  name?: string | null;
  guid?: string | null;
  /** @format int64 */
  number?: number | null;
}

export interface ActivityPhase {
  name?: string | null;
  guid?: string | null;
  isLocked?: boolean;
  projectGuid?: string | null;
  projectName?: string | null;
  /** @format int64 */
  projectNumber?: number | null;
  projectOwnerGuid?: string | null;
}

export interface ActivityRecurrenceModel {
  frequency: RecurrenceFrequency;
  pattern?: RecurrencePattern | null;
  range?: RecurrenceRange | null;
  exceptions?: string[] | null;
  /** @format date-time */
  lastOccurrenceDateTime?: string | null;
}

export enum RecurrenceFrequency {
  Daily = 'Daily',
  Weekly = 'Weekly',
  Monthly = 'Monthly',
  Yearly = 'Yearly'
}

export interface RecurrencePattern {
  daily?: DailyModel | null;
  weekly?: WeeklyModel | null;
  monthly?: MonthlyModel | null;
  yearly?: YearlyModel | null;
}

export interface DailyModel {
  /** @format int32 */
  interval?: number | null;
  everyWeekday?: boolean;
}

export interface WeeklyModel {
  /** @format int32 */
  interval?: number;
  monday?: boolean;
  tuesday?: boolean;
  wednesday?: boolean;
  thursday?: boolean;
  friday?: boolean;
  saturday?: boolean;
  sunday?: boolean;
}

export interface MonthlyModel {
  /** @format int32 */
  interval?: number;
  /** @format int32 */
  dayOfMonth?: number | null;
  dayOrdinal?: DayOrdinal | null;
  dayOrdinalOption?: DayOrdinalOption | null;
}

export enum DayOrdinal {
  First = 'First',
  Second = 'Second',
  Third = 'Third',
  Fourth = 'Fourth',
  Last = 'Last'
}

export enum DayOrdinalOption {
  Sunday = 'Sunday',
  Monday = 'Monday',
  Tuesday = 'Tuesday',
  Wednesday = 'Wednesday',
  Thursday = 'Thursday',
  Friday = 'Friday',
  WeekDay = 'WeekDay',
  Saturday = 'Saturday',
  WeekendDay = 'WeekendDay',
  Day = 'Day'
}

export interface YearlyModel {
  /** @format int32 */
  dayOfMonth?: number | null;
  month?: Months;
  dayOrdinal?: DayOrdinal | null;
  dayOrdinalOption?: DayOrdinalOption | null;
}

export enum Months {
  January = 'January',
  February = 'February',
  March = 'March',
  April = 'April',
  May = 'May',
  June = 'June',
  July = 'July',
  August = 'August',
  September = 'September',
  October = 'October',
  November = 'November',
  December = 'December'
}

export interface RecurrenceRange {
  /** @format int32 */
  maxOccurrences?: number | null;
  /** @format date */
  recursUntilDate?: string | null;
}

export enum RecurrenceType {
  None = 'None',
  Occurrence = 'Occurrence',
  Exception = 'Exception',
  Series = 'Series'
}

export interface PhaseStatusTypeModel {
  /** @minLength 1 */
  name: string;
  /** @format int32 */
  sortOrder?: number;
  /** @default true */
  isActive?: boolean | null;
  /** @format date-time */
  createdDateTime?: string;
  createdBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  /** @format date-time */
  lastUpdatedDateTime?: string | null;
  lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  guid?: string | null;
}

export interface ProjectFeeOutputModel {
  name?: string | null;
  project?: ProjectFeeProjectSubModel | null;
  phase?: ModelWithName | null;
  customer?: ProjectFeeCustomerSubModel | null;
  product?: ProjectFeeProductSubModel | null;
  description?: string | null;
  unitPrice?: MoneyOutputModel | null;
  unitCost?: MoneyOutputModel | null;
  /** @format double */
  quantity?: number;
  measurementUnit?: string | null;
  hasVolumePricing?: boolean;
  productType?: ProductType | null;
  /** @format double */
  vatRate?: number | null;
  /** @format date */
  displayPeriodStartDate?: string | null;
  user?: UserSubModel | null;
  costCenter?: ProjectCostCenterSubModel | null;
  salesAccount?: ProjectSalesAccountSubModel | null;
  /** @format date-time */
  createdDateTime?: string;
  createdBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  /** @format date-time */
  lastUpdatedDateTime?: string | null;
  lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  guid?: string | null;
  /** @format date */
  eventDate?: string | null;
  billingSchedule?: ProjectFeeBillingScheduleType | null;
  /** @format date */
  plannedBillingDate?: string | null;
  billingDependencyPhase?: ProjectFeePhaseSubModel | null;
  isBillable?: boolean | null;
  invoice?: ProjectFeeInvoiceSubModel | null;
  invoiceRowGuid?: string | null;
  invoiceRowDescription?: string | null;
  /** @format double */
  invoiceQuantity?: number | null;
  invoiceRowComment?: string | null;
  isRecurrenceRule?: boolean;
  recurrenceRuleGuid?: string | null;
}

export interface ProjectFeeProjectSubModel {
  /** @minLength 1 */
  guid: string;
  name?: string | null;
  companyGuid?: string | null;
}

export interface ProjectFeeCustomerSubModel {
  name?: string | null;
  guid?: string | null;
  /** @format int64 */
  number?: number | null;
}

export interface ProjectFeeProductSubModel {
  name?: string | null;
  guid?: string | null;
  code?: string | null;
}

export enum ProductType {
  OwnWork = 'FixedFees',
  Products = 'Materials',
  Subcontracting = 'Subcontracting'
}

export interface UserSubModel {
  code?: string | null;
  name?: string | null;
  guid?: string | null;
  companyGuid?: string | null;
}

export interface ProjectCostCenterSubModel {
  name?: string | null;
  guid?: string | null;
  identifier?: string | null;
}

export interface ProjectSalesAccountSubModel {
  name?: string | null;
  guid?: string | null;
  number?: string | null;
}

export enum ProjectFeeBillingScheduleType {
  Immediately = 'Immediately',
  OnDate = 'OnDate',
  WhenTaskIsCompleted = 'WhenPhaseCompleted',
  Recurring = 'Recurring'
}

export interface ProjectFeePhaseSubModel {
  name?: string | null;
  guid?: string | null;
  isCompleted?: boolean;
}

export interface ProjectFeeInvoiceSubModel {
  guid?: string | null;
  /** @format date */
  date?: string | null;
  /** @format int32 */
  number?: number | null;
}

export interface DeletedProjectFeeModel {
  /** @format date-time */
  deletedDateTime?: string;
  /** @format date-time */
  createdDateTime?: string;
  createdBy?: ModelBaseReadOnly | null;
  /** @format date-time */
  lastUpdatedDateTime?: string | null;
  lastUpdatedBy?: ModelBaseReadOnly | null;
  guid?: string | null;
  phase?: ModelBaseReadOnly | null;
  project?: ModelBaseReadOnly | null;
  customer?: ModelBaseReadOnly | null;
  user?: ModelBaseReadOnly | null;
  product?: ModelBaseReadOnly | null;
  name?: string | null;
  /** @format date */
  eventDate?: string | null;
  /** @format double */
  quantity?: number | null;
  measurementUnit?: string | null;
}

export interface ProductOutputModel {
  code?: string | null;
  unitPrice?: MoneyOutputModel | null;
  unitCost?: MoneyOutputModel | null;
  /** @format double */
  vatRate?: number | null;
  measurementUnit?: string | null;
  /** @default true */
  isActive?: boolean | null;
  productCategory?: ModelWithName | null;
  salesAccount?: ProductSalesAccountSubModel | null;
  guid?: string | null;
  /** @minLength 1 */
  name: string;
  /** @format date-time */
  createdDateTime?: string;
  createdBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  /** @format date-time */
  lastUpdatedDateTime?: string | null;
  lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  type?: ProductType | null;
  proposalDescription?: string | null;
}

export interface ProductSalesAccountSubModel {
  name?: string | null;
  guid?: string | null;
  number?: string | null;
}

export interface ProductForProjectOutputModel {
  product?: ProductOutputModel | null;
  isVolumePriced?: boolean | null;
}

export interface ProductCountrySettingsModel {
  country: ModelBaseWithRequiredGuid;
  product: ModelBaseWithRequiredGuid;
  /** @format double */
  vatRate?: number | null;
  /** @format date-time */
  createdDateTime?: string;
  createdBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  /** @format date-time */
  lastUpdatedDateTime?: string | null;
  lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  guid?: string | null;
}

export interface ProjectBillingCustomerModel {
  project: ModelBaseWithRequiredGuid;
  billingCustomer: BillingCustomerModel;
  isDefault?: boolean;
  canBeDeleted?: boolean;
  /** @format date-time */
  createdDateTime?: string;
  createdBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  /** @format date-time */
  lastUpdatedDateTime?: string | null;
  lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  guid?: string | null;
}

export interface BillingCustomerModel {
  /** @minLength 1 */
  guid: string;
  name?: string | null;
  eInvoiceAddress?: string | null;
  eInvoiceOperator?: string | null;
}

export interface ProjectOutputModel {
  projectStatus?: ProjectStatusSubModel | null;
  isInternal?: boolean;
  internalName?: string | null;
  /** @format int64 */
  number?: number | null;
  description?: string | null;
  isClosed?: boolean;
  /** @format date */
  closedDate?: string | null;
  /** @default true */
  isJoiningAllowed?: boolean;
  customer?: ProjectCustomerSubModel | null;
  projectOwner?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  businessUnit?: BusinessUnitSubModel | null;
  currency?: CurrencySubModel2 | null;
  customerContact?: CustomerContactSubModel | null;
  salesStatus?: SalesStatusSubModel | null;
  salesPerson?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  /** @format int32 */
  probability?: number | null;
  /** @format date */
  expectedOrderDate?: string | null;
  expectedValue?: MoneyOutputModel | null;
  /** @format date */
  startDate?: string | null;
  /** @format date */
  deadline?: string | null;
  leadSource?: ModelWithName | null;
  rootPhase?: ModelWithName | null;
  pricelist?: ProjectPricelistSubModel | null;
  costCenter?: ProjectCostCenterSubModel | null;
  /** @format int32 */
  paymentTerm?: number | null;
  ourReference?: string | null;
  yourReference?: string | null;
  orderNumber?: string | null;
  invoiceNotes?: string | null;
  billingContact?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  invoiceTemplate?: ProjectInvoiceTemplateSubModel | null;
  /** @default true */
  useWorkTypesFromSetting?: boolean;
  defaultWorkType?: ModelWithName | null;
  /** @default true */
  useProductsFromSetting?: boolean;
  isMileageBillable?: boolean;
  isDailyAllowanceBillable?: boolean;
  isOtherTravelExpensesBillable?: boolean;
  /** @default true */
  useOvertimeMultipliers?: boolean;
  keywords?: ModelWithName[] | null;
  /** @format int32 */
  completionEstimatePercentage?: number | null;
  /** @format int32 */
  calculatedCompletionPercentage?: number | null;
  guid?: string | null;
  /** @minLength 1 */
  name: string;
  /** @format date-time */
  createdDateTime?: string;
  createdBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  /** @format date-time */
  lastUpdatedDateTime?: string | null;
  lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
}

export interface ProjectStatusSubModel {
  name?: string | null;
  description?: string | null;
  projectStatusTypeGuid?: string | null;
  guid?: string | null;
}

export interface ProjectCustomerSubModel {
  /** @minLength 1 */
  guid: string;
  name?: string | null;
  /** @format int64 */
  number?: number | null;
}

export interface BusinessUnitSubModel {
  /** @minLength 1 */
  guid: string;
  name?: string | null;
  companyGuid?: string | null;
  companyName?: string | null;
  companyBusinessUnitGuid?: string | null;
  companyCountryGuid?: string | null;
  companyCurrencyGuid?: string | null;
  code?: string | null;
}

export interface CurrencySubModel2 {
  /** @minLength 1 */
  guid: string;
  name?: string | null;
  code?: string | null;
  symbol?: string | null;
}

export interface CustomerContactSubModel {
  name?: string | null;
  guid?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  isDeleted?: boolean;
}

export interface SalesStatusSubModel {
  guid?: string | null;
  name?: string | null;
  salesStatusTypeGuid?: string | null;
}

export interface ProjectPricelistSubModel {
  name?: string | null;
  guid?: string | null;
  isCustom?: boolean;
  isVolumePricing?: boolean;
}

export interface ProjectInvoiceTemplateSubModel {
  guid?: string | null;
  name?: string | null;
  /** @deprecated */
  templateInvoiceGuid?: string | null;
}

export interface ProjectInputModelBase {
  /** @minLength 1 */
  name: string;
  customer: SimpleInputRequiredModel;
  projectOwner: SimpleInputModel;
  isInternal?: boolean;
  internalName?: string | null;
  /** @format int64 */
  number?: number | null;
  description?: string | null;
  isClosed?: boolean;
  /** @default true */
  isJoiningAllowed?: boolean;
  businessUnit?: SimpleInputRequiredModel | null;
  customerContact?: SimpleInputModel | null;
  salesPerson?: SimpleInputModel | null;
  /** @format date */
  startDate?: string | null;
  /** @format date */
  deadline?: string | null;
  leadSource?: SimpleInputModel | null;
  costCenter?: SimpleInputModel | null;
  /** @format int32 */
  paymentTerm?: number | null;
  ourReference?: string | null;
  yourReference?: string | null;
  orderNumber?: string | null;
  invoiceNotes?: string | null;
  billingContact?: SimpleInputModel | null;
  invoiceTemplate?: InvoiceTemplateSubModel | null;
  /** @default true */
  useOvertimeMultipliers?: boolean;
  /** @default true */
  useWorktypesFromSetting?: boolean;
  /** @default true */
  useProductsFromSetting?: boolean;
  /** @format int32 */
  completionEstimatePercentage?: number | null;
  salesStatus?: SimpleSalesStatusInputModel | null;
  projectStatus?: SimpleProjectStatusInputModel | null;
  currency?: SimpleInputRequiredModel | null;
  /** @format int32 */
  probability?: number | null;
  /** @format date */
  expectedOrderDate?: string | null;
  expectedValue?: MoneyInputModelWithNullableAmount | null;
}

export interface InvoiceTemplateSubModel {
  guid?: string | null;
  /** @deprecated */
  templateInvoiceGuid?: string | null;
}

export interface SimpleSalesStatusInputModel {
  salesStatusTypeGuid?: string | null;
}

export interface SimpleProjectStatusInputModel {
  projectStatusTypeGuid?: string | null;
  description?: string | null;
}

export interface MoneyInputModelWithNullableAmount {
  /** @format double */
  amount?: number | null;
  /** @minLength 1 */
  currencyCode: string;
}

export interface ProjectTravelExpenseOutputModel {
  /** @format date-time */
  createdDateTime?: string;
  createdBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  /** @format date-time */
  lastUpdatedDateTime?: string | null;
  lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  guid?: string | null;
  project?: ProjectTravelExpenseProjectSubModel | null;
  phase?: ModelBaseWithRequiredGuid | null;
  customer?: ModelWithName | null;
  user?: UserRequiredSubModel | null;
  travelExpense?: TravelExpenseSubModel | null;
  description?: string | null;
  unitPrice?: MoneyOutputModel | null;
  unitCost?: MoneyOutputModel | null;
  unitCostExcludingPurchaseVat?: MoneyOutputModel | null;
  /** @format double */
  quantity?: number | null;
  measurementUnit?: string | null;
  /** @format double */
  vatRate?: number | null;
  /** @format double */
  purchaseVatRate?: number | null;
  /** @format date */
  eventDate?: string | null;
  /** @format date-time */
  travelStartTime?: string | null;
  /** @format date-time */
  travelEndTime?: string | null;
  /** @default true */
  travelReimbursementRequired?: boolean;
  travelReimbursement?: TravelReimbursementSubModel | null;
  isBillable?: boolean | null;
  billingSchedule?: ProjectTravelExpenseBillingScheduleType | null;
  /** @format date */
  plannedBillingDate?: string | null;
  billingDependencyPhase?: ModelWithName | null;
  invoice?: InvoiceSubModel | null;
  /** @format double */
  invoiceQuantity?: number | null;
  invoiceRowGuid?: string | null;
  invoiceRowDescription?: string | null;
  invoiceRowComment?: string | null;
  costAccount?: ModelWithName | null;
  costCenter?: ModelWithName | null;
  salesAccount?: ModelWithName | null;
  /** @format int32 */
  attachmentCount?: number;
}

export interface ProjectTravelExpenseProjectSubModel {
  /** @minLength 1 */
  guid: string;
  name?: string | null;
  companyGuid?: string | null;
  isInternal?: boolean;
  /** @format int64 */
  number?: number | null;
}

export interface UserRequiredSubModel {
  code?: string | null;
  /** @minLength 1 */
  guid: string;
  name?: string | null;
  companyGuid?: string | null;
}

export interface TravelExpenseSubModel {
  /** @minLength 1 */
  guid: string;
  name?: string | null;
  expenseClass?: ExpensesClass;
  includeTime?: boolean;
  code?: string | null;
}

export enum ExpensesClass {
  Mileage = 'Mileage',
  DailyAllowance = 'DailyAllowance',
  OtherTravelExpense = 'OtherTravelExpense'
}

export interface TravelReimbursementSubModel {
  guid?: string | null;
  isApproved?: boolean;
  isLocked?: boolean;
  status?: string | null;
}

export enum ProjectTravelExpenseBillingScheduleType {
  Immediately = 'Immediately',
  WhenPhaseCompleted = 'WhenPhaseCompleted',
  OnDate = 'OnDate'
}

export interface InvoiceSubModel {
  guid?: string | null;
  /** @format date */
  date?: string | null;
  /** @format int32 */
  number?: number | null;
}

export interface DeletedProjectTravelExpenseModel {
  /** @format date-time */
  deletedDateTime?: string;
  /** @format date-time */
  createdDateTime?: string;
  createdBy?: ModelBaseReadOnly | null;
  /** @format date-time */
  lastUpdatedDateTime?: string | null;
  lastUpdatedBy?: ModelBaseReadOnly | null;
  guid?: string | null;
  phase?: ModelBaseReadOnly | null;
  project?: ModelBaseReadOnly | null;
  customer?: ModelBaseReadOnly | null;
  user?: ModelBaseReadOnly | null;
  travelExpense?: ModelBaseReadOnly | null;
  description?: string | null;
  /** @format date */
  eventDate?: string | null;
  /** @format double */
  quantity?: number | null;
  measurementUnit?: string | null;
  /** @format date-time */
  travelStartTime?: string | null;
  /** @format date-time */
  travelEndTime?: string | null;
}

export interface PublicAuthenticationOutputModel {
  access_token?: string;
  scope?: string;
  refresh_token?: string;
  /** @format uint64 */
  refresh_token_expires_in?: number;
  /** @format date-time */
  refresh_token_expires_utc?: string;
  access_token_type?: string;
  /** @format uint64 */
  access_token_expires_in?: number;
  /** @format date-time */
  access_token_expires_utc?: string;
}

export interface ClientCredentials {
  /** @minLength 1 */
  client_id: string;
  /** @minLength 1 */
  client_secret: string;
  scope?: string | null;
}

export interface AccessTokenCredentials {
  grant_type?: GrantType;
  code?: string | null;
  redirect_uri?: string | null;
  client_id?: string | null;
  client_secret?: string | null;
  scope?: string | null;
  state?: string | null;
  refresh_token?: string | null;
}

export enum GrantType {
  ClientCredentials = 'client_credentials',
  AuthorizationCode = 'authorization_code',
  RefreshToken = 'refresh_token'
}

export interface ReimbursedProjectFeeOutputModel {
  name?: string | null;
  /** @format date */
  eventDate?: string | null;
  phase?: ModelWithName | null;
  project?: ReimbursedProjectFeeProjectSubModel | null;
  product?: ModelWithName | null;
  description?: string | null;
  unitPrice?: MoneyOutputModel | null;
  unitCost?: MoneyOutputModel | null;
  /** @format double */
  quantity?: number;
  measurementUnit?: string | null;
  /** @format double */
  vatRate?: number | null;
  user?: ModelWithName | null;
  invoiceGuid?: string | null;
  /** @format double */
  invoiceQuantity?: number | null;
  invoiceRowGuid?: string | null;
  invoiceRowDescription?: string | null;
  /** @format date-time */
  createdDateTime?: string;
  createdBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  /** @format date-time */
  lastUpdatedDateTime?: string | null;
  lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  guid?: string | null;
  productType?: ProductType | null;
}

export interface ReimbursedProjectFeeProjectSubModel {
  name?: string | null;
  guid?: string | null;
  number?: string | null;
}

export interface SalesStatusTypeOutputModel {
  /** @format date-time */
  createdDateTime?: string;
  createdBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  /** @format date-time */
  lastUpdatedDateTime?: string | null;
  lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  name?: string;
  guid?: string;
  isActive?: boolean;
  salesState?: SalesStatusType;
  /** @format int32 */
  defaultProbability?: number | null;
  isProposalDefault?: boolean | null;
}

export enum SalesStatusType {
  InProgress = 'InProgress',
  Won = 'Won',
  Lost = 'Lost'
}

export interface SalesStatusTypeInputModel {
  /** @minLength 1 */
  name: string;
  /** @default true */
  isActive?: boolean;
  salesState: SalesStatusType;
  /** @format int32 */
  defaultProbability?: number | null;
  /** @default false */
  isProposalDefault?: boolean | null;
}

export interface TravelExpenseTypeCountrySettingsModel {
  country: ModelBaseWithRequiredGuid;
  product: ModelBaseWithRequiredGuid;
  /** @format double */
  vatRate?: number | null;
  /** @format date-time */
  createdDateTime?: string;
  createdBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  /** @format date-time */
  lastUpdatedDateTime?: string | null;
  lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  guid?: string | null;
  /** @format double */
  purchaseVatRate?: number | null;
}

export interface UserOutputModel {
  /** @minLength 1 */
  firstName: string;
  /** @minLength 1 */
  lastName: string;
  salutation?: SalutationType | null;
  /** @format date-time */
  createdDateTime?: string;
  createdBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  /** @format date-time */
  lastUpdatedDateTime?: string | null;
  lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  guid?: string | null;
  /** @default true */
  isActive?: boolean;
  email?: string | null;
  phone?: string | null;
  socialSecurityNumber?: string | null;
  businessUnit?: BusinessUnitSubModel | null;
  workType?: ModelBaseWithRequiredGuid | null;
  permissionProfile?: ModelWithName | null;
  superiorUser?: ModelBaseWithRequiredGuid | null;
  workContract?: UserWorkContractSubModel | null;
  /** @format date-time */
  lastLogin?: string | null;
  title?: string | null;
  satisfaction?: SatisfactionLevelType | null;
  code?: string | null;
  address?: string | null;
  postalCode?: string | null;
  city?: string | null;
  country?: UserCountrySubModel | null;
  countryRegion?: ModelWithName | null;
  culture?: UserCultureSubModel | null;
  language?: UserLanguageSubModel | null;
  timezone?: TimezoneModel | null;
  /** @format date-time */
  birthDate?: string | null;
  bankAccountNumber?: string | null;
  notes?: string | null;
  keywords?: UserKeywordSubModel[] | null;
  defaultActivityType?: ModelWithName | null;
  userType?: LicenseUserType | null;
  notificationSettings?: UserNotificationSettingsModel | null;
}

export interface UserWorkContractSubModel {
  /** @minLength 1 */
  title: string;
  /** @format date */
  startDate: string;
  /** @format date */
  endDate?: string | null;
  /** @format double */
  dailyHours?: number;
  isOvertimeAllowed?: boolean;
  /** @default true */
  isFlextimeActive?: boolean;
  /** @format double */
  flextimeLimitPerDay?: number | null;
  workWeek?: Workweek[] | null;
  guid?: string | null;
  hourCost?: MoneyOutputModel | null;
}

export interface UserCountrySubModel {
  name?: string | null;
  guid?: string | null;
  code3?: string | null;
  englishName?: string | null;
  hasRegions?: CountryRegionsStatus;
}

export interface UserCultureSubModel {
  code?: string | null;
  name?: string | null;
  guid?: string | null;
  englishName?: string | null;
}

export interface UserLanguageSubModel {
  code?: string | null;
  name?: string | null;
  guid?: string | null;
  englishName?: string | null;
}

export interface TimezoneModel {
  name?: string | null;
  guid?: string | null;
  systemName?: string | null;
  ianaName?: string | null;
}

export interface UserKeywordSubModel {
  value?: string | null;
}

export enum LicenseUserType {
  FullUser = 'FullUser',
  Employee = 'Employee',
  RestrictedEmployee = 'RestrictedEmployee',
  Subcontractor = 'Subcontractor'
}

export interface UserNotificationSettingsModel {
  /** @default true */
  sendNewActivityEmail?: boolean | null;
  /** @default true */
  sendTodaysAgendaEmail?: boolean | null;
  /** @default true */
  sendWeeklySummaryEmail?: boolean | null;
}

/** Purpose used for getting the users. */
export enum GetUsersPurpose {
  AbsenceOwner = 'AbsenceOwner',
  AccountOwner = 'AccountOwner',
  ActivityOwner = 'ActivityOwner',
  ActivityParticipant = 'ActivityParticipant',
  BillingContact = 'BillingContact',
  ProjectManager = 'ProjectManager',
  SalesPerson = 'SalesPerson',
  SuperiorUser = 'SuperiorUser',
  TermsOfServiceApprover = 'TermsOfServiceApprover'
}

export interface TravelReimbursementOutputModel {
  user?: ModelWithName | null;
  title?: string | null;
  /** @format int32 */
  number?: number | null;
  /** @format date-time */
  date?: string;
  /** @format date-time */
  approvalDate?: string | null;
  approvedByUser?: ModelWithName | null;
  advancePayment?: MoneyOutputModel | null;
  total?: MoneyOutputModel | null;
  totalExpenses?: MoneyOutputModel | null;
  groupBy?: GroupByType;
  canChangeApproval?: boolean;
  /** @format date-time */
  createdDateTime?: string;
  createdBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  /** @format date-time */
  lastUpdatedDateTime?: string | null;
  lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  guid?: string | null;
  travelReimbursementStatus?: ModelWithName | null;
}

export enum GroupByType {
  None = 'None',
  Date = 'Date',
  Category = 'Category',
  Project = 'Project'
}

export interface TravelReimbursementInputModel {
  title?: string | null;
  advancePayment?: MoneyInputModelWithNullableAmount | null;
  groupBy?: GroupByType;
  travelReimbursementStatus?: SimpleInputModel | null;
  user: ModelBaseWithRequiredGuid;
}

export interface WorkdayModel {
  /** @format date */
  date?: string;
  userGuid?: string | null;
  isReadOnly?: boolean;
  isCompleted?: boolean;
  isOvertimeAllowed?: boolean;
  /** @format double */
  expectedHours?: number;
  /** @format double */
  enteredHours?: number;
  isHoliday?: boolean;
  holidayName?: string | null;
  /** @format double */
  flextimeLimitPerDay?: number | null;
  /** @format double */
  absenceHours?: number;
  /** @format int32 */
  incompleteTimingMinutes?: number;
  /** @format double */
  enteredTimeEntries?: number;
}

export interface WorkTypeOutputModel {
  guid?: string | null;
  /** @minLength 1 */
  name: string;
  /** @format date-time */
  createdDateTime?: string;
  createdBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  /** @format date-time */
  lastUpdatedDateTime?: string | null;
  lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  /** @default true */
  isActive?: boolean;
  isProductive?: boolean;
  isDefault?: boolean;
  salesAccount?: ModelWithName | null;
  code?: string | null;
  hourCost?: MoneyOutputModel | null;
}

export interface VatRateOutputModel {
  /** @format date-time */
  createdDateTime?: string;
  createdBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  /** @format date-time */
  lastUpdatedDateTime?: string | null;
  lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  guid?: string | null;
  /** @format double */
  percentage?: number;
  /**
   * @minLength 0
   * @maxLength 10
   */
  code?: string | null;
  /** @default true */
  isActive?: boolean;
  isDefault?: boolean;
  countryGuid?: string | null;
}

export interface VatRateInputModel {
  /** @format double */
  percentage: number;
  /**
   * @minLength 0
   * @maxLength 10
   */
  code?: string | null;
  /** @default true */
  isActive?: boolean;
  isDefault?: boolean;
  countryGuid?: string | null;
}

export interface WorkHourOutputModel {
  phase?: WorkHourPhaseSubModel | null;
  customer?: WorkHourCustomerSubModel | null;
  workType?: WorkHourWorkTypeSubModel | null;
  invoice?: WorkHourInvoiceSubModel | null;
  description?: string | null;
  unitPrice?: MoneyOutputModel | null;
  unitCost?: MoneyOutputModel | null;
  invoiceRowDescription?: string | null;
  /** @format double */
  invoiceQuantity?: number | null;
  /** @format double */
  plannedInvoiceQuantity?: number | null;
  isBillable?: boolean | null;
  billableStatus?: BillableStatusType;
  isProductive?: boolean | null;
  isApproved?: boolean | null;
  isModifiable?: boolean;
  invoiceRowGuid?: string | null;
  invoiceRowComment?: string | null;
  user?: UserWithFirstNameLastNamePhotoFileModelAndRequiredGuid | null;
  overtime?: ModelWithName | null;
  /** @format date */
  eventDate: string;
  /** @format double */
  quantity?: number | null;
  /** @format date-time */
  startTime?: string | null;
  /** @format date-time */
  endTime?: string | null;
  /** @format date-time */
  createdDateTime?: string;
  createdBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  /** @format date-time */
  lastUpdatedDateTime?: string | null;
  lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  guid?: string | null;
  project?: WorkHourProjectSubModel | null;
}

export interface WorkHourPhaseSubModel {
  /** @minLength 1 */
  guid: string;
  name?: string | null;
  isCompleted?: boolean;
  isLocked?: boolean;
}

export interface WorkHourCustomerSubModel {
  name?: string | null;
  guid?: string | null;
  /** @format int64 */
  number?: number | null;
}

export interface WorkHourWorkTypeSubModel {
  /** @minLength 1 */
  guid: string;
  name?: string | null;
  code?: string | null;
}

export interface WorkHourInvoiceSubModel {
  guid?: string | null;
  /** @format date */
  date?: string | null;
  /** @format int32 */
  number?: number | null;
}

export enum BillableStatusType {
  Billable = 'Billable',
  NotBillable = 'NotBillable',
  RemovedFromInvoice = 'RemovedFromInvoice'
}

export interface WorkHourProjectSubModel {
  name?: string | null;
  guid?: string | null;
  /** @format int64 */
  number?: number | null;
  companyGuid?: string | null;
  isClosed?: boolean;
}

export interface DeletedWorkHourModel {
  /** @format date-time */
  deletedDateTime?: string;
  /** @format date-time */
  createdDateTime?: string;
  createdBy?: ModelBaseReadOnly | null;
  /** @format date-time */
  lastUpdatedDateTime?: string | null;
  lastUpdatedBy?: ModelBaseReadOnly | null;
  guid?: string | null;
  phase?: ModelBaseReadOnly | null;
  project?: ModelBaseReadOnly | null;
  customer?: ModelBaseReadOnly | null;
  user?: ModelBaseReadOnly | null;
  workType?: ModelBaseReadOnly | null;
  /** @format date */
  eventDate?: string | null;
  /** @format double */
  quantity?: number | null;
  /** @format double */
  plannedInvoiceQuantity?: number | null;
  /** @format date-time */
  startTime?: string | null;
  /** @format date-time */
  endTime?: string | null;
}

export interface WorkHourInputModel {
  description?: string | null;
  /** @format date-time */
  endTime?: string | null;
  /** @format date */
  eventDate: string;
  invoice?: SimpleInputModel | null;
  /** @format double */
  invoiceQuantity?: number | null;
  /** @format double */
  plannedInvoiceQuantity?: number | null;
  invoiceRowComment?: string | null;
  invoiceRowDescription?: string | null;
  isApproved?: boolean | null;
  isBillable?: boolean | null;
  overtime?: SimpleInputModel | null;
  phase: SimpleInputRequiredModel;
  /** @format double */
  quantity?: number | null;
  /** @format date-time */
  startTime?: string | null;
  unitPrice?: MoneyInputModel | null;
  user: SimpleInputRequiredModel;
  workType: SimpleInputRequiredModel;
}

export interface ProjectStatusTypeModel {
  /** @minLength 1 */
  name: string;
  /** @default true */
  isActive?: boolean;
  /** @format int32 */
  sortOrder?: number;
  /** @format date-time */
  createdDateTime?: string;
  createdBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  /** @format date-time */
  lastUpdatedDateTime?: string | null;
  lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  guid?: string | null;
}

export interface SalesStatusHistoryOutputModel {
  /** @format date-time */
  createdDateTime?: string;
  createdBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  /** @format date-time */
  lastUpdatedDateTime?: string | null;
  lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  guid?: string | null;
  salesStatusType?: ModelWithName | null;
  project?: ModelWithName | null;
  /** @format date-time */
  timeStamp?: string;
}

export interface ProjectForecastOutputModel {
  /** @format date-time */
  createdDateTime?: string | null;
  createdBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  /** @format date-time */
  lastUpdatedDateTime?: string | null;
  lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  guid?: string | null;
  project?: ModelBaseWithRequiredGuid | null;
  /** @format int32 */
  month?: number | null;
  /** @format int32 */
  year?: number | null;
  billingForecast?: MoneyOutputModel | null;
  billingForecastNotes?: string | null;
  expenseForecast?: MoneyOutputModel | null;
  expenseForecastNotes?: string | null;
  revenueForecast?: MoneyOutputModel | null;
  revenueForecastNotes?: string | null;
  laborExpenseForecast?: MoneyOutputModel | null;
  laborExpenseForecastNotes?: string | null;
}

export interface ProjectForecastInputModel {
  /** @format date-time */
  createdDateTime?: string;
  createdBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  /** @format date-time */
  lastUpdatedDateTime?: string | null;
  lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  guid?: string | null;
  project: SimpleInputRequiredModel;
  /**
   * @format int32
   * @min 1
   * @max 12
   */
  month: number;
  /**
   * @format int32
   * @min 1900
   * @max 2075
   */
  year: number;
  billingForecast?: MoneyInputModelWithNullableAmount | null;
  billingForecastNotes?: string | null;
  expenseForecast?: MoneyInputModelWithNullableAmount | null;
  expenseForecastNotes?: string | null;
  revenueForecast?: MoneyInputModelWithNullableAmount | null;
  revenueForecastNotes?: string | null;
  laborExpenseForecast?: MoneyInputModelWithNullableAmount | null;
  laborExpenseForecastNotes?: string | null;
}

export interface BankAccountOutputModel {
  /** @format date-time */
  createdDateTime?: string;
  createdBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  /** @format date-time */
  lastUpdatedDateTime?: string | null;
  lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  guid?: string | null;
  /** @minLength 1 */
  bankName: string;
  /** @minLength 1 */
  accountNumber: string;
  bic?: string | null;
  /** @default "Iban" */
  accountNumberFormat?: BankAccountFormat;
  /** @default true */
  isActive?: boolean;
  businessUnit?: ModelWithName | null;
  company?: ModelWithName | null;
}

export enum BankAccountFormat {
  Iban = 'Iban',
  Bankgiro = 'Bankgiro'
}

export interface CurrencyOutputModel {
  /** @format date-time */
  createdDateTime?: string;
  createdBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  /** @format date-time */
  lastUpdatedDateTime?: string | null;
  lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  guid?: string | null;
  name?: string | null;
  code?: string | null;
  /** @format double */
  rate?: number;
  symbol?: string | null;
  /** @default true */
  isActive?: boolean;
  isOrganizationCurrency?: boolean;
}

export interface FlatRateInputModel {
  phase: SimpleInputRequiredModel;
  billingSchedule: BillingScheduleType;
  /** @format date */
  plannedBillingDate?: string | null;
  price?: MoneyInputModelWithNullableAmount | null;
  /**
   * @format double
   * @default 0
   */
  includesHours?: number | null;
  /** @default true */
  billAdditionalHours?: boolean | null;
  pricePerAdditionalHour?: MoneyInputModelWithNullableAmount | null;
}

export interface PriceListOutputModel {
  guid?: string | null;
  /** @minLength 1 */
  name: string;
  /** @format date-time */
  createdDateTime?: string;
  createdBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  /** @format date-time */
  lastUpdatedDateTime?: string | null;
  lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  isDefault?: boolean;
  isActive?: boolean;
  isCustom?: boolean;
  isVolumePricing?: boolean;
  currency: PriceListCurrency2;
}

export interface PriceListCurrency2 {
  /** @minLength 1 */
  guid: string;
  name?: string | null;
  symbol?: string | null;
  code?: string | null;
}

export interface CustomPriceListOutputModel {
  guid?: string | null;
  /** @minLength 1 */
  name: string;
  /** @format date-time */
  createdDateTime?: string;
  createdBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  /** @format date-time */
  lastUpdatedDateTime?: string | null;
  lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  isDefault?: boolean;
  isActive?: boolean;
  isCustom?: boolean;
  isVolumePricing?: boolean;
  currency: PriceListCurrency3;
}

export interface PriceListCurrency3 {
  /** @minLength 1 */
  guid: string;
  name?: string | null;
  symbol?: string | null;
  code?: string | null;
}

export interface PricelistVersionOutputModel {
  /** @format date-time */
  createdDateTime?: string;
  createdBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  /** @format date-time */
  lastUpdatedDateTime?: string | null;
  lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  guid?: string | null;
  pricelistGuid?: string | null;
  /** @format date */
  startDate?: string | null;
}

export interface ProductPriceOutputModel {
  prices?: ProductPriceModel[] | null;
  product?: ProductPriceProductOutputSubModel | null;
  isAvailable?: boolean;
  isVolumePriced?: boolean;
}

export interface ProductPriceModel {
  price?: MoneyOutputModel | null;
  pricelistVersionGuid?: string | null;
  projectGuid?: string | null;
  priceSource?: PriceSource;
  guid?: string | null;
  /** @format double */
  quantity?: number | null;
}

export enum PriceSource {
  ProductRegistry = 'ProductRegistry',
  Pricelist = 'Pricelist',
  Project = 'Project'
}

export interface ProductPriceProductOutputSubModel {
  guid?: string | null;
  name?: string | null;
  productCode?: string | null;
  productType?: ProductType | null;
  productCategory?: ModelWithName | null;
}

export interface ProductInputModel {
  /** @minLength 1 */
  name: string;
  code?: string | null;
  unitPrice?: MoneyInputModelWithNullableAmount | null;
  unitCost?: MoneyInputModelWithNullableAmount | null;
  /** @format double */
  vatRate?: number | null;
  measurementUnit?: string | null;
  /** @default true */
  isActive?: boolean | null;
  productCategory?: SimpleInputModel | null;
  salesAccount?: SimpleInputModel | null;
  type?: ProductType | null;
  proposalDescription?: string | null;
}

export interface ProjectFeeInputModel {
  name?: string | null;
  billingDependencyPhase?: SimpleInputModel | null;
  billingSchedule?: ProjectFeeBillingScheduleType | null;
  costCenter?: SimpleInputModel | null;
  description?: string | null;
  /** @format date */
  displayPeriodStartDate?: string | null;
  /** @format date */
  eventDate?: string | null;
  hasVolumePricing?: boolean;
  invoice?: SimpleInputModel | null;
  /** @format double */
  invoiceQuantity?: number | null;
  invoiceRowComment?: string | null;
  invoiceRowDescription?: string | null;
  isBillable?: boolean | null;
  measurementUnit?: string | null;
  phase?: SimpleInputModel | null;
  /** @format date */
  plannedBillingDate?: string | null;
  product?: SimpleInputModel | null;
  productType?: ProductType | null;
  project: SimpleInputRequiredModel;
  /** @format double */
  quantity?: number;
  salesAccount?: SimpleInputModel | null;
  unitCost?: MoneyInputModelWithNullableAmount | null;
  unitPrice?: MoneyInputModelWithNullableAmount | null;
  user?: SimpleInputModel | null;
  /** @format double */
  vatRate?: number | null;
}

export interface ProjectMemberCostExceptionOutputModel {
  /** @format date-time */
  createdDateTime?: string;
  createdBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  /** @format date-time */
  lastUpdatedDateTime?: string | null;
  lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  guid?: string | null;
  user?: UserWithFirstNameLastNamePhotoFileModelAndRequiredGuid | null;
  customer?: ProjectMemberCostExceptionProjectCustomerSubModel | null;
  project?: ProjectMemberCostExceptionProjectSubModel | null;
  cost?: MoneyOutputModel | null;
  currentContractCost?: MoneyOutputModel | null;
}

export interface ProjectMemberCostExceptionProjectCustomerSubModel {
  /** @minLength 1 */
  guid: string;
  name?: string | null;
  /** @format int64 */
  number?: number | null;
}

export interface ProjectMemberCostExceptionProjectSubModel {
  /** @minLength 1 */
  guid: string;
  name?: string | null;
  /** @format int64 */
  number?: number | null;
  isClosed?: boolean;
}

export interface ProjectMemberCostExceptionInputModel {
  user: SimpleInputRequiredModel;
  project: SimpleInputRequiredModel;
  cost?: MoneyInputModelWithNullableAmount | null;
}

export interface ProjectRecurringFeeRuleOutputModel {
  name?: string | null;
  project?: ProjectFeeProjectSubModel | null;
  phase?: ModelWithName | null;
  customer?: ProjectFeeCustomerSubModel | null;
  product?: ProjectFeeProductSubModel | null;
  description?: string | null;
  unitPrice?: MoneyOutputModel | null;
  unitCost?: MoneyOutputModel | null;
  /** @format double */
  quantity?: number;
  measurementUnit?: string | null;
  hasVolumePricing?: boolean;
  productType?: ProductType | null;
  /** @format double */
  vatRate?: number | null;
  /** @format date */
  displayPeriodStartDate?: string | null;
  user?: UserSubModel | null;
  costCenter?: ProjectCostCenterSubModel | null;
  salesAccount?: ProjectSalesAccountSubModel | null;
  /** @format date-time */
  createdDateTime?: string;
  createdBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  /** @format date-time */
  lastUpdatedDateTime?: string | null;
  lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  guid?: string | null;
  /** @format int32 */
  frequency?: number | null;
  /** @format date */
  recurrenceStartDate?: string | null;
  recurrenceEndType?: RecurrenceEndTypes | null;
  /** @format date */
  recurrenceEndDate?: string | null;
  /** @format int32 */
  recurrenceTimes?: number | null;
  recurringSalesAccount?: ProjectSalesAccountSubModel | null;
  /** @format int32 */
  generatedTimes?: number;
  /** @default true */
  isActive?: boolean;
}

export enum RecurrenceEndTypes {
  Never = 'Never',
  AfterNumberOfTimes = 'AfterNumberOfTimes',
  OnDate = 'OnDate'
}

export enum BillablePeriod {
  Any = 'Any',
  Past = 'Past',
  Future = 'Future',
  NowAndPast = 'NowAndPast',
  NowAndFuture = 'NowAndFuture'
}

export interface ProjectRecurringFeeRuleInputModel {
  /** @format int32 */
  frequency: number;
  /** @format date */
  recurrenceStartDate?: string | null;
  recurrenceEndType?: RecurrenceEndTypes | null;
  /** @format date */
  recurrenceEndDate?: string | null;
  /** @format int32 */
  recurrenceTimes?: number | null;
  recurringSalesAccount?: SimpleInputModel | null;
  /** @default true */
  isActive?: boolean;
  project: SimpleInputRequiredModel;
  phase?: SimpleInputModel | null;
  product?: SimpleInputModel | null;
  description?: string | null;
  unitPrice?: MoneyInputModelWithNullableAmount | null;
  unitCost?: MoneyInputModelWithNullableAmount | null;
  /** @format double */
  quantity?: number;
  measurementUnit?: string | null;
  hasVolumePricing?: boolean;
  productType?: ProductType | null;
  /** @format double */
  vatRate?: number | null;
  /** @format date */
  displayPeriodStartDate?: string | null;
  user?: SimpleInputModel | null;
  costCenter?: SimpleInputModel | null;
  salesAccount?: SimpleInputModel | null;
}

export interface ProjectTravelExpenseInputModel {
  billingDependencyPhase?: SimpleInputModel | null;
  billingSchedule?: ProjectTravelExpenseBillingScheduleType | null;
  costAccount?: SimpleInputModel | null;
  costCenter?: SimpleInputModel | null;
  description?: string | null;
  /** @format date */
  eventDate?: string | null;
  invoice?: SimpleInputModel | null;
  /** @format double */
  invoiceQuantity?: number | null;
  invoiceRowComment?: string | null;
  invoiceRowDescription?: string | null;
  isBillable?: boolean | null;
  measurementUnit?: string | null;
  phase: SimpleInputRequiredModel;
  /** @format date */
  plannedBillingDate?: string | null;
  project: SimpleInputRequiredModel;
  /** @format double */
  purchaseVatRate?: number | null;
  /** @format double */
  quantity: number;
  salesAccount?: SimpleInputModel | null;
  /** @format date-time */
  travelEndTime?: string | null;
  travelExpense: SimpleInputRequiredModel;
  travelReimbursement?: SimpleInputModel | null;
  /** @default true */
  travelReimbursementRequired?: boolean;
  /** @format date-time */
  travelStartTime?: string | null;
  unitCost?: MoneyInputModel | null;
  unitPrice?: MoneyInputModel | null;
  user: SimpleInputRequiredModel;
  /** @format double */
  vatRate?: number | null;
}

export interface ReimbursedProjectTravelExpenseOutputModel {
  name?: string | null;
  /** @format date */
  eventDate?: string | null;
  phase?: ModelWithName | null;
  project?: ReimbursedProjectFeeProjectSubModel | null;
  product?: ModelWithName | null;
  description?: string | null;
  unitPrice?: MoneyOutputModel | null;
  unitCost?: MoneyOutputModel | null;
  /** @format double */
  quantity?: number;
  measurementUnit?: string | null;
  /** @format double */
  vatRate?: number | null;
  user?: ModelWithName | null;
  invoiceGuid?: string | null;
  /** @format double */
  invoiceQuantity?: number | null;
  invoiceRowGuid?: string | null;
  invoiceRowDescription?: string | null;
  /** @format date-time */
  createdDateTime?: string;
  createdBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  /** @format date-time */
  lastUpdatedDateTime?: string | null;
  lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  guid?: string | null;
  /** @format date-time */
  travelStartTime?: string | null;
  /** @format date-time */
  travelEndTime?: string | null;
}

export interface ReimbursedWorkHourOutputModel {
  /** @format date-time */
  createdDateTime?: string;
  createdBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  /** @format date-time */
  lastUpdatedDateTime?: string | null;
  lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  guid?: string | null;
  user?: ModelWithName | null;
  overtime?: ModelWithName | null;
  /** @format date */
  eventDate?: string;
  /** @format double */
  quantity?: number | null;
  /** @format date-time */
  startTime?: string | null;
  /** @format date-time */
  endTime?: string | null;
  phase?: ModelWithName | null;
  project?: ReimbursedWorkHourProjectSubModel | null;
  customer?: ModelWithName | null;
  workType?: ModelWithName | null;
  invoiceGuid?: string | null;
  invoiceRowGuid?: string | null;
  description?: string | null;
  unitPrice?: MoneyOutputModel | null;
  unitCost?: MoneyOutputModel | null;
  invoiceRowDescription?: string | null;
  /** @format double */
  invoiceQuantity?: number | null;
  invoiceRowComment?: string | null;
  /** @format double */
  plannedInvoiceQuantity?: number | null;
}

export interface ReimbursedWorkHourProjectSubModel {
  name?: string | null;
  guid?: string | null;
  /** @format int64 */
  number?: number | null;
}

export interface TeamProductivityOutputModel {
  guid?: string | null;
  projectGuid?: string | null;
  user?: UserWithNameAndPhotoFileModel | null;
  /** @format double */
  workHours?: number;
  workHoursValue?: MoneyOutputModel | null;
  workHoursCost?: MoneyOutputModel | null;
  /** @format double */
  workHoursBillable?: number;
  calculatedShareOfBilling?: MoneyOutputModel | null;
  /** @format double */
  calculatedShareOfBillingPercentage?: number;
  adjustedShareOfBilling?: MoneyOutputModel | null;
  /** @format double */
  adjustedShareOfBillingPercentage?: number | null;
  /** @format double */
  billableHoursPercentage?: number | null;
}

export interface TravelExpenseTypeOutputModel {
  guid?: string | null;
  /** @minLength 1 */
  name: string;
  /** @format date-time */
  createdDateTime?: string;
  createdBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  /** @format date-time */
  lastUpdatedDateTime?: string | null;
  lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  isMileage?: boolean;
  isDailyAllowance?: boolean;
  expenseClass?: ExpensesClass | null;
  /** @format double */
  purchaseVatRate?: number | null;
  includeTime?: boolean;
  costAccount?: TravelExpenseCostAccountSubModel | null;
  unitCost?: MoneyOutputModel | null;
  code?: string | null;
  /** @format double */
  vatRate?: number | null;
  measurementUnit?: string | null;
  /** @default true */
  isActive?: boolean | null;
  productCategory?: ModelWithName | null;
  salesAccount?: ProductSalesAccountSubModel2 | null;
}

export interface TravelExpenseCostAccountSubModel {
  name?: string | null;
  guid?: string | null;
  number?: string | null;
}

export interface ProductSalesAccountSubModel2 {
  name?: string | null;
  guid?: string | null;
  number?: string | null;
}

export interface TravelExpenseTypeInputModel {
  /** @minLength 1 */
  name: string;
  expenseClass: ExpensesClass;
  /** @format double */
  purchaseVatRate?: number | null;
  /** @default true */
  includeTime?: boolean;
  costAccount?: SimpleInputModel | null;
  unitCost: MoneyInputModelWithNullableAmount;
  code?: string | null;
  /** @format double */
  vatRate?: number | null;
  measurementUnit?: string | null;
  /** @default true */
  isActive?: boolean | null;
  productCategory?: SimpleInputModel | null;
  salesAccount?: SimpleInputModel | null;
}

export interface TravelPriceOutputModel {
  prices?: PriceModelBase[] | null;
  product?: TravelPriceProductSubModel | null;
}

export interface PriceModelBase {
  guid?: string | null;
  price?: MoneyOutputModel | null;
  pricelistVersionGuid?: string | null;
  projectGuid?: string | null;
  priceSource?: PriceSource;
}

export interface TravelPriceProductSubModel {
  guid?: string | null;
  name?: string | null;
  productCode?: string | null;
  expenseClass?: ExpensesClass | null;
}

export interface UserInputModel {
  /**
   * @minLength 1
   * @maxLength 100
   */
  firstName: string;
  /**
   * @minLength 1
   * @maxLength 100
   */
  lastName: string;
  salutation?: SalutationType | null;
  /** @default true */
  isActive?: boolean;
  email?: string | null;
  phone?: string | null;
  socialSecurityNumber?: string | null;
  businessUnit?: SimpleInputRequiredModel | null;
  workType?: SimpleInputRequiredModel | null;
  superiorUser?: SimpleInputRequiredModel | null;
  satisfaction?: SatisfactionLevelType | null;
  code?: string | null;
  address?: string | null;
  postalCode?: string | null;
  city?: string | null;
  country?: SimpleInputModel | null;
  countryRegion?: SimpleInputModel | null;
  culture?: SimpleInputModel | null;
  language?: SimpleInputModel | null;
  timezone?: TimezoneModel | null;
  /** @format date-time */
  birthDate?: string | null;
  bankAccountNumber?: string | null;
  notes?: string | null;
  defaultActivityType?: SimpleInputModel | null;
  userType?: LicenseUserType | null;
  permissionProfile?: SimpleInputModel | null;
  /** @default true */
  createDefaultWorkContract?: boolean;
  notificationSettings?: UserNotificationSettingsModel | null;
}

export interface WorktypeForProjectOutputModel {
  worktype?: WorkTypeOutputModel | null;
  hourPrice?: MoneyOutputModel | null;
}

export interface WorkTypeInputModel {
  /** @minLength 1 */
  name: string;
  /** @default true */
  isActive?: boolean;
  isProductive?: boolean;
  isDefault?: boolean;
  salesAccount?: SimpleInputModel | null;
  code?: string | null;
  hourCost?: MoneyInputModelWithNullableAmount | null;
}

export interface VismaFinancialsCompanyModel {
  /** @format int64 */
  id?: number | null;
  name?: string | null;
}

export interface OvertimePriceModel {
  guid?: string | null;
  overtime: ModelBaseWithRequiredGuid;
  /** @format double */
  pricingMultiplier?: number | null;
  pricelistVersionGuid?: string | null;
  projectGuid?: string | null;
  priceSource?: PriceSource;
}

export interface OvertimeModel {
  guid?: string | null;
  /** @minLength 1 */
  name: string;
  /** @format date-time */
  createdDateTime?: string;
  createdBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  /** @format date-time */
  lastUpdatedDateTime?: string | null;
  lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  /** @format double */
  percentage?: number;
  /** @default true */
  isActive?: boolean;
  /** @minLength 1 */
  code: string;
  includeInFlextime?: boolean | null;
  /** @default false */
  multipliesUnitCost?: boolean;
}

export interface PhaseMemberModel {
  /** @minLength 1 */
  phaseGuid: string;
  user?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  /** @default true */
  isActive?: boolean;
  /** @format double */
  workHoursIncludingChildPhases?: number;
  /** @format double */
  workHours?: number;
  currentWorkcontractTitle?: string | null;
  /** @format date-time */
  createdDateTime?: string;
  createdBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  /** @format date-time */
  lastUpdatedDateTime?: string | null;
  lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  guid?: string | null;
}

export interface PhaseMembersFromBusinessUnitUsersModel {
  /** @minLength 1 */
  phaseGuid: string;
  /** @minLength 1 */
  businessUnitGuid: string;
}

export enum ResourceAllocationAction {
  None = 'None',
  Delete = 'Delete',
  Transfer = 'Transfer'
}

export interface ProjectBillingCustomerModel2 {
  project: ModelBaseWithRequiredGuid;
  billingCustomer: BillingCustomerModel;
  isDefault?: boolean;
  canBeDeleted?: boolean;
  /** @format date-time */
  createdDateTime?: string;
  createdBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  /** @format date-time */
  lastUpdatedDateTime?: string | null;
  lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  guid?: string | null;
  billingAddress?: BillingAddressModel | null;
  billingContact?: ModelWithName | null;
}

export interface BillingAddressModel {
  guid?: string | null;
  addressline?: string | null;
  postalCode?: string | null;
  city?: string | null;
  country?: string | null;
}

export interface ProjectTaskStatusModel {
  guid?: string | null;
  /** @minLength 1 */
  name: string;
  /** @format date-time */
  createdDateTime?: string;
  createdBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  /** @format date-time */
  lastUpdatedDateTime?: string | null;
  lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  /** @default true */
  isActive?: boolean;
  isDefault?: boolean;
  isDone?: boolean;
  /** @format int32 */
  sortOrder?: number;
}

export interface TimeEntryModel {
  /** @format date-time */
  createdDateTime?: string;
  createdBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  /** @format date-time */
  lastUpdatedDateTime?: string | null;
  lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  guid?: string | null;
  user: ModelBaseWithRequiredGuid;
  customer?: ModelWithName | null;
  project?: TimeEntryProject | null;
  phase: ModelBaseWithRequiredGuid;
  timeEntryType: ModelBaseWithRequiredGuid;
  description?: string | null;
  /** @format date */
  eventDate: string;
  /** @format double */
  quantity?: number | null;
  /** @format date-time */
  startTime?: string | null;
  /** @format date-time */
  endTime?: string | null;
}

export interface TimeEntryProject {
  name?: string | null;
  guid?: string | null;
  /** @format int64 */
  number?: number | null;
}

export interface TimeEntryTypeModel {
  guid?: string | null;
  /** @minLength 1 */
  name: string;
  /** @format date-time */
  createdDateTime?: string;
  createdBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  /** @format date-time */
  lastUpdatedDateTime?: string | null;
  lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  /** @default true */
  isActive?: boolean;
  identifier?: string | null;
}

export interface TravelReimbursementStatusModel {
  guid?: string | null;
  /** @minLength 1 */
  name: string;
  /** @format date-time */
  createdDateTime?: string;
  createdBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  /** @format date-time */
  lastUpdatedDateTime?: string | null;
  lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  /** @format int32 */
  sortOrder?: number;
  /** @default false */
  isLocked?: boolean;
  /** @default false */
  isApproved?: boolean;
  /** @default true */
  isActive?: boolean;
  isDefault?: boolean;
}

export interface ResourceAllocationOutputModel {
  /** @format date-time */
  createdDateTime?: string;
  createdBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  /** @format date-time */
  lastUpdatedDateTime?: string | null;
  lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  guid?: string | null;
  /** @format date */
  startDate?: string | null;
  /** @format date */
  endDate?: string | null;
  /** @format date */
  derivedStartDate?: string | null;
  /** @format date */
  derivedEndDate?: string | null;
  /** @format int32 */
  allocationPercentage?: number | null;
  /** @format double */
  allocationHours?: number | null;
  /** @format double */
  calculatedAllocationHours?: number | null;
  projectMemberGuid?: string | null;
  customer?: ModelWithName | null;
  user?: UserWithFirstNameLastNameAndPhotoFileModel | null;
  project?: ResourceAllocationProjectSubModel | null;
  phase?: ResourceAllocationPhaseSubModel | null;
}

export interface ResourceAllocationProjectSubModel {
  name?: string | null;
  guid?: string | null;
  isInternal?: boolean;
  /** @format int64 */
  number?: number | null;
}

export interface ResourceAllocationPhaseSubModel {
  name?: string | null;
  guid?: string | null;
  /** @format date */
  startDate?: string | null;
  /** @format date */
  endDate?: string | null;
}

export interface ResourceAllocationCriteriaModel {
  /** @format date-time */
  startDate?: string | null;
  /** @format date-time */
  endDate?: string | null;
  userGuids?: string[] | null;
  userLicenseTypes?: LicenseUserType[] | null;
  phaseGuids?: string[] | null;
  projectGuids?: string[] | null;
  projectBusinessUnitGuids?: string[] | null;
  userBusinessUnitGuids?: string[] | null;
  projectManagerUserGuids?: string[] | null;
  userTagGuids?: string[] | null;
  includeAbsences?: boolean;
  /** @default true */
  useSalesProbability?: boolean;
  projectStatusTypeGuids?: string[] | null;
  projectTagGuids?: string[] | null;
  superiorUserGuids?: string[] | null;
  salesStatusTypeGuids?: string[] | null;
  salesProgresses?: (SalesProgress | null)[];
  resourceAllocationGuids?: string[] | null;
}

export enum SalesProgress {
  None = 'None',
  InProgress = 'InProgress',
  Won = 'Won',
  Lost = 'Lost'
}

export interface ResourceAllocationInputModel {
  /** @format date */
  startDate?: string | null;
  /** @format date */
  endDate?: string | null;
  /** @format int32 */
  allocationPercentage?: number | null;
  /** @format double */
  allocationHours?: number | null;
  user: SimpleInputRequiredModel;
  project: SimpleInputRequiredModel;
  phase?: SimpleInputModel | null;
}

import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, HeadersDefaults, ResponseType } from 'axios';

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams extends Omit<AxiosRequestConfig, 'data' | 'params' | 'url' | 'responseType'> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}

export type RequestParams = Omit<FullRequestParams, 'body' | 'method' | 'query' | 'path'>;

export interface ApiConfig<SecurityDataType = unknown> extends Omit<AxiosRequestConfig, 'data' | 'cancelToken'> {
  securityWorker?: (securityData: SecurityDataType | null) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = 'application/json',
  FormData = 'multipart/form-data',
  UrlEncoded = 'application/x-www-form-urlencoded',
  Text = 'text/plain'
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>['securityWorker'];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({ securityWorker, secure, format, ...axiosConfig }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({ ...axiosConfig, baseURL: axiosConfig.baseURL || 'https://api.severa.visma.com/rest-api' });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected mergeRequestParams(params1: AxiosRequestConfig, params2?: AxiosRequestConfig): AxiosRequestConfig {
    const method = params1.method || (params2 && params2.method);

    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...((method && this.instance.defaults.headers[method.toLowerCase() as keyof HeadersDefaults]) || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {})
      }
    };
  }

  protected stringifyFormItem(formItem: unknown) {
    if (typeof formItem === 'object' && formItem !== null) {
      return JSON.stringify(formItem);
    } else {
      return `${formItem}`;
    }
  }

  protected createFormData(input: Record<string, unknown>): FormData {
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      const propertyContent: any[] = property instanceof Array ? property : [property];

      for (const formItem of propertyContent) {
        const isFileType = formItem instanceof Blob || formItem instanceof File;
        formData.append(key, isFileType ? formItem : this.stringifyFormItem(formItem));
      }

      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<AxiosResponse<T>> => {
    const secureParams =
      ((typeof secure === 'boolean' ? secure : this.secure) && this.securityWorker && (await this.securityWorker(this.securityData))) || {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = format || this.format || undefined;

    if (type === ContentType.FormData && body && body !== null && typeof body === 'object') {
      body = this.createFormData(body as Record<string, unknown>);
    }

    if (type === ContentType.Text && body && body !== null && typeof body !== 'string') {
      body = JSON.stringify(body);
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData ? { 'Content-Type': type } : {})
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path
    });
  };
}

/**
 * @title Severa Public Rest API Documentation
 * @version 1.0
 * @baseUrl https://api.severa.visma.com/rest-api
 *
 * The API uses OAuth2 client creadentials flow. To get the Bearer token for the resources you have to request the token by using route '/token', found from Authentication controller.
 *
 * You need to provide a Client_Id, client_secret and scope needed. The client_id and client_secret can be obtained from Severa UI Rest Api settings section.
 *
 * After authentication, calls need to use the Bearer token as authorization header (Bearer {accessToken}). The calls also need to have Client_Id header.
 *
 * The access token can be refreshed from '/refreshtoken' route using the refresh token which was obtained from the authentication.
 *
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  v1 = {
    /**
     * No description
     *
     * @tags CustomersRead
     * @name AddressesGetAddresses
     * @summary Get the addresses.
     * @request GET:/v1/addresses
     * @secure
     * @response `200` `(AddressModel)[]`
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    addressesGetAddresses: (
      query?: {
        /**
         * Optional: first row to fetch. Default 0 = first row.
         * @format int32
         * @default 0
         */
        firstRow?: number | null;
        /**
         * Optional: How many rows to fetch, Default 20, maximum 100.
         * @format int32
         */
        rowCount?: number | null;
        /**
         * Optional: Calculate total number of rows.
         * @default false
         */
        calculateRowCount?: boolean;
        /**
         * Optional: Get addresses that have been added or changed after this date time (greater or equal).
         * @format date-time
         */
        changedSince?: string | null;
      },
      params: RequestParams = {}
    ) =>
      this.request<AddressModel[], void | ExceptionModel>({
        path: `/v1/addresses`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags CustomersRead
     * @name AddressesGetAddress
     * @summary Get address by ID.
     * @request GET:/v1/addresses/{guid}
     * @secure
     * @response `200` `AddressModel` Address.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    addressesGetAddress: (guid: string, params: RequestParams = {}) =>
      this.request<AddressModel, void | ExceptionModel>({
        path: `/v1/addresses/${guid}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description Returns: No Content (204) if succeeded. Not found (404) if address can't be found.
     *
     * @tags CustomersDelete
     * @name AddressesDeleteAddress
     * @summary Delete an address.
     * @request DELETE:/v1/addresses/{guid}
     * @secure
     * @response `204` `void`
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    addressesDeleteAddress: (guid: string, params: RequestParams = {}) =>
      this.request<void, void | ExceptionModel>({
        path: `/v1/addresses/${guid}`,
        method: 'DELETE',
        secure: true,
        ...params
      }),

    /**
     * No description
     *
     * @tags CustomersWrite
     * @name AddressesPatchAddress
     * @summary Update (Patch) an address or a part of it.
     * @request PATCH:/v1/addresses/{guid}
     * @secure
     * @response `200` `(AddressModel)[]` List of updated addresses.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    addressesPatchAddress: (guid: string, data: PatchOperation[] | null, params: RequestParams = {}) =>
      this.request<AddressModel[], void | ExceptionModel>({
        path: `/v1/addresses/${guid}`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags CustomersRead
     * @name AddressesGetCustomerAddresses
     * @summary Get customer's addresses
     * @request GET:/v1/customers/{customerGuid}/addresses
     * @secure
     * @response `200` `(AddressModel)[]` Addresses for the customer
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    addressesGetCustomerAddresses: (
      customerGuid: string,
      query?: {
        /**
         * Optional: first row to fetch. Default 0 = first row.
         * @format int32
         * @default 0
         */
        firstRow?: number | null;
        /**
         * Optional: How many rows to fetch, Default 20, maximum 100.
         * @format int32
         */
        rowCount?: number | null;
        /**
         * Optional: Calculate total number of rows.
         * @default false
         */
        calculateRowCount?: boolean;
      },
      params: RequestParams = {}
    ) =>
      this.request<AddressModel[], void | ExceptionModel>({
        path: `/v1/customers/${customerGuid}/addresses`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags CustomersWrite
     * @name AddressesPostCustomerAddress
     * @summary Insert an address.
     * @request POST:/v1/customers/{customerGuid}/addresses
     * @secure
     * @response `201` `AddressModel` Created address.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    addressesPostCustomerAddress: (customerGuid: string, data: AddressModel | null, params: RequestParams = {}) =>
      this.request<AddressModel, void | ExceptionModel>({
        path: `/v1/customers/${customerGuid}/addresses`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags CustomersRead
     * @name AddressesGetContactAddress
     * @summary Get contact person's address
     * @request GET:/v1/contactpersons/{contactGuid}/addresses
     * @secure
     * @response `200` `(AddressModel)[]`
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    addressesGetContactAddress: (contactGuid: string, params: RequestParams = {}) =>
      this.request<AddressModel[], void | ExceptionModel>({
        path: `/v1/contactpersons/${contactGuid}/addresses`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsRead
     * @name BusinessUnitsGetBusinessUnits
     * @summary Get all the BusinessUnits
     * @request GET:/v1/businessunits
     * @secure
     * @response `200` `(BusinessUnitModel)[]` All the BusinessUnits
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    businessUnitsGetBusinessUnits: (
      query?: {
        /** If not given, return all BusinessUnits, if given as true return only active BusinessUnits, if given as false returns only inactive BusinessUnits */
        active?: boolean | null;
        /** Optional: ID of the company to which the business units belong. */
        companyGuid?: string | null;
        /** Optional: ID of the country in which the company of business units is located. */
        companyCountryGuid?: string | null;
        /**
         * Optional: first row to fetch. Default 0 = first row.
         * @format int32
         * @default 0
         */
        firstRow?: number | null;
        /**
         * Optional: How many rows to fetch, Default 20, maximum 100.
         * @format int32
         */
        rowCount?: number | null;
        /**
         * Optional: Text to search from business unit name.
         * @default ""
         */
        textToSearch?: string | null;
        /**
         * Optional: Get business units that have been added or changed after this date time (greater or equal).
         * @format date-time
         */
        changedSince?: string | null;
        /**
         * Optional: Code of the business unit.
         * @default ""
         */
        code?: string | null;
        /**
         * Optional: Name of the business unit.
         * @default ""
         */
        name?: string | null;
      },
      params: RequestParams = {}
    ) =>
      this.request<BusinessUnitModel[], void | ExceptionModel>({
        path: `/v1/businessunits`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsWrite
     * @name BusinessUnitsPostBusinessUnit
     * @summary Insert a business unit.
     * @request POST:/v1/businessunits
     * @secure
     * @response `201` `BusinessUnitModel` Created business unit.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    businessUnitsPostBusinessUnit: (data: BusinessUnitModel | null, params: RequestParams = {}) =>
      this.request<BusinessUnitModel, void | ExceptionModel>({
        path: `/v1/businessunits`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsRead
     * @name BusinessUnitsGetBusinessUnit
     * @summary Get businessUnit by ID.
     * @request GET:/v1/businessunits/{guid}
     * @secure
     * @response `200` `BusinessUnitModel` BusinessUnit.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    businessUnitsGetBusinessUnit: (guid: string, params: RequestParams = {}) =>
      this.request<BusinessUnitModel, void | ExceptionModel>({
        path: `/v1/businessunits/${guid}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsWrite
     * @name BusinessUnitsPatchBusinessUnit
     * @summary Update (Patch) an businessUnit or a part of it.
     * @request PATCH:/v1/businessunits/{guid}
     * @secure
     * @response `200` `(BusinessUnitModel)[]` List of updated business units.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    businessUnitsPatchBusinessUnit: (guid: string, data: PatchOperation[] | null, params: RequestParams = {}) =>
      this.request<BusinessUnitModel[], void | ExceptionModel>({
        path: `/v1/businessunits/${guid}`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * @description Returns: No Content (204) if succeeded. Not found (404) if business unit can't be found.
     *
     * @tags SettingsDelete
     * @name BusinessUnitsDeleteBusinessUnit
     * @summary Delete a business unit.
     * @request DELETE:/v1/businessunits/{guid}
     * @secure
     * @response `204` `void`
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    businessUnitsDeleteBusinessUnit: (
      guid: string,
      query?: {
        /** Optional: ID of the business unit to which to move usages of this business unit. Default null. The new business unit must be in the same Organization company, otherwise the usages won't be moved. If business unit is in use and usages aren't moved the deletion might fail. */
        moveUsagesToGuid?: string | null;
      },
      params: RequestParams = {}
    ) =>
      this.request<void, void | ExceptionModel>({
        path: `/v1/businessunits/${guid}`,
        method: 'DELETE',
        query: query,
        secure: true,
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsRead
     * @name CommunicationTypesGetCommunicationTypes
     * @summary Get all communication types.
     * @request GET:/v1/communicationtypes
     * @secure
     * @response `200` `(CommunicationTypeModel)[]` Projects.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    communicationTypesGetCommunicationTypes: (
      query?: {
        /** Filter the communication types. If true/false, only the active/inactive ones are returned. If null, all the communication types are returned. */
        active?: boolean | null;
        /**
         * Optional: first row to fetch. Default 0 = first row.
         * @format int32
         * @default 0
         */
        firstRow?: number | null;
        /**
         * Optional: How many rows to fetch, Default 20, maximum 100.
         * @format int32
         */
        rowCount?: number | null;
        /**
         * Optional: Text to search from communication type name.
         * @default ""
         */
        textToSearch?: string | null;
        /**
         * Optional: Calculate total number of rows.
         * @default false
         */
        calculateRowCount?: boolean;
        /** Optional: A list of Key-Value pairs, containing names of fields and directions by which the results should be sorted. Any sortable field name (submodel fields not supported) in the model can be used, while value can be "Desc" or "Asc". Example: "?sortings[0].key=name&sortings[0].value=Asc". */
        sortings?: KeyValuePairOfStringAndSortDirection[] | null;
      },
      params: RequestParams = {}
    ) =>
      this.request<CommunicationTypeModel[], void | ExceptionModel>({
        path: `/v1/communicationtypes`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsWrite
     * @name CommunicationTypesPostCommunicationType
     * @summary Insert a communication type.
     * @request POST:/v1/communicationtypes
     * @secure
     * @response `201` `CommunicationTypeModel` Created communication type.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    communicationTypesPostCommunicationType: (data: CommunicationTypeModel | null, params: RequestParams = {}) =>
      this.request<CommunicationTypeModel, void | ExceptionModel>({
        path: `/v1/communicationtypes`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsRead
     * @name CommunicationTypesGetCommunicationType
     * @summary Get communication type by ID.
     * @request GET:/v1/communicationtypes/{guid}
     * @secure
     * @response `200` `CommunicationTypeModel`
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    communicationTypesGetCommunicationType: (guid: string, params: RequestParams = {}) =>
      this.request<CommunicationTypeModel, void | ExceptionModel>({
        path: `/v1/communicationtypes/${guid}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsWrite
     * @name CommunicationTypesPatchCommunicationType
     * @summary Update (Patch) a communication type or a part of it.
     * @request PATCH:/v1/communicationtypes/{guid}
     * @secure
     * @response `200` `(CommunicationTypeModel)[]` Updated communication model.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    communicationTypesPatchCommunicationType: (guid: string, data: PatchOperation[] | null, params: RequestParams = {}) =>
      this.request<CommunicationTypeModel[], void | ExceptionModel>({
        path: `/v1/communicationtypes/${guid}`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * @description Returns: No Content (204) if succeeded.
     *
     * @tags SettingsDelete
     * @name CommunicationTypesDeleteCommunicationType
     * @summary Deletes a communication type.
     * @request DELETE:/v1/communicationtypes/{guid}
     * @secure
     * @response `204` `void`
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    communicationTypesDeleteCommunicationType: (guid: string, params: RequestParams = {}) =>
      this.request<void, void | ExceptionModel>({
        path: `/v1/communicationtypes/${guid}`,
        method: 'DELETE',
        secure: true,
        ...params
      }),

    /**
     * No description
     *
     * @tags CustomersRead
     * @name ContactCommunicationsGetCommunications
     * @summary Get all contact communications.
     * @request GET:/v1/contactcommunications
     * @secure
     * @response `200` `(ContactCommunicationModel)[]` All the contact communications.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    contactCommunicationsGetCommunications: (
      query?: {
        /** If not given, return all contact communications, if given as true return only active contact communications, if given as false returns only inactive contact communications. */
        active?: boolean | null;
        /**
         * Optional: first row to fetch. Default 0 = first row.
         * @format int32
         * @default 0
         */
        firstRow?: number | null;
        /**
         * Optional: How many rows to fetch, Default 20, maximum 100.
         * @format int32
         */
        rowCount?: number | null;
        /**
         * Optional: Text to search from contact communication value.
         * @default ""
         */
        textToSearch?: string | null;
        /**
         * Optional: Get contact communications that have been added or changed after this date time (greater or equal).
         * @format date-time
         */
        changedSince?: string | null;
      },
      params: RequestParams = {}
    ) =>
      this.request<ContactCommunicationModel[], void | ExceptionModel>({
        path: `/v1/contactcommunications`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags CustomersWrite
     * @name ContactCommunicationsPostContactCommunication
     * @summary Insert a communication for a contact.
     * @request POST:/v1/contactcommunications
     * @secure
     * @response `201` `ContactCommunicationModel` Inserted contact communication.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    contactCommunicationsPostContactCommunication: (data: ContactCommunicationModel | null, params: RequestParams = {}) =>
      this.request<ContactCommunicationModel, void | ExceptionModel>({
        path: `/v1/contactcommunications`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags CustomersRead
     * @name ContactCommunicationsGetCommunication
     * @summary Get contact communication by ID.
     * @request GET:/v1/contactcommunications/{guid}
     * @secure
     * @response `200` `ContactCommunicationModel` Contact communication.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    contactCommunicationsGetCommunication: (guid: string, params: RequestParams = {}) =>
      this.request<ContactCommunicationModel, void | ExceptionModel>({
        path: `/v1/contactcommunications/${guid}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags CustomersWrite
     * @name ContactCommunicationsPatchContactCommunication
     * @summary Update (Patch) a contact's communication or a part of it.
     * @request PATCH:/v1/contactcommunications/{guid}
     * @secure
     * @response `200` `ContactCommunicationModel` Updated contact communication model.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    contactCommunicationsPatchContactCommunication: (guid: string, data: PatchOperation[] | null, params: RequestParams = {}) =>
      this.request<ContactCommunicationModel, void | ExceptionModel>({
        path: `/v1/contactcommunications/${guid}`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * @description Returns: No Content (204) if succeeded.
     *
     * @tags CustomersDelete
     * @name ContactCommunicationsDeleteContactCommunication
     * @summary Deletes contact's communication.
     * @request DELETE:/v1/contactcommunications/{guid}
     * @secure
     * @response `204` `void`
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    contactCommunicationsDeleteContactCommunication: (guid: string, params: RequestParams = {}) =>
      this.request<void, void | ExceptionModel>({
        path: `/v1/contactcommunications/${guid}`,
        method: 'DELETE',
        secure: true,
        ...params
      }),

    /**
     * No description
     *
     * @tags CustomersRead
     * @name ContactCommunicationsGetCommunications2
     * @summary Get all communications for a contact.
     * @request GET:/v1/contacts/{contactGuid}/contactcommunications
     * @secure
     * @response `200` `(ContactCommunicationModel)[]` All the contact communications.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    contactCommunicationsGetCommunications2: (
      contactGuid: string,
      query?: {
        /** If not given, return all contact communications, if given as true return only active contact communications, if given as false returns only inactive contact communications. */
        active?: boolean | null;
      },
      params: RequestParams = {}
    ) =>
      this.request<ContactCommunicationModel[], void | ExceptionModel>({
        path: `/v1/contacts/${contactGuid}/contactcommunications`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsRead
     * @name ContactRolesGetContactRoles
     * @summary Get contact roles.
     * @request GET:/v1/contactroles
     * @secure
     * @response `200` `(ContactRoleModel)[]` All the contact roles.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    contactRolesGetContactRoles: (
      query?: {
        /** If not given, return all contact roles, if given as true return only active contact roles, if given as false returns only inactive contact roles. */
        active?: boolean | null;
        /**
         * Optional: first row to fetch. Default 0 = first row.
         * @format int32
         * @default 0
         */
        firstRow?: number | null;
        /**
         * Optional: How many rows to fetch, Default 20, maximum 100.
         * @format int32
         */
        rowCount?: number | null;
        /**
         * Optional: Text to search from contact role name.
         * @default ""
         */
        textToSearch?: string | null;
        /**
         * Optional: Calculate total number of rows.
         * @default false
         */
        calculateRowCount?: boolean;
      },
      params: RequestParams = {}
    ) =>
      this.request<ContactRoleModel[], void | ExceptionModel>({
        path: `/v1/contactroles`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsWrite
     * @name ContactRolesPostContactRole
     * @summary Insert a contact role.
     * @request POST:/v1/contactroles
     * @secure
     * @response `201` `ContactRoleModel` Created contact role.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    contactRolesPostContactRole: (data: ContactRoleModel | null, params: RequestParams = {}) =>
      this.request<ContactRoleModel, void | ExceptionModel>({
        path: `/v1/contactroles`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsRead
     * @name ContactRolesGetContactRole
     * @summary Get contact role by ID.
     * @request GET:/v1/contactroles/{guid}
     * @secure
     * @response `200` `ContactRoleModel` ContactRoleModel.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    contactRolesGetContactRole: (guid: string, params: RequestParams = {}) =>
      this.request<ContactRoleModel, void | ExceptionModel>({
        path: `/v1/contactroles/${guid}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsWrite
     * @name ContactRolesPatchContactRole
     * @summary Update (Patch) a contact role or a part of it.
     * @request PATCH:/v1/contactroles/{guid}
     * @secure
     * @response `200` `(ContactRoleModel)[]` list of updated contact role.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    contactRolesPatchContactRole: (guid: string, data: PatchOperation[] | null, params: RequestParams = {}) =>
      this.request<ContactRoleModel[], void | ExceptionModel>({
        path: `/v1/contactroles/${guid}`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * @description Returns: No Content (204) if succeeded. Not found (404) if contact role can't be found.
     *
     * @tags SettingsDelete
     * @name ContactRolesDeleteContactRole
     * @summary Delete a contact role.
     * @request DELETE:/v1/contactroles/{guid}
     * @secure
     * @response `204` `void`
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    contactRolesDeleteContactRole: (
      guid: string,
      query?: {
        /** Optional: ID of the contact role to which to move usages of this contact role. Default null. If contact role is in use and usages aren't moved the deletion might fail. */
        moveUsagesToGuid?: string | null;
      },
      params: RequestParams = {}
    ) =>
      this.request<void, void | ExceptionModel>({
        path: `/v1/contactroles/${guid}`,
        method: 'DELETE',
        query: query,
        secure: true,
        ...params
      }),

    /**
     * No description
     *
     * @tags CustomersRead
     * @name ContactsGetCustomerContacts
     * @summary Get the contact persons for a customer.
     * @request GET:/v1/customers/{customerGuid}/contactpersons
     * @secure
     * @response `200` `(ContactModel)[]` List of contacts for a customer.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    contactsGetCustomerContacts: (
      customerGuid: string,
      query?: {
        /** If not given, return all Contact persons, if given as true return only active Contact persons, if given as false returns only inactive Contact persons. */
        active?: boolean | null;
        /**
         * Optional: first row to fetch. Default 0 = first row.
         * @format int32
         * @default 0
         */
        firstRow?: number | null;
        /**
         * Optional: How many rows to fetch, Default 20, maximum 100.
         * @format int32
         */
        rowCount?: number | null;
        /**
         * Optional: Text to search from contact person's name or communication method (i.e. phone number or email address).
         * @default ""
         */
        textToSearch?: string | null;
      },
      params: RequestParams = {}
    ) =>
      this.request<ContactModel[], void | ExceptionModel>({
        path: `/v1/customers/${customerGuid}/contactpersons`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags CustomersRead
     * @name ContactsGetContacts
     * @summary Get all the contact persons.
     * @request GET:/v1/contactpersons
     * @secure
     * @response `200` `(ContactModel)[]` List of contacts for a customer.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    contactsGetContacts: (
      query?: {
        /** If not given, return all Contact persons, if given as true return only active Contact persons, if given as false returns only inactive Contact persons. */
        active?: boolean | null;
        /**
         * Optional: first row to fetch. Default 0 = first row.
         * @format int32
         * @default 0
         */
        firstRow?: number | null;
        /**
         * Optional: How many rows to fetch, Default 20, maximum 100.
         * @format int32
         */
        rowCount?: number | null;
        /**
         * Optional: Text to search from contact person's name or communication method (i.e. phone number or email address).
         * @default ""
         */
        textToSearch?: string | null;
        /** Optional: Search criterias. */
        searchCriterias?: KeyValuePairOfStringAndObject[] | null;
        /** Optional: A list of Key-Value pairs, containing names of fields and directions by which the results should be sorted. Any sortable field name (submodel fields not supported) in the model can be used, while value can be "Desc" or "Asc". Example: "?sortings[0].key=FirstName&sortings[0].value=Desc &sortings[1].key=LastName&sortings[1].value=Asc". */
        sortings?: KeyValuePairOfStringAndSortDirection[] | null;
        /**
         * Optional: Get contact persons that have been added or changed after this date time (greater or equal).
         * @format date-time
         */
        changedSince?: string | null;
      },
      params: RequestParams = {}
    ) =>
      this.request<ContactModel[], void | ExceptionModel>({
        path: `/v1/contactpersons`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags CustomersWrite
     * @name ContactsPostContact
     * @summary Insert a contact.
     * @request POST:/v1/contactpersons
     * @secure
     * @response `201` `ContactModel` Inserted contact.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    contactsPostContact: (data: ContactModel | null, params: RequestParams = {}) =>
      this.request<ContactModel, void | ExceptionModel>({
        path: `/v1/contactpersons`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags CustomersRead
     * @name ContactsGetContact
     * @summary Get contact by ID.
     * @request GET:/v1/contactpersons/{guid}
     * @secure
     * @response `200` `ContactModel` Contact.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    contactsGetContact: (guid: string, params: RequestParams = {}) =>
      this.request<ContactModel, void | ExceptionModel>({
        path: `/v1/contactpersons/${guid}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags CustomersWrite
     * @name ContactsPatchContact
     * @summary Update (Patch) an contact or a part of it.
     * @request PATCH:/v1/contactpersons/{guid}
     * @secure
     * @response `200` `(ContactModel)[]` List of updated contact persons.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    contactsPatchContact: (guid: string, data: PatchOperation[] | null, params: RequestParams = {}) =>
      this.request<ContactModel[], void | ExceptionModel>({
        path: `/v1/contactpersons/${guid}`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * @description Returns: No Content (204) if succeeded.
     *
     * @tags CustomersDelete
     * @name ContactsDeleteContact
     * @summary Deletes a contact.
     * @request DELETE:/v1/contactpersons/{guid}
     * @secure
     * @response `204` `void`
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    contactsDeleteContact: (guid: string, params: RequestParams = {}) =>
      this.request<void, void | ExceptionModel>({
        path: `/v1/contactpersons/${guid}`,
        method: 'DELETE',
        secure: true,
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsRead
     * @name CostAccountsGetCostAccounts
     * @summary Get cost accounts.
     * @request GET:/v1/costaccounts
     * @secure
     * @response `200` `(CostAccountModel)[]` All the cost accounts.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    costAccountsGetCostAccounts: (
      query?: {
        /** If not given, return all cost accounts, if given as true return only active cost accounts, if given as false returns only inactive cost accounts. */
        active?: boolean | null;
        /**
         * Optional: first row to fetch. Default 0 = first row.
         * @format int32
         */
        firstRow?: number | null;
        /**
         * Optional: How many rows to fetch, Default 20, maximum 100.
         * @format int32
         */
        rowCount?: number | null;
        /**
         * Optional: Text to search from cost account name or identifier.
         * @default ""
         */
        textToSearch?: string | null;
        /**
         * Optional: Calculate total number of rows.
         * @default false
         */
        calculateRowCount?: boolean;
        /** Optional: A list of Key-Value pairs, containing names of fields and directions by which the results should be sorted. Any sortable field name (submodel fields not supported) in the model can be used, while value can be "Desc" or "Asc". Example: "?sortings[0].key=Name&sortings[0].value=Desc &sortings[1].key=Identifier&sortings[1].value=Asc". */
        sortings?: KeyValuePairOfStringAndSortDirection[] | null;
      },
      params: RequestParams = {}
    ) =>
      this.request<CostAccountModel[], void | ExceptionModel>({
        path: `/v1/costaccounts`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsWrite
     * @name CostAccountsPostCostAccount
     * @summary Insert a cost account.
     * @request POST:/v1/costaccounts
     * @secure
     * @response `201` `CostAccountModel` Created cost account.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    costAccountsPostCostAccount: (data: CostAccountModel | null, params: RequestParams = {}) =>
      this.request<CostAccountModel, void | ExceptionModel>({
        path: `/v1/costaccounts`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsRead
     * @name CostAccountsGetCostAccount
     * @summary Get cost account by Guid.
     * @request GET:/v1/costaccounts/{guid}
     * @secure
     * @response `200` `CostAccountModel` CostAccountModel.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    costAccountsGetCostAccount: (guid: string, params: RequestParams = {}) =>
      this.request<CostAccountModel, void | ExceptionModel>({
        path: `/v1/costaccounts/${guid}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsWrite
     * @name CostAccountsPatchCostAccount
     * @summary Update (Patch) a cost account or a part of it.
     * @request PATCH:/v1/costaccounts/{guid}
     * @secure
     * @response `200` `(CostAccountModel)[]` list of updated cost account.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    costAccountsPatchCostAccount: (guid: string, data: PatchOperation[] | null, params: RequestParams = {}) =>
      this.request<CostAccountModel[], void | ExceptionModel>({
        path: `/v1/costaccounts/${guid}`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * @description Returns: No Content (204) if succeeded. Not found (404) if cost account can't be found.
     *
     * @tags SettingsDelete
     * @name CostAccountsDeleteCostAccount
     * @summary Delete a cost account.
     * @request DELETE:/v1/costaccounts/{guid}
     * @secure
     * @response `204` `void`
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    costAccountsDeleteCostAccount: (guid: string, params: RequestParams = {}) =>
      this.request<void, void | ExceptionModel>({
        path: `/v1/costaccounts/${guid}`,
        method: 'DELETE',
        secure: true,
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsRead
     * @name CostCentersGetCostCenters
     * @summary Get cost centers.
     * @request GET:/v1/costcenters
     * @secure
     * @response `200` `(CostCenterModel)[]` All the cost centers.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    costCentersGetCostCenters: (
      query?: {
        /** If not given, return all cost centers, if given as true return only active cost centers, if given as false returns only inactive cost centers. */
        active?: boolean | null;
        /**
         * Optional: first row to fetch. Default 0 = first row.
         * @format int32
         */
        firstRow?: number | null;
        /**
         * Optional: How many rows to fetch, Default 20, maximum 100.
         * @format int32
         */
        rowCount?: number | null;
        /**
         * Optional: Text to search from cost center name or identifier.
         * @default ""
         */
        textToSearch?: string | null;
        /**
         * Optional: Get cost centers that have been added or changed after this date time (greater or equal).
         * @format date-time
         */
        changedSince?: string | null;
        /**
         * Optional: Calculate total number of rows.
         * @default false
         */
        calculateRowCount?: boolean;
        /** Optional: A list of Key-Value pairs, containing names of fields and directions by which the results should be sorted. Any sortable field name (submodel fields not supported) in the model can be used, while value can be "Desc" or "Asc". */
        sortings?: KeyValuePairOfStringAndSortDirection[] | null;
        /**
         * Optional: Identifier of the cost center.
         * @default ""
         */
        identifier?: string | null;
        /**
         * Optional: Name of the cost center.
         * @default ""
         */
        name?: string | null;
      },
      params: RequestParams = {}
    ) =>
      this.request<CostCenterModel[], void | ExceptionModel>({
        path: `/v1/costcenters`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsWrite
     * @name CostCentersPostCostCenter
     * @summary Insert a cost center.
     * @request POST:/v1/costcenters
     * @secure
     * @response `201` `CostCenterModel` Created cost center.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    costCentersPostCostCenter: (data: CostCenterModel | null, params: RequestParams = {}) =>
      this.request<CostCenterModel, void | ExceptionModel>({
        path: `/v1/costcenters`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsRead
     * @name CostCentersGetCostCenter
     * @summary Get cost center by ID.
     * @request GET:/v1/costcenters/{guid}
     * @secure
     * @response `200` `CostCenterModel` CostCenterModel.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    costCentersGetCostCenter: (guid: string, params: RequestParams = {}) =>
      this.request<CostCenterModel, void | ExceptionModel>({
        path: `/v1/costcenters/${guid}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsWrite
     * @name CostCentersPatchCostCenter
     * @summary Update (Patch) a cost center or a part of it.
     * @request PATCH:/v1/costcenters/{guid}
     * @secure
     * @response `200` `(CostCenterModel)[]` list of updated cost center.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    costCentersPatchCostCenter: (guid: string, data: PatchOperation[] | null, params: RequestParams = {}) =>
      this.request<CostCenterModel[], void | ExceptionModel>({
        path: `/v1/costcenters/${guid}`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * @description Returns: No Content (204) if succeeded. Not found (404) if cost center can't be found.
     *
     * @tags SettingsDelete
     * @name CostCentersDeleteCostCenter
     * @summary Delete a cost center.
     * @request DELETE:/v1/costcenters/{guid}
     * @secure
     * @response `204` `void`
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    costCentersDeleteCostCenter: (guid: string, params: RequestParams = {}) =>
      this.request<void, void | ExceptionModel>({
        path: `/v1/costcenters/${guid}`,
        method: 'DELETE',
        secure: true,
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsRead
     * @name CountriesGetCountries
     * @summary Get all the Countries.
     * @request GET:/v1/localization/countries
     * @secure
     * @response `200` `(CountryModel)[]` All the Countries.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    countriesGetCountries: (params: RequestParams = {}) =>
      this.request<CountryModel[], void | ExceptionModel>({
        path: `/v1/localization/countries`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsRead
     * @name CountriesGetCountry
     * @summary Get country by ID.
     * @request GET:/v1/localization/countries/{guid}
     * @secure
     * @response `200` `CountryModel` Country.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    countriesGetCountry: (guid: string, params: RequestParams = {}) =>
      this.request<CountryModel, void | ExceptionModel>({
        path: `/v1/localization/countries/${guid}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsRead
     * @name CountriesGetCountryRegions
     * @summary Get all the Country regions for a country.
     * @request GET:/v1/localization/countries/{countryGuid}/countryregions
     * @secure
     * @response `200` `(CountryRegionModel)[]` All the CountryRegions of the country.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    countriesGetCountryRegions: (countryGuid: string, params: RequestParams = {}) =>
      this.request<CountryRegionModel[], void | ExceptionModel>({
        path: `/v1/localization/countries/${countryGuid}/countryregions`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsRead
     * @name CountriesGetCountryRegion
     * @summary Get country region by ID.
     * @request GET:/v1/localization/countryregions/{guid}
     * @secure
     * @response `200` `CountryRegionModel` CountryRegion.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    countriesGetCountryRegion: (guid: string, params: RequestParams = {}) =>
      this.request<CountryRegionModel, void | ExceptionModel>({
        path: `/v1/localization/countryregions/${guid}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags CustomersRead
     * @name CustomerMarketSegmentsGetCustomerMarketSegments
     * @summary Get the Market Segments for a customer.
     * @request GET:/v1/customers/{customerGuid}/customermarketsegments
     * @secure
     * @response `200` `(CustomerMarketSegmentModel)[]` List of Customer Market Segments.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    customerMarketSegmentsGetCustomerMarketSegments: (
      customerGuid: string,
      query?: {
        /**
         * Optional: first row to fetch. Default 0 = first row.
         * @format int32
         * @default 0
         */
        firstRow?: number | null;
        /**
         * Optional: How many rows to fetch, Default 20, maximum 100.
         * @format int32
         */
        rowCount?: number | null;
        /**
         * Optional: Return also the markets segments that are not in use for the customer.
         * @default false
         */
        includeMarketSegmentsFromRegistry?: boolean;
      },
      params: RequestParams = {}
    ) =>
      this.request<CustomerMarketSegmentModel[], void | ExceptionModel>({
        path: `/v1/customers/${customerGuid}/customermarketsegments`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags CustomersRead
     * @name CustomerMarketSegmentsGetAllCustomerMarketSegments
     * @summary Get all Customer Market Segments.
     * @request GET:/v1/customermarketsegments
     * @secure
     * @response `200` `(CustomerMarketSegmentModel)[]` List of Customer Market Segments.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    customerMarketSegmentsGetAllCustomerMarketSegments: (
      query?: {
        /**
         * Optional: first row to fetch. Default 0 = first row.
         * @format int32
         * @default 0
         */
        firstRow?: number | null;
        /**
         * Optional: How many rows to fetch, Default 20, maximum 100.
         * @format int32
         */
        rowCount?: number | null;
        /**
         * Optional: Text to search from customer market segment name.
         * @default ""
         */
        textToSearch?: string | null;
        /** Optional: Fetches all children of a parent based on parent market segment guid. */
        parentMarketSegmentGuid?: string | null;
        /**
         * Optional: Returns only child segments when false. Has no effect if parentMarketSegmentGuid parameter is defined. Default = true.
         * @default true
         */
        includeParentLevel?: boolean;
      },
      params: RequestParams = {}
    ) =>
      this.request<CustomerMarketSegmentModel[], void | ExceptionModel>({
        path: `/v1/customermarketsegments`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags CustomersWrite
     * @name CustomerMarketSegmentsPostCustomerMarketSegment
     * @summary Add a market segment for customer.
     * @request POST:/v1/customermarketsegments
     * @secure
     * @response `201` `CustomerMarketSegmentModel` Created customer market segment.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    customerMarketSegmentsPostCustomerMarketSegment: (data: CustomerMarketSegmentModel | null, params: RequestParams = {}) =>
      this.request<CustomerMarketSegmentModel, void | ExceptionModel>({
        path: `/v1/customermarketsegments`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags CustomersRead
     * @name CustomerMarketSegmentsGetCustomerMarketSegment
     * @summary Get the customer market segment.
     * @request GET:/v1/customermarketsegments/{guid}
     * @secure
     * @response `200` `CustomerMarketSegmentModel` List of Customer Market Segments.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    customerMarketSegmentsGetCustomerMarketSegment: (guid: string, params: RequestParams = {}) =>
      this.request<CustomerMarketSegmentModel, void | ExceptionModel>({
        path: `/v1/customermarketsegments/${guid}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description Returns: No Content (204) if succeeded. Not found (404) if customer market segment can't be found.
     *
     * @tags CustomersDelete
     * @name CustomerMarketSegmentsDeleteCustomerMarketSegment
     * @summary Deletes a customer market segment.
     * @request DELETE:/v1/customermarketsegments/{guid}
     * @secure
     * @response `204` `void`
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    customerMarketSegmentsDeleteCustomerMarketSegment: (guid: string, params: RequestParams = {}) =>
      this.request<void, void | ExceptionModel>({
        path: `/v1/customermarketsegments/${guid}`,
        method: 'DELETE',
        secure: true,
        ...params
      }),

    /**
     * @description Returns binary data, which contains content with type given in Content-Type header.
     *
     * @tags FilesRead
     * @name FileDataGetDataForFile
     * @summary Get file data by ID.
     * @request GET:/v1/files/{guid}/filedata
     * @secure
     * @response `200` `File` Get file data by ID
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    fileDataGetDataForFile: (guid: string, params: RequestParams = {}) =>
      this.request<File, void | ExceptionModel>({
        path: `/v1/files/${guid}/filedata`,
        method: 'GET',
        secure: true,
        ...params
      }),

    /**
     * No description
     *
     * @tags FilesRead
     * @name FilesGetFile
     * @summary Get file by ID.
     * @request GET:/v1/files/{guid}
     * @secure
     * @response `200` `FileModel` File.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    filesGetFile: (
      guid: string,
      query?: {
        /**
         * Is data included in response as base64 string.
         * @default false
         */
        includeDataInResponse?: boolean;
      },
      params: RequestParams = {}
    ) =>
      this.request<FileModel, void | ExceptionModel>({
        path: `/v1/files/${guid}`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags FilesRead
     * @name FilesGetProjectFiles
     * @summary Get all files of a project by its id.
     * @request GET:/v1/projects/{projectGuid}/files
     * @secure
     * @response `200` `(ProjectFileModel)[]` File.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    filesGetProjectFiles: (
      projectGuid: string,
      query?: {
        /**
         * Optional: first row to fetch. Default 0 = first row.
         * @format int32
         */
        firstRow?: number | null;
        /**
         * Optional: How many rows to fetch.
         * @format int32
         */
        rowCount?: number | null;
        /** Optional: A list of Key-Value pairs, containing names of fields and directions by which the results should be sorted. Any sortable field name (submodel fields not supported) in the model can be used, while value can be "Desc" or "Asc". Example: "?sortings[0].key=Name&sortings[0].value=Desc&sortings[1].key=Number&sortings[1].value=Asc". */
        sortings?: KeyValuePairOfStringAndSortDirection[] | null;
      },
      params: RequestParams = {}
    ) =>
      this.request<ProjectFileModel[], void | ExceptionModel>({
        path: `/v1/projects/${projectGuid}/files`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description Supports multiple files and meta data. Expects MIME multipart content, with optional FileModel JSON content before binary file data. POST /projects/{projectGuid}/files HTTP/1.1 Authorization: Bearer your_auth_token Content-Type: multipart/related; boundary=randomboundarystring Content-Length: number_of_bytes_in_entire_request_body --randomboundarystring Content-Type: application/json {"Description" : "SomeFileDescription", "Name" : "somefile.ext"} --randomboundarystring Content-Type: 'image/jpeg' or 'link' Binary data --randomboundarystring--.
     *
     * @tags FilesWrite
     * @name FilesPostProjectFile
     * @summary Insert a project file.
     * @request POST:/v1/projects/{projectGuid}/files
     * @secure
     * @response `201` `(ProjectFileModel)[]` Created file metadata.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    filesPostProjectFile: (
      projectGuid: string,
      query?: {
        /**
         * Is data included in response as base64 string.
         * @default false
         */
        includeDataInResponse?: boolean;
      },
      params: RequestParams = {}
    ) =>
      this.request<ProjectFileModel[], void | ExceptionModel>({
        path: `/v1/projects/${projectGuid}/files`,
        method: 'POST',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags FilesRead
     * @name FilesGetProjectFile
     * @summary Get project file by ID.
     * @request GET:/v1/projectfiles/{guid}
     * @secure
     * @response `200` `ProjectFileModel` ProposalFile.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    filesGetProjectFile: (guid: string, params: RequestParams = {}) =>
      this.request<ProjectFileModel, void | ExceptionModel>({
        path: `/v1/projectfiles/${guid}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description Deletes both project file and file data. Returns: No Content (204) if succeeded.
     *
     * @tags FilesDelete
     * @name FilesDeleteProjectFile
     * @summary Deletes a project file.
     * @request DELETE:/v1/projectfiles/{guid}
     * @secure
     * @response `204` `void`
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    filesDeleteProjectFile: (guid: string, params: RequestParams = {}) =>
      this.request<void, void | ExceptionModel>({
        path: `/v1/projectfiles/${guid}`,
        method: 'DELETE',
        secure: true,
        ...params
      }),

    /**
     * No description
     *
     * @tags ProjectsWrite
     * @name FilesPostProjectLink
     * @summary Add a link to a project.
     * @request POST:/v1/projectlinks
     * @secure
     * @response `201` `ProjectFileModel` Created project file.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    filesPostProjectLink: (data: ProjectFileModel | null, params: RequestParams = {}) =>
      this.request<ProjectFileModel, void | ExceptionModel>({
        path: `/v1/projectlinks`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags FilesRead
     * @name FilesGetInvoiceFiles
     * @summary Get all files of a invoice by its id.
     * @request GET:/v1/invoices/{invoiceGuid}/files
     * @secure
     * @response `200` `(InvoiceFileModel)[]` InvoiceFile.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    filesGetInvoiceFiles: (
      invoiceGuid: string,
      query?: {
        /**
         * Optional: first row to fetch. Default 0 = first row.
         * @format int32
         */
        firstRow?: number | null;
        /**
         * Optional: How many rows to fetch.
         * @format int32
         */
        rowCount?: number | null;
      },
      params: RequestParams = {}
    ) =>
      this.request<InvoiceFileModel[], void | ExceptionModel>({
        path: `/v1/invoices/${invoiceGuid}/files`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags FilesRead
     * @name FilesGetInvoiceFile
     * @summary Get invoice file by ID.
     * @request GET:/v1/invoicefiles/{guid}
     * @secure
     * @response `200` `InvoiceFileModel` InvoiceFile.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    filesGetInvoiceFile: (guid: string, params: RequestParams = {}) =>
      this.request<InvoiceFileModel, void | ExceptionModel>({
        path: `/v1/invoicefiles/${guid}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags FilesRead
     * @name FilesGetUsersTravelExpensesFiles
     * @summary Get all files of all travel expenses of the user.
     * @request GET:/v1/users/{userGuid}/travelexpensesfiles
     * @secure
     * @response `200` `(ProjectTravelExpenseFileModel)[]` TravelExpenseFile.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    filesGetUsersTravelExpensesFiles: (
      userGuid: string,
      query?: {
        /**
         * Optional: first row to fetch. Default 0 = first row.
         * @format int32
         */
        firstRow?: number | null;
        /**
         * Optional: How many rows to fetch.
         * @format int32
         */
        rowCount?: number | null;
        /**
         * Optional: Start date to from which to check travel expenses.
         * @format date-time
         */
        startDate?: string | null;
        /**
         * Optional: End date to check for availability until travel expenses.
         * @format date-time
         */
        endDate?: string | null;
      },
      params: RequestParams = {}
    ) =>
      this.request<ProjectTravelExpenseFileModel[], void | ExceptionModel>({
        path: `/v1/users/${userGuid}/travelexpensesfiles`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags FilesRead
     * @name FilesGetTravelExpenseFiles
     * @summary Get all files of a travel expense by its id.
     * @request GET:/v1/projecttravelexpenses/{projectTravelExpenseGuid}/files
     * @secure
     * @response `200` `(ProjectTravelExpenseFileModel)[]` TravelExpenseFile.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    filesGetTravelExpenseFiles: (
      projectTravelExpenseGuid: string,
      query?: {
        /**
         * Optional: first row to fetch. Default 0 = first row.
         * @format int32
         */
        firstRow?: number | null;
        /**
         * Optional: How many rows to fetch.
         * @format int32
         */
        rowCount?: number | null;
      },
      params: RequestParams = {}
    ) =>
      this.request<ProjectTravelExpenseFileModel[], void | ExceptionModel>({
        path: `/v1/projecttravelexpenses/${projectTravelExpenseGuid}/files`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags FilesRead
     * @name FilesGetTravelExpenseFile
     * @summary Get travel expense file by ID.
     * @request GET:/v1/projecttravelexpensefiles/{guid}
     * @secure
     * @response `200` `ProjectTravelExpenseFileModel` InvoiceFile.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    filesGetTravelExpenseFile: (guid: string, params: RequestParams = {}) =>
      this.request<ProjectTravelExpenseFileModel, void | ExceptionModel>({
        path: `/v1/projecttravelexpensefiles/${guid}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
 * No description
 *
 * @tags UsersRead
 * @name FlextimeGetFlextime
 * @summary Get the flextime balance for a user for a specified date. Total balance is returned for the given date. Month balance is the balance for the month of the given date.
Values are returned only if the advanced time tracking add-on is active.
 * @request GET:/v1/users/{userGuid}/flextime
 * @secure
 * @response `200` `FlextimeModel` FlextimeModel.
 * @response `403` `ExceptionModel` Addon required
 * @response `404` `void` Resource not found
 * @response `default` `ExceptionModel` Default error response
 */
    flextimeGetFlextime: (
      userGuid: string,
      query?: {
        /**
         * Date for which to get the balance. Max 12 months into the future.
         * @format date-time
         */
        eventDate?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<FlextimeModel, ExceptionModel | void>({
        path: `/v1/users/${userGuid}/flextime`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsRead
     * @name FormattingCulturesGetFormattingCulture
     * @summary Get formatting culture by ID.
     * @request GET:/v1/localization/formattingcultures/{guid}
     * @secure
     * @response `200` `FormattingCultureModel` Formatting culture.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    formattingCulturesGetFormattingCulture: (guid: string, params: RequestParams = {}) =>
      this.request<FormattingCultureModel, void | ExceptionModel>({
        path: `/v1/localization/formattingcultures/${guid}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsRead
     * @name HolidaysGetHolidays
     * @summary Get holidays.
     * @request GET:/v1/holidays
     * @secure
     * @response `200` `(HolidayModel)[]` List of holidays.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    holidaysGetHolidays: (
      query?: {
        /**
         * Optional: Holidays for this year only. Default: all years.
         * @format int32
         * @min 1900
         * @max 2075
         */
        year?: number | null;
        /** Optional: Holidays for this country only. Default local. */
        countryGuid?: string | null;
      },
      params: RequestParams = {}
    ) =>
      this.request<HolidayModel[], void | ExceptionModel>({
        path: `/v1/holidays`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsRead
     * @name HolidaysGetHolidaysByTimePeriod
     * @summary Get holidays with start and end date.
     * @request GET:/v1/holidaysbytimeperiod
     * @secure
     * @response `200` `(HolidayModel)[]` List of holidays.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    holidaysGetHolidaysByTimePeriod: (
      query?: {
        /**
         * Start date for holidays.
         * @format date-time
         */
        startDate?: string;
        /**
         * End date for holidays.
         * @format date-time
         */
        endDate?: string;
        /** Optional: Holidays for this country only. Default local. */
        countryGuid?: string | null;
      },
      params: RequestParams = {}
    ) =>
      this.request<HolidayModel[], void | ExceptionModel>({
        path: `/v1/holidaysbytimeperiod`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsRead
     * @name IndustriesGetIndustries
     * @summary Get all the industries.
     * @request GET:/v1/industries
     * @secure
     * @response `200` `(IndustryModel)[]` All the industries.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    industriesGetIndustries: (
      query?: {
        /** If not given, return all industries, if given as true return only active industries, if given as false returns only inactive industries. */
        active?: boolean | null;
        /**
         * Optional: first row to fetch. Default 0 = first row.
         * @format int32
         */
        firstRow?: number | null;
        /**
         * Optional: How many rows to fetch, Default 20, maximum 100.
         * @format int32
         */
        rowCount?: number | null;
        /**
         * Optional: Text to search from industry name.
         * @default ""
         */
        textToSearch?: string | null;
        /**
         * Optional: Calculate total number of rows.
         * @default false
         */
        calculateRowCount?: boolean;
      },
      params: RequestParams = {}
    ) =>
      this.request<IndustryModel[], void | ExceptionModel>({
        path: `/v1/industries`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsWrite
     * @name IndustriesPostIndustry
     * @summary Insert an industry.
     * @request POST:/v1/industries
     * @secure
     * @response `201` `IndustryModel` Inserted industry.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    industriesPostIndustry: (data: IndustryModel | null, params: RequestParams = {}) =>
      this.request<IndustryModel, void | ExceptionModel>({
        path: `/v1/industries`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsRead
     * @name IndustriesGetIndustry
     * @summary Get industry by ID.
     * @request GET:/v1/industries/{guid}
     * @secure
     * @response `200` `IndustryModel` Industry.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    industriesGetIndustry: (guid: string, params: RequestParams = {}) =>
      this.request<IndustryModel, void | ExceptionModel>({
        path: `/v1/industries/${guid}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsWrite
     * @name IndustriesPatchIndustry
     * @summary Update (Patch) an industry or a part of it.
     * @request PATCH:/v1/industries/{guid}
     * @secure
     * @response `200` `(IndustryModel)[]` list of updated industries.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    industriesPatchIndustry: (guid: string, data: PatchOperation[] | null, params: RequestParams = {}) =>
      this.request<IndustryModel[], void | ExceptionModel>({
        path: `/v1/industries/${guid}`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * @description Returns: No Content (204) if succeeded. Not found (404) if industry can't be found.
     *
     * @tags SettingsDelete
     * @name IndustriesDeleteIndustry
     * @summary Delete an industry.
     * @request DELETE:/v1/industries/{guid}
     * @secure
     * @response `204` `void`
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    industriesDeleteIndustry: (
      guid: string,
      query?: {
        /** Optional: ID of the industry to which to move usages of this industry. Default null. If industry is in use and usages aren't moved the deletion might fail. */
        moveUsagesToGuid?: string | null;
      },
      params: RequestParams = {}
    ) =>
      this.request<void, void | ExceptionModel>({
        path: `/v1/industries/${guid}`,
        method: 'DELETE',
        query: query,
        secure: true,
        ...params
      }),

    /**
     * @description Returns: No Content (204) if succeeded. Not found (404) if cost center can't be found.
     *
     * @tags InvoicesDelete
     * @name InvoicesDeleteInvoice
     * @summary Delete an invoice.
     * @request DELETE:/v1/invoices/{guid}
     * @secure
     * @response `204` `void`
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    invoicesDeleteInvoice: (guid: string, params: RequestParams = {}) =>
      this.request<void, void | ExceptionModel>({
        path: `/v1/invoices/${guid}`,
        method: 'DELETE',
        secure: true,
        ...params
      }),

    /**
     * No description
     *
     * @tags InvoicesRead
     * @name InvoicesGetInvoice
     * @summary Get invoice by ID
     * @request GET:/v1/invoices/{guid}
     * @secure
     * @response `200` `InvoiceOutputModel`
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    invoicesGetInvoice: (guid: string, params: RequestParams = {}) =>
      this.request<InvoiceOutputModel, void | ExceptionModel>({
        path: `/v1/invoices/${guid}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags InvoicesWrite
     * @name InvoicesPatchInvoice
     * @summary Update (Patch) an invoice or a part of it
     * @request PATCH:/v1/invoices/{guid}
     * @secure
     * @response `200` `(InvoiceOutputModel)[]` list of invoices
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    invoicesPatchInvoice: (guid: string, data: PatchOperation[] | null, params: RequestParams = {}) =>
      this.request<InvoiceOutputModel[], void | ExceptionModel>({
        path: `/v1/invoices/${guid}`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags InvoicesDelete
     * @name InvoicesDeleteProjectFromInvoice
     * @summary Delete a project from invoice.
     * @request DELETE:/v1/invoices/{guid}/projects/{projectGuid}
     * @secure
     * @response `204` `void` The updated invoice.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    invoicesDeleteProjectFromInvoice: (guid: string, projectGuid: string, params: RequestParams = {}) =>
      this.request<void, void | ExceptionModel>({
        path: `/v1/invoices/${guid}/projects/${projectGuid}`,
        method: 'DELETE',
        secure: true,
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsRead
     * @name InvoiceStatusesGetInvoiceStatuses
     * @summary Get invoice statuses.
     * @request GET:/v1/invoicestatuses
     * @secure
     * @response `200` `(InvoiceStatusModel)[]`
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    invoiceStatusesGetInvoiceStatuses: (
      query?: {
        /** Filter the invoice statuses. If true/false, only the active/inactive ones are returned. If null, all the invoice statuses are returned. */
        active?: boolean | null;
        /**
         * Optional: first row to fetch. Default 0 = first row.
         * @format int32
         */
        firstRow?: number | null;
        /**
         * Optional: How many rows to fetch, Default 20, maximum 100.
         * @format int32
         */
        rowCount?: number | null;
        /**
         * Optional: Text to search from invoice status name.
         * @default ""
         */
        textToSearch?: string | null;
        /**
         * Optional: Calculate total number of rows.
         * @default false
         */
        calculateRowCount?: boolean;
        /** Optional: A list of Key-Value pairs, containing names of fields and directions by which the results should be sorted. Any sortable field name (submodel fields not supported) in the model can be used, while value can be "Desc" or "Asc". Example: "?sortings[0].key=Name&sortings[0].value=Desc". */
        sortings?: KeyValuePairOfStringAndSortDirection[] | null;
      },
      params: RequestParams = {}
    ) =>
      this.request<InvoiceStatusModel[], void | ExceptionModel>({
        path: `/v1/invoicestatuses`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsWrite
     * @name InvoiceStatusesPostInvoiceStatus
     * @summary Insert a invoice status.
     * @request POST:/v1/invoicestatuses
     * @secure
     * @response `201` `InvoiceStatusModel` Inserted invoice status.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    invoiceStatusesPostInvoiceStatus: (data: InvoiceStatusModel | null, params: RequestParams = {}) =>
      this.request<InvoiceStatusModel, void | ExceptionModel>({
        path: `/v1/invoicestatuses`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsRead
     * @name InvoiceStatusesGetInvoiceStatus
     * @summary Get Invoice status by ID.
     * @request GET:/v1/invoicestatuses/{guid}
     * @secure
     * @response `200` `InvoiceStatusModel` Invoice status.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    invoiceStatusesGetInvoiceStatus: (guid: string, params: RequestParams = {}) =>
      this.request<InvoiceStatusModel, void | ExceptionModel>({
        path: `/v1/invoicestatuses/${guid}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsWrite
     * @name InvoiceStatusesPatchInvoiceStatus
     * @summary Update (Patch) an Invoice status or a part of it.
     * @request PATCH:/v1/invoicestatuses/{guid}
     * @secure
     * @response `200` `(InvoiceStatusModel)[]` List of updated Invoice statuses.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    invoiceStatusesPatchInvoiceStatus: (guid: string, data: PatchOperation[] | null, params: RequestParams = {}) =>
      this.request<InvoiceStatusModel[], void | ExceptionModel>({
        path: `/v1/invoicestatuses/${guid}`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * @description Returns: No Content (204) if succeeded. Not found (404) if invoice status can't be found.
     *
     * @tags SettingsDelete
     * @name InvoiceStatusesDeleteInvoiceStatus
     * @summary Delete an invoice status.
     * @request DELETE:/v1/invoicestatuses/{guid}
     * @secure
     * @response `204` `void`
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    invoiceStatusesDeleteInvoiceStatus: (guid: string, params: RequestParams = {}) =>
      this.request<void, void | ExceptionModel>({
        path: `/v1/invoicestatuses/${guid}`,
        method: 'DELETE',
        secure: true,
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsRead
     * @name InvoiceTemplatesGetInvoiceTemplates
     * @summary Get invoice templates.
     * @request GET:/v1/invoicetemplates
     * @secure
     * @response `200` `(InvoiceTemplateModel)[]` InvoiceTemplatesModel.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    invoiceTemplatesGetInvoiceTemplates: (
      query?: {
        active?: boolean | null;
        /** @format int32 */
        firstRow?: number | null;
        /** @format int32 */
        rowCount?: number | null;
        /** @default "" */
        textToSearch?: string | null;
        /** @default false */
        calculateRowCount?: boolean;
        sortings?: KeyValuePairOfStringAndSortDirection[] | null;
      },
      params: RequestParams = {}
    ) =>
      this.request<InvoiceTemplateModel[], void | ExceptionModel>({
        path: `/v1/invoicetemplates`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsRead
     * @name InvoiceTemplatesGetInvoiceTemplate
     * @summary Get invoice template by ID.
     * @request GET:/v1/invoicetemplates/{guid}
     * @secure
     * @response `200` `InvoiceTemplateModel` InvoiceTemplatesModel.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    invoiceTemplatesGetInvoiceTemplate: (guid: string, params: RequestParams = {}) =>
      this.request<InvoiceTemplateModel, void | ExceptionModel>({
        path: `/v1/invoicetemplates/${guid}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags FilesRead
     * @name PdfGetInvoicePdf
     * @summary Get an invoice PDF.
     * @request GET:/v1/invoices/{guid}/pdf
     * @secure
     * @response `200` `File` Get an invoice PDF
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    pdfGetInvoicePdf: (
      guid: string,
      query?: {
        /**
         * Optional: type of invoice.
         * @default "Invoice"
         */
        invoiceType?: InvoiceType;
        /**
         * Optional: what to include in the PDF. Defaults to InvoicePdfGetOptions.All.
         * @default "All"
         */
        pdfGetOptions?: InvoicePdfGetOptions;
      },
      params: RequestParams = {}
    ) =>
      this.request<File, void | ExceptionModel>({
        path: `/v1/invoices/${guid}/pdf`,
        method: 'GET',
        query: query,
        secure: true,
        ...params
      }),

    /**
     * No description
     *
     * @tags FilesRead
     * @name PdfGetTravelReimbursementPdf
     * @summary Get a travel reimbursement PDF.
     * @request GET:/v1/travelreimbursements/{guid}/pdf
     * @secure
     * @response `200` `File` Get a travel reimbursement PDF
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    pdfGetTravelReimbursementPdf: (guid: string, params: RequestParams = {}) =>
      this.request<File, void | ExceptionModel>({
        path: `/v1/travelreimbursements/${guid}/pdf`,
        method: 'GET',
        secure: true,
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsRead
     * @name PermissionProfilesGetPermissionProfiles
     * @summary Get the Permission Profiles.
     * @request GET:/v1/permissionprofiles
     * @secure
     * @response `200` `(PermissionProfileModel)[]` List of Permission Profiles.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    permissionProfilesGetPermissionProfiles: (
      query?: {
        /** If not given, return all Permission Profiles, if given as true return only active Permission Profiles, if given as false returns only inactive Permission Profiles. */
        active?: boolean | null;
        /**
         * Optional: first row to fetch. Default 0 = first row.
         * @format int32
         */
        firstRow?: number | null;
        /**
         * Optional: How many rows to fetch, Default 20, maximum 100.
         * @format int32
         */
        rowCount?: number | null;
        /**
         * Optional: Text to search from permission profile name.
         * @default ""
         */
        textToSearch?: string | null;
        /**
         * Optional: Calculate total number of rows.
         * @default false
         */
        calculateRowCount?: boolean;
        /** Optional: A list of Key-Value pairs, containing names of fields and directions by which the results should be sorted. Any sortable field name (submodel fields not supported) in the model can be used, while value can be "Desc" or "Asc". Example: "?sortings[0].key=name&sortings[0].value=Asc&sortings[1].key=isActive&sortings[1].value=Asc". */
        sortings?: KeyValuePairOfStringAndSortDirection[] | null;
      },
      params: RequestParams = {}
    ) =>
      this.request<PermissionProfileModel[], void | ExceptionModel>({
        path: `/v1/permissionprofiles`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsRead
     * @name PermissionProfilesGetPermissionProfile
     * @summary Get Permission Profile by ID.
     * @request GET:/v1/permissionprofiles/{guid}
     * @secure
     * @response `200` `PermissionProfileModel` PermissionProfileModel.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    permissionProfilesGetPermissionProfile: (guid: string, params: RequestParams = {}) =>
      this.request<PermissionProfileModel, void | ExceptionModel>({
        path: `/v1/permissionprofiles/${guid}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsRead
     * @name PriceListsGetPriceList
     * @summary Get price list by GUID.
     * @request GET:/v1/pricelists/{guid}
     * @secure
     * @response `200` `PriceListModel`
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    priceListsGetPriceList: (guid: string, params: RequestParams = {}) =>
      this.request<PriceListModel, void | ExceptionModel>({
        path: `/v1/pricelists/${guid}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsRead
     * @name KeywordsGetKeywords
     * @summary Get all the keywords.
     * @request GET:/v1/keywords
     * @secure
     * @response `200` `(KeywordModel)[]` All the Keywords.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    keywordsGetKeywords: (
      query?: {
        /** Optional: category of the keyword. */
        category?: KeywordCategory;
        /** If not given, return all Keywords, if given as true return only active Keywords, if given as false returns only inactive Keywords. */
        active?: boolean | null;
        /**
         * Optional: first row to fetch. Default 0 = first row.
         * @format int32
         * @default 0
         */
        firstRow?: number | null;
        /**
         * Optional: How many rows to fetch, Default 20, maximum 100.
         * @format int32
         */
        rowCount?: number | null;
        /**
         * Optional: Text to search from keyword.
         * @default ""
         */
        textToSearch?: string | null;
        /**
         * Optional: Get keywords that have been added or changed after this date time (greater or equal).
         * @format date-time
         */
        changedSince?: string | null;
        /**
         * Optional: Calculate total number of rows.
         * @default false
         */
        calculateRowCount?: boolean;
        /** Optional: A list of Key-Value pairs, containing names of fields and directions by which the results should be sorted. Any sortable field name (submodel fields not supported) in the model can be used, while value can be "Desc" or "Asc". */
        sortings?: KeyValuePairOfStringAndSortDirection[] | null;
        /**
         * Optional: Keyword name.
         * @default ""
         */
        keyword?: string | null;
      },
      params: RequestParams = {}
    ) =>
      this.request<KeywordModel[], void | ExceptionModel>({
        path: `/v1/keywords`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsWrite
     * @name KeywordsPostKeyword
     * @summary Insert a keyword.
     * @request POST:/v1/keywords
     * @secure
     * @response `201` `KeywordModel` Created contact role.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    keywordsPostKeyword: (data: KeywordModel | null, params: RequestParams = {}) =>
      this.request<KeywordModel, void | ExceptionModel>({
        path: `/v1/keywords`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsRead
     * @name KeywordsGetKeyword
     * @summary Get keyword by ID.
     * @request GET:/v1/keywords/{guid}
     * @secure
     * @response `200` `KeywordModel` Keyword.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    keywordsGetKeyword: (guid: string, params: RequestParams = {}) =>
      this.request<KeywordModel, void | ExceptionModel>({
        path: `/v1/keywords/${guid}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsWrite
     * @name KeywordsPatchKeyword
     * @summary Update (Patch) a keyword or a part of it.
     * @request PATCH:/v1/keywords/{guid}
     * @secure
     * @response `200` `(KeywordModel)[]` list of updated keywords.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    keywordsPatchKeyword: (guid: string, data: PatchOperation[] | null, params: RequestParams = {}) =>
      this.request<KeywordModel[], void | ExceptionModel>({
        path: `/v1/keywords/${guid}`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * @description Returns: No Content (204) if succeeded.
     *
     * @tags SettingsDelete
     * @name KeywordsDeleteKeyword
     * @summary Delete keyword by ID. It will also be deleted from any entity it is used in (Project, etc.)
     * @request DELETE:/v1/keywords/{guid}
     * @secure
     * @response `204` `void`
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    keywordsDeleteKeyword: (
      guid: string,
      query?: {
        /** Optional: ID of the keyword to which to move usages of this keyword. Default null. If keyword is in use and usages aren't moved the deletion might fail. */
        moveUsagesToGuid?: string | null;
      },
      params: RequestParams = {}
    ) =>
      this.request<void, void | ExceptionModel>({
        path: `/v1/keywords/${guid}`,
        method: 'DELETE',
        query: query,
        secure: true,
        ...params
      }),

    /**
     * No description
     *
     * @tags CustomersRead
     * @name KeywordsGetContactKeywords
     * @summary Get all the keywords for contact.
     * @request GET:/v1/contacts/{contactGuid}/keywords
     * @secure
     * @response `200` `(KeywordModel)[]` Keywords.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    keywordsGetContactKeywords: (
      contactGuid: string,
      query?: {
        /** If not given, return all Keywords, if given as true return only active Keywords, if given as false returns only inactive Keywords. */
        active?: boolean | null;
        /** Optional: A list of Key-Value pairs, containing names of fields and directions by which the results should be sorted. Any sortable field name (submodel fields not supported) in the model can be used, while value can be "Desc" or "Asc". Example: "?sortings[0].key=Keyword&sortings[0].value=Desc". */
        sortings?: KeyValuePairOfStringAndSortDirection[] | null;
      },
      params: RequestParams = {}
    ) =>
      this.request<KeywordModel[], void | ExceptionModel>({
        path: `/v1/contacts/${contactGuid}/keywords`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags ProjectsRead
     * @name KeywordsGetProjectKeywords
     * @summary Get all the keywords for project.
     * @request GET:/v1/projects/{projectGuid}/keywords
     * @secure
     * @response `200` `(ProjectKeywordModel)[]` Keywords.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    keywordsGetProjectKeywords: (
      projectGuid: string,
      query?: {
        /** If not given, return all Keywords, if given as true return only active Keywords, if given as false returns only inactive Keywords. */
        active?: boolean | null;
        /** Optional: A list of Key-Value pairs, containing names of fields and directions by which the results should be sorted. Any sortable field name (submodel fields not supported) in the model can be used, while value can be "Desc" or "Asc". Example: "?sortings[0].key=Keyword&sortings[0].value=Desc". */
        sortings?: KeyValuePairOfStringAndSortDirection[] | null;
      },
      params: RequestParams = {}
    ) =>
      this.request<ProjectKeywordModel[], void | ExceptionModel>({
        path: `/v1/projects/${projectGuid}/keywords`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags FilesRead
     * @name KeywordsGetFileKeywords
     * @summary Get all the keywords for file.
     * @request GET:/v1/files/{fileGuid}/keywords
     * @secure
     * @response `200` `(FileKeywordModel)[]` Keywords.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    keywordsGetFileKeywords: (
      fileGuid: string,
      query?: {
        /** If not given, return all Keywords, if given as true return only active Keywords, if given as false returns only inactive Keywords. */
        active?: boolean | null;
        /** Optional: A list of Key-Value pairs, containing names of fields and directions by which the results should be sorted. Any sortable field name (submodel fields not supported) in the model can be used, while value can be "Desc" or "Asc". Example: "?sortings[0].key=Keyword&sortings[0].value=Desc". */
        sortings?: KeyValuePairOfStringAndSortDirection[] | null;
      },
      params: RequestParams = {}
    ) =>
      this.request<FileKeywordModel[], void | ExceptionModel>({
        path: `/v1/files/${fileGuid}/keywords`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags UsersRead
     * @name KeywordsGetUserKeywords
     * @summary Get all the keywords for user.
     * @request GET:/v1/users/{userGuid}/keywords
     * @secure
     * @response `200` `(UserKeywordModel)[]` Keywords.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    keywordsGetUserKeywords: (
      userGuid: string,
      query?: {
        /** If not given, return all Keywords, if given as true return only active Keywords, if given as false returns only inactive Keywords. */
        active?: boolean | null;
        /** Optional: A list of Key-Value pairs, containing names of fields and directions by which the results should be sorted. Any sortable field name (submodel fields not supported) in the model can be used, while value can be "Desc" or "Asc". Example: "?sortings[0].key=Keyword&sortings[0].value=Desc". */
        sortings?: KeyValuePairOfStringAndSortDirection[] | null;
      },
      params: RequestParams = {}
    ) =>
      this.request<UserKeywordModel[], void | ExceptionModel>({
        path: `/v1/users/${userGuid}/keywords`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsRead
     * @name KpiFormulasGetKpiFormulas
     * @summary Get saved KPI formulas.
     * @request GET:/v1/kpiformulas
     * @secure
     * @response `200` `(KpiFormulaModelBase)[]` KPI formulas.
     * @response `403` `ExceptionModel` Addon required
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    kpiFormulasGetKpiFormulas: (
      query?: {
        /** Optional: Category of KPI formula (Project, Invoice, User). */
        category?: KpiFormulaCategory;
        /** Optional: return with given active status. Default is to return all. */
        isActive?: boolean | null;
        /**
         * Optional: first row to fetch. Default 0 = first row.
         * @format int32
         * @default 0
         */
        firstRow?: number | null;
        /**
         * Optional: How many rows to fetch, Default 20, maximum 100.
         * @format int32
         */
        rowCount?: number | null;
        /**
         * Optional: Text to search.
         * @default ""
         */
        textToSearch?: string | null;
        /** Optional: A list of Key-Value pairs, containing names of fields and directions by which the results should be sorted. Any sortable field name (submodel fields not supported) in the model can be used, while value can be "Desc" or "Asc". Example: "?sortings[0].key=Name&sortings[0].value=Desc". */
        sortings?: KeyValuePairOfStringAndSortDirection[] | null;
        /**
         * Optional: Include definition to response. Default false.
         * @default false
         */
        includeDefinition?: boolean;
        /**
         * Optional: Get KPI formulas that have been added or changed after this date time (greater or equal).
         * @format date-time
         */
        changedSince?: string | null;
      },
      params: RequestParams = {}
    ) =>
      this.request<KpiFormulaModelBase[], ExceptionModel | void>({
        path: `/v1/kpiformulas`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsRead
     * @name LeadSourcesGetLeadSources
     * @summary Get the lead sources.
     * @request GET:/v1/leadsources
     * @secure
     * @response `200` `(LeadSourceModel)[]` List of lead sources.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    leadSourcesGetLeadSources: (
      query?: {
        /** If not given, return all lead sources, if given as true return only active lead sources, if given as false returns only inactive lead sources. */
        active?: boolean | null;
        /**
         * Optional: first row to fetch. Default 0 = first row.
         * @format int32
         */
        firstRow?: number | null;
        /**
         * Optional: How many rows to fetch, Default 20, maximum 100.
         * @format int32
         */
        rowCount?: number | null;
        /**
         * Optional: Text to search from lead source name.
         * @default ""
         */
        textToSearch?: string | null;
        /**
         * Optional: Calculate total number of rows.
         * @default false
         */
        calculateRowCount?: boolean;
      },
      params: RequestParams = {}
    ) =>
      this.request<LeadSourceModel[], void | ExceptionModel>({
        path: `/v1/leadsources`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsWrite
     * @name LeadSourcesPostLeadSource
     * @summary Insert a lead source.
     * @request POST:/v1/leadsources
     * @secure
     * @response `201` `LeadSourceModel` Inserted lead source.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    leadSourcesPostLeadSource: (data: LeadSourceModel | null, params: RequestParams = {}) =>
      this.request<LeadSourceModel, void | ExceptionModel>({
        path: `/v1/leadsources`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsRead
     * @name LeadSourcesGetLeadSource
     * @summary Get lead source by ID.
     * @request GET:/v1/leadsources/{guid}
     * @secure
     * @response `200` `LeadSourceModel` lead source.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    leadSourcesGetLeadSource: (guid: string, params: RequestParams = {}) =>
      this.request<LeadSourceModel, void | ExceptionModel>({
        path: `/v1/leadsources/${guid}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsWrite
     * @name LeadSourcesPatchLeadSource
     * @summary Update (Patch) an lead source or a part of it.
     * @request PATCH:/v1/leadsources/{guid}
     * @secure
     * @response `200` `(LeadSourceModel)[]` List of updated lead sources.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    leadSourcesPatchLeadSource: (guid: string, data: PatchOperation[] | null, params: RequestParams = {}) =>
      this.request<LeadSourceModel[], void | ExceptionModel>({
        path: `/v1/leadsources/${guid}`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * @description Returns: No Content (204) if succeeded. Not found (404) if lead source can't be found.
     *
     * @tags SettingsDelete
     * @name LeadSourcesDeleteLeadSource
     * @summary Delete a lead source.
     * @request DELETE:/v1/leadsources/{guid}
     * @secure
     * @response `204` `void`
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    leadSourcesDeleteLeadSource: (
      guid: string,
      query?: {
        /** Optional: ID of the lead source to which to move usages of this lead source. Default null. If industry is in use and usages aren't moved the deletion might fail. */
        moveUsagesToGuid?: string | null;
      },
      params: RequestParams = {}
    ) =>
      this.request<void, void | ExceptionModel>({
        path: `/v1/leadsources/${guid}`,
        method: 'DELETE',
        query: query,
        secure: true,
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsRead
     * @name MarketSegmentsGetMarketSegments
     * @summary Get the Market Segments.
     * @request GET:/v1/marketsegments
     * @secure
     * @response `200` `(MarketSegmentModel)[]` List of Market Segments.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    marketSegmentsGetMarketSegments: (
      query?: {
        /** If not given, return all Market Segments, if given as true return only active Market Segments, if given as false returns only inactive Market Segments. */
        active?: boolean | null;
        /**
         * Optional: first row to fetch. Default 0 = first row.
         * @format int32
         * @default 0
         */
        firstRow?: number | null;
        /**
         * Optional: How many rows to fetch, Default 20, maximum 100.
         * @format int32
         */
        rowCount?: number | null;
        /**
         * Optional: Text to search from market segment name.
         * @default ""
         */
        textToSearch?: string | null;
        /**
         * Optional: Calculate total number of rows.
         * @default false
         */
        calculateRowCount?: boolean;
        /**
         * Optional: Include also child market segments. If false returns only parent segments. Default true.
         * @default true
         */
        includeChildSegments?: boolean;
      },
      params: RequestParams = {}
    ) =>
      this.request<MarketSegmentModel[], void | ExceptionModel>({
        path: `/v1/marketsegments`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsWrite
     * @name MarketSegmentsPostMarketSegment
     * @summary Insert a market segment.
     * @request POST:/v1/marketsegments
     * @secure
     * @response `201` `MarketSegmentModel` Created market segment.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    marketSegmentsPostMarketSegment: (data: MarketSegmentModel | null, params: RequestParams = {}) =>
      this.request<MarketSegmentModel, void | ExceptionModel>({
        path: `/v1/marketsegments`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsRead
     * @name MarketSegmentsGetMarketSegment
     * @summary Get Market Segment by ID.
     * @request GET:/v1/marketsegments/{guid}
     * @secure
     * @response `200` `MarketSegmentModel` Market Segment.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    marketSegmentsGetMarketSegment: (guid: string, params: RequestParams = {}) =>
      this.request<MarketSegmentModel, void | ExceptionModel>({
        path: `/v1/marketsegments/${guid}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsWrite
     * @name MarketSegmentsPatchMarketSegment
     * @summary Update (Patch) an Market Segment or a part of it.
     * @request PATCH:/v1/marketsegments/{guid}
     * @secure
     * @response `200` `(MarketSegmentModel)[]` List of updated Market Segments.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    marketSegmentsPatchMarketSegment: (guid: string, data: PatchOperation[] | null, params: RequestParams = {}) =>
      this.request<MarketSegmentModel[], void | ExceptionModel>({
        path: `/v1/marketsegments/${guid}`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * @description Returns: No Content (204) if succeeded. Not found (404) if market segment can't be found.
     *
     * @tags SettingsDelete
     * @name MarketSegmentsDeleteMarketSegment
     * @summary Delete a market segment.
     * @request DELETE:/v1/marketsegments/{guid}
     * @secure
     * @response `204` `void`
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    marketSegmentsDeleteMarketSegment: (
      guid: string,
      query?: {
        /** Optional: ID of the lead source to which to move usages of this market segment. Default null. */
        moveUsagesToGuid?: string | null;
      },
      params: RequestParams = {}
    ) =>
      this.request<void, void | ExceptionModel>({
        path: `/v1/marketsegments/${guid}`,
        method: 'DELETE',
        query: query,
        secure: true,
        ...params
      }),

    /**
     * No description
     *
     * @tags OrganizationRead
     * @name OrganizationSettingsGetOrganizationSettings
     * @summary Get the settings of organization.
     * @request GET:/v1/organizationsettings
     * @secure
     * @response `200` `OrganizationSettingsModel` Organization.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    organizationSettingsGetOrganizationSettings: (params: RequestParams = {}) =>
      this.request<OrganizationSettingsModel, void | ExceptionModel>({
        path: `/v1/organizationsettings`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsRead
     * @name ProductCategoriesGetProductCategories
     * @summary Get product categories.
     * @request GET:/v1/productcategories
     * @secure
     * @response `200` `(ProductCategoryModel)[]` Product categories.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    productCategoriesGetProductCategories: (
      query?: {
        /** If not given, return all Product categories, if given as true return only active Product categories, if given as false returns only inactive Product categories. */
        active?: boolean | null;
        /**
         * Optional: first row to fetch. Default 0 = first row.
         * @format int32
         */
        firstRow?: number | null;
        /**
         * Optional: How many rows to fetch, Default all.
         * @format int32
         */
        rowCount?: number | null;
        /**
         * Optional: Text to search from product category name or code.
         * @default ""
         */
        textToSearch?: string | null;
        /**
         * Optional: Get product categories that have been added or changed after this date time (greater or equal).
         * @format date-time
         */
        changedSince?: string | null;
        /**
         * Optional: Calculate total number of rows.
         * @default false
         */
        calculateRowCount?: boolean;
        /** Optional: A list of Key-Value pairs, containing names of fields and directions by which the results should be sorted. Any sortable field name (submodel fields not supported) in the model can be used, while value can be "Desc" or "Asc". Example: ?sortings[0].key=Name&sortings[0].value=Desc &sortings[1].key=Code&sortings[1].value=Asc. */
        sortings?: KeyValuePairOfStringAndSortDirection[] | null;
      },
      params: RequestParams = {}
    ) =>
      this.request<ProductCategoryModel[], void | ExceptionModel>({
        path: `/v1/productcategories`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsWrite
     * @name ProductCategoriesPostProductCategory
     * @summary Insert a product category.
     * @request POST:/v1/productcategories
     * @secure
     * @response `201` `ProductCategoryModel` Created product category.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    productCategoriesPostProductCategory: (data: ProductCategoryModel | null, params: RequestParams = {}) =>
      this.request<ProductCategoryModel, void | ExceptionModel>({
        path: `/v1/productcategories`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsRead
     * @name ProductCategoriesGetProductCategory
     * @summary Get product category by ID.
     * @request GET:/v1/productcategories/{guid}
     * @secure
     * @response `200` `ProductCategoryModel` ProductCategoryModel.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    productCategoriesGetProductCategory: (guid: string, params: RequestParams = {}) =>
      this.request<ProductCategoryModel, void | ExceptionModel>({
        path: `/v1/productcategories/${guid}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsWrite
     * @name ProductCategoriesPatchProductCategory
     * @summary Update (Patch) a product category or a part of it.
     * @request PATCH:/v1/productcategories/{guid}
     * @secure
     * @response `200` `(ProductCategoryModel)[]` list of updated product category.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    productCategoriesPatchProductCategory: (guid: string, data: PatchOperation[] | null, params: RequestParams = {}) =>
      this.request<ProductCategoryModel[], void | ExceptionModel>({
        path: `/v1/productcategories/${guid}`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * @description Returns: No Content (204) if succeeded. Not found (404) if product category can't be found.
     *
     * @tags SettingsDelete
     * @name ProductCategoriesDeleteProductCategory
     * @summary Delete a product category.
     * @request DELETE:/v1/productcategories/{guid}
     * @secure
     * @response `204` `void`
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    productCategoriesDeleteProductCategory: (guid: string, params: RequestParams = {}) =>
      this.request<void, void | ExceptionModel>({
        path: `/v1/productcategories/${guid}`,
        method: 'DELETE',
        secure: true,
        ...params
      }),

    /**
     * @description This is the same as organization's list of work types, unless the project has some specific work types and "UseWorktypesFromSetting" in project model is set to false.
     *
     * @tags ProjectsRead
     * @name ProjectWorkTypesGetProjectWorktypes
     * @summary Get project work types.
     * @request GET:/v1/projects/{projectGuid}/projectworktypes
     * @secure
     * @response `200` `(ProjectWorkTypeModel)[]` A list of work types for the project.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    projectWorkTypesGetProjectWorktypes: (
      projectGuid: string,
      query?: {
        /**
         * Include work types also from registry. If false, returns only project specific work types. Default false.
         * @default false
         */
        includeWorktypesFromRegistry?: boolean;
        /**
         * Optional: first row to fetch. Default 0 = first row.
         * @format int32
         * @default 0
         */
        firstRow?: number | null;
        /**
         * Optional: How many rows to fetch, Default 20, maximum 100.
         * @format int32
         */
        rowCount?: number | null;
        /** If not given, return all work types, if given as true return only active work types, if given as false returns only inactive work types. */
        active?: boolean | null;
        /**
         * Optional: Text to search from work type name.
         * @default ""
         */
        textToSearch?: string | null;
        /**
         * Optional: Get project work types that have been added or changed after this date time (greater or equal).
         * @format date-time
         */
        changedSince?: string | null;
      },
      params: RequestParams = {}
    ) =>
      this.request<ProjectWorkTypeModel[], void | ExceptionModel>({
        path: `/v1/projects/${projectGuid}/projectworktypes`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description The "UseWorktypesFromSetting" flag for the Project should be false (the project should not use the organization list of work types).
     *
     * @tags ProjectsWrite
     * @name ProjectWorkTypesPostProjectWorktype
     * @summary Adds a work type to a project.
     * @request POST:/v1/projectworktypes
     * @secure
     * @response `201` `ProjectWorkTypeModel` Added project work type.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    projectWorkTypesPostProjectWorktype: (data: ProjectWorkTypeModel | null, params: RequestParams = {}) =>
      this.request<ProjectWorkTypeModel, void | ExceptionModel>({
        path: `/v1/projectworktypes`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * @description This currently can be used only to change the default work type in a project. The "UseWorktypesFromSetting" flag for the Project should be false (the project should not use the organization list of work types).
     *
     * @tags ProjectsWrite
     * @name ProjectWorkTypesPatchProjectWorktype
     * @summary Update (patch) a project work type.
     * @request PATCH:/v1/projectworktypes/{guid}
     * @secure
     * @response `200` `(ProjectWorkTypeModel)[]` list of updated project work types.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    projectWorkTypesPatchProjectWorktype: (guid: string, data: PatchOperation[] | null, params: RequestParams = {}) =>
      this.request<ProjectWorkTypeModel[], void | ExceptionModel>({
        path: `/v1/projectworktypes/${guid}`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * @description Returns: No Content (204) if succeeded. The "UseWorktypesFromSetting" flag for the Project should be false (the project should not use the organization list of work types).
     *
     * @tags ProjectsDelete
     * @name ProjectWorkTypesDeleteProjectWorktype
     * @summary Deletes a project work type.
     * @request DELETE:/v1/projectworktypes/{guid}
     * @secure
     * @response `204` `void`
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    projectWorkTypesDeleteProjectWorktype: (guid: string, params: RequestParams = {}) =>
      this.request<void, void | ExceptionModel>({
        path: `/v1/projectworktypes/${guid}`,
        method: 'DELETE',
        secure: true,
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsRead
     * @name SalesAccountsGetSalesAccounts
     * @summary Get sales accounts.
     * @request GET:/v1/salesaccounts
     * @secure
     * @response `200` `(SalesAccountModel)[]` All the sales accounts.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    salesAccountsGetSalesAccounts: (
      query?: {
        /** If not given, return all Sales accounts, if given as true return only active Sales accounts, if given as false returns only inactive Sales accounts. */
        active?: boolean | null;
        /**
         * Optional: first row to fetch. Default 0 = first row.
         * @format int32
         */
        firstRow?: number | null;
        /**
         * Optional: How many rows to fetch, Default 20, maximum 100.
         * @format int32
         */
        rowCount?: number | null;
        /**
         * Optional: Text to search from cost account name or identifier.
         * @default ""
         */
        textToSearch?: string | null;
        /**
         * Optional: Calculate total number of rows.
         * @default false
         */
        calculateRowCount?: boolean;
        /** Optional: A list of Key-Value pairs, containing names of fields and directions by which the results should be sorted. Any sortable field name (submodel fields not supported) in the model can be used, while value can be "Desc" or "Asc". Example: "?sortings[0].key=Name&sortings[0].value=Desc &sortings[1].key=Identifier&sortings[1].value=Asc". */
        sortings?: KeyValuePairOfStringAndSortDirection[] | null;
      },
      params: RequestParams = {}
    ) =>
      this.request<SalesAccountModel[], void | ExceptionModel>({
        path: `/v1/salesaccounts`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsWrite
     * @name SalesAccountsPostSalesAccount
     * @summary Insert a sales account.
     * @request POST:/v1/salesaccounts
     * @secure
     * @response `201` `SalesAccountModel` Created sales account.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    salesAccountsPostSalesAccount: (data: SalesAccountModel | null, params: RequestParams = {}) =>
      this.request<SalesAccountModel, void | ExceptionModel>({
        path: `/v1/salesaccounts`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsRead
     * @name SalesAccountsGetSalesAccount
     * @summary Get sales account by ID.
     * @request GET:/v1/salesaccounts/{guid}
     * @secure
     * @response `200` `SalesAccountModel` SalesAccountModel.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    salesAccountsGetSalesAccount: (guid: string, params: RequestParams = {}) =>
      this.request<SalesAccountModel, void | ExceptionModel>({
        path: `/v1/salesaccounts/${guid}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsWrite
     * @name SalesAccountsPatchSalesAccount
     * @summary Update (Patch) a sales account or a part of it.
     * @request PATCH:/v1/salesaccounts/{guid}
     * @secure
     * @response `200` `(SalesAccountModel)[]` list of updated sales account.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    salesAccountsPatchSalesAccount: (guid: string, data: PatchOperation[] | null, params: RequestParams = {}) =>
      this.request<SalesAccountModel[], void | ExceptionModel>({
        path: `/v1/salesaccounts/${guid}`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * @description Returns: No Content (204) if succeeded. Not found (404) if sales account can't be found.
     *
     * @tags SettingsDelete
     * @name SalesAccountsDeleteSalesAccount
     * @summary Delete a sales account.
     * @request DELETE:/v1/salesaccounts/{guid}
     * @secure
     * @response `204` `void`
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    salesAccountsDeleteSalesAccount: (guid: string, params: RequestParams = {}) =>
      this.request<void, void | ExceptionModel>({
        path: `/v1/salesaccounts/${guid}`,
        method: 'DELETE',
        secure: true,
        ...params
      }),

    /**
     * @description Returns: No Content (204) if succeeded. Not found (404) if sales status type can't be found.
     *
     * @tags SettingsDelete
     * @name SalesStatusTypesDeleteSalesStatusType
     * @summary Delete an sales status type.
     * @request DELETE:/v1/salesstatustypes/{guid}
     * @secure
     * @response `204` `void`
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    salesStatusTypesDeleteSalesStatusType: (
      guid: string,
      query?: {
        /** Optional: ID of the sales status type to which to move usages of this sales status type. Default null. If sales status type is in use and usages aren't moved the deletion might fail. */
        moveUsagesToGuid?: string | null;
      },
      params: RequestParams = {}
    ) =>
      this.request<void, void | ExceptionModel>({
        path: `/v1/salesstatustypes/${guid}`,
        method: 'DELETE',
        query: query,
        secure: true,
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsRead
     * @name SalesStatusTypesGetSalesStatusType
     * @summary Get sales status type by ID
     * @request GET:/v1/salesstatustypes/{guid}
     * @secure
     * @response `200` `SalesStatusTypeOutputModel` Sales status type
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    salesStatusTypesGetSalesStatusType: (guid: string, params: RequestParams = {}) =>
      this.request<SalesStatusTypeOutputModel, void | ExceptionModel>({
        path: `/v1/salesstatustypes/${guid}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsWrite
     * @name SalesStatusTypesPatchSalesStatusType
     * @summary Update (Patch) an sales status type or a part of it
     * @request PATCH:/v1/salesstatustypes/{guid}
     * @secure
     * @response `200` `(SalesStatusTypeOutputModel)[]` List of updated sales status types
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    salesStatusTypesPatchSalesStatusType: (guid: string, data: PatchOperation[] | null, params: RequestParams = {}) =>
      this.request<SalesStatusTypeOutputModel[], void | ExceptionModel>({
        path: `/v1/salesstatustypes/${guid}`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags ActivitiesRead
     * @name ActivityParticipantsGetActivityParticipants
     * @summary Get participants for an activity
     * @request GET:/v1/activities/{activityGuid}/activityparticipants
     * @secure
     * @response `200` `(ActivityParticipantModel)[]` ActivityParticipants for an activity
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    activityParticipantsGetActivityParticipants: (activityGuid: string, params: RequestParams = {}) =>
      this.request<ActivityParticipantModel[], void | ExceptionModel>({
        path: `/v1/activities/${activityGuid}/activityparticipants`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags ActivitiesRead
     * @name ActivityParticipantsGetActivityParticipant
     * @summary Get activity participant
     * @request GET:/v1/activityparticipants/{guid}
     * @secure
     * @response `200` `ActivityParticipantModel` ActivityParticipant
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    activityParticipantsGetActivityParticipant: (guid: string, params: RequestParams = {}) =>
      this.request<ActivityParticipantModel, void | ExceptionModel>({
        path: `/v1/activityparticipants/${guid}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description Only IsConfirmed property can be updated.
     *
     * @tags ActivitiesWrite
     * @name ActivityParticipantsPatchActivityParticipants
     * @summary Update (Patch) a activity participant or a part of it
     * @request PATCH:/v1/activityparticipants/{guid}
     * @secure
     * @response `200` `(ActivityParticipantModel)[]` list of updated activity participants
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    activityParticipantsPatchActivityParticipants: (guid: string, data: PatchOperation[] | null, params: RequestParams = {}) =>
      this.request<ActivityParticipantModel[], void | ExceptionModel>({
        path: `/v1/activityparticipants/${guid}`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags ActivitiesWrite
     * @name ActivityParticipantsPostActivityParticipant
     * @summary Adds an activity participant
     * @request POST:/v1/activityparticipants
     * @secure
     * @response `201` `ActivityParticipantModel` Added participant
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    activityParticipantsPostActivityParticipant: (data: ActivityParticipantModel | null, params: RequestParams = {}) =>
      this.request<ActivityParticipantModel, void | ExceptionModel>({
        path: `/v1/activityparticipants`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * @description Returns: No Content (204) if succeeded. Not found (404) if participant can't be found.
     *
     * @tags ActivitiesDelete
     * @name ActivityParticipantsDeleteActivityParticipant
     * @summary Delete activity participant.
     * @request DELETE:/v1/activities/{activityGuid}/activityparticipants/{activityParticipantGuid}
     * @secure
     * @response `204` `void`
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    activityParticipantsDeleteActivityParticipant: (activityGuid: string, activityParticipantGuid: string, params: RequestParams = {}) =>
      this.request<void, void | ExceptionModel>({
        path: `/v1/activities/${activityGuid}/activityparticipants/${activityParticipantGuid}`,
        method: 'DELETE',
        secure: true,
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsRead
     * @name GuidsConvertGuid
     * @summary Convert a GUID format from legacy (SOAP) to new (REST).
     * @request GET:/v1/guids/convert/{guid}
     * @secure
     * @response `200` `GuidConversionModel` Conversion model
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    guidsConvertGuid: (guid: string, params: RequestParams = {}) =>
      this.request<GuidConversionModel, void | ExceptionModel>({
        path: `/v1/guids/convert/${guid}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsRead
     * @name GuidsConvertGuids
     * @summary Convert a batch of GUIDs format from legacy (SOAP) to new (REST).
     * @request POST:/v1/guids/convert
     * @secure
     * @response `200` `(GuidConversionModel)[]` List of conversion models
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    guidsConvertGuids: (data: string[] | null, params: RequestParams = {}) =>
      this.request<GuidConversionModel[], void | ExceptionModel>({
        path: `/v1/guids/convert`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsRead
     * @name CountriesGetCountryByCode2
     * @summary Get a country by ISO Alpha-2 code
     * @request GET:/v1/localization/countries/{code2}
     * @secure
     * @response `200` `(CountryModel)[]` Country
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    countriesGetCountryByCode2: (code2: string, params: RequestParams = {}) =>
      this.request<CountryModel[], void | ExceptionModel>({
        path: `/v1/localization/countries/${code2}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsRead
     * @name CountriesGetCountryByCode3
     * @summary Get a country by ISO Alpha-3 code
     * @request GET:/v1/localization/countries/{code3}
     * @secure
     * @response `200` `(CountryModel)[]` Country
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    countriesGetCountryByCode3: (code3: string, params: RequestParams = {}) =>
      this.request<CountryModel[], void | ExceptionModel>({
        path: `/v1/localization/countries/${code3}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsRead
     * @name CountriesGetCountryByName
     * @summary Get a country by name
     * @request GET:/v1/localization/countries/{countryName}
     * @secure
     * @response `200` `(CountryModel)[]` Country
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    countriesGetCountryByName: (countryName: string, params: RequestParams = {}) =>
      this.request<CountryModel[], void | ExceptionModel>({
        path: `/v1/localization/countries/${countryName}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags CustomersRead
     * @name CustomerCountrySettingsGetCustomerCountrySettings
     * @summary Get all the country settings for a customer.
     * @request GET:/v1/customers/{customerGuid}/customercountrysettings
     * @secure
     * @response `200` `(CustomerCountrySettingsOutputModel)[]` All the Currencies.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    customerCountrySettingsGetCustomerCountrySettings: (customerGuid: string, params: RequestParams = {}) =>
      this.request<CustomerCountrySettingsOutputModel[], void | ExceptionModel>({
        path: `/v1/customers/${customerGuid}/customercountrysettings`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags CustomersWrite
     * @name CustomerCountrySettingsPostCustomerCountrySettings
     * @summary Insert a customer country setting.
     * @request POST:/v1/customercountrysettings
     * @secure
     * @response `201` `CustomerCountrySettingsOutputModel` Inserted customer country setting.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    customerCountrySettingsPostCustomerCountrySettings: (data: CustomerCountrySettingsInputModel | null, params: RequestParams = {}) =>
      this.request<CustomerCountrySettingsOutputModel, void | ExceptionModel>({
        path: `/v1/customercountrysettings`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags CustomersWrite
     * @name CustomerCountrySettingsPatchCustomerCountrySettings
     * @summary Update (Patch) a customer country setting.
     * @request PATCH:/v1/customercountrysettings/{guid}
     * @secure
     * @response `200` `(CustomerCountrySettingsOutputModel)[]` List of updated customer country settings.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    customerCountrySettingsPatchCustomerCountrySettings: (guid: string, data: PatchOperation[] | null, params: RequestParams = {}) =>
      this.request<CustomerCountrySettingsOutputModel[], void | ExceptionModel>({
        path: `/v1/customercountrysettings/${guid}`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * @description Returns: No Content (204) if succeeded. Not found (404) if customer country setting can't be found.
     *
     * @tags CustomersDelete
     * @name CustomerCountrySettingsDeleteCustomerCountrySetting
     * @summary Deletes a customer country setting.
     * @request DELETE:/v1/customercountrysettings/{guid}
     * @secure
     * @response `204` `void`
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    customerCountrySettingsDeleteCustomerCountrySetting: (guid: string, params: RequestParams = {}) =>
      this.request<void, void | ExceptionModel>({
        path: `/v1/customercountrysettings/${guid}`,
        method: 'DELETE',
        secure: true,
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsRead
     * @name CustomerCustomPropertySelectionItemsGetCustomerCustomPropertySelectionItems
     * @summary Get the customer custom properties.
     * @request GET:/v1/customers/customproperties/{customPropertyGuid}/customercustompropertyselectionitems
     * @secure
     * @response `200` `(CustomerCustomPropertySelectionItemOutputModel)[]`
     * @response `403` `ExceptionModel` Addon required
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    customerCustomPropertySelectionItemsGetCustomerCustomPropertySelectionItems: (
      customPropertyGuid: string,
      query?: {
        /**
         * Optional: How many rows to fetch, Default 20, maximum 100.
         * @format int32
         */
        rowCount?: number | null;
        /** Optional: Get only active or inactive selection items. */
        isActive?: boolean | null;
        /** Optional: page token to fetch the next page. */
        pageToken?: string | null;
        /**
         * Optional: Get custom property selection items that have been added or changed after this date time (greater or equal).
         * @format date-time
         */
        changedSince?: string | null;
      },
      params: RequestParams = {}
    ) =>
      this.request<CustomerCustomPropertySelectionItemOutputModel[], ExceptionModel | void>({
        path: `/v1/customers/customproperties/${customPropertyGuid}/customercustompropertyselectionitems`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsRead
     * @name CustomerCustomPropertySelectionItemsGetCustomerCustomPropertySelectionItem
     * @summary Get customer custom property selection item by ID.
     * @request GET:/v1/customers/customproperties/customercustompropertyselectionitems/{guid}
     * @secure
     * @response `200` `CustomerCustomPropertySelectionItemOutputModel`
     * @response `403` `ExceptionModel` Addon required
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    customerCustomPropertySelectionItemsGetCustomerCustomPropertySelectionItem: (guid: string, params: RequestParams = {}) =>
      this.request<CustomerCustomPropertySelectionItemOutputModel, ExceptionModel | void>({
        path: `/v1/customers/customproperties/customercustompropertyselectionitems/${guid}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsWrite
     * @name CustomerCustomPropertySelectionItemsPatchCustomerCustomPropertySelectionItem
     * @summary Update (Patch) a customer custom property selection item or a part of it.
     * @request PATCH:/v1/customers/customproperties/customercustompropertyselectionitems/{guid}
     * @secure
     * @response `200` `(CustomerCustomPropertySelectionItemOutputModel)[]` List of updated customer custom properties.
     * @response `403` `ExceptionModel` Addon required
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    customerCustomPropertySelectionItemsPatchCustomerCustomPropertySelectionItem: (
      guid: string,
      data: PatchOperation[] | null,
      params: RequestParams = {}
    ) =>
      this.request<CustomerCustomPropertySelectionItemOutputModel[], ExceptionModel | void>({
        path: `/v1/customers/customproperties/customercustompropertyselectionitems/${guid}`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * @description Returns: No Content (204) if succeeded.
     *
     * @tags SettingsDelete
     * @name CustomerCustomPropertySelectionItemsDeleteCustomerCustomPropertySelectionItem
     * @summary Deletes a customer custom property selection item.
     * @request DELETE:/v1/customers/customproperties/customercustompropertyselectionitems/{guid}
     * @secure
     * @response `204` `void`
     * @response `403` `ExceptionModel` Addon required
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    customerCustomPropertySelectionItemsDeleteCustomerCustomPropertySelectionItem: (guid: string, params: RequestParams = {}) =>
      this.request<void, ExceptionModel | void>({
        path: `/v1/customers/customproperties/customercustompropertyselectionitems/${guid}`,
        method: 'DELETE',
        secure: true,
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsWrite
     * @name CustomerCustomPropertySelectionItemsPostCustomerCustomPropertySelectionItem
     * @summary Insert a customer custom property selection item.
     * @request POST:/v1/customers/customproperties/customercustompropertyselectionitems
     * @secure
     * @response `201` `CustomerCustomPropertySelectionItemOutputModel` Created customer custom property.
     * @response `403` `ExceptionModel` Addon required
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    customerCustomPropertySelectionItemsPostCustomerCustomPropertySelectionItem: (
      data: CustomerCustomPropertySelectionItemInputModel | null,
      params: RequestParams = {}
    ) =>
      this.request<CustomerCustomPropertySelectionItemOutputModel, ExceptionModel | void>({
        path: `/v1/customers/customproperties/customercustompropertyselectionitems`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags InvoicesRead
     * @name FinvoicesGetFinvoicesByInvoiceStatus
     * @request GET:/v1/invoicestatuses/{invoiceStatusGuid}/finvoices
     * @secure
     * @response `200` `File` Exports all invoices by invoice status as stream of multiple Finvoices
     * @response `403` `ExceptionModel` Addon required
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    finvoicesGetFinvoicesByInvoiceStatus: (invoiceStatusGuid: string, params: RequestParams = {}) =>
      this.request<File, ExceptionModel | void>({
        path: `/v1/invoicestatuses/${invoiceStatusGuid}/finvoices`,
        method: 'GET',
        secure: true,
        ...params
      }),

    /**
     * No description
     *
     * @tags InvoicesRead
     * @name FinvoicesGetFinvoiceByInvoiceGuid
     * @request GET:/v1/invoices/{invoiceGuid}/finvoice
     * @secure
     * @response `200` `File` Exports single invoice as Finvoice
     * @response `403` `ExceptionModel` Addon required
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    finvoicesGetFinvoiceByInvoiceGuid: (invoiceGuid: string, params: RequestParams = {}) =>
      this.request<File, ExceptionModel | void>({
        path: `/v1/invoices/${invoiceGuid}/finvoice`,
        method: 'GET',
        secure: true,
        ...params
      }),

    /**
     * No description
     *
     * @tags FeesRead
     * @name FlatRatesGetAllFlatRates
     * @summary Get all flat rates
     * @request GET:/v1/flatrates
     * @secure
     * @response `200` `(FlatRateOutputModel)[]` All the flat rates
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    flatRatesGetAllFlatRates: (
      query?: {
        /** Optional: Page token to fetch the next page. */
        pageToken?: string | null;
        /**
         * Optional: How many rows to fetch, Default 20, maximum 100.
         * @format int32
         */
        rowCount?: number | null;
        /**
         * Optional: Get flat rates that have been added or changed after this date time (greater or equal).
         * @format date-time
         */
        changedSince?: string | null;
        /** Optional: Get flat rates by invoice guid. Default all. */
        invoiceGuid?: string | null;
      },
      params: RequestParams = {}
    ) =>
      this.request<FlatRateOutputModel[], void | ExceptionModel>({
        path: `/v1/flatrates`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags FeesWrite
     * @name FlatRatesPostFlatRate
     * @summary Insert a flat rate.
     * @request POST:/v1/flatrates
     * @secure
     * @response `201` `FlatRateOutputModel` Created flat rate.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    flatRatesPostFlatRate: (data: FlatRateInputModel | null, params: RequestParams = {}) =>
      this.request<FlatRateOutputModel, void | ExceptionModel>({
        path: `/v1/flatrates`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags UsersRead
     * @name FlextimeAdjustmentsGetFlextimeAdjustments
     * @summary Get the Flextime Adjustments.
     * @request GET:/v1/users/{userGuid}/flextimeadjustments
     * @secure
     * @response `200` `(FlextimeAdjustmentOutputModel)[]` List of Flextime Adjustments.
     * @response `403` `ExceptionModel` Addon required
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    flextimeAdjustmentsGetFlextimeAdjustments: (
      userGuid: string,
      query?: {
        /** Optional: page token to fetch the next page. */
        pageToken?: string | null;
        /**
         * Optional: How many rows to fetch, Default 20, maximum 100.
         * @format int32
         */
        rowCount?: number | null;
      },
      params: RequestParams = {}
    ) =>
      this.request<FlextimeAdjustmentOutputModel[], ExceptionModel | void>({
        path: `/v1/users/${userGuid}/flextimeadjustments`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags UsersRead
     * @name FlextimeAdjustmentsGetFlextimeAdjustment
     * @summary Get Flextime Adjustment by ID.
     * @request GET:/v1/flextimeadjustments/{guid}
     * @secure
     * @response `200` `FlextimeAdjustmentOutputModel` Flextime Adjustment.
     * @response `403` `ExceptionModel` Addon required
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    flextimeAdjustmentsGetFlextimeAdjustment: (guid: string, params: RequestParams = {}) =>
      this.request<FlextimeAdjustmentOutputModel, ExceptionModel | void>({
        path: `/v1/flextimeadjustments/${guid}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags UsersWrite
     * @name FlextimeAdjustmentsPatchFlextimeAdjustment
     * @summary Update (Patch) an Flextime Adjustment or a part of it.
     * @request PATCH:/v1/flextimeadjustments/{guid}
     * @secure
     * @response `200` `(FlextimeAdjustmentOutputModel)[]` Updated Flextime Adjustment.
     * @response `403` `ExceptionModel` Addon required
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    flextimeAdjustmentsPatchFlextimeAdjustment: (guid: string, data: PatchOperation[] | null, params: RequestParams = {}) =>
      this.request<FlextimeAdjustmentOutputModel[], ExceptionModel | void>({
        path: `/v1/flextimeadjustments/${guid}`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * @description Returns: No Content (204) if succeeded. Not found (404) if flextime adjustment can't be found.
     *
     * @tags UsersWrite
     * @name FlextimeAdjustmentsDeleteFlextimeAdjustment
     * @summary Delete an flextime adjustment.
     * @request DELETE:/v1/flextimeadjustments/{guid}
     * @secure
     * @response `204` `void`
     * @response `403` `ExceptionModel` Addon required
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    flextimeAdjustmentsDeleteFlextimeAdjustment: (guid: string, params: RequestParams = {}) =>
      this.request<void, ExceptionModel | void>({
        path: `/v1/flextimeadjustments/${guid}`,
        method: 'DELETE',
        secure: true,
        ...params
      }),

    /**
     * No description
     *
     * @tags UsersWrite
     * @name FlextimeAdjustmentsPostFlextimeAdjustment
     * @summary Insert a flextime adjustment.
     * @request POST:/v1/flextimeadjustments
     * @secure
     * @response `201` `FlextimeAdjustmentOutputModel` Inserted FlextimeAdjustment.
     * @response `403` `ExceptionModel` Addon required
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    flextimeAdjustmentsPostFlextimeAdjustment: (data: FlextimeAdjustmentInputModel | null, params: RequestParams = {}) =>
      this.request<FlextimeAdjustmentOutputModel, ExceptionModel | void>({
        path: `/v1/flextimeadjustments`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsRead
     * @name FormattingCulturesGetFormattings
     * @summary Get all the Formatting Cultures
     * @request GET:/v1/localization/formattingcultures
     * @secure
     * @response `200` `(FormattingCultureModel)[]` All the Formatting Cultures
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    formattingCulturesGetFormattings: (params: RequestParams = {}) =>
      this.request<FormattingCultureModel[], void | ExceptionModel>({
        path: `/v1/localization/formattingcultures`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags UsersWrite
     * @name KeywordsLinkKeywordToUser
     * @summary Link existing keyword to user
     * @request POST:/v1/users/{userGuid}/keywords/{guid}
     * @secure
     * @response `201` `UserKeywordModel` Created user keyword link.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    keywordsLinkKeywordToUser: (userGuid: string, guid: string, params: RequestParams = {}) =>
      this.request<UserKeywordModel, void | ExceptionModel>({
        path: `/v1/users/${userGuid}/keywords/${guid}`,
        method: 'POST',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description Returns: No Content (204) if succeeded. Not found (404) if the keyword or the link can't be found.
     *
     * @tags UsersDelete
     * @name KeywordsDeleteUserKeyword
     * @summary Delete a keyword from the user
     * @request DELETE:/v1/users/{userGuid}/keywords/{guid}
     * @secure
     * @response `204` `void`
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    keywordsDeleteUserKeyword: (userGuid: string, guid: string, params: RequestParams = {}) =>
      this.request<void, void | ExceptionModel>({
        path: `/v1/users/${userGuid}/keywords/${guid}`,
        method: 'DELETE',
        secure: true,
        ...params
      }),

    /**
     * No description
     *
     * @tags ProjectsWrite
     * @name KeywordsLinkKeywordToProject
     * @summary Link existing keyword to project
     * @request POST:/v1/projects/{projectGuid}/keywords/{guid}
     * @secure
     * @response `201` `ProjectKeywordModel` Created project keyword link.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    keywordsLinkKeywordToProject: (projectGuid: string, guid: string, params: RequestParams = {}) =>
      this.request<ProjectKeywordModel, void | ExceptionModel>({
        path: `/v1/projects/${projectGuid}/keywords/${guid}`,
        method: 'POST',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description Returns: No Content (204) if succeeded. Not found (404) if the keyword or the link can't be found.
     *
     * @tags ProjectsDelete
     * @name KeywordsDeleteProjectKeyword
     * @summary Delete a keyword from the project
     * @request DELETE:/v1/projects/{projectGuid}/keywords/{guid}
     * @secure
     * @response `204` `void`
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    keywordsDeleteProjectKeyword: (projectGuid: string, guid: string, params: RequestParams = {}) =>
      this.request<void, void | ExceptionModel>({
        path: `/v1/projects/${projectGuid}/keywords/${guid}`,
        method: 'DELETE',
        secure: true,
        ...params
      }),

    /**
     * No description
     *
     * @tags CustomersWrite
     * @name KeywordsLinkKeywordToContact
     * @summary Link existing keyword to contact
     * @request POST:/v1/contacts/{contactGuid}/keywords/{guid}
     * @secure
     * @response `201` `ContactKeywordModel` Created contact keyword link.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    keywordsLinkKeywordToContact: (contactGuid: string, guid: string, params: RequestParams = {}) =>
      this.request<ContactKeywordModel, void | ExceptionModel>({
        path: `/v1/contacts/${contactGuid}/keywords/${guid}`,
        method: 'POST',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description Returns: No Content (204) if succeeded. Not found (404) if the keyword or the link can't be found.
     *
     * @tags CustomersDelete
     * @name KeywordsDeleteContactKeyword
     * @summary Delete a keyword from the contact
     * @request DELETE:/v1/contacts/{contactGuid}/keywords/{guid}
     * @secure
     * @response `204` `void`
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    keywordsDeleteContactKeyword: (contactGuid: string, guid: string, params: RequestParams = {}) =>
      this.request<void, void | ExceptionModel>({
        path: `/v1/contacts/${contactGuid}/keywords/${guid}`,
        method: 'DELETE',
        secure: true,
        ...params
      }),

    /**
     * No description
     *
     * @tags FilesWrite
     * @name KeywordsLinkKeywordToFile
     * @summary Link existing keyword to file
     * @request POST:/v1/files/{fileGuid}/keywords/{guid}
     * @secure
     * @response `201` `FileKeywordModel` Created file keyword link.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    keywordsLinkKeywordToFile: (fileGuid: string, guid: string, params: RequestParams = {}) =>
      this.request<FileKeywordModel, void | ExceptionModel>({
        path: `/v1/files/${fileGuid}/keywords/${guid}`,
        method: 'POST',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description Returns: No Content (204) if succeeded. Not found (404) if the keyword or the link can't be found.
     *
     * @tags FilesDelete
     * @name KeywordsDeleteFileKeyword
     * @summary Delete a keyword from the file
     * @request DELETE:/v1/files/{fileGuid}/keywords/{guid}
     * @secure
     * @response `204` `void`
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    keywordsDeleteFileKeyword: (fileGuid: string, guid: string, params: RequestParams = {}) =>
      this.request<void, void | ExceptionModel>({
        path: `/v1/files/${fileGuid}/keywords/${guid}`,
        method: 'DELETE',
        secure: true,
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsRead
     * @name ProjectCustomPropertySelectionItemsGetProjectCustomPropertySelectionItems
     * @summary Get the project custom properties.
     * @request GET:/v1/projects/customproperties/{customPropertyGuid}/projectcustompropertyselectionitems
     * @secure
     * @response `200` `(ProjectCustomPropertySelectionItemOutputModel)[]`
     * @response `403` `ExceptionModel` Addon required
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    projectCustomPropertySelectionItemsGetProjectCustomPropertySelectionItems: (
      customPropertyGuid: string,
      query?: {
        /**
         * Optional: How many rows to fetch, Default 20, maximum 100.
         * @format int32
         */
        rowCount?: number | null;
        /** Optional: Get only active or inactive selection items. */
        isActive?: boolean | null;
        /** Optional: page token to fetch the next page. */
        pageToken?: string | null;
        /**
         * Optional: Get custom property selection items that have been added or changed after this date time (greater or equal).
         * @format date-time
         */
        changedSince?: string | null;
      },
      params: RequestParams = {}
    ) =>
      this.request<ProjectCustomPropertySelectionItemOutputModel[], ExceptionModel | void>({
        path: `/v1/projects/customproperties/${customPropertyGuid}/projectcustompropertyselectionitems`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsRead
     * @name ProjectCustomPropertySelectionItemsGetProjectCustomPropertySelectionItem
     * @summary Get project custom property selection item by ID.
     * @request GET:/v1/projects/customproperties/projectcustompropertyselectionitems/{guid}
     * @secure
     * @response `200` `ProjectCustomPropertySelectionItemOutputModel`
     * @response `403` `ExceptionModel` Addon required
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    projectCustomPropertySelectionItemsGetProjectCustomPropertySelectionItem: (guid: string, params: RequestParams = {}) =>
      this.request<ProjectCustomPropertySelectionItemOutputModel, ExceptionModel | void>({
        path: `/v1/projects/customproperties/projectcustompropertyselectionitems/${guid}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsWrite
     * @name ProjectCustomPropertySelectionItemsPatchProjectCustomPropertySelectionItem
     * @summary Update (Patch) a project custom property selection item or a part of it.
     * @request PATCH:/v1/projects/customproperties/projectcustompropertyselectionitems/{guid}
     * @secure
     * @response `200` `(ProjectCustomPropertySelectionItemOutputModel)[]` List of updated project custom properties.
     * @response `403` `ExceptionModel` Addon required
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    projectCustomPropertySelectionItemsPatchProjectCustomPropertySelectionItem: (
      guid: string,
      data: PatchOperation[] | null,
      params: RequestParams = {}
    ) =>
      this.request<ProjectCustomPropertySelectionItemOutputModel[], ExceptionModel | void>({
        path: `/v1/projects/customproperties/projectcustompropertyselectionitems/${guid}`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * @description Returns: No Content (204) if succeeded.
     *
     * @tags SettingsDelete
     * @name ProjectCustomPropertySelectionItemsDeleteProjectCustomPropertySelectionItem
     * @summary Deletes a project custom property selection item.
     * @request DELETE:/v1/projects/customproperties/projectcustompropertyselectionitems/{guid}
     * @secure
     * @response `204` `void`
     * @response `403` `ExceptionModel` Addon required
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    projectCustomPropertySelectionItemsDeleteProjectCustomPropertySelectionItem: (guid: string, params: RequestParams = {}) =>
      this.request<void, ExceptionModel | void>({
        path: `/v1/projects/customproperties/projectcustompropertyselectionitems/${guid}`,
        method: 'DELETE',
        secure: true,
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsWrite
     * @name ProjectCustomPropertySelectionItemsPostProjectCustomPropertySelectionItem
     * @summary Insert a project custom property selection item.
     * @request POST:/v1/projects/customproperties/projectcustompropertyselectionitems
     * @secure
     * @response `201` `ProjectCustomPropertySelectionItemOutputModel` Created project custom property.
     * @response `403` `ExceptionModel` Addon required
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    projectCustomPropertySelectionItemsPostProjectCustomPropertySelectionItem: (
      data: ProjectCustomPropertySelectionItemInputModel | null,
      params: RequestParams = {}
    ) =>
      this.request<ProjectCustomPropertySelectionItemOutputModel, ExceptionModel | void>({
        path: `/v1/projects/customproperties/projectcustompropertyselectionitems`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags InvoicesRead, ProjectsRead
     * @name ProjectInvoiceSettingsGetProjectInvoiceSettings
     * @summary Get project invoice settings by project ID.
     * @request GET:/v1/projects/{projectGuid}/projectinvoicesettings
     * @secure
     * @response `200` `(ProjectInvoiceSettingsOutputModel)[]` The project invoice settings.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    projectInvoiceSettingsGetProjectInvoiceSettings: (projectGuid: string, params: RequestParams = {}) =>
      this.request<ProjectInvoiceSettingsOutputModel[], void | ExceptionModel>({
        path: `/v1/projects/${projectGuid}/projectinvoicesettings`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags InvoicesRead, ProjectsRead
     * @name ProjectInvoiceSettingsGetProjectInvoiceSetting
     * @summary Get project invoice settings by ID.
     * @request GET:/v1/projectinvoicesettings/{guid}
     * @secure
     * @response `200` `ProjectInvoiceSettingsOutputModel` The project invoice settings.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    projectInvoiceSettingsGetProjectInvoiceSetting: (guid: string, params: RequestParams = {}) =>
      this.request<ProjectInvoiceSettingsOutputModel, void | ExceptionModel>({
        path: `/v1/projectinvoicesettings/${guid}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags InvoicesWrite, ProjectsWrite
     * @name ProjectInvoiceSettingsPatchProjectInvoiceSettings
     * @summary Update (Patch) project invoice settings.
     * @request PATCH:/v1/projectinvoicesettings/{guid}
     * @secure
     * @response `200` `(ProjectInvoiceSettingsOutputModel)[]` The project invoice settings.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    projectInvoiceSettingsPatchProjectInvoiceSettings: (guid: string, data: PatchOperation[] | null, params: RequestParams = {}) =>
      this.request<ProjectInvoiceSettingsOutputModel[], void | ExceptionModel>({
        path: `/v1/projectinvoicesettings/${guid}`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * @description Returns: No Content (204) if succeeded. Not found (404) if project invoice settings can't be found.
     *
     * @tags InvoicesDelete, ProjectsDelete
     * @name ProjectInvoiceSettingsDeleteProjectInvoiceSettings
     * @summary Delete an project invoice settings.
     * @request DELETE:/v1/projectinvoicesettings/{guid}
     * @secure
     * @response `204` `void`
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    projectInvoiceSettingsDeleteProjectInvoiceSettings: (guid: string, params: RequestParams = {}) =>
      this.request<void, void | ExceptionModel>({
        path: `/v1/projectinvoicesettings/${guid}`,
        method: 'DELETE',
        secure: true,
        ...params
      }),

    /**
     * No description
     *
     * @tags InvoicesWrite, ProjectsWrite
     * @name ProjectInvoiceSettingsPostProjectInvoiceSettings
     * @summary Create a new project invoice settings.
     * @request POST:/v1/projectinvoicesettings
     * @secure
     * @response `201` `ProjectInvoiceSettingsOutputModel` Created project invoice settings.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    projectInvoiceSettingsPostProjectInvoiceSettings: (data: ProjectInvoiceSettingsInputModel | null, params: RequestParams = {}) =>
      this.request<ProjectInvoiceSettingsOutputModel, void | ExceptionModel>({
        path: `/v1/projectinvoicesettings`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * @description This is the same as organization's list of products, unless the project has some specific products and UseProductsFromSetting in project model is set to false.
     *
     * @tags ProjectsRead
     * @name ProjectProductsGetProjectProducts
     * @summary Get project products
     * @request GET:/v1/projects/{projectGuid}/projectproducts
     * @secure
     * @response `200` `(ProjectProductOutputModel)[]` A list of products for the project.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    projectProductsGetProjectProducts: (
      projectGuid: string,
      query?: {
        /**
         * Optional: Includes products available from product registry
         * @default false
         */
        includeProductsFromRegistry?: boolean;
        /** Optional: page token to fetch the next page. */
        pageToken?: string | null;
        /**
         * Optional: How many rows to fetch, Default all.
         * @format int32
         */
        rowCount?: number | null;
        /** Fetch only active */
        active?: boolean | null;
      },
      params: RequestParams = {}
    ) =>
      this.request<ProjectProductOutputModel[], void | ExceptionModel>({
        path: `/v1/projects/${projectGuid}/projectproducts`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description Returns: No Content (204) if succeeded.
     *
     * @tags ProjectsDelete
     * @name ProjectProductsDeleteAllProjectProducts
     * @summary Deletes all project products of a project.
     * @request DELETE:/v1/projects/{projectGuid}/projectproducts
     * @secure
     * @response `204` `void`
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    projectProductsDeleteAllProjectProducts: (projectGuid: string, params: RequestParams = {}) =>
      this.request<void, void | ExceptionModel>({
        path: `/v1/projects/${projectGuid}/projectproducts`,
        method: 'DELETE',
        secure: true,
        ...params
      }),

    /**
     * No description
     *
     * @tags ProjectsWrite
     * @name ProjectProductsPostProjectProduct
     * @summary Adds a product to a project.
     * @request POST:/v1/projectproducts
     * @secure
     * @response `201` `ProjectProductOutputModel` Added project product
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    projectProductsPostProjectProduct: (data: ProjectProductInputModel | null, params: RequestParams = {}) =>
      this.request<ProjectProductOutputModel, void | ExceptionModel>({
        path: `/v1/projectproducts`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags ProjectsRead
     * @name ProjectWorkHourPricesGetWorkHourPricesForProject
     * @summary Get all the work hour prices for a project
     * @request GET:/v1/projects/{projectGuid}/projectworkhourprices
     * @secure
     * @response `200` `(ProjectWorkHourPriceOutputModel)[]` Projects
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    projectWorkHourPricesGetWorkHourPricesForProject: (
      projectGuid: string,
      query?: {
        /**
         * If true return only prices from the price list, if false also returns prices from the products. Default is false.
         * @default false
         */
        fromPricelistOnly?: boolean;
        /** Optional: If true, returns only prices that are available for the project, false returns price that are not available. Default all. */
        isAvailable?: boolean | null;
        /**
         * Optional: Get project work hour prices that have been added or changed after this date time (greater or equal).
         * @format date-time
         */
        changedSince?: string | null;
      },
      params: RequestParams = {}
    ) =>
      this.request<ProjectWorkHourPriceOutputModel[], void | ExceptionModel>({
        path: `/v1/projects/${projectGuid}/projectworkhourprices`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags ProjectsRead
     * @name ProjectWorkHourPricesGetProjectWorkHourPrice
     * @summary Get project work hour price by ID
     * @request GET:/v1/projectworkhourprices/{guid}
     * @secure
     * @response `200` `ProjectWorkHourPriceOutputModel`
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    projectWorkHourPricesGetProjectWorkHourPrice: (guid: string, params: RequestParams = {}) =>
      this.request<ProjectWorkHourPriceOutputModel, void | ExceptionModel>({
        path: `/v1/projectworkhourprices/${guid}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags ProjectsWrite
     * @name ProjectWorkHourPricesPatchProjectWorkHourPrice
     * @summary Update (Patch) a work hour price or a part of it
     * @request PATCH:/v1/projectworkhourprices/{guid}
     * @secure
     * @response `200` `(ProjectWorkHourPriceOutputModel)[]` list of updated work hour prices
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    projectWorkHourPricesPatchProjectWorkHourPrice: (guid: string, data: PatchOperation[] | null, params: RequestParams = {}) =>
      this.request<ProjectWorkHourPriceOutputModel[], void | ExceptionModel>({
        path: `/v1/projectworkhourprices/${guid}`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * @description Returns: No Content (204) if succeeded.
     *
     * @tags ProjectsDelete
     * @name ProjectWorkHourPricesDeleteProjectWorkHourPrice
     * @summary Deletes a work hour price
     * @request DELETE:/v1/projectworkhourprices/{guid}
     * @secure
     * @response `204` `void`
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    projectWorkHourPricesDeleteProjectWorkHourPrice: (guid: string, params: RequestParams = {}) =>
      this.request<void, void | ExceptionModel>({
        path: `/v1/projectworkhourprices/${guid}`,
        method: 'DELETE',
        secure: true,
        ...params
      }),

    /**
     * No description
     *
     * @tags ProjectsWrite
     * @name ProjectWorkHourPricesPostProjectWorkHourPrice
     * @summary Insert a work hour price
     * @request POST:/v1/projectworkhourprices
     * @secure
     * @response `201` `ProjectWorkHourPriceOutputModel` Created work hour prices
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    projectWorkHourPricesPostProjectWorkHourPrice: (data: ProjectWorkHourPriceInputModel | null, params: RequestParams = {}) =>
      this.request<ProjectWorkHourPriceOutputModel, void | ExceptionModel>({
        path: `/v1/projectworkhourprices`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags ProjectsRead
     * @name ProposalSubtotalsGetProposalSubtotals
     * @summary Get the proposal subtotals.
     * @request GET:/v1/proposalsubtotals
     * @secure
     * @response `200` `(ProposalSubtotalOutputModel)[]`
     * @response `403` `ExceptionModel` Addon required
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    proposalSubtotalsGetProposalSubtotals: (
      query?: {
        /** Optional: Page token to fetch the next page. */
        pageToken?: string | null;
        /**
         * Optional: How many rows to fetch, Default 20, maximum 100.
         * @format int32
         */
        rowCount?: number | null;
        /**
         * Optional: Get proposal subtotals that have been added or changed after this date time (greater or equal).
         * @format date-time
         */
        changedSince?: string | null;
      },
      params: RequestParams = {}
    ) =>
      this.request<ProposalSubtotalOutputModel[], ExceptionModel | void>({
        path: `/v1/proposalsubtotals`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags ProjectsWrite
     * @name ProposalSubtotalsPostProposalSubtotal
     * @summary Insert a proposal subtotal
     * @request POST:/v1/proposalsubtotals
     * @secure
     * @response `201` `ProposalSubtotalOutputModel` Created proposal subtotal.
     * @response `403` `ExceptionModel` Addon required
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    proposalSubtotalsPostProposalSubtotal: (data: ProposalSubtotalInputModel | null, params: RequestParams = {}) =>
      this.request<ProposalSubtotalOutputModel, ExceptionModel | void>({
        path: `/v1/proposalsubtotals`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags ProjectsRead
     * @name ProposalSubtotalsGetProposalSubtotalsForProposal
     * @summary Get all the proposal subtotals for a proposal
     * @request GET:/v1/proposals/{proposalGuid}/proposalsubtotals
     * @secure
     * @response `200` `(ProposalSubtotalOutputModel)[]` Proposal
     * @response `403` `ExceptionModel` Addon required
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    proposalSubtotalsGetProposalSubtotalsForProposal: (
      proposalGuid: string,
      query?: {
        /** Optional: Page token to fetch the next page. */
        pageToken?: string | null;
        /**
         * Optional: How many rows to fetch, Default all.
         * @format int32
         */
        rowCount?: number | null;
      },
      params: RequestParams = {}
    ) =>
      this.request<ProposalSubtotalOutputModel[], ExceptionModel | void>({
        path: `/v1/proposals/${proposalGuid}/proposalsubtotals`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags ProjectsRead
     * @name ProposalSubtotalsGetProposalSubtotal
     * @summary Get Proposal subtotal by ID
     * @request GET:/v1/proposalsubtotals/{guid}
     * @secure
     * @response `200` `ProposalSubtotalOutputModel` Proposal subtotal
     * @response `403` `ExceptionModel` Addon required
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    proposalSubtotalsGetProposalSubtotal: (guid: string, params: RequestParams = {}) =>
      this.request<ProposalSubtotalOutputModel, ExceptionModel | void>({
        path: `/v1/proposalsubtotals/${guid}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description It is not possible to changed the proposalGuid for an existing proposal subtotal. Also, when a proposal subtotal is connected to a phase, the connection can only be broken if the phase is deleted.
     *
     * @tags ProjectsWrite
     * @name ProposalSubtotalsPatchProposalSubtotal
     * @summary Update (Patch) a Proposal subtotal or a part of it
     * @request PATCH:/v1/proposalsubtotals/{guid}
     * @secure
     * @response `200` `(ProposalSubtotalOutputModel)[]` List of updated Proposal subtotals
     * @response `403` `ExceptionModel` Addon required
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    proposalSubtotalsPatchProposalSubtotal: (guid: string, data: PatchOperation[] | null, params: RequestParams = {}) =>
      this.request<ProposalSubtotalOutputModel[], ExceptionModel | void>({
        path: `/v1/proposalsubtotals/${guid}`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * @description Returns: No Content (204) if succeeded. Not found (404) if proposal subtotal can't be found.
     *
     * @tags ProjectsDelete
     * @name ProposalSubtotalsDeleteProposalSubtotal
     * @summary Delete a proposal subtotal
     * @request DELETE:/v1/proposalsubtotals/{guid}
     * @secure
     * @response `204` `void`
     * @response `403` `ExceptionModel` Addon required
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    proposalSubtotalsDeleteProposalSubtotal: (guid: string, params: RequestParams = {}) =>
      this.request<void, ExceptionModel | void>({
        path: `/v1/proposalsubtotals/${guid}`,
        method: 'DELETE',
        secure: true,
        ...params
      }),

    /**
     * No description
     *
     * @tags ProjectsRead
     * @name ProposalFeesGetProposalFees
     * @summary Get the proposal fee rows.
     * @request GET:/v1/proposalfeerows
     * @secure
     * @response `200` `(ProposalFeeRowOutputModel)[]` Proposal fee rows
     * @response `403` `ExceptionModel` Addon required
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    proposalFeesGetProposalFees: (
      query?: {
        /** Optional: page token to fetch the next page. */
        pageToken?: string | null;
        /**
         * Optional: How many rows to fetch, Default 20, maximum 100.
         * @format int32
         */
        rowCount?: number | null;
        /**
         * Optional: Get proposal fee rows that have been added or changed after this date time (greater or equal).
         * @format date-time
         */
        changedSince?: string | null;
      },
      params: RequestParams = {}
    ) =>
      this.request<ProposalFeeRowOutputModel[], ExceptionModel | void>({
        path: `/v1/proposalfeerows`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags ProjectsWrite
     * @name ProposalFeesPostProposalFee
     * @summary Insert a proposal fee row.
     * @request POST:/v1/proposalfeerows
     * @secure
     * @response `201` `ProposalFeeRowOutputModel` Created proposal fee row.
     * @response `403` `ExceptionModel` Addon required
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    proposalFeesPostProposalFee: (data: ProposalFeeRowInputModel | null, params: RequestParams = {}) =>
      this.request<ProposalFeeRowOutputModel, ExceptionModel | void>({
        path: `/v1/proposalfeerows`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags ProjectsRead
     * @name ProposalFeesGetProposalFeesForProposal
     * @summary Get all the proposal fee rows for a proposal
     * @request GET:/v1/proposals/{proposalGuid}/proposalfeerows
     * @secure
     * @response `200` `(ProposalFeeRowOutputModel)[]` Proposal fee rows
     * @response `403` `ExceptionModel` Addon required
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    proposalFeesGetProposalFeesForProposal: (
      proposalGuid: string,
      query?: {
        /** Optional: page token to fetch the next page. */
        pageToken?: string | null;
        /**
         * Optional: How many rows to fetch, Default all.
         * @format int32
         */
        rowCount?: number | null;
      },
      params: RequestParams = {}
    ) =>
      this.request<ProposalFeeRowOutputModel[], ExceptionModel | void>({
        path: `/v1/proposals/${proposalGuid}/proposalfeerows`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags ProjectsRead
     * @name ProposalFeesGetProposalFee
     * @summary Get the proposal fee rows by guid
     * @request GET:/v1/proposalfeerows/{guid}
     * @secure
     * @response `200` `ProposalFeeRowOutputModel` Proposal fee
     * @response `403` `ExceptionModel` Addon required
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    proposalFeesGetProposalFee: (guid: string, params: RequestParams = {}) =>
      this.request<ProposalFeeRowOutputModel, ExceptionModel | void>({
        path: `/v1/proposalfeerows/${guid}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags ProjectsWrite
     * @name ProposalFeesPatchProposalFee
     * @summary Update (Patch) a proposal fee row or a part of it
     * @request PATCH:/v1/proposalfeerows/{guid}
     * @secure
     * @response `200` `(ProposalFeeRowOutputModel)[]` list of updated proposal fee rows
     * @response `403` `ExceptionModel` Addon required
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    proposalFeesPatchProposalFee: (guid: string, data: PatchOperation[] | null, params: RequestParams = {}) =>
      this.request<ProposalFeeRowOutputModel[], ExceptionModel | void>({
        path: `/v1/proposalfeerows/${guid}`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * @description Returns: No Content (204) if succeeded. Not found (404) if proposal fee row can't be found.
     *
     * @tags ProjectsDelete
     * @name ProposalFeesDeleteProposalFee
     * @summary Delete a proposal fee row
     * @request DELETE:/v1/proposalfeerows/{guid}
     * @secure
     * @response `204` `void`
     * @response `403` `ExceptionModel` Addon required
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    proposalFeesDeleteProposalFee: (guid: string, params: RequestParams = {}) =>
      this.request<void, ExceptionModel | void>({
        path: `/v1/proposalfeerows/${guid}`,
        method: 'DELETE',
        secure: true,
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsRead
     * @name ProposalStatusesGetProposalStatuses
     * @summary Get all the proposal statuses
     * @request GET:/v1/proposalstatuses
     * @secure
     * @response `200` `(ProposalStatusOutputModel)[]` Proposal statuses
     * @response `403` `ExceptionModel` Addon required
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    proposalStatusesGetProposalStatuses: (
      query?: {
        /** Optional: If not given, return all proposal statuses, if given as true return only active proposal statuses, if given as false returns only inactive proposal statuses. */
        isActive?: boolean | null;
        /** Optional: page token to fetch the next page. */
        pageToken?: string | null;
        /**
         * Optional: How many rows to fetch, Default 20, maximum 100.
         * @format int32
         */
        rowCount?: number | null;
        /**
         * Optional: Search by proposal status name.
         * @default ""
         */
        proposalStatusName?: string | null;
      },
      params: RequestParams = {}
    ) =>
      this.request<ProposalStatusOutputModel[], ExceptionModel | void>({
        path: `/v1/proposalstatuses`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsWrite
     * @name ProposalStatusesPostProposalStatus
     * @summary Insert a proposal status
     * @request POST:/v1/proposalstatuses
     * @secure
     * @response `201` `ProposalStatusOutputModel` Inserted proposal status
     * @response `403` `ExceptionModel` Addon required
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    proposalStatusesPostProposalStatus: (data: ProposalStatusInputModel | null, params: RequestParams = {}) =>
      this.request<ProposalStatusOutputModel, ExceptionModel | void>({
        path: `/v1/proposalstatuses`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsRead
     * @name ProposalStatusesGetProposalStatus
     * @summary Get Proposal status by ID
     * @request GET:/v1/proposalstatuses/{guid}
     * @secure
     * @response `200` `ProposalStatusOutputModel` Proposal status
     * @response `403` `ExceptionModel` Addon required
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    proposalStatusesGetProposalStatus: (guid: string, params: RequestParams = {}) =>
      this.request<ProposalStatusOutputModel, ExceptionModel | void>({
        path: `/v1/proposalstatuses/${guid}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsWrite
     * @name ProposalStatusesPatchProposalStatus
     * @summary Update (Patch) an Proposal status or a part of it
     * @request PATCH:/v1/proposalstatuses/{guid}
     * @secure
     * @response `200` `(ProposalStatusOutputModel)[]` List of updated Proposal statuses
     * @response `403` `ExceptionModel` Addon required
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    proposalStatusesPatchProposalStatus: (guid: string, data: PatchOperation[] | null, params: RequestParams = {}) =>
      this.request<ProposalStatusOutputModel[], ExceptionModel | void>({
        path: `/v1/proposalstatuses/${guid}`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * @description Returns: No Content (204) if succeeded. Not found (404) if proposal status can't be found.
     *
     * @tags SettingsDelete
     * @name ProposalStatusesDeleteProposalStatus
     * @summary Delete an proposal status
     * @request DELETE:/v1/proposalstatuses/{guid}
     * @secure
     * @response `204` `void`
     * @response `403` `ExceptionModel` Addon required
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    proposalStatusesDeleteProposalStatus: (
      guid: string,
      query?: {
        /** Optional: ID of the proposal status to which to move usages of this proposal status. Default null. If proposal status is in use and usages aren't moved the deletion might fail. */
        moveUsagesToGuid?: string | null;
      },
      params: RequestParams = {}
    ) =>
      this.request<void, ExceptionModel | void>({
        path: `/v1/proposalstatuses/${guid}`,
        method: 'DELETE',
        query: query,
        secure: true,
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsRead
     * @name ProposalStatusesGetUsage
     * @summary Get usage for an proposal status.
     * @request GET:/v1/proposalstatuses/{guid}/usage
     * @secure
     * @response `200` `(UsageModel2)[]` Usage
     * @response `403` `ExceptionModel` Addon required
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    proposalStatusesGetUsage: (guid: string, params: RequestParams = {}) =>
      this.request<UsageModel2[], ExceptionModel | void>({
        path: `/v1/proposalstatuses/${guid}/usage`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags ProjectsRead
     * @name ProposalsGetProposals
     * @summary Get all the proposals
     * @request GET:/v1/proposals
     * @secure
     * @response `200` `(ProposalOutputModel)[]` Proposal
     * @response `403` `ExceptionModel` Addon required
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    proposalsGetProposals: (
      query?: {
        /** Optional: page token to fetch the next page. */
        pageToken?: string | null;
        /**
         * Optional: How many rows to fetch, Default 20, maximum 100.
         * @format int32
         */
        rowCount?: number | null;
        /**
         * Optional: Get proposals that have been added or changed after this date time (greater or equal).
         * @format date-time
         */
        changedSince?: string | null;
      },
      params: RequestParams = {}
    ) =>
      this.request<ProposalOutputModel[], ExceptionModel | void>({
        path: `/v1/proposals`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags ProjectsWrite
     * @name ProposalsPostProposal
     * @summary Insert a proposal.
     * @request POST:/v1/proposals
     * @secure
     * @response `201` `ProposalOutputModel` Created proposal.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    proposalsPostProposal: (data: ProposalInputModel | null, params: RequestParams = {}) =>
      this.request<ProposalOutputModel, void | ExceptionModel>({
        path: `/v1/proposals`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags ProjectsRead
     * @name ProposalsGetProposalsForProject
     * @summary Get all the proposals for a project
     * @request GET:/v1/projects/{projectGuid}/proposals
     * @secure
     * @response `200` `(ProposalOutputModel)[]` Proposal
     * @response `403` `ExceptionModel` Addon required
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    proposalsGetProposalsForProject: (
      projectGuid: string,
      query?: {
        /** Optional: page token to fetch the next page. */
        pageToken?: string | null;
        /**
         * Optional: How many rows to fetch, Default all.
         * @format int32
         */
        rowCount?: number | null;
        /**
         * Optional: Get proposals that have been added or changed after this date time (greater or equal).
         * @format date-time
         */
        changedSince?: string | null;
      },
      params: RequestParams = {}
    ) =>
      this.request<ProposalOutputModel[], ExceptionModel | void>({
        path: `/v1/projects/${projectGuid}/proposals`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags ProjectsRead
     * @name ProposalsGetProposal
     * @summary Get Proposal by ID
     * @request GET:/v1/proposals/{guid}
     * @secure
     * @response `200` `ProposalOutputModel` Proposal
     * @response `403` `ExceptionModel` Addon required
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    proposalsGetProposal: (guid: string, params: RequestParams = {}) =>
      this.request<ProposalOutputModel, ExceptionModel | void>({
        path: `/v1/proposals/${guid}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags ProjectsWrite
     * @name ProposalsPatchProposal
     * @summary Update (Patch) a Proposal or a part of it
     * @request PATCH:/v1/proposals/{guid}
     * @secure
     * @response `200` `(ProposalOutputModel)[]` List of updated Proposals
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    proposalsPatchProposal: (guid: string, data: PatchOperation[] | null, params: RequestParams = {}) =>
      this.request<ProposalOutputModel[], void | ExceptionModel>({
        path: `/v1/proposals/${guid}`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * @description Returns: No Content (204) if succeeded. Not found (404) if proposal can't be found.
     *
     * @tags ProjectsDelete
     * @name ProposalsDeleteProposal
     * @summary Delete a proposal
     * @request DELETE:/v1/proposals/{guid}
     * @secure
     * @response `204` `void`
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    proposalsDeleteProposal: (guid: string, params: RequestParams = {}) =>
      this.request<void, void | ExceptionModel>({
        path: `/v1/proposals/${guid}`,
        method: 'DELETE',
        secure: true,
        ...params
      }),

    /**
     * No description
     *
     * @tags ProjectsRead
     * @name ProposalSettingsGetProposalSettings
     * @summary Get settings for a proposal
     * @request GET:/v1/proposals/{guid}/proposalsettings
     * @secure
     * @response `200` `ProposalSettingsOutputModel` Proposal
     * @response `403` `ExceptionModel` Addon required
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    proposalSettingsGetProposalSettings: (guid: string, params: RequestParams = {}) =>
      this.request<ProposalSettingsOutputModel, ExceptionModel | void>({
        path: `/v1/proposals/${guid}/proposalsettings`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags ProjectsWrite
     * @name ProposalSettingsPatchProposalSettings
     * @summary Update (Patch) proposal settings
     * @request PATCH:/v1/proposals/{guid}/proposalsettings
     * @secure
     * @response `200` `(ProposalSettingsOutputModel)[]` List of updated Proposal settings
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    proposalSettingsPatchProposalSettings: (guid: string, data: PatchOperation[] | null, params: RequestParams = {}) =>
      this.request<ProposalSettingsOutputModel[], void | ExceptionModel>({
        path: `/v1/proposals/${guid}/proposalsettings`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags ProjectsRead
     * @name ProposalWorkhoursGetProposalWorkHours
     * @summary Get the proposal work rows.
     * @request GET:/v1/proposalworkrows
     * @secure
     * @response `200` `(ProposalWorkhourRowOutputModel)[]`
     * @response `403` `ExceptionModel` Addon required
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    proposalWorkhoursGetProposalWorkHours: (
      query?: {
        /** Optional: page token to fetch the next page. */
        pageToken?: string | null;
        /**
         * Optional: How many rows to fetch, Default 20, maximum 100.
         * @format int32
         */
        rowCount?: number | null;
        /**
         * Optional: Get proposal work rows that have been added or changed after this date time (greater or equal).
         * @format date-time
         */
        changedSince?: string | null;
      },
      params: RequestParams = {}
    ) =>
      this.request<ProposalWorkhourRowOutputModel[], ExceptionModel | void>({
        path: `/v1/proposalworkrows`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags ProjectsWrite
     * @name ProposalWorkhoursPostProposalWorkhour
     * @summary Insert a proposal work row.
     * @request POST:/v1/proposalworkrows
     * @secure
     * @response `201` `ProposalWorkhourRowOutputModel` Created proposal work row.
     * @response `403` `ExceptionModel` Addon required
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    proposalWorkhoursPostProposalWorkhour: (data: ProposalWorkhourRowInputModel | null, params: RequestParams = {}) =>
      this.request<ProposalWorkhourRowOutputModel, ExceptionModel | void>({
        path: `/v1/proposalworkrows`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags ProjectsRead
     * @name ProposalWorkhoursGetProposalWorkHoursForProposal
     * @summary Get all the proposal work rows.
     * @request GET:/v1/proposals/{proposalGuid}/proposalworkrows
     * @secure
     * @response `200` `(ProposalWorkhourRowOutputModel)[]` Proposal work rows.
     * @response `403` `ExceptionModel` Addon required
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    proposalWorkhoursGetProposalWorkHoursForProposal: (
      proposalGuid: string,
      query?: {
        /** Optional: page token to fetch the next page. */
        pageToken?: string | null;
        /**
         * Optional: How many rows to fetch, Default all.
         * @format int32
         */
        rowCount?: number | null;
      },
      params: RequestParams = {}
    ) =>
      this.request<ProposalWorkhourRowOutputModel[], ExceptionModel | void>({
        path: `/v1/proposals/${proposalGuid}/proposalworkrows`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags ProjectsRead
     * @name ProposalWorkhoursGetProposalWorkhour
     * @summary Get the proposal work row by guid.
     * @request GET:/v1/proposalworkrows/{guid}
     * @secure
     * @response `200` `ProposalWorkhourRowOutputModel` Proposal work row.
     * @response `403` `ExceptionModel` Addon required
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    proposalWorkhoursGetProposalWorkhour: (guid: string, params: RequestParams = {}) =>
      this.request<ProposalWorkhourRowOutputModel, ExceptionModel | void>({
        path: `/v1/proposalworkrows/${guid}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags ProjectsWrite
     * @name ProposalWorkhoursPatchProposalWorkhour
     * @summary Update (Patch) a proposal work row or a part of it.
     * @request PATCH:/v1/proposalworkrows/{guid}
     * @secure
     * @response `200` `(ProposalWorkhourRowOutputModel)[]` updated proposal work row.
     * @response `403` `ExceptionModel` Addon required
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    proposalWorkhoursPatchProposalWorkhour: (guid: string, data: PatchOperation[] | null, params: RequestParams = {}) =>
      this.request<ProposalWorkhourRowOutputModel[], ExceptionModel | void>({
        path: `/v1/proposalworkrows/${guid}`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * @description Returns: No Content (204) if succeeded. Not found (404) if proposal work row can't be found.
     *
     * @tags ProjectsDelete
     * @name ProposalWorkhoursDeleteProposalWorkhour
     * @summary Delete a proposal work row.
     * @request DELETE:/v1/proposalworkrows/{guid}
     * @secure
     * @response `204` `void`
     * @response `403` `ExceptionModel` Addon required
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    proposalWorkhoursDeleteProposalWorkhour: (guid: string, params: RequestParams = {}) =>
      this.request<void, ExceptionModel | void>({
        path: `/v1/proposalworkrows/${guid}`,
        method: 'DELETE',
        secure: true,
        ...params
      }),

    /**
     * No description
     *
     * @tags ResourceallocationsRead
     * @name RoleAllocationsGetRoleAllocations
     * @summary Get role allocations.
     * @request GET:/v1/roleallocations
     * @secure
     * @response `200` `(RoleAllocationOutputModel)[]` RoleAllocationModel.
     * @response `403` `ExceptionModel` Addon required
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    roleAllocationsGetRoleAllocations: (
      query: {
        /**
         * Starting date from which to get the role allocations. If end date is not specified on the role allocation then it will be compared with phase end date.
         * @format date-time
         */
        startDate: string;
        /**
         * Optional: Ending date to which to get the role allocations. If start date is not specified on the role allocation then it will be compared with phase start date.
         * @format date-time
         */
        endDate?: string | null;
        /** Optional: Page token to fetch the next page. */
        pageToken?: string | null;
        /**
         * Optional: How many rows to fetch, Default all.
         * @format int32
         */
        rowCount?: number | null;
        /**
         * Optional: Calculates the hours based on sales probability set for the project. Default is true.
         * @default true
         */
        useSalesProbability?: boolean;
        /** Optional: Role IDs. */
        roleGuids?: string[] | null;
        /** Optional: Phase IDs. */
        phaseGuids?: string[] | null;
        /** Optional: Project IDs. */
        projectGuids?: string[] | null;
      },
      params: RequestParams = {}
    ) =>
      this.request<RoleAllocationOutputModel[], ExceptionModel | void>({
        path: `/v1/roleallocations`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags ResourceallocationsWrite
     * @name RoleAllocationsPostRoleAllocation
     * @summary Insert a role allocation.
     * @request POST:/v1/roleallocations
     * @secure
     * @response `201` `RoleAllocationOutputModel` RoleAllocationModel.
     * @response `403` `ExceptionModel` Addon required
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    roleAllocationsPostRoleAllocation: (data: RoleAllocationInputModel | null, params: RequestParams = {}) =>
      this.request<RoleAllocationOutputModel, ExceptionModel | void>({
        path: `/v1/roleallocations`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags ResourceallocationsRead
     * @name RoleAllocationsGetRoleAllocation
     * @summary Get role allocation by GUID.
     * @request GET:/v1/roleallocations/{guid}
     * @secure
     * @response `200` `RoleAllocationOutputModel` RoleAllocationModel.
     * @response `403` `ExceptionModel` Addon required
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    roleAllocationsGetRoleAllocation: (guid: string, params: RequestParams = {}) =>
      this.request<RoleAllocationOutputModel, ExceptionModel | void>({
        path: `/v1/roleallocations/${guid}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags ResourceallocationsWrite
     * @name RoleAllocationsPatchRoleAllocation
     * @summary Update (Patch) a role allocation.
     * @request PATCH:/v1/roleallocations/{guid}
     * @secure
     * @response `200` `(RoleAllocationOutputModel)[]` RoleAllocationModel.
     * @response `403` `ExceptionModel` Addon required
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    roleAllocationsPatchRoleAllocation: (guid: string, data: PatchOperation[] | null, params: RequestParams = {}) =>
      this.request<RoleAllocationOutputModel[], ExceptionModel | void>({
        path: `/v1/roleallocations/${guid}`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * @description Returns: No Content (204) if succeeded. Not found (404) if role can't be found.
     *
     * @tags ResourceallocationsDelete
     * @name RoleAllocationsDeleteRoleAllocation
     * @summary Delete a role allocation.
     * @request DELETE:/v1/roleallocations/{guid}
     * @secure
     * @response `204` `void`
     * @response `403` `ExceptionModel` Addon required
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    roleAllocationsDeleteRoleAllocation: (guid: string, params: RequestParams = {}) =>
      this.request<void, ExceptionModel | void>({
        path: `/v1/roleallocations/${guid}`,
        method: 'DELETE',
        secure: true,
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsRead
     * @name RolesGetRoles
     * @summary Get roles.
     * @request GET:/v1/roles
     * @secure
     * @response `200` `(RoleOutputModel)[]` All the roles.
     * @response `403` `ExceptionModel` Addon required
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    rolesGetRoles: (
      query?: {
        /** If not given, return all roles, if given as true return only active roles, if given as false returns only inactive roles. */
        isActive?: boolean | null;
        /** Optional: Page token to fetch the next page. */
        pageToken?: string | null;
        /**
         * Optional: How many rows to fetch, Default all.
         * @format int32
         */
        rowCount?: number | null;
        /**
         * Optional: Get roles that have been added or changed after this date time (greater or equal).
         * @format date-time
         */
        changedSince?: string | null;
      },
      params: RequestParams = {}
    ) =>
      this.request<RoleOutputModel[], ExceptionModel | void>({
        path: `/v1/roles`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsWrite
     * @name RolesPostRole
     * @summary Insert a role.
     * @request POST:/v1/roles
     * @secure
     * @response `201` `RoleOutputModel` Created role.
     * @response `403` `ExceptionModel` Addon required
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    rolesPostRole: (data: RoleInputModel | null, params: RequestParams = {}) =>
      this.request<RoleOutputModel, ExceptionModel | void>({
        path: `/v1/roles`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsRead
     * @name RolesGetRole
     * @summary Get role by GUID.
     * @request GET:/v1/roles/{guid}
     * @secure
     * @response `200` `RoleOutputModel` RoleOutputModel.
     * @response `403` `ExceptionModel` Addon required
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    rolesGetRole: (guid: string, params: RequestParams = {}) =>
      this.request<RoleOutputModel, ExceptionModel | void>({
        path: `/v1/roles/${guid}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsWrite
     * @name RolesPatchRole
     * @summary Update (Patch) a role or a part of it.
     * @request PATCH:/v1/roles/{guid}
     * @secure
     * @response `200` `(RoleOutputModel)[]` list of updated roles.
     * @response `403` `ExceptionModel` Addon required
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    rolesPatchRole: (guid: string, data: PatchOperation[] | null, params: RequestParams = {}) =>
      this.request<RoleOutputModel[], ExceptionModel | void>({
        path: `/v1/roles/${guid}`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * @description Returns: No Content (204) if succeeded. Not found (404) if role can't be found.
     *
     * @tags SettingsDelete
     * @name RolesDeleteRole
     * @summary Delete a role.
     * @request DELETE:/v1/roles/{guid}
     * @secure
     * @response `204` `void`
     * @response `403` `ExceptionModel` Addon required
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    rolesDeleteRole: (guid: string, params: RequestParams = {}) =>
      this.request<void, ExceptionModel | void>({
        path: `/v1/roles/${guid}`,
        method: 'DELETE',
        secure: true,
        ...params
      }),

    /**
     * No description
     *
     * @tags ProjectsRead
     * @name SalesNotesGetProjectSalesNotes
     * @summary Get the sales notes of a case.
     * @request GET:/v1/projects/{projectGuid}/projectsalesnotes
     * @secure
     * @response `200` `(ProjectSalesNoteOutputModel)[]` List of sales notes for a project.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    salesNotesGetProjectSalesNotes: (
      projectGuid: string,
      query?: {
        /** Optional: page token to fetch the next page. */
        pageToken?: string | null;
        /**
         * Optional: How many rows to fetch, Default 20, maximum 100.
         * @format int32
         */
        rowCount?: number | null;
        /**
         * Optional: Get sales notes that have been added or changed after this date time (greater or equal).
         * @format date-time
         */
        changedSince?: string | null;
      },
      params: RequestParams = {}
    ) =>
      this.request<ProjectSalesNoteOutputModel[], void | ExceptionModel>({
        path: `/v1/projects/${projectGuid}/projectsalesnotes`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags CustomersRead
     * @name SalesNotesGetCustomerSalesNotes
     * @summary Get the customer sales notes.
     * @request GET:/v1/customers/{customerGuid}/customersalesnotes
     * @secure
     * @response `200` `(CustomerSalesNoteOutputModel)[]` List of sales notes for a customer.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    salesNotesGetCustomerSalesNotes: (
      customerGuid: string,
      query?: {
        /** Optional: page token to fetch the next page. */
        pageToken?: string | null;
        /**
         * Optional: How many rows to fetch, Default 20, maximum 100.
         * @format int32
         */
        rowCount?: number | null;
        /**
         * Optional: Get sales notes that have been added or changed after this date time (greater or equal).
         * @format date-time
         */
        changedSince?: string | null;
      },
      params: RequestParams = {}
    ) =>
      this.request<CustomerSalesNoteOutputModel[], void | ExceptionModel>({
        path: `/v1/customers/${customerGuid}/customersalesnotes`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags ProjectsRead, CustomersRead
     * @name SalesNotesGetAllCustomerSalesNotes
     * @summary Get the sales notes by customer guid.
     * @request GET:/v1/customers/{customerGuid}/salesnotes
     * @secure
     * @response `200` `(SalesNoteOutputModel)[]` List of sales notes for a customer.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    salesNotesGetAllCustomerSalesNotes: (
      customerGuid: string,
      query?: {
        /** Optional: page token to fetch the next page. */
        pageToken?: string | null;
        /**
         * Optional: How many rows to fetch, Default 20, maximum 100.
         * @format int32
         */
        rowCount?: number | null;
        /**
         * Optional: Get sales notes that have been added or changed after this date time (greater or equal).
         * @format date-time
         */
        changedSince?: string | null;
      },
      params: RequestParams = {}
    ) =>
      this.request<SalesNoteOutputModel[], void | ExceptionModel>({
        path: `/v1/customers/${customerGuid}/salesnotes`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags ProjectsRead
     * @name SalesNotesGetProjectSalesNote
     * @summary Get project sales note by ID.
     * @request GET:/v1/projectsalesnotes/{guid}
     * @secure
     * @response `200` `ProjectSalesNoteOutputModel` ProjectNote
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    salesNotesGetProjectSalesNote: (guid: string, params: RequestParams = {}) =>
      this.request<ProjectSalesNoteOutputModel, void | ExceptionModel>({
        path: `/v1/projectsalesnotes/${guid}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags ProjectsWrite
     * @name SalesNotesPatchProjectSalesNote
     * @summary Update (Patch) a project sales note or a part of it.
     * @request PATCH:/v1/projectsalesnotes/{guid}
     * @secure
     * @response `200` `(ProjectSalesNoteOutputModel)[]` list of updated sales notes.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    salesNotesPatchProjectSalesNote: (guid: string, data: PatchOperation[] | null, params: RequestParams = {}) =>
      this.request<ProjectSalesNoteOutputModel[], void | ExceptionModel>({
        path: `/v1/projectsalesnotes/${guid}`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * @description Returns: No Content (204) if succeeded. OK (200) if note has child notes and can't be deleted. It is marked as IsDeleted = true. Not found (404) if note can't be found.
     *
     * @tags ProjectsDelete
     * @name SalesNotesDeleteProjectSalesNote
     * @summary Deletes a project sales note.
     * @request DELETE:/v1/projectsalesnotes/{guid}
     * @secure
     * @response `204` `void`
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    salesNotesDeleteProjectSalesNote: (guid: string, params: RequestParams = {}) =>
      this.request<void, void | ExceptionModel>({
        path: `/v1/projectsalesnotes/${guid}`,
        method: 'DELETE',
        secure: true,
        ...params
      }),

    /**
     * No description
     *
     * @tags CustomersRead
     * @name SalesNotesGetCustomerSalesNote
     * @summary Get customer sales note by ID.
     * @request GET:/v1/customersalesnotes/{guid}
     * @secure
     * @response `200` `CustomerSalesNoteOutputModel` ProjectNote
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    salesNotesGetCustomerSalesNote: (guid: string, params: RequestParams = {}) =>
      this.request<CustomerSalesNoteOutputModel, void | ExceptionModel>({
        path: `/v1/customersalesnotes/${guid}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags CustomersWrite
     * @name SalesNotesPatchCustomerSalesNote
     * @summary Update (Patch) a customer sales note or a part of it.
     * @request PATCH:/v1/customersalesnotes/{guid}
     * @secure
     * @response `200` `(CustomerSalesNoteOutputModel)[]` list of updated sales notes.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    salesNotesPatchCustomerSalesNote: (guid: string, data: PatchOperation[] | null, params: RequestParams = {}) =>
      this.request<CustomerSalesNoteOutputModel[], void | ExceptionModel>({
        path: `/v1/customersalesnotes/${guid}`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * @description Returns: No Content (204) if succeeded. OK (200) if note has child notes and can't be deleted. It is marked as IsDeleted = true. Not found (404) if note can't be found.
     *
     * @tags CustomersDelete
     * @name SalesNotesDeleteCustomerSalesNote
     * @summary Deletes a customer sales note.
     * @request DELETE:/v1/customersalesnotes/{guid}
     * @secure
     * @response `204` `void`
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    salesNotesDeleteCustomerSalesNote: (guid: string, params: RequestParams = {}) =>
      this.request<void, void | ExceptionModel>({
        path: `/v1/customersalesnotes/${guid}`,
        method: 'DELETE',
        secure: true,
        ...params
      }),

    /**
     * No description
     *
     * @tags ProjectsWrite
     * @name SalesNotesPostProjectSalesNotes
     * @summary Insert a project sales note.
     * @request POST:/v1/projectsalesnotes
     * @secure
     * @response `201` `ProjectSalesNoteOutputModel` Created project sales note.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    salesNotesPostProjectSalesNotes: (data: ProjectSalesNoteInputModel | null, params: RequestParams = {}) =>
      this.request<ProjectSalesNoteOutputModel, void | ExceptionModel>({
        path: `/v1/projectsalesnotes`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags CustomersWrite
     * @name SalesNotesPostCustomerSalesNotes
     * @summary Insert a customer sales note.
     * @request POST:/v1/customersalesnotes
     * @secure
     * @response `201` `CustomerSalesNoteOutputModel` Created customer sales note.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    salesNotesPostCustomerSalesNotes: (data: CustomerSalesNoteInputModel | null, params: RequestParams = {}) =>
      this.request<CustomerSalesNoteOutputModel, void | ExceptionModel>({
        path: `/v1/customersalesnotes`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsRead
     * @name UserCustomPropertiesGetUserCustomProperties
     * @summary Get the user custom properties.
     * @request GET:/v1/users/customproperties
     * @secure
     * @response `200` `(UserCustomPropertyOutputModel)[]`
     * @response `403` `ExceptionModel` Addon required
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    userCustomPropertiesGetUserCustomProperties: (
      query?: {
        /** Optional: page token to fetch the next page. */
        pageToken?: string | null;
        /**
         * Optional: How many rows to fetch, Default 20, maximum 100.
         * @format int32
         */
        rowCount?: number | null;
        /** Optional: Get only active or inactive user custom properties. */
        isActive?: boolean | null;
        /** Optional: Is the customer property used in any custom property usage. */
        isInUse?: boolean | null;
        /**
         * Optional: Get custom properties that have been added or changed after this date time (greater or equal).
         * @format date-time
         */
        changedSince?: string | null;
      },
      params: RequestParams = {}
    ) =>
      this.request<UserCustomPropertyOutputModel[], ExceptionModel | void>({
        path: `/v1/users/customproperties`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsWrite
     * @name UserCustomPropertiesPostUserCustomProperty
     * @summary Insert a user custom property.
     * @request POST:/v1/users/customproperties
     * @secure
     * @response `201` `UserCustomPropertyOutputModel` Created user custom property.
     * @response `403` `ExceptionModel` Addon required
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    userCustomPropertiesPostUserCustomProperty: (data: UserCustomPropertyInputModel | null, params: RequestParams = {}) =>
      this.request<UserCustomPropertyOutputModel, ExceptionModel | void>({
        path: `/v1/users/customproperties`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsRead
     * @name UserCustomPropertiesGetUserCustomProperty
     * @summary Get user custom property by ID.
     * @request GET:/v1/users/customproperties/{guid}
     * @secure
     * @response `200` `UserCustomPropertyOutputModel`
     * @response `403` `ExceptionModel` Addon required
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    userCustomPropertiesGetUserCustomProperty: (guid: string, params: RequestParams = {}) =>
      this.request<UserCustomPropertyOutputModel, ExceptionModel | void>({
        path: `/v1/users/customproperties/${guid}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsWrite
     * @name UserCustomPropertiesPatchUserCustomProperty
     * @summary Update (Patch) a user custom property or a part of it.
     * @request PATCH:/v1/users/customproperties/{guid}
     * @secure
     * @response `200` `(UserCustomPropertyOutputModel)[]` List of updated user custom properties.
     * @response `403` `ExceptionModel` Addon required
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    userCustomPropertiesPatchUserCustomProperty: (guid: string, data: PatchOperation[] | null, params: RequestParams = {}) =>
      this.request<UserCustomPropertyOutputModel[], ExceptionModel | void>({
        path: `/v1/users/customproperties/${guid}`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * @description Returns: No Content (204) if succeeded.
     *
     * @tags SettingsDelete
     * @name UserCustomPropertiesDeleteUserCustomProperty
     * @summary Deletes a user custom property.
     * @request DELETE:/v1/users/customproperties/{guid}
     * @secure
     * @response `204` `void`
     * @response `403` `ExceptionModel` Addon required
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    userCustomPropertiesDeleteUserCustomProperty: (guid: string, params: RequestParams = {}) =>
      this.request<void, ExceptionModel | void>({
        path: `/v1/users/customproperties/${guid}`,
        method: 'DELETE',
        secure: true,
        ...params
      }),

    /**
     * No description
     *
     * @tags UsersRead
     * @name UserCustomValuesGetUserCustomValues
     * @summary Get the user custom values.
     * @request GET:/v1/users/{userGuid}/customvalues
     * @secure
     * @response `200` `(UserCustomValueOutputModel)[]`
     * @response `403` `ExceptionModel` Addon required
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    userCustomValuesGetUserCustomValues: (
      userGuid: string,
      query?: {
        /** Optional: page token to fetch the next page. */
        pageToken?: string | null;
        /**
         * Optional: How many rows to fetch, Default 20, maximum 100.
         * @format int32
         */
        rowCount?: number | null;
        /** Optional: Get only values of active or inactive user custom properties. */
        isActive?: boolean | null;
        /** Optional: List of target for which to get the values. */
        targets?: string[] | null;
        /**
         * Optional: Get user custom values that have been added or changed after this date time (greater or equal).
         * @format date-time
         */
        changedSince?: string | null;
      },
      params: RequestParams = {}
    ) =>
      this.request<UserCustomValueOutputModel[], ExceptionModel | void>({
        path: `/v1/users/${userGuid}/customvalues`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags UsersRead
     * @name UserCustomValuesGetUserCustomValue
     * @summary Get user custom value by ID.
     * @request GET:/v1/users/customvalues/{guid}
     * @secure
     * @response `200` `UserCustomValueOutputModel`
     * @response `403` `ExceptionModel` Addon required
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    userCustomValuesGetUserCustomValue: (guid: string, params: RequestParams = {}) =>
      this.request<UserCustomValueOutputModel, ExceptionModel | void>({
        path: `/v1/users/customvalues/${guid}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags UsersWrite
     * @name UserCustomValuesPatchUserCustomValue
     * @summary Update (Patch) a user custom value or a part of it.
     * @request PATCH:/v1/users/customvalues/{guid}
     * @secure
     * @response `200` `(UserCustomValueOutputModel)[]` List of updated user custom values.
     * @response `403` `ExceptionModel` Addon required
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    userCustomValuesPatchUserCustomValue: (guid: string, data: PatchOperation[] | null, params: RequestParams = {}) =>
      this.request<UserCustomValueOutputModel[], ExceptionModel | void>({
        path: `/v1/users/customvalues/${guid}`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * @description Returns: No Content (204) if succeeded.
     *
     * @tags UsersDelete
     * @name UserCustomValuesDeleteUserCustomValue
     * @summary Deletes a user custom value.
     * @request DELETE:/v1/users/customvalues/{guid}
     * @secure
     * @response `204` `void`
     * @response `403` `ExceptionModel` Addon required
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    userCustomValuesDeleteUserCustomValue: (guid: string, params: RequestParams = {}) =>
      this.request<void, ExceptionModel | void>({
        path: `/v1/users/customvalues/${guid}`,
        method: 'DELETE',
        secure: true,
        ...params
      }),

    /**
     * No description
     *
     * @tags UsersWrite
     * @name UserCustomValuesPostUserCustomValue
     * @summary Insert a user custom value.
     * @request POST:/v1/users/customvalues
     * @secure
     * @response `201` `(UserCustomValueOutputModel)[]` Created user custom value.
     * @response `403` `ExceptionModel` Addon required
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    userCustomValuesPostUserCustomValue: (data: UserCustomValueInputModel | null, params: RequestParams = {}) =>
      this.request<UserCustomValueOutputModel[], ExceptionModel | void>({
        path: `/v1/users/customvalues`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsRead
     * @name UserCustomPropertySelectionItemsGetUserCustomPropertySelectionItems
     * @summary Get the user custom properties.
     * @request GET:/v1/users/customproperties/{customPropertyGuid}/usercustompropertyselectionitems
     * @secure
     * @response `200` `(UserCustomPropertySelectionItemOutputModel)[]`
     * @response `403` `ExceptionModel` Addon required
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    userCustomPropertySelectionItemsGetUserCustomPropertySelectionItems: (
      customPropertyGuid: string,
      query?: {
        /**
         * Optional: How many rows to fetch, Default 20, maximum 100.
         * @format int32
         */
        rowCount?: number | null;
        /** Optional: Get only active or inactive selection items. */
        isActive?: boolean | null;
        /** Optional: page token to fetch the next page. */
        pageToken?: string | null;
        /**
         * Optional: Get custom property selection items that have been added or changed after this date time (greater or equal).
         * @format date-time
         */
        changedSince?: string | null;
      },
      params: RequestParams = {}
    ) =>
      this.request<UserCustomPropertySelectionItemOutputModel[], ExceptionModel | void>({
        path: `/v1/users/customproperties/${customPropertyGuid}/usercustompropertyselectionitems`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsRead
     * @name UserCustomPropertySelectionItemsGetUserCustomPropertySelectionItem
     * @summary Get user custom property selection item by ID.
     * @request GET:/v1/users/customproperties/usercustompropertyselectionitems/{guid}
     * @secure
     * @response `200` `UserCustomPropertySelectionItemOutputModel`
     * @response `403` `ExceptionModel` Addon required
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    userCustomPropertySelectionItemsGetUserCustomPropertySelectionItem: (guid: string, params: RequestParams = {}) =>
      this.request<UserCustomPropertySelectionItemOutputModel, ExceptionModel | void>({
        path: `/v1/users/customproperties/usercustompropertyselectionitems/${guid}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsWrite
     * @name UserCustomPropertySelectionItemsPatchUserCustomPropertySelectionItem
     * @summary Update (Patch) a user custom property selection item or a part of it.
     * @request PATCH:/v1/users/customproperties/usercustompropertyselectionitems/{guid}
     * @secure
     * @response `200` `(UserCustomPropertySelectionItemOutputModel)[]` List of updated user custom properties.
     * @response `403` `ExceptionModel` Addon required
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    userCustomPropertySelectionItemsPatchUserCustomPropertySelectionItem: (
      guid: string,
      data: PatchOperation[] | null,
      params: RequestParams = {}
    ) =>
      this.request<UserCustomPropertySelectionItemOutputModel[], ExceptionModel | void>({
        path: `/v1/users/customproperties/usercustompropertyselectionitems/${guid}`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * @description Returns: No Content (204) if succeeded.
     *
     * @tags SettingsDelete
     * @name UserCustomPropertySelectionItemsDeleteUserCustomPropertySelectionItem
     * @summary Deletes a user custom property selection item.
     * @request DELETE:/v1/users/customproperties/usercustompropertyselectionitems/{guid}
     * @secure
     * @response `204` `void`
     * @response `403` `ExceptionModel` Addon required
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    userCustomPropertySelectionItemsDeleteUserCustomPropertySelectionItem: (guid: string, params: RequestParams = {}) =>
      this.request<void, ExceptionModel | void>({
        path: `/v1/users/customproperties/usercustompropertyselectionitems/${guid}`,
        method: 'DELETE',
        secure: true,
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsWrite
     * @name UserCustomPropertySelectionItemsPostUserCustomPropertySelectionItem
     * @summary Insert a user custom property selection item.
     * @request POST:/v1/users/customproperties/usercustompropertyselectionitems
     * @secure
     * @response `201` `UserCustomPropertySelectionItemOutputModel` Created user custom property.
     * @response `403` `ExceptionModel` Addon required
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    userCustomPropertySelectionItemsPostUserCustomPropertySelectionItem: (
      data: UserCustomPropertySelectionItemInputModel | null,
      params: RequestParams = {}
    ) =>
      this.request<UserCustomPropertySelectionItemOutputModel, ExceptionModel | void>({
        path: `/v1/users/customproperties/usercustompropertyselectionitems`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsRead, UsersRead
     * @name WorkContractsGetWorkContract
     * @summary Get work contract by ID.
     * @request GET:/v1/workcontracts/{guid}
     * @secure
     * @response `200` `WorkContractOutputModel`
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    workContractsGetWorkContract: (guid: string, params: RequestParams = {}) =>
      this.request<WorkContractOutputModel, void | ExceptionModel>({
        path: `/v1/workcontracts/${guid}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsWrite, UsersWrite
     * @name WorkContractsPatchWorkContract
     * @summary Update (Patch) a work contract or a part of it.
     * @request PATCH:/v1/workcontracts/{guid}
     * @secure
     * @response `200` `(WorkContractOutputModel)[]` list of updated work contract.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    workContractsPatchWorkContract: (guid: string, data: PatchOperation[] | null, params: RequestParams = {}) =>
      this.request<WorkContractOutputModel[], void | ExceptionModel>({
        path: `/v1/workcontracts/${guid}`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * @description Returns: No Content (204) if succeeded. Not found (404) if work contract can't be found.
     *
     * @tags SettingsDelete, UsersDelete
     * @name WorkContractsDeleteWorkContract
     * @summary Delete a work contract.
     * @request DELETE:/v1/workcontracts/{guid}
     * @secure
     * @response `204` `void`
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    workContractsDeleteWorkContract: (guid: string, params: RequestParams = {}) =>
      this.request<void, void | ExceptionModel>({
        path: `/v1/workcontracts/${guid}`,
        method: 'DELETE',
        secure: true,
        ...params
      }),

    /**
     * No description
     *
     * @tags UsersRead
     * @name WorkContractsGetCurrentWorkContractForUser
     * @summary Gets current work contract for the user
     * @request GET:/v1/users/{userGuid}/workcontracts/current
     * @secure
     * @response `200` `WorkContractOutputModel` Work contracts
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    workContractsGetCurrentWorkContractForUser: (userGuid: string, params: RequestParams = {}) =>
      this.request<WorkContractOutputModel, void | ExceptionModel>({
        path: `/v1/users/${userGuid}/workcontracts/current`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags UsersRead
     * @name WorkContractsGetWorkContractsForUser
     * @summary Get all the work contracts for the user.
     * @request GET:/v1/users/{userGuid}/workcontracts
     * @secure
     * @response `200` `(WorkContractOutputModel)[]` Work contracts.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    workContractsGetWorkContractsForUser: (userGuid: string, params: RequestParams = {}) =>
      this.request<WorkContractOutputModel[], void | ExceptionModel>({
        path: `/v1/users/${userGuid}/workcontracts`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsWrite, UsersWrite
     * @name WorkContractsPostWorkContract
     * @summary Insert a work contract.
     * @request POST:/v1/workcontracts
     * @secure
     * @response `201` `WorkContractOutputModel` Created work contract.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    workContractsPostWorkContract: (
      data: WorkContractInputModel | null,
      query?: {
        /**
         * Optional. Reset flextime to zero when new work contract starts or keep the flextime value. Default true = reset flextime.
         * @default true
         */
        resetFlextime?: boolean;
      },
      params: RequestParams = {}
    ) =>
      this.request<WorkContractOutputModel, void | ExceptionModel>({
        path: `/v1/workcontracts`,
        method: 'POST',
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsRead
     * @name WorkHourPricesGetWorkHourPrice
     * @summary Get work hour price by ID.
     * @request GET:/v1/workhourprices/{guid}
     * @secure
     * @response `200` `WorkHourPriceOutputModel`
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    workHourPricesGetWorkHourPrice: (guid: string, params: RequestParams = {}) =>
      this.request<WorkHourPriceOutputModel, void | ExceptionModel>({
        path: `/v1/workhourprices/${guid}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsRead
     * @name WorkHourPricesGetWorkHourPrices
     * @summary Get all the workHourPrices for a price list version.
     * @request GET:/v1/pricelistversions/{pricelistVersionGuid}/workhourprices
     * @secure
     * @response `200` `WorkHourPriceOutputModel` workHourPrices.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    workHourPricesGetWorkHourPrices: (
      pricelistVersionGuid: string,
      query?: {
        /** Optional: page token to fetch the next page.. */
        pageToken?: string | null;
        /**
         * Optional: How many rows to fetch, Default 20, maximum 100.
         * @format int32
         */
        rowCount?: number | null;
        /**
         * Optional: Get prices that have been added or changed after this date time (greater or equal).
         * @format date-time
         */
        changedSince?: string | null;
      },
      params: RequestParams = {}
    ) =>
      this.request<WorkHourPriceOutputModel, void | ExceptionModel>({
        path: `/v1/pricelistversions/${pricelistVersionGuid}/workhourprices`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsRead
     * @name CustomerCustomPropertiesGetCustomerCustomProperties
     * @summary Get the customer custom properties.
     * @request GET:/v1/customers/customproperties
     * @secure
     * @response `200` `(CustomPropertyModel)[]`
     * @response `403` `ExceptionModel` Addon required
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    customerCustomPropertiesGetCustomerCustomProperties: (
      query?: {
        /**
         * Optional: first row to fetch. Default 0 = first row.
         * @format int32
         * @default 0
         */
        firstRow?: number | null;
        /**
         * Optional: How many rows to fetch, Default 20, maximum 100.
         * @format int32
         */
        rowCount?: number | null;
        /** Optional: Get only active or inactive customer properties. */
        active?: boolean | null;
        /**
         * Optional: Text to search from custom property name.
         * @default ""
         */
        textToSearch?: string | null;
        /** Optional: Is the customer property used in any custom property usage. */
        isInUse?: boolean | null;
        /**
         * Optional: Calculate total number of rows.
         * @default false
         */
        calculateRowCount?: boolean;
        /** Optional: A list of Key-Value pairs, containing names of fields and directions by which the results should be sorted. Any sortable field name (sub-model fields not supported) in the model can be used, while value can be "Desc" or "Asc". Example: "?sortings[0].key=Name&sortings[0].value=Desc&sortings[1].key=Number&sortings[1].value=Asc". */
        sortings?: KeyValuePairOfStringAndSortDirection[] | null;
      },
      params: RequestParams = {}
    ) =>
      this.request<CustomPropertyModel[], ExceptionModel | void>({
        path: `/v1/customers/customproperties`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsWrite
     * @name CustomerCustomPropertiesPostCustomerCustomProperty
     * @summary Insert a customer custom property.
     * @request POST:/v1/customers/customproperties
     * @secure
     * @response `201` `(CustomPropertyModel)[]` Created customer custom property.
     * @response `403` `ExceptionModel` Addon required
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    customerCustomPropertiesPostCustomerCustomProperty: (data: CustomPropertyModel | null, params: RequestParams = {}) =>
      this.request<CustomPropertyModel[], ExceptionModel | void>({
        path: `/v1/customers/customproperties`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsRead
     * @name CustomerCustomPropertiesGetCustomerCustomProperty
     * @summary Get customer custom property by ID.
     * @request GET:/v1/customers/customproperties/{guid}
     * @secure
     * @response `200` `CustomPropertyModel`
     * @response `403` `ExceptionModel` Addon required
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    customerCustomPropertiesGetCustomerCustomProperty: (guid: string, params: RequestParams = {}) =>
      this.request<CustomPropertyModel, ExceptionModel | void>({
        path: `/v1/customers/customproperties/${guid}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsWrite
     * @name CustomerCustomPropertiesPatchCustomerCustomProperty
     * @summary Update (Patch) a customer custom property or a part of it.
     * @request PATCH:/v1/customers/customproperties/{guid}
     * @secure
     * @response `200` `(CustomPropertyModel)[]` List of updated customer custom properties.
     * @response `403` `ExceptionModel` Addon required
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    customerCustomPropertiesPatchCustomerCustomProperty: (guid: string, data: PatchOperation[] | null, params: RequestParams = {}) =>
      this.request<CustomPropertyModel[], ExceptionModel | void>({
        path: `/v1/customers/customproperties/${guid}`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * @description Returns: No Content (204) if succeeded.
     *
     * @tags SettingsDelete
     * @name CustomerCustomPropertiesDeleteCustomerCustomProperty
     * @summary Deletes a customer custom property.
     * @request DELETE:/v1/customers/customproperties/{guid}
     * @secure
     * @response `204` `void`
     * @response `403` `ExceptionModel` Addon required
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    customerCustomPropertiesDeleteCustomerCustomProperty: (guid: string, params: RequestParams = {}) =>
      this.request<void, ExceptionModel | void>({
        path: `/v1/customers/customproperties/${guid}`,
        method: 'DELETE',
        secure: true,
        ...params
      }),

    /**
     * No description
     *
     * @tags CustomersRead
     * @name CustomerCustomValuesGetCustomerCustomValues
     * @summary Get the customer custom values.
     * @request GET:/v1/customers/{customerGuid}/customvalues
     * @secure
     * @response `200` `(CustomerCustomValueModel)[]`
     * @response `403` `ExceptionModel` Addon required
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    customerCustomValuesGetCustomerCustomValues: (
      customerGuid: string,
      query?: {
        /**
         * Optional: first row to fetch. Default 0 = first row.
         * @format int32
         * @default 0
         */
        firstRow?: number | null;
        /**
         * Optional: How many rows to fetch, Default 20, maximum 100.
         * @format int32
         */
        rowCount?: number | null;
        /** Optional: Get only values of active or inactive customer custom properties. */
        active?: boolean | null;
        /** List of target for which to get the values. */
        target?: string[] | null;
        /**
         * Optional: Calculate total number of rows.
         * @default false
         */
        calculateRowCount?: boolean;
        /** Optional: A list of Key-Value pairs, containing names of fields and directions by which the results should be sorted. Any sortable field name (sub-model fields not supported) in the model can be used, while value can be "Desc" or "Asc". Example: "?sortings[0].key=Name&sortings[0].value=Desc&sortings[1].key=Number&sortings[1].value=Asc". */
        sortings?: KeyValuePairOfStringAndSortDirection[] | null;
      },
      params: RequestParams = {}
    ) =>
      this.request<CustomerCustomValueModel[], ExceptionModel | void>({
        path: `/v1/customers/${customerGuid}/customvalues`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags CustomersRead
     * @name CustomerCustomValuesGetCustomerCustomValue
     * @summary Get customer custom value by ID.
     * @request GET:/v1/customers/customvalues/{guid}
     * @secure
     * @response `200` `CustomerCustomValueModel`
     * @response `403` `ExceptionModel` Addon required
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    customerCustomValuesGetCustomerCustomValue: (guid: string, params: RequestParams = {}) =>
      this.request<CustomerCustomValueModel, ExceptionModel | void>({
        path: `/v1/customers/customvalues/${guid}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags CustomersWrite
     * @name CustomerCustomValuesPatchCustomerCustomValue
     * @summary Update (Patch) a customer custom value or a part of it.
     * @request PATCH:/v1/customers/customvalues/{guid}
     * @secure
     * @response `200` `(CustomerCustomValueModel)[]` List of updated customer custom values.
     * @response `403` `ExceptionModel` Addon required
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    customerCustomValuesPatchCustomerCustomValue: (guid: string, data: PatchOperation[] | null, params: RequestParams = {}) =>
      this.request<CustomerCustomValueModel[], ExceptionModel | void>({
        path: `/v1/customers/customvalues/${guid}`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * @description Returns: No Content (204) if succeeded.
     *
     * @tags CustomersDelete
     * @name CustomerCustomValuesDeleteCustomerCustomValue
     * @summary Deletes a customer custom value.
     * @request DELETE:/v1/customers/customvalues/{guid}
     * @secure
     * @response `204` `void`
     * @response `403` `ExceptionModel` Addon required
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    customerCustomValuesDeleteCustomerCustomValue: (guid: string, params: RequestParams = {}) =>
      this.request<void, ExceptionModel | void>({
        path: `/v1/customers/customvalues/${guid}`,
        method: 'DELETE',
        secure: true,
        ...params
      }),

    /**
     * No description
     *
     * @tags CustomersWrite
     * @name CustomerCustomValuesPostCustomerCustomValue
     * @summary Insert a customer custom value.
     * @request POST:/v1/customers/customvalues
     * @secure
     * @response `201` `(CustomerCustomValueModel)[]` Created customer custom value.
     * @response `403` `ExceptionModel` Addon required
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    customerCustomValuesPostCustomerCustomValue: (data: CustomerCustomValueModel | null, params: RequestParams = {}) =>
      this.request<CustomerCustomValueModel[], ExceptionModel | void>({
        path: `/v1/customers/customvalues`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsRead
     * @name ProjectCustomPropertiesGetProjectCustomProperties
     * @summary Get the project custom properties.
     * @request GET:/v1/projects/customproperties
     * @secure
     * @response `200` `(CustomPropertyModel)[]`
     * @response `403` `ExceptionModel` Addon required
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    projectCustomPropertiesGetProjectCustomProperties: (
      query?: {
        /**
         * Optional: first row to fetch. Default 0 = first row.
         * @format int32
         * @default 0
         */
        firstRow?: number | null;
        /**
         * Optional: How many rows to fetch, Default 20, maximum 100.
         * @format int32
         */
        rowCount?: number | null;
        /** Optional: Get only active or inactive project properties. */
        active?: boolean | null;
        /**
         * Optional: Text to search from custom property name.
         * @default ""
         */
        textToSearch?: string | null;
        /** Optional: Is the customer property used in any custom property usage. */
        isInUse?: boolean | null;
        /**
         * Optional: Calculate total number of rows.
         * @default false
         */
        calculateRowCount?: boolean;
        /** Optional: A list of Key-Value pairs, containing names of fields and directions by which the results should be sorted. Any sortable field name (sub-model fields not supported) in the model can be used, while value can be "Desc" or "Asc". Example: "?sortings[0].key=Name&sortings[0].value=Desc&sortings[1].key=Number&sortings[1].value=Asc". */
        sortings?: KeyValuePairOfStringAndSortDirection[] | null;
      },
      params: RequestParams = {}
    ) =>
      this.request<CustomPropertyModel[], ExceptionModel | void>({
        path: `/v1/projects/customproperties`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsWrite
     * @name ProjectCustomPropertiesPostProjectCustomProperty
     * @summary Insert a project custom property.
     * @request POST:/v1/projects/customproperties
     * @secure
     * @response `201` `(CustomPropertyModel)[]` Created project custom property.
     * @response `403` `ExceptionModel` Addon required
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    projectCustomPropertiesPostProjectCustomProperty: (data: CustomPropertyModel | null, params: RequestParams = {}) =>
      this.request<CustomPropertyModel[], ExceptionModel | void>({
        path: `/v1/projects/customproperties`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsRead
     * @name ProjectCustomPropertiesGetProjectCustomProperty
     * @summary Get project custom property by ID.
     * @request GET:/v1/projects/customproperties/{guid}
     * @secure
     * @response `200` `CustomPropertyModel`
     * @response `403` `ExceptionModel` Addon required
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    projectCustomPropertiesGetProjectCustomProperty: (guid: string, params: RequestParams = {}) =>
      this.request<CustomPropertyModel, ExceptionModel | void>({
        path: `/v1/projects/customproperties/${guid}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsWrite
     * @name ProjectCustomPropertiesPatchProjectCustomProperty
     * @summary Update (Patch) a project custom property or a part of it.
     * @request PATCH:/v1/projects/customproperties/{guid}
     * @secure
     * @response `200` `(CustomPropertyModel)[]` List of updated project custom properties.
     * @response `403` `ExceptionModel` Addon required
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    projectCustomPropertiesPatchProjectCustomProperty: (guid: string, data: PatchOperation[] | null, params: RequestParams = {}) =>
      this.request<CustomPropertyModel[], ExceptionModel | void>({
        path: `/v1/projects/customproperties/${guid}`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * @description Returns: No Content (204) if succeeded.
     *
     * @tags SettingsDelete
     * @name ProjectCustomPropertiesDeleteProjectCustomProperty
     * @summary Deletes a project custom property.
     * @request DELETE:/v1/projects/customproperties/{guid}
     * @secure
     * @response `204` `void`
     * @response `403` `ExceptionModel` Addon required
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    projectCustomPropertiesDeleteProjectCustomProperty: (guid: string, params: RequestParams = {}) =>
      this.request<void, ExceptionModel | void>({
        path: `/v1/projects/customproperties/${guid}`,
        method: 'DELETE',
        secure: true,
        ...params
      }),

    /**
     * No description
     *
     * @tags ProjectsRead
     * @name ProjectCustomValuesGetProjectCustomValues
     * @summary Get the project custom values.
     * @request GET:/v1/projects/{projectGuid}/customvalues
     * @secure
     * @response `200` `(ProjectCustomValueModel)[]`
     * @response `403` `ExceptionModel` Addon required
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    projectCustomValuesGetProjectCustomValues: (
      projectGuid: string,
      query?: {
        /**
         * Optional: first row to fetch. Default 0 = first row.
         * @format int32
         * @default 0
         */
        firstRow?: number | null;
        /**
         * Optional: How many rows to fetch, Default 20, maximum 100.
         * @format int32
         */
        rowCount?: number | null;
        /** Optional: Get only values of active or inactive project custom properties. */
        active?: boolean | null;
        /** List of target for which to get the values. */
        target?: string[] | null;
        /**
         * Optional: Calculate total number of rows.
         * @default false
         */
        calculateRowCount?: boolean;
        /** Optional: A list of Key-Value pairs, containing names of fields and directions by which the results should be sorted. Any sortable field name (sub-model fields not supported) in the model can be used, while value can be "Desc" or "Asc". Example: "?sortings[0].key=Name&sortings[0].value=Desc&sortings[1].key=Number&sortings[1].value=Asc". */
        sortings?: KeyValuePairOfStringAndSortDirection[] | null;
      },
      params: RequestParams = {}
    ) =>
      this.request<ProjectCustomValueModel[], ExceptionModel | void>({
        path: `/v1/projects/${projectGuid}/customvalues`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags ProjectsRead
     * @name ProjectCustomValuesGetProjectCustomValue
     * @summary Get project custom value by ID.
     * @request GET:/v1/projects/customvalues/{guid}
     * @secure
     * @response `200` `ProjectCustomValueModel`
     * @response `403` `ExceptionModel` Addon required
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    projectCustomValuesGetProjectCustomValue: (guid: string, params: RequestParams = {}) =>
      this.request<ProjectCustomValueModel, ExceptionModel | void>({
        path: `/v1/projects/customvalues/${guid}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags ProjectsWrite
     * @name ProjectCustomValuesPatchProjectCustomValue
     * @summary Update (Patch) a project custom value or a part of it.
     * @request PATCH:/v1/projects/customvalues/{guid}
     * @secure
     * @response `200` `(ProjectCustomValueModel)[]` List of updated project custom values.
     * @response `403` `ExceptionModel` Addon required
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    projectCustomValuesPatchProjectCustomValue: (guid: string, data: PatchOperation[] | null, params: RequestParams = {}) =>
      this.request<ProjectCustomValueModel[], ExceptionModel | void>({
        path: `/v1/projects/customvalues/${guid}`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * @description Returns: No Content (204) if succeeded.
     *
     * @tags ProjectsDelete
     * @name ProjectCustomValuesDeleteProjectCustomValue
     * @summary Deletes a project custom value.
     * @request DELETE:/v1/projects/customvalues/{guid}
     * @secure
     * @response `204` `void`
     * @response `403` `ExceptionModel` Addon required
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    projectCustomValuesDeleteProjectCustomValue: (guid: string, params: RequestParams = {}) =>
      this.request<void, ExceptionModel | void>({
        path: `/v1/projects/customvalues/${guid}`,
        method: 'DELETE',
        secure: true,
        ...params
      }),

    /**
     * No description
     *
     * @tags ProjectsWrite
     * @name ProjectCustomValuesPostProjectCustomValue
     * @summary Insert a project custom value.
     * @request POST:/v1/projects/customvalues
     * @secure
     * @response `201` `(ProjectCustomValueModel)[]` Created project custom value.
     * @response `403` `ExceptionModel` Addon required
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    projectCustomValuesPostProjectCustomValue: (data: ProjectCustomValueModel | null, params: RequestParams = {}) =>
      this.request<ProjectCustomValueModel[], ExceptionModel | void>({
        path: `/v1/projects/customvalues`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsRead
     * @name ActivityTypesGetActivityTypes
     * @summary Get the Activity Types
     * @request GET:/v1/activitytypes
     * @secure
     * @response `200` `(ActivityTypeModel)[]`
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    activityTypesGetActivityTypes: (
      query?: {
        /** If not given, return all Activity Types, if given as true return only active Activity Types, if given as false returns only inactive Activity Types */
        active?: boolean | null;
        /** Optional: page token to fetch the next page. */
        pageToken?: string | null;
        /**
         * Optional: How many rows to fetch, Default 20, maximum 100.
         * @format int32
         */
        rowCount?: number | null;
        /**
         * Optional: Get activity types that have been added or changed after this date time (greater or equal).
         * @format date-time
         */
        changedSince?: string | null;
        /** Optional: Category or multiple categories of activity types to search for. Default all. */
        category?: ActivityCategory[] | null;
      },
      params: RequestParams = {}
    ) =>
      this.request<ActivityTypeModel[], void | ExceptionModel>({
        path: `/v1/activitytypes`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsWrite
     * @name ActivityTypesPostActivityType
     * @summary Insert an Activity type.
     * @request POST:/v1/activitytypes
     * @secure
     * @response `201` `ActivityTypeModel` Inserted ActivityType
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    activityTypesPostActivityType: (data: ActivityTypeModel | null, params: RequestParams = {}) =>
      this.request<ActivityTypeModel, void | ExceptionModel>({
        path: `/v1/activitytypes`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsRead
     * @name ActivityTypesGetActivityType
     * @summary Get Activity Type by ID
     * @request GET:/v1/activitytypes/{guid}
     * @secure
     * @response `200` `ActivityTypeModel` Activity Type
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    activityTypesGetActivityType: (guid: string, params: RequestParams = {}) =>
      this.request<ActivityTypeModel, void | ExceptionModel>({
        path: `/v1/activitytypes/${guid}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsWrite
     * @name ActivityTypesPatchActivityType
     * @summary Update (Patch) an Activity Type or a part of it
     * @request PATCH:/v1/activitytypes/{guid}
     * @secure
     * @response `200` `(ActivityTypeModel)[]` List of updated Activity Types
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    activityTypesPatchActivityType: (guid: string, data: PatchOperation[] | null, params: RequestParams = {}) =>
      this.request<ActivityTypeModel[], void | ExceptionModel>({
        path: `/v1/activitytypes/${guid}`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * @description Returns: No Content (204) if succeeded. Not found (404) if activity type can't be found.
     *
     * @tags SettingsDelete
     * @name ActivityTypesDeleteActivityType
     * @summary Delete an activity type.
     * @request DELETE:/v1/activitytypes/{guid}
     * @secure
     * @response `204` `void`
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    activityTypesDeleteActivityType: (
      guid: string,
      query?: {
        /** Optional: ID of the activity type to which to move usages of this activity type. Default null. If activity type is in use and usages aren't moved the deletion might fail. */
        moveUsagesToGuid?: string | null;
      },
      params: RequestParams = {}
    ) =>
      this.request<void, void | ExceptionModel>({
        path: `/v1/activitytypes/${guid}`,
        method: 'DELETE',
        query: query,
        secure: true,
        ...params
      }),

    /**
     * No description
     *
     * @tags InvoicesRead
     * @name InvoicesGetInvoices
     * @summary Get Invoices
     * @request GET:/v1/invoices
     * @secure
     * @response `200` `(InvoiceOutputModel)[]` List of Invoices
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    invoicesGetInvoices: (
      query?: {
        /**
         * Optional: Number of rows to fetch.
         * @format int32
         */
        rowCount?: number | null;
        /** Optional: page token to fetch the next page. */
        pageToken?: string | null;
        /**
         * Optional: Get only invoices paid at this date or later. Default: Get invoices regardless of payment date.
         * @format date-time
         */
        paymentDateStart?: string | null;
        /** Optional: Get invoices with this status only. Default: all statuses. */
        invoiceStatusGuids?: string[] | null;
        /** Optional: ID of the project to get the invoices. If not provided, returns for all projects. Default all. */
        projectGuids?: string[] | null;
        /** Optional: ID of the project manager to get the invoices for. If not provided, returns for all project managers. Default all. */
        projectOwnerGuids?: string[] | null;
        /** Optional: ID of the business unit of the project. If not provided, returns for all business units. Default all. */
        projectBusinessUnitGuids?: string[] | null;
        /** Optional: List of customer IDs. Get invoices for these customers. */
        customerGuids?: string[] | null;
        /**
         * Optional: starting date from which to get the invoices. Default all.
         * @format date-time
         */
        startDate?: string | null;
        /**
         * Optional: end date from which to get the invoices. Default all.
         * @format date-time
         */
        endDate?: string | null;
        /**
         * Optional: specifies minimum value for invoice total in organization currency.
         * @format double
         */
        minimumTotalExcludingTax?: number | null;
        /**
         * Optional: specifies maximum value for invoice total in organization currency.
         * @format double
         */
        maximumTotalExcludingTax?: number | null;
        /** Optional: Invoice reference number. If not provided, returns invoices with any invoice reference number. */
        referenceNumbers?: string[] | null;
        /** Optional: Invoice number. If not provided, returns invoices with any invoice number. */
        numbers?: number[] | null;
        /**
         * Optional: Get invoices that have been added or changed after this date time (greater or equal).
         * @format date-time
         */
        changedSince?: string | null;
        /** Optional: ID of the salesperson to get the invoices for. If not provided, returns for all sales persons. */
        salesPersonGuids?: string[] | null;
        /** Optional: ID of the user who created the invoice. If not provided, returns for all users. */
        createdByUserGuids?: string[] | null;
      },
      params: RequestParams = {}
    ) =>
      this.request<InvoiceOutputModel[], void | ExceptionModel>({
        path: `/v1/invoices`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags InvoicesWrite
     * @name InvoicesPostInvoiceCreation
     * @summary Add an invoice to project(s)
     * @request POST:/v1/invoices
     * @secure
     * @response `201` `(InvoiceOutputModel)[]` Created invoice(s)
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    invoicesPostInvoiceCreation: (data: CreateInvoiceModel | null, params: RequestParams = {}) =>
      this.request<InvoiceOutputModel[], void | ExceptionModel>({
        path: `/v1/invoices`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags CustomersRead
     * @name CustomersGetCustomers
     * @summary Get all the customers
     * @request GET:/v1/customers
     * @secure
     * @response `200` `(CustomerModel)[]` All the customers.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    customersGetCustomers: (
      query?: {
        pageToken?: string | null;
        /**
         * Optional: How many rows to fetch.
         * @format int32
         */
        rowCount?: number | null;
        /** If not given, return all Customers, if given as true return only active Customers, if given as false returns only inactive Customers. */
        isActive?: boolean | null;
        /** Optional: List of customer owner ids to search for. Default all. */
        customerOwnerGuids?: string[] | null;
        /** Optional: When true returns only internal customer. */
        isInternal?: boolean | null;
        /** Optional: List of customer numbers. */
        numbers?: number[] | null;
        /**
         * Optional: Get customers that have been added or changed after this date time (greater or equal).
         * @format date-time
         */
        changedSince?: string | null;
        /** Optional: Get customers where email address matches to any provided email address. */
        emailAddresses?: string[] | null;
        /** Optional: Get customers where customer name matches to any provided customer name. */
        customerNames?: string[] | null;
        /** Optional: Get customers based on VAT number with exact match. */
        vatNumber?: string | null;
        /** Optional: Get customers based on KVK number with exact match. */
        kvkNumber?: string | null;
      },
      params: RequestParams = {}
    ) =>
      this.request<CustomerModel[], void | ExceptionModel>({
        path: `/v1/customers`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags CustomersWrite
     * @name CustomersPostCustomer
     * @summary Insert a customer.
     * @request POST:/v1/customers
     * @secure
     * @response `201` `CustomerModel` Inserted customer.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    customersPostCustomer: (data: CustomerModel | null, params: RequestParams = {}) =>
      this.request<CustomerModel, void | ExceptionModel>({
        path: `/v1/customers`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags InvoicesRead
     * @name InvoiceSettingsGetInvoiceSettings
     * @summary Get invoice settings by invoice GUID
     * @request GET:/v1/invoices/{invoiceGuid}/invoicesettings
     * @secure
     * @response `200` `InvoiceSettingsOutputModel` InvoiceSettingsOutputModel
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    invoiceSettingsGetInvoiceSettings: (invoiceGuid: string, params: RequestParams = {}) =>
      this.request<InvoiceSettingsOutputModel, void | ExceptionModel>({
        path: `/v1/invoices/${invoiceGuid}/invoicesettings`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags InvoicesWrite
     * @name InvoiceSettingsPatchInvoiceSettings
     * @summary Update (Patch) invoice setting
     * @request PATCH:/v1/invoicesettings/{guid}
     * @secure
     * @response `200` `InvoiceSettingsOutputModel` InvoiceSettingsOutputModel
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    invoiceSettingsPatchInvoiceSettings: (guid: string, data: PatchOperation[] | null, params: RequestParams = {}) =>
      this.request<InvoiceSettingsOutputModel, void | ExceptionModel>({
        path: `/v1/invoicesettings/${guid}`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags InvoicesRead
     * @name InvoiceRowsGetInvoiceRows
     * @summary Get invoice rows
     * @request GET:/v1/invoicerows
     * @secure
     * @response `200` `(InvoiceRowOutputModel)[]`
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    invoiceRowsGetInvoiceRows: (
      query?: {
        /** Optional: page token to fetch the next page. */
        pageToken?: string | null;
        /**
         * Optional: How many rows to fetch, Default 20, maximum 100.
         * @format int32
         */
        rowCount?: number | null;
        /**
         * Optional: Get invoice rows that have been added or changed after this date time (greater or equal).
         * @format date-time
         */
        changedSince?: string | null;
      },
      params: RequestParams = {}
    ) =>
      this.request<InvoiceRowOutputModel[], void | ExceptionModel>({
        path: `/v1/invoicerows`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags InvoicesRead
     * @name InvoiceRowsGetInvoiceRowsForInvoice
     * @summary Get Invoice rows for an invoice.
     * @request GET:/v1/invoices/{invoiceGuid}/invoicerows
     * @secure
     * @response `200` `(InvoiceRowOutputModel)[]` List of Invoice rows
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    invoiceRowsGetInvoiceRowsForInvoice: (
      invoiceGuid: string,
      query?: {
        /** Optional: page token to fetch the next page. */
        pageToken?: string | null;
        /**
         * Optional: How many rows to fetch, Default 20, maximum 100.
         * @format int32
         */
        rowCount?: number | null;
        /** Optional: Type of the row. Either Hours or ProjectFees, Default all. */
        rowType?: InvoiceRowType;
      },
      params: RequestParams = {}
    ) =>
      this.request<InvoiceRowOutputModel[], void | ExceptionModel>({
        path: `/v1/invoices/${invoiceGuid}/invoicerows`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags InvoicesRead
     * @name InvoiceRowsGetInvoiceRow
     * @summary Get invoice row by ID
     * @request GET:/v1/invoicerows/{guid}
     * @secure
     * @response `200` `InvoiceRowOutputModel` Invoice row
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    invoiceRowsGetInvoiceRow: (guid: string, params: RequestParams = {}) =>
      this.request<InvoiceRowOutputModel, void | ExceptionModel>({
        path: `/v1/invoicerows/${guid}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description If CostCenterNumber, SalesAccountNumber or RecurringSalesAccountNumber are changed and the invoice row is related to one or many ProjectFees or ProjectTravelExpenses, the values for those will also be updated.
     *
     * @tags InvoicesWrite
     * @name InvoiceRowsPatchInvoiceRow
     * @summary Update (Patch) a invoice row or a part of it
     * @request PATCH:/v1/invoicerows/{guid}
     * @secure
     * @response `200` `(InvoiceRowOutputModel)[]` List of updated invoice rows
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    invoiceRowsPatchInvoiceRow: (guid: string, data: PatchOperation[] | null, params: RequestParams = {}) =>
      this.request<InvoiceRowOutputModel[], void | ExceptionModel>({
        path: `/v1/invoicerows/${guid}`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * @description Returns: No Content (204) if succeeded.
     *
     * @tags InvoicesDelete
     * @name InvoiceRowsDeleteInvoiceRow
     * @summary Deletes an invoice row
     * @request DELETE:/v1/invoicerows/{guid}
     * @secure
     * @response `204` `void`
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    invoiceRowsDeleteInvoiceRow: (
      guid: string,
      query?: {
        /** @default false */
        setAsNonBillable?: boolean;
      },
      params: RequestParams = {}
    ) =>
      this.request<void, void | ExceptionModel>({
        path: `/v1/invoicerows/${guid}`,
        method: 'DELETE',
        query: query,
        secure: true,
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsRead
     * @name LanguagesGetLanguages
     * @summary Get all the languages
     * @request GET:/v1/localization/languages
     * @secure
     * @response `200` `(LanguageModel)[]` All the Languages
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    languagesGetLanguages: (
      query?: {
        /** Optional: which languages to fetch. only invoice languages or non invoice languages?, default all. */
        isInvoiceLanguage?: boolean | null;
      },
      params: RequestParams = {}
    ) =>
      this.request<LanguageModel[], void | ExceptionModel>({
        path: `/v1/localization/languages`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsRead
     * @name LanguagesGetLanguage
     * @summary Get language by ID
     * @request GET:/v1/localization/languages/{guid}
     * @secure
     * @response `200` `LanguageModel` Language
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    languagesGetLanguage: (guid: string, params: RequestParams = {}) =>
      this.request<LanguageModel, void | ExceptionModel>({
        path: `/v1/localization/languages/${guid}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags OrganizationRead
     * @name OrganizationDetailsGetOrganizationDetails
     * @summary Get the details of organization.
     * @request GET:/v1/organizationdetails
     * @secure
     * @response `200` `OrganizationDetailsOutputModel` Organization
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    organizationDetailsGetOrganizationDetails: (params: RequestParams = {}) =>
      this.request<OrganizationDetailsOutputModel, void | ExceptionModel>({
        path: `/v1/organizationdetails`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags OrganizationWrite
     * @name OrganizationDetailsPatchOrganizationDetails
     * @summary Update (Patch) a organization details or a part of it
     * @request PATCH:/v1/organizationdetails
     * @secure
     * @response `200` `OrganizationDetailsOutputModel` organization details
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    organizationDetailsPatchOrganizationDetails: (data: PatchOperation[] | null, params: RequestParams = {}) =>
      this.request<OrganizationDetailsOutputModel, void | ExceptionModel>({
        path: `/v1/organizationdetails`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * @description Use root phase to get project members.
     *
     * @tags ProjectsRead
     * @name PhaseMembersGetPhaseMembers
     * @summary Get phase members
     * @request GET:/v1/phases/{phaseGuid}/phasemembers
     * @secure
     * @response `200` `(PhaseMemberOutputModel)[]` All the phase members
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    phaseMembersGetPhaseMembers: (
      phaseGuid: string,
      query?: {
        /** Optional: Page token to fetch the next page. */
        pageToken?: string | null;
        /**
         * Optional: How many rows to fetch.
         * @format int32
         */
        rowCount?: number | null;
        /** Optional: Is the member active on the phase. Filters only root phase members. Default nothing = all. */
        isActive?: boolean | null;
        /** Optional: Is the user active. Default nothing = all. */
        isUserActive?: boolean | null;
      },
      params: RequestParams = {}
    ) =>
      this.request<PhaseMemberOutputModel[], void | ExceptionModel>({
        path: `/v1/phases/${phaseGuid}/phasemembers`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description Use root phase to get project members.
     *
     * @tags ProjectsRead
     * @name PhaseMembersGetAllPhaseMembers
     * @summary Get all active phase members
     * @request GET:/v1/phasemembers
     * @secure
     * @response `200` `(PhaseMemberOutputModel)[]` All the phase members
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    phaseMembersGetAllPhaseMembers: (
      query?: {
        /**
         * Optional: Get phase members that have been added or changed after this date time (greater or equal).
         * @format date-time
         */
        changedSince?: string | null;
        /** Optional: Page token to fetch the next page. */
        pageToken?: string | null;
        /**
         * Optional: How many rows to fetch.
         * @format int32
         */
        rowCount?: number | null;
        /** Optional: Is the user active. Default nothing = all. */
        isUserActive?: boolean | null;
      },
      params: RequestParams = {}
    ) =>
      this.request<PhaseMemberOutputModel[], void | ExceptionModel>({
        path: `/v1/phasemembers`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description User is always added as a root phase (project) member also.
     *
     * @tags ProjectsWrite
     * @name PhaseMembersPostPhaseMember
     * @summary Adds a phase member.
     * @request POST:/v1/phasemembers
     * @secure
     * @response `201` `PhaseMemberModel` Added member.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    phaseMembersPostPhaseMember: (
      data: PhaseMemberModel | null,
      query?: {
        /**
         * Optional: Add member to all sub phases. Default true.
         * @default true
         */
        addToAllSubPhases?: boolean;
      },
      params: RequestParams = {}
    ) =>
      this.request<PhaseMemberModel, void | ExceptionModel>({
        path: `/v1/phasemembers`,
        method: 'POST',
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * @description Use root phase to get project members.
     *
     * @tags ProjectsRead
     * @name PhaseMembersGetAllDeletedPhaseMembers
     * @summary Get all deleted phase members
     * @request GET:/v1/deletedphasemembers
     * @secure
     * @response `200` `(DeletedPhaseMemberOutputModel)[]` All the phase members
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    phaseMembersGetAllDeletedPhaseMembers: (
      query?: {
        /**
         * Optional: Get phase members that have been added or changed after this date time (greater or equal).
         * @format date-time
         */
        deletedSince?: string | null;
        /** Optional: Page token to fetch the next page. */
        pageToken?: string | null;
        /**
         * Optional: How many rows to fetch.
         * @format int32
         */
        rowCount?: number | null;
        /** Optional: Is the user active. Default nothing = all. */
        isUserActive?: boolean | null;
      },
      params: RequestParams = {}
    ) =>
      this.request<DeletedPhaseMemberOutputModel[], void | ExceptionModel>({
        path: `/v1/deletedphasemembers`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags ProjectsRead
     * @name PhasesGetPhases
     * @summary Get the phases.
     * @request GET:/v1/phases
     * @secure
     * @response `200` `(PhaseOutputModel)[]`
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    phasesGetPhases: (
      query?: {
        /** Optional: page token to fetch the next page. */
        pageToken?: string | null;
        /**
         * Optional: How many rows to fetch, Default 20, maximum 100.
         * @format int32
         */
        rowCount?: number | null;
        /**
         * Optional: Get phases that have been added or changed after this date time (greater or equal).
         * @format date-time
         */
        changedSince?: string | null;
        /**
         * Optional: Code of the phase.
         * @default ""
         */
        code?: string | null;
        /** Optional: List of project ids. */
        projectGuids?: string[] | null;
      },
      params: RequestParams = {}
    ) =>
      this.request<PhaseOutputModel[], void | ExceptionModel>({
        path: `/v1/phases`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags ProjectsWrite
     * @name PhasesPostPhase
     * @summary Insert a phase
     * @request POST:/v1/phases
     * @secure
     * @response `201` `PhaseOutputModel` Created phase
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    phasesPostPhase: (data: PhaseInputModel | null, params: RequestParams = {}) =>
      this.request<PhaseOutputModel, void | ExceptionModel>({
        path: `/v1/phases`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags ProjectsRead
     * @name PhasesGetPhase
     * @summary Get phase by ID
     * @request GET:/v1/phases/{guid}
     * @secure
     * @response `200` `PhaseOutputModel`
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    phasesGetPhase: (guid: string, params: RequestParams = {}) =>
      this.request<PhaseOutputModel, void | ExceptionModel>({
        path: `/v1/phases/${guid}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags ProjectsWrite
     * @name PhasesPatchPhase
     * @summary Update (Patch) a phase or a part of it
     * @request PATCH:/v1/phases/{guid}
     * @secure
     * @response `200` `(PhaseOutputModel)[]` Updated phase
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    phasesPatchPhase: (guid: string, data: PatchOperation[] | null, params: RequestParams = {}) =>
      this.request<PhaseOutputModel[], void | ExceptionModel>({
        path: `/v1/phases/${guid}`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * @description Returns: No Content (204) if succeeded.
     *
     * @tags ProjectsDelete
     * @name PhasesDeletePhase
     * @summary Deletes a phase
     * @request DELETE:/v1/phases/{guid}
     * @secure
     * @response `204` `void`
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    phasesDeletePhase: (guid: string, params: RequestParams = {}) =>
      this.request<void, void | ExceptionModel>({
        path: `/v1/phases/${guid}`,
        method: 'DELETE',
        secure: true,
        ...params
      }),

    /**
     * No description
     *
     * @tags ProjectsRead
     * @name PhasesGetProjectPhases
     * @summary Get project's phases as flat list
     * @request GET:/v1/projects/{guid}/phaseswithhierarchy
     * @secure
     * @response `200` `(PhaseModelWithHierarchyInfo)[]` All the phases for the project
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    phasesGetProjectPhases: (guid: string, params: RequestParams = {}) =>
      this.request<PhaseModelWithHierarchyInfo[], void | ExceptionModel>({
        path: `/v1/projects/${guid}/phaseswithhierarchy`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags ProjectsRead
     * @name PhasesGetRootPhases
     * @summary Get a list of root phases with information about hierarchy.
     * @request GET:/v1/rootphaseswithhierarchy
     * @secure
     * @response `200` `(PhaseOutputModel)[]`
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    phasesGetRootPhases: (
      query?: {
        /** Optional: page token to fetch the next page. */
        pageToken?: string | null;
        /**
         * Optional: How many rows to fetch, Default 20, maximum 100.
         * @format int32
         */
        rowCount?: number | null;
        customerGuids?: string[] | null;
        projectGuids?: string[] | null;
        projectKeywordGuids?: string[] | null;
        projectStatusTypeGuids?: string[] | null;
        salesPersonGuids?: string[] | null;
        projectOwnerGuids?: string[] | null;
        businessUnitGuids?: string[] | null;
        customerOwnerGuids?: string[] | null;
        salesStatusTypeGuids?: string[] | null;
        openProjects?: boolean | null;
        projectMemberUserGuids?: string[] | null;
      },
      params: RequestParams = {}
    ) =>
      this.request<PhaseOutputModel[], void | ExceptionModel>({
        path: `/v1/rootphaseswithhierarchy`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description Start and end date times accept values of DateTimeOffset type, based on UTF-8 encoding.
     *
     * @tags ActivitiesRead
     * @name ActivitiesGetActivities
     * @summary Get all activities of an organization
     * @request GET:/v1/activities
     * @secure
     * @response `200` `(ActivityModel)[]` Activities for a project
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    activitiesGetActivities: (
      query?: {
        /** Optional: page token to fetch the next page. */
        pageToken?: string | null;
        /**
         * Optional: How many rows to fetch, Default 20, maximum 100.
         * @format int32
         */
        rowCount?: number | null;
        /** Optional: Which activities to fetch - open/closed, Default all. */
        closed?: boolean | null;
        /** Optional: activity category for the activities to be fetched. Should be one of Personal/Absences/CalendarEntry/SalesEvent/Task. Default all. */
        activityCategories?: ActivityCategory[] | null;
        /** Optional: ID of customer. Default all. */
        customerGuids?: string[] | null;
        /**
         * Optional: Include the activities that don't have customer. Default is true.
         * @default true
         */
        includeTasksWithNoCustomer?: boolean;
        /** Optional: ID of the project for the activities to be fetched. If not provided, returns for all projects. Default all. */
        projectGuids?: string[] | null;
        /**
         * Optional: Include the activities that don't have project. Default is true.
         * @default true
         */
        includeTasksWithNoProject?: boolean;
        /** Optional: ID of the business unit of the project based on which activities should be filtered. If not provided, returns for all business units. Default all. */
        projectBusinessUnitGuids?: string[] | null;
        /** Optional: ID of the project manager. If not provided, returns for all project managers. Default all. */
        projectOwnerGuids?: string[] | null;
        /** Optional: ID of the user for the activities to be fetched. If not provided, returns for all users. Default all. */
        userGuids?: string[] | null;
        /**
         * Optional: Include the activities that the user is a member. Effective if userGuid is provided. Default is to not include.
         * @default false
         */
        includeAsMember?: boolean;
        /** Optional: User keyword Ids of activity owner to search for. */
        userKeywordGuids?: string[] | null;
        /**
         * Optional: starting date and time from which to get the activities in user's timezone. Finds all activities that end after the date time. Format "2017-04-12T13%3A20%3A00%2b02%3A00". Default all.
         * @format date-time
         */
        startDateTime?: string | null;
        /**
         * Optional: ending date and time to which to get the activities in user's timezone. Finds all activities that start before or on the date time. Format "2017-04-12T13%3A20%3A00%2b02%3A00". Default all. If activities for one day are fetched, give start date time with time as 00:00 with the offset of the timezone and end time as 23:59:59 with the offset.
         * @format date-time
         */
        endDateTime?: string | null;
        /** Optional: ID of the project task status. Default all. */
        projectTaskStatusGuids?: string[] | null;
        /** Optional: ID of the phase for the activities to be fetched. If not provided, returns for all phases. Default all. */
        phaseGuids?: string[] | null;
        /**
         * Optional: If one phase guid is given include activities also from sub phases. If multiple phase guids are given, returns activities only for those regardless of this parameter. Default false.
         * @default false
         */
        includeSubPhases?: boolean;
        /** Optional: ID of the contact for the activities to be fetched. If not provided, returns for all users. Default all. */
        contactGuids?: string[] | null;
        /** Optional: has duration flag for the activity. Default all. */
        hasDuration?: boolean | null;
        /** Optional: has any work hour entries associated with the activity. Default all. */
        hasHours?: boolean | null;
        /** Optional: is the activity unassigned. Default all. */
        isUnassigned?: boolean | null;
        /**
         * Optional: Get activities that have been added or changed after this date time (greater or equal).
         * @format date-time
         */
        changedSince?: string | null;
        /**
         * Optional: If given as true returns activities that start after start time and end before end time. If given as false returns activities that start before end time and end after start time. Limit are included in both cases. Default false.
         * @default false
         */
        useStrictStartAndEndDateTime?: boolean;
        /** Optional: ID of the project activity type. Default all. */
        activityTypeGuids?: string[] | null;
        /** Optional: Type of the recurrence. Default returns all not recurring activities, instances and exceptions. (None = not recurring activity) */
        recurrenceType?: RecurrenceType;
      },
      params: RequestParams = {}
    ) =>
      this.request<ActivityModel[], void | ExceptionModel>({
        path: `/v1/activities`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags ActivitiesWrite
     * @name ActivitiesPostActivity
     * @summary Insert a activity
     * @request POST:/v1/activities
     * @secure
     * @response `201` `ActivityModel` Created activity
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    activitiesPostActivity: (data: ActivityModel | null, params: RequestParams = {}) =>
      this.request<ActivityModel, void | ExceptionModel>({
        path: `/v1/activities`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags ActivitiesRead
     * @name ActivitiesGetActivity
     * @summary Get activity by ID
     * @request GET:/v1/activities/{guid}
     * @secure
     * @response `200` `ActivityModel`
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    activitiesGetActivity: (guid: string, params: RequestParams = {}) =>
      this.request<ActivityModel, void | ExceptionModel>({
        path: `/v1/activities/${guid}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags ActivitiesWrite
     * @name ActivitiesPatchActivity
     * @summary Update (Patch) a activity or a part of it
     * @request PATCH:/v1/activities/{guid}
     * @secure
     * @response `200` `(ActivityModel)[]` List of updated activities
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    activitiesPatchActivity: (guid: string, data: PatchOperation[] | null, params: RequestParams = {}) =>
      this.request<ActivityModel[], void | ExceptionModel>({
        path: `/v1/activities/${guid}`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * @description Returns: No Content (204) if succeeded. Not found (404) if activity can't be found.
     *
     * @tags ActivitiesDelete
     * @name ActivitiesDeleteActivity
     * @summary Delete an activity
     * @request DELETE:/v1/activities/{guid}
     * @secure
     * @response `204` `void`
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    activitiesDeleteActivity: (guid: string, params: RequestParams = {}) =>
      this.request<void, void | ExceptionModel>({
        path: `/v1/activities/${guid}`,
        method: 'DELETE',
        secure: true,
        ...params
      }),

    /**
     * @description Returns: No Content (204) if succeeded. Not found (404) if activity can't be found or is not recurring.
     *
     * @tags ActivitiesDelete
     * @name ActivitiesDeleteExceptions
     * @summary Resets exceptions from a recurring activity.
     * @request DELETE:/v1/activities/{guid}/exceptions
     * @secure
     * @response `204` `void`
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    activitiesDeleteExceptions: (guid: string, params: RequestParams = {}) =>
      this.request<void, void | ExceptionModel>({
        path: `/v1/activities/${guid}/exceptions`,
        method: 'DELETE',
        secure: true,
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsRead
     * @name PhaseStatusTypesGetPhaseStatusTypes
     * @summary Get phase status types
     * @request GET:/v1/phasestatustypes
     * @secure
     * @response `200` `(PhaseStatusTypeModel)[]` All the phase status types
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    phaseStatusTypesGetPhaseStatusTypes: (
      query?: {
        /** If not given, return all phase status types, if given as true return only active phase status types, if given as false returns only inactive phase status types */
        active?: boolean | null;
        /**
         * Optional: first row to fetch. Default 0 = first row.
         * @format int32
         */
        firstRow?: number | null;
        /**
         * Optional: How many rows to fetch, Default all.
         * @format int32
         */
        rowCount?: number | null;
        /** @default "" */
        textToSearch?: string | null;
        /** @default false */
        calculateRowCount?: boolean;
        sortings?: KeyValuePairOfStringAndSortDirection[] | null;
      },
      params: RequestParams = {}
    ) =>
      this.request<PhaseStatusTypeModel[], void | ExceptionModel>({
        path: `/v1/phasestatustypes`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsWrite
     * @name PhaseStatusTypesPostPhaseStatusType
     * @summary Insert a phase status type
     * @request POST:/v1/phasestatustypes
     * @secure
     * @response `201` `PhaseStatusTypeModel` Created phase status type
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    phaseStatusTypesPostPhaseStatusType: (data: PhaseStatusTypeModel | null, params: RequestParams = {}) =>
      this.request<PhaseStatusTypeModel, void | ExceptionModel>({
        path: `/v1/phasestatustypes`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsRead
     * @name PhaseStatusTypesGetPhaseStatusType
     * @summary Get phase status type by GUID
     * @request GET:/v1/phasestatustypes/{guid}
     * @secure
     * @response `200` `PhaseStatusTypeModel` PhaseStatusTypeModel
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    phaseStatusTypesGetPhaseStatusType: (guid: string, params: RequestParams = {}) =>
      this.request<PhaseStatusTypeModel, void | ExceptionModel>({
        path: `/v1/phasestatustypes/${guid}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsWrite
     * @name PhaseStatusTypesPatchPhaseStatusType
     * @summary Update (Patch) a phase status type or a part of it
     * @request PATCH:/v1/phasestatustypes/{guid}
     * @secure
     * @response `200` `(PhaseStatusTypeModel)[]` list of updated phase status type
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    phaseStatusTypesPatchPhaseStatusType: (guid: string, data: PatchOperation[] | null, params: RequestParams = {}) =>
      this.request<PhaseStatusTypeModel[], void | ExceptionModel>({
        path: `/v1/phasestatustypes/${guid}`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * @description Returns: No Content (204) if succeeded. Not found (404) if phase status type can't be found.
     *
     * @tags SettingsDelete
     * @name PhaseStatusTypesDeletePhaseStatusType
     * @summary Delete a phase status type
     * @request DELETE:/v1/phasestatustypes/{guid}
     * @secure
     * @response `204` `void`
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    phaseStatusTypesDeletePhaseStatusType: (
      guid: string,
      query?: {
        /** Optional: ID of the phase status type to which to move usages of this phase status type. Default null. If phase status type is in use and usages aren't moved the deletion might fail. */
        moveUsagesToGuid?: string | null;
      },
      params: RequestParams = {}
    ) =>
      this.request<void, void | ExceptionModel>({
        path: `/v1/phasestatustypes/${guid}`,
        method: 'DELETE',
        query: query,
        secure: true,
        ...params
      }),

    /**
     * No description
     *
     * @tags FeesRead
     * @name ProjectFeesGetProjectFeesByToken
     * @summary Get the project fees.
     * @request GET:/v1/projectfees
     * @secure
     * @response `200` `(ProjectFeeOutputModel)[]` ProjectFee
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    projectFeesGetProjectFeesByToken: (
      query?: {
        /** Optional: page token to fetch the next page. */
        pageToken?: string | null;
        /**
         * Optional: Number of rows to fetch
         * @format int32
         */
        rowCount?: number | null;
        /**
         * Optional: Get project fees that have been added or changed after this date time (greater or equal).
         * @format date-time
         */
        changedSince?: string | null;
      },
      params: RequestParams = {}
    ) =>
      this.request<ProjectFeeOutputModel[], void | ExceptionModel>({
        path: `/v1/projectfees`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags FeesWrite
     * @name ProjectFeesPostProjectFee
     * @summary Insert a project fee.
     * @request POST:/v1/projectfees
     * @secure
     * @response `201` `(ProjectFeeOutputModel)[]` Created project fees.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    projectFeesPostProjectFee: (data: ProjectFeeInputModel | null, params: RequestParams = {}) =>
      this.request<ProjectFeeOutputModel[], void | ExceptionModel>({
        path: `/v1/projectfees`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags FeesRead
     * @name ProjectFeesGetUserProjectFees
     * @summary Get all the projectFees for a user
     * @request GET:/v1/users/{userGuid}/projectfees
     * @secure
     * @response `200` `(ProjectFeeOutputModel)[]` ProjectFees
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    projectFeesGetUserProjectFees: (
      userGuid: string,
      query?: {
        /** Optional: page token to fetch the next page. */
        pageToken?: string | null;
        /**
         * Optional: Number of rows to fetch.
         * @format int32
         */
        rowCount?: number | null;
        /** Optional: ProjectFee's product type. if given, it filters the projectFees by the given type. FixedFees (Own work), Materials (Products), Subcontracting. */
        productType?: ProductType;
        /** Optional: Filter the project fees. If true/false, only the billable/non-billable ones are returned. If null, all are returned. Default is null. */
        isBillable?: boolean | null;
        /** Optional: Filter the project fees. If true/false, only the ones that are/are not invoiced are returned. If null, all are returned. Default is null. */
        isBilled?: boolean | null;
        /**
         * Optional: Filter the project fees. When given, only the ones that are invoiceable before or on the given date are returned. Default is null.
         * @format date-time
         */
        invoiceableDate?: string | null;
        /** Optional: Filter the project fees. If true/false, only the ones are connected/not-connected to a phase are returned. If null, all are returned. Default is null. */
        hasPhase?: boolean | null;
        /**
         * Start date search criteria. Only get project fees that have event date from this date.
         * @format date-time
         */
        startDate?: string | null;
        /**
         * End date search criteria. Only get project fees that have event date until this date.
         * @format date-time
         */
        endDate?: string | null;
      },
      params: RequestParams = {}
    ) =>
      this.request<ProjectFeeOutputModel[], void | ExceptionModel>({
        path: `/v1/users/${userGuid}/projectfees`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags FeesRead
     * @name ProjectFeesGetProjectFeesForProject
     * @summary Get all the project fees for a project
     * @request GET:/v1/projects/{projectGuid}/projectfees
     * @secure
     * @response `200` `(ProjectFeeOutputModel)[]` ProjectFees
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    projectFeesGetProjectFeesForProject: (
      projectGuid: string,
      query?: {
        /** Optional: page token to fetch the next page. */
        pageToken?: string | null;
        /**
         * Optional: Number of rows to fetch.
         * @format int32
         */
        rowCount?: number | null;
        /** Optional: ProjectFee's product type. if given, it filters the projectFees by the given type. FixedFees (Own work), Materials (Products), Subcontracting */
        productType?: ProductType;
        /** Optional: Filter the project fees. If true/false, only the billable/non-billable ones are returned. If null, all are returned. Default is null. */
        isBillable?: boolean | null;
        /** Optional: Filter the project fees. If true/false, only the ones that are/are not invoiced are returned. If null, all are returned. Default is null. */
        isBilled?: boolean | null;
        /**
         * Optional: Filter the project fees. When given, only the ones that are invoiceable before or on the given date are returned. Default is null.
         * @format date-time
         */
        invoiceableDate?: string | null;
        /**
         * Optional: Also fetches recurring rules along with project fees. Default is false.
         * @default false
         */
        includeRecurringRules?: boolean;
        /** Optional. Filter the project fees. If true/false, only the ones that will be billable in the future are returned. If null, all are returned. Default is false. */
        isBillablePeriodInFuture?: boolean | null;
      },
      params: RequestParams = {}
    ) =>
      this.request<ProjectFeeOutputModel[], void | ExceptionModel>({
        path: `/v1/projects/${projectGuid}/projectfees`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags InvoicesRead
     * @name ProjectFeesGetInvoiceProjectFees
     * @summary Get all the project fees on an invoice
     * @request GET:/v1/invoices/{invoiceGuid}/projectfees
     * @secure
     * @response `200` `(ProjectFeeOutputModel)[]` ProjectFees
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    projectFeesGetInvoiceProjectFees: (
      invoiceGuid: string,
      query?: {
        /** Optional: page token to fetch the next page. */
        pageToken?: string | null;
        /**
         * Optional: Number of rows to fetch.
         * @format int32
         */
        rowCount?: number | null;
        /** Optional: ProjectFee's product type. if given, it filters the projectFees by the given type. FixedFees (Own work), Materials (Products), Subcontracting */
        productType?: ProductType;
      },
      params: RequestParams = {}
    ) =>
      this.request<ProjectFeeOutputModel[], void | ExceptionModel>({
        path: `/v1/invoices/${invoiceGuid}/projectfees`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags InvoicesRead
     * @name ProjectFeesGetUninvoicedProjectFeesForInvoice
     * @summary Get uninvoiced project fees available for invoice
     * @request GET:/v1/invoices/{invoiceGuid}/uninvoicedprojectfees
     * @secure
     * @response `200` `(ProjectFeeOutputModel)[]` ProjectFees
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    projectFeesGetUninvoicedProjectFeesForInvoice: (
      invoiceGuid: string,
      query?: {
        /** Optional: page token to fetch the next page. */
        pageToken?: string | null;
        /**
         * Optional: Number of rows to fetch.
         * @format int32
         */
        rowCount?: number | null;
        /** Optional: Filter the project fees. If true/false, only the billable/non-billable ones are returned. If null, all are returned. Default is null. */
        isBillable?: boolean | null;
      },
      params: RequestParams = {}
    ) =>
      this.request<ProjectFeeOutputModel[], void | ExceptionModel>({
        path: `/v1/invoices/${invoiceGuid}/uninvoicedprojectfees`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags InvoicesRead
     * @name ProjectFeesGetInvoiceRowProjectFees
     * @summary Get all the project fees on an invoice row
     * @request GET:/v1/invoicerows/{invoiceRowGuid}/projectfees
     * @secure
     * @response `200` `(ProjectFeeOutputModel)[]` ProjectFees
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    projectFeesGetInvoiceRowProjectFees: (
      invoiceRowGuid: string,
      query?: {
        /** Optional: page token to fetch the next page. */
        pageToken?: string | null;
        /**
         * Optional: Number of rows to fetch.
         * @format int32
         */
        rowCount?: number | null;
        /** Optional: ProjectFee's product type. if given, it filters the projectFees by the given type. FixedFees (Own work), Materials (Products), Subcontracting */
        productType?: ProductType;
      },
      params: RequestParams = {}
    ) =>
      this.request<ProjectFeeOutputModel[], void | ExceptionModel>({
        path: `/v1/invoicerows/${invoiceRowGuid}/projectfees`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags FeesRead
     * @name ProjectFeesGetDeletedProjectFees
     * @summary Get the deleted project fees.
     * @request GET:/v1/deletedprojectfees
     * @secure
     * @response `200` `(DeletedProjectFeeModel)[]`
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    projectFeesGetDeletedProjectFees: (
      query?: {
        pageToken?: string | null;
        /**
         * Optional: How many rows to fetch, Default 20, maximum 100.
         * @format int32
         */
        rowCount?: number | null;
        /** Optional: ID of the project for the deleted project fees to be fetched. If not provided, returns for all projects. Default all. */
        projectGuids?: string[] | null;
        /** Optional: ID of the user. If not provided, returns for all users. Default all. */
        userGuids?: string[] | null;
        /**
         * Optional: Get project fees that have been deleted after this date time (greater or equal).
         * @format date-time
         */
        deletedSince?: string | null;
      },
      params: RequestParams = {}
    ) =>
      this.request<DeletedProjectFeeModel[], void | ExceptionModel>({
        path: `/v1/deletedprojectfees`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsRead
     * @name ProductsGetProducts
     * @summary Get all the Products
     * @request GET:/v1/products
     * @secure
     * @response `200` `(ProductOutputModel)[]` All the Products
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    productsGetProducts: (
      query?: {
        /**
         * Optional: Number of rows to fetch
         * @format int32
         */
        rowCount?: number | null;
        /** Optional: page token to fetch the next page. */
        pageToken?: string | null;
        /** Product type. if given, it filters the products by the given type. */
        type?: ProductType;
        /** If not given, return all Products, if given as true return only isActive Products, if given as false returns only inactive Products */
        isActive?: boolean | null;
        /** Optional: Code of the product. */
        code?: string | null;
        /**
         * Optional: Get products that have been added or changed after this date time (greater or equal).
         * @format date-time
         */
        changedSince?: string | null;
      },
      params: RequestParams = {}
    ) =>
      this.request<ProductOutputModel[], void | ExceptionModel>({
        path: `/v1/products`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsWrite
     * @name ProductsPostProduct
     * @summary Insert a product.
     * @request POST:/v1/products
     * @secure
     * @response `201` `ProductOutputModel` Created product.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    productsPostProduct: (data: ProductInputModel | null, params: RequestParams = {}) =>
      this.request<ProductOutputModel, void | ExceptionModel>({
        path: `/v1/products`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags ProjectsRead
     * @name ProductsGetSearchedProducts
     * @summary Gets available products for the given project where price information comes from projects price list
     * @request GET:/v1/projects/{projectGuid}/productsforproject
     * @secure
     * @response `200` `(ProductForProjectOutputModel)[]` All the Products matching search criteria
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    productsGetSearchedProducts: (
      projectGuid: string,
      query?: {
        /**
         * Optional: Number of rows to fetch
         * @format int32
         */
        rowCount?: number | null;
        /** Optional: page token to fetch the next page. */
        pageToken?: string | null;
        /** Product type. if given, it filters the products by the given type */
        type?: ProductType;
        /**
         * Optional: If true returns all the products from registry with project specific prices. If false returns only products specified for the project with project specific prices. Default false.
         * @default false
         */
        includeProductsFromRegistry?: boolean;
      },
      params: RequestParams = {}
    ) =>
      this.request<ProductForProjectOutputModel[], void | ExceptionModel>({
        path: `/v1/projects/${projectGuid}/productsforproject`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsRead
     * @name ProductCountrySettingsGetProductCountrySettings
     * @summary Get all the country settings for a product
     * @request GET:/v1/products/{productGuid}/productcountrysettings
     * @secure
     * @response `200` `(ProductCountrySettingsModel)[]` All the ProductCountrySettings (tax related information)
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    productCountrySettingsGetProductCountrySettings: (productGuid: string, params: RequestParams = {}) =>
      this.request<ProductCountrySettingsModel[], void | ExceptionModel>({
        path: `/v1/products/${productGuid}/productcountrysettings`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsWrite
     * @name ProductCountrySettingsPostProductCountrySettings
     * @summary Insert a product country setting
     * @request POST:/v1/productcountrysettings
     * @secure
     * @response `201` `ProductCountrySettingsModel` Inserted product country setting
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    productCountrySettingsPostProductCountrySettings: (data: ProductCountrySettingsModel | null, params: RequestParams = {}) =>
      this.request<ProductCountrySettingsModel, void | ExceptionModel>({
        path: `/v1/productcountrysettings`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsWrite
     * @name ProductCountrySettingsPatchProductCountrySettings
     * @summary Update (Patch) a product country setting
     * @request PATCH:/v1/productcountrysettings/{guid}
     * @secure
     * @response `200` `(ProductCountrySettingsModel)[]` List of updated product country settings
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    productCountrySettingsPatchProductCountrySettings: (guid: string, data: PatchOperation[] | null, params: RequestParams = {}) =>
      this.request<ProductCountrySettingsModel[], void | ExceptionModel>({
        path: `/v1/productcountrysettings/${guid}`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * @description Returns: No Content (204) if succeeded. Not found (404) if product country setting can't be found.
     *
     * @tags SettingsDelete
     * @name ProductCountrySettingsDeleteProductCountrySetting
     * @summary Deletes a product country setting
     * @request DELETE:/v1/productcountrysettings/{guid}
     * @secure
     * @response `204` `void`
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    productCountrySettingsDeleteProductCountrySetting: (guid: string, params: RequestParams = {}) =>
      this.request<void, void | ExceptionModel>({
        path: `/v1/productcountrysettings/${guid}`,
        method: 'DELETE',
        secure: true,
        ...params
      }),

    /**
     * No description
     *
     * @tags ProjectsRead
     * @name ProjectBillingCustomersGetWorkHourPricesForProject
     * @summary Get all the billing customers for a project
     * @request GET:/v1/projects/{projectGuid}/projectbillingcustomers
     * @secure
     * @response `200` `(ProjectBillingCustomerModel)[]` Project's billing customers
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    projectBillingCustomersGetWorkHourPricesForProject: (projectGuid: string, params: RequestParams = {}) =>
      this.request<ProjectBillingCustomerModel[], void | ExceptionModel>({
        path: `/v1/projects/${projectGuid}/projectbillingcustomers`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags ProjectsRead
     * @name ProjectsGetProjects
     * @summary Get all the projects
     * @request GET:/v1/projects
     * @secure
     * @response `200` `(ProjectOutputModel)[]` Projects
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    projectsGetProjects: (
      query?: {
        pageToken?: string | null;
        /**
         * Optional: How many rows to fetch, Default 20, maximum 100.
         * @format int32
         */
        rowCount?: number | null;
        /** Optional: ID of project currency. */
        currencyGuid?: string | null;
        /**
         * Optional: Get projects that have been added or changed after this date time (greater or equal).
         * @format date-time
         */
        changedSince?: string | null;
        /**
         * Optional: Get projects for which sales status has been changed after this date time (greater or equal).
         * @format date-time
         */
        salesStatusChangedSince?: string | null;
        /**
         * Optional: Get projects for which status has been changed after this date time (greater or equal).
         * @format date-time
         */
        projectStatusChangedSince?: string | null;
        /** Optional: When true fetch projects that have something to bill, when false nothing to bill. Default nothing = all. */
        isBillable?: boolean | null;
        customerGuids?: string[] | null;
        projectGuids?: string[] | null;
        projectKeywordGuids?: string[] | null;
        projectStatusTypeGuids?: string[] | null;
        salesPersonGuids?: string[] | null;
        projectOwnerGuids?: string[] | null;
        businessUnitGuids?: string[] | null;
        /** @format double */
        minimumBillableAmount?: number | null;
        customerOwnerGuids?: string[] | null;
        /** @format date-time */
        invoiceableDate?: string | null;
        marketSegmentationGuids?: string[] | null;
        salesStatusTypeGuids?: string[] | null;
        isClosed?: boolean | null;
        hasRecurringFees?: boolean | null;
        companyCurrencyGuids?: string[] | null;
        projectMemberUserGuids?: string[] | null;
        numbers?: number[] | null;
        /** Optional: Get internal / non-internal projects. */
        internal?: boolean | null;
      },
      params: RequestParams = {}
    ) =>
      this.request<ProjectOutputModel[], void | ExceptionModel>({
        path: `/v1/projects`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description When creating a new project, the price list property will be ignored, as it is chosen by default.
     *
     * @tags ProjectsWrite
     * @name ProjectsPostProject
     * @summary Insert a project
     * @request POST:/v1/projects
     * @secure
     * @response `201` `ProjectOutputModel` Created project
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    projectsPostProject: (data: ProjectInputModelBase | null, params: RequestParams = {}) =>
      this.request<ProjectOutputModel, void | ExceptionModel>({
        path: `/v1/projects`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags ProjectsRead
     * @name ProjectsGetSalesCases
     * @summary Gets the sales cases (sales status is in progress)
     * @request GET:/v1/salescases
     * @secure
     * @response `200` `(ProjectOutputModel)[]` Projects
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    projectsGetSalesCases: (
      query?: {
        pageToken?: string | null;
        /**
         * Optional: How many rows to fetch, Default 20, maximum 100.
         * @format int32
         */
        rowCount?: number | null;
        customerGuids?: string[] | null;
        currencyGuids?: string[] | null;
        projectGuids?: string[] | null;
        projectKeywordGuids?: string[] | null;
        projectStatusTypeGuids?: string[] | null;
        salesPersonGuids?: string[] | null;
        projectOwnerGuids?: string[] | null;
        businessUnitGuids?: string[] | null;
        /** @format double */
        minimumBillableAmount?: number | null;
        customerOwnerGuids?: string[] | null;
        /** @format date-time */
        invoiceableDate?: string | null;
        marketSegmentationGuids?: string[] | null;
        salesStatusTypeGuids?: string[] | null;
        isClosed?: boolean | null;
        hasRecurringFees?: boolean | null;
        companyCurrencyGuids?: string[] | null;
        projectMemberUserGuids?: string[] | null;
        numbers?: number[] | null;
      },
      params: RequestParams = {}
    ) =>
      this.request<ProjectOutputModel[], void | ExceptionModel>({
        path: `/v1/salescases`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags ProjectsRead
     * @name ProjectsGetCustomerProjects
     * @summary Get customer's projects
     * @request GET:/v1/customers/{customerGuid}/projects
     * @secure
     * @response `200` `(ProjectOutputModel)[]` All the projects for the customer
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    projectsGetCustomerProjects: (
      customerGuid: string,
      query?: {
        pageToken?: string | null;
        /**
         * Optional: How many rows to fetch, Default 20, maximum 100.
         * @format int32
         */
        rowCount?: number | null;
        /** Optional: When true fetch projects that have something to bill, when false nothing to bill. Default nothing = all. */
        isBillable?: boolean | null;
        currencyGuids?: string[] | null;
        projectGuids?: string[] | null;
        projectKeywordGuids?: string[] | null;
        projectStatusTypeGuids?: string[] | null;
        salesPersonGuids?: string[] | null;
        projectOwnerGuids?: string[] | null;
        businessUnitGuids?: string[] | null;
        /** @format double */
        minimumBillableAmount?: number | null;
        customerOwnerGuids?: string[] | null;
        /** @format date-time */
        invoiceableDate?: string | null;
        marketSegmentationGuids?: string[] | null;
        salesStatusTypeGuids?: string[] | null;
        isClosed?: boolean | null;
        hasRecurringFees?: boolean | null;
        companyCurrencyGuids?: string[] | null;
        projectMemberUserGuids?: string[] | null;
        numbers?: number[] | null;
      },
      params: RequestParams = {}
    ) =>
      this.request<ProjectOutputModel[], void | ExceptionModel>({
        path: `/v1/customers/${customerGuid}/projects`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags ProjectsRead
     * @name ProjectsGetProject
     * @summary Get project by ID
     * @request GET:/v1/projects/{guid}
     * @secure
     * @response `200` `ProjectOutputModel`
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    projectsGetProject: (guid: string, params: RequestParams = {}) =>
      this.request<ProjectOutputModel, void | ExceptionModel>({
        path: `/v1/projects/${guid}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description To update current project status, give ProjectStatusTypeGuid and possibly Description. To update current sales status, give SalesStatusTypeGuid (
     *
     * @tags ProjectsWrite
     * @name ProjectsPatchProject
     * @summary Update (Patch) a project or a part of it
     * @request PATCH:/v1/projects/{guid}
     * @secure
     * @response `200` `(ProjectOutputModel)[]` List of updated projects
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    projectsPatchProject: (guid: string, data: PatchOperation[] | null, params: RequestParams = {}) =>
      this.request<ProjectOutputModel[], void | ExceptionModel>({
        path: `/v1/projects/${guid}`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * @description Returns: No Content (204) if succeeded. Not found (404) if project can't be found.
     *
     * @tags ProjectsDelete
     * @name ProjectsDeleteProject
     * @summary Delete a project
     * @request DELETE:/v1/projects/{guid}
     * @secure
     * @response `204` `void`
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    projectsDeleteProject: (guid: string, params: RequestParams = {}) =>
      this.request<void, void | ExceptionModel>({
        path: `/v1/projects/${guid}`,
        method: 'DELETE',
        secure: true,
        ...params
      }),

    /**
     * No description
     *
     * @tags TravelsRead
     * @name ProjectTravelExpensesGetProjectTravelExpenses
     * @summary Get the project travel expenses.
     * @request GET:/v1/projecttravelexpenses
     * @secure
     * @response `200` `(ProjectTravelExpenseOutputModel)[]` ProjectTravelExpenseOutputModel
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    projectTravelExpensesGetProjectTravelExpenses: (
      query?: {
        /** Optional: page token to fetch the next page. */
        pageToken?: string | null;
        /**
         * Optional: How many rows to fetch, Default 20, maximum 100.
         * @format int32
         */
        rowCount?: number | null;
        /**
         * Optional: Get project travel expenses that have been added or changed after this date time (greater or equal).
         * @format date-time
         */
        changedSince?: string | null;
      },
      params: RequestParams = {}
    ) =>
      this.request<ProjectTravelExpenseOutputModel[], void | ExceptionModel>({
        path: `/v1/projecttravelexpenses`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags TravelsWrite
     * @name ProjectTravelExpensesPostProjectTravelExpense
     * @summary Insert a project travel expense.
     * @request POST:/v1/projecttravelexpenses
     * @secure
     * @response `201` `ProjectTravelExpenseOutputModel` Created project travel expense.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    projectTravelExpensesPostProjectTravelExpense: (data: ProjectTravelExpenseInputModel | null, params: RequestParams = {}) =>
      this.request<ProjectTravelExpenseOutputModel, void | ExceptionModel>({
        path: `/v1/projecttravelexpenses`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags TravelsRead
     * @name ProjectTravelExpensesGetProjectTravelExpensesForUser
     * @summary Get all the project travel expenses for a user
     * @request GET:/v1/users/{userGuid}/projecttravelexpenses
     * @secure
     * @response `200` `(ProjectTravelExpenseOutputModel)[]` ProjectTravelExpenseOutputModel
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    projectTravelExpensesGetProjectTravelExpensesForUser: (
      userGuid: string,
      query?: {
        /**
         * Optional: starting date from which to get the travel expenses. Default all.
         * @format date
         */
        startDate?: string | null;
        /**
         * Optional: starting date to which to get the travel expenses. Default all.
         * @format date
         */
        endDate?: string | null;
        /** Optional: page token to fetch the next page. */
        pageToken?: string | null;
        /**
         * Optional: How many rows to fetch, Default 20, maximum 100.
         * @format int32
         */
        rowCount?: number | null;
        /** Optional: Class of the expense. Mileage, DailyAllowance or OtherTravelExpense */
        expenseClass?: ExpensesClass;
        /** Optional. Filter the project travel expenses. If true/false, only the ones that are reimbursed are returned. If null, all are returned. Default is null. */
        isReimbursed?: boolean | null;
        /** Optional: Filter the project travel expenses by whether or not the reimbursement is required. Default all. */
        isTravelReimbursementRequired?: boolean | null;
        /** Optional: ID of the travel reimbursement */
        travelReimbursementGuid?: string | null;
        /** Optional: ID of the cost currency. */
        costCurrencyGuid?: string | null;
      },
      params: RequestParams = {}
    ) =>
      this.request<ProjectTravelExpenseOutputModel[], void | ExceptionModel>({
        path: `/v1/users/${userGuid}/projecttravelexpenses`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags TravelsRead
     * @name ProjectTravelExpensesGetProjectTravelExpensesForProject
     * @summary Get all the project travel expenses for a project
     * @request GET:/v1/projects/{projectGuid}/projecttravelexpenses
     * @secure
     * @response `200` `(ProjectTravelExpenseOutputModel)[]` ProjectTravelExpenseOutputModel
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    projectTravelExpensesGetProjectTravelExpensesForProject: (
      projectGuid: string,
      query?: {
        /** Optional: Filter the travel expenses. If true/false, only the billable/non-billable ones are returned. If null, all are returned. Default is null. */
        isBillable?: boolean | null;
        /** Optional: Filter the travel expenses. If true/false, only the ones that are/are not invoiced are returned. If null, all are returned. Default is null. */
        isBilled?: boolean | null;
        /**
         * Optional: Filter the project fees. When given, only the ones that are invoiceable before or on the given date are returned. Default is null.
         * @format date-time
         */
        invoiceableDate?: string | null;
        /** Optional: page token to fetch the next page. */
        pageToken?: string | null;
        /**
         * Optional: How many rows to fetch, Default 20, maximum 100.
         * @format int32
         */
        rowCount?: number | null;
        /** Optional. Filter the project travel expenses. If true/false, only the ones that will be billable in the future are returned. If null, all are returned. Default is false. */
        isBillablePeriodInFuture?: boolean | null;
        /** Optional: Class of the expense. Mileage, DailyAllowance or OtherTravelExpense */
        expenseClass?: ExpensesClass;
      },
      params: RequestParams = {}
    ) =>
      this.request<ProjectTravelExpenseOutputModel[], void | ExceptionModel>({
        path: `/v1/projects/${projectGuid}/projecttravelexpenses`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags InvoicesRead
     * @name ProjectTravelExpensesGetInvoiceProjectTravelExpenses
     * @summary Get all the project travel expenses on an invoice
     * @request GET:/v1/invoices/{invoiceGuid}/projecttravelexpenses
     * @secure
     * @response `200` `(ProjectTravelExpenseOutputModel)[]` ProjectTravelExpenseOutputModel
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    projectTravelExpensesGetInvoiceProjectTravelExpenses: (
      invoiceGuid: string,
      query?: {
        /** Optional: page token to fetch the next page. */
        pageToken?: string | null;
        /**
         * Optional: How many rows to fetch, Default 20, maximum 100.
         * @format int32
         */
        rowCount?: number | null;
        /** Optional: Class of the expense. Mileage, DailyAllowance or OtherTravelExpense */
        expenseClass?: ExpensesClass;
      },
      params: RequestParams = {}
    ) =>
      this.request<ProjectTravelExpenseOutputModel[], void | ExceptionModel>({
        path: `/v1/invoices/${invoiceGuid}/projecttravelexpenses`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags InvoicesRead
     * @name ProjectTravelExpensesGetUninvoicedProjectTravelExpensesForInvoice
     * @summary Get uninvoiced project travel expenses available for invoice
     * @request GET:/v1/invoices/{invoiceGuid}/uninvoicedprojecttravelexpenses
     * @secure
     * @response `200` `(ProjectTravelExpenseOutputModel)[]` ProjectTravelExpenseOutputModel
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    projectTravelExpensesGetUninvoicedProjectTravelExpensesForInvoice: (
      invoiceGuid: string,
      query?: {
        /** Optional: Filter the travel expenses. If true/false, only the billable/non-billable ones are returned. If null, all are returned. Default is null. */
        isBillable?: boolean | null;
        /** Optional: page token to fetch the next page. */
        pageToken?: string | null;
        /**
         * Optional: How many rows to fetch, Default 20, maximum 100.
         * @format int32
         */
        rowCount?: number | null;
        /** Optional: Class of the expense. Mileage, DailyAllowance or OtherTravelExpense */
        expenseClass?: ExpensesClass;
      },
      params: RequestParams = {}
    ) =>
      this.request<ProjectTravelExpenseOutputModel[], void | ExceptionModel>({
        path: `/v1/invoices/${invoiceGuid}/uninvoicedprojecttravelexpenses`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags InvoicesRead
     * @name ProjectTravelExpensesGetInvoiceRowProjectTravelExpenses
     * @summary Get all the project travel expenses on an invoice row
     * @request GET:/v1/invoicerows/{invoiceRowGuid}/projecttravelexpenses
     * @secure
     * @response `200` `(ProjectTravelExpenseOutputModel)[]` ProjectTravelExpenseOutputModel
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    projectTravelExpensesGetInvoiceRowProjectTravelExpenses: (
      invoiceRowGuid: string,
      query?: {
        /** Optional: page token to fetch the next page. */
        pageToken?: string | null;
        /**
         * Optional: How many rows to fetch, Default 20, maximum 100.
         * @format int32
         */
        rowCount?: number | null;
        /** Optional: Class of the expense. Mileage, DailyAllowance or OtherTravelExpense */
        expenseClass?: ExpensesClass;
      },
      params: RequestParams = {}
    ) =>
      this.request<ProjectTravelExpenseOutputModel[], void | ExceptionModel>({
        path: `/v1/invoicerows/${invoiceRowGuid}/projecttravelexpenses`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags TravelsRead
     * @name ProjectTravelExpensesGetProjectTravelExpensesForTravelReimbursement
     * @summary Get all the project travel expenses for a travel reimbursement
     * @request GET:/v1/travelreimbursements/{travelReimbursementGuid}/projecttravelexpenses
     * @secure
     * @response `200` `(ProjectTravelExpenseOutputModel)[]` ProjectTravelExpenseOutputModel
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    projectTravelExpensesGetProjectTravelExpensesForTravelReimbursement: (
      travelReimbursementGuid: string,
      query?: {
        /** Optional: page token to fetch the next page. */
        pageToken?: string | null;
        /**
         * Optional: How many rows to fetch, Default 20, maximum 100.
         * @format int32
         */
        rowCount?: number | null;
        /** Optional: Class of the expense. Mileage, DailyAllowance or OtherTravelExpense */
        expenseClass?: ExpensesClass;
      },
      params: RequestParams = {}
    ) =>
      this.request<ProjectTravelExpenseOutputModel[], void | ExceptionModel>({
        path: `/v1/travelreimbursements/${travelReimbursementGuid}/projecttravelexpenses`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags TravelsRead
     * @name ProjectTravelExpensesGetDeletedProjectTravelExpenses
     * @summary Get the deleted project travel expenses.
     * @request GET:/v1/deletedprojecttravelexpenses
     * @secure
     * @response `200` `(DeletedProjectTravelExpenseModel)[]`
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    projectTravelExpensesGetDeletedProjectTravelExpenses: (
      query?: {
        /** Optional: page token to fetch the next page. */
        pageToken?: string | null;
        /**
         * Optional: How many rows to fetch, Default 20, maximum 100.
         * @format int32
         */
        rowCount?: number | null;
        /** Optional: ID of the project for the deleted project travel expenses to be fetched. If not provided, returns for all projects. Default all. */
        projectGuid?: string[] | null;
        /** Optional: ID of the user. If not provided, returns for all users. Default all. */
        userGuid?: string[] | null;
        /**
         * Optional: Get project travel expenses that have been deleted after this date time (greater or equal).
         * @format date-time
         */
        deletedSince?: string | null;
      },
      params: RequestParams = {}
    ) =>
      this.request<DeletedProjectTravelExpenseModel[], void | ExceptionModel>({
        path: `/v1/deletedprojecttravelexpenses`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags NoScope
     * @name PublicBearerAuthenticationGetLoginToken
     * @summary Can be used to get the login information and access token for the api client.
     * @request POST:/v1/token
     * @secure
     * @response `200` `PublicAuthenticationOutputModel` PublicAuthenticationOutputModel
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    publicBearerAuthenticationGetLoginToken: (data: ClientCredentials | null, params: RequestParams = {}) =>
      this.request<PublicAuthenticationOutputModel, void | ExceptionModel>({
        path: `/v1/token`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags NoScope
     * @name PublicBearerAuthenticationGetAccessTokenTokenFromRefreshToken
     * @summary Get new access token using a refresh token.
     * @request POST:/v1/refreshtoken
     * @secure
     * @response `200` `PublicAuthenticationOutputModel` PublicAuthenticationOutputModel
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    publicBearerAuthenticationGetAccessTokenTokenFromRefreshToken: (data: string | null, params: RequestParams = {}) =>
      this.request<PublicAuthenticationOutputModel, void | ExceptionModel>({
        path: `/v1/refreshtoken`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags NoScope
     * @name PublicBearerAuthenticationGetAccessTokenJson
     * @summary Get oAuth2 access token.
     * @request POST:/v1/login/oauth/access_token
     * @secure
     * @response `200` `PublicAuthenticationOutputModel` PublicAuthenticationOutputModel
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    publicBearerAuthenticationGetAccessTokenJson: (data: AccessTokenCredentials | null, params: RequestParams = {}) =>
      this.request<PublicAuthenticationOutputModel, void | ExceptionModel>({
        path: `/v1/login/oauth/access_token`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags NoScope
     * @name PublicBearerAuthenticationGetAuthorizationCode
     * @summary Get the oAuth2 authorization code flow code.
     * @request GET:/v1/login/oauth/authorize
     * @secure
     * @response `302` `void`
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    publicBearerAuthenticationGetAuthorizationCode: (
      query?: {
        /** code */
        response_type?: string | null;
        /** Unguessable random string. */
        state?: string | null;
        /** Client id. */
        client_id?: string | null;
        /** Url where to redirect after code has been retrieved. */
        redirect_uri?: string | null;
        /**
         * Scopes that client requests. If scopes that are not allowed for the client are requested, returns unauthorized.
         * @default ""
         */
        scope?: string | null;
      },
      params: RequestParams = {}
    ) =>
      this.request<any, void | ExceptionModel>({
        path: `/v1/login/oauth/authorize`,
        method: 'GET',
        query: query,
        secure: true,
        ...params
      }),

    /**
     * No description
     *
     * @tags InvoicesRead
     * @name ReimbursedProjectFeesGetInvoiceReimbursedProjectFees
     * @summary Get all the project fees on an invoice
     * @request GET:/v1/invoices/{invoiceGuid}/reimbursedprojectfees
     * @secure
     * @response `200` `(ReimbursedProjectFeeOutputModel)[]` ReimbursedProjectFee
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    reimbursedProjectFeesGetInvoiceReimbursedProjectFees: (
      invoiceGuid: string,
      query?: {
        /**
         * Optional: Number of rows to fetch
         * @format int32
         */
        rowCount?: number | null;
        /** Optional: page token to fetch the next page. */
        pageToken?: string | null;
      },
      params: RequestParams = {}
    ) =>
      this.request<ReimbursedProjectFeeOutputModel[], void | ExceptionModel>({
        path: `/v1/invoices/${invoiceGuid}/reimbursedprojectfees`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags InvoicesRead
     * @name ReimbursedProjectFeesGetInvoiceRowReimbursedProjectFees
     * @summary Get all the project fees on an invoice row
     * @request GET:/v1/invoicerows/{invoiceRowGuid}/reimbursedprojectfees
     * @secure
     * @response `200` `(ReimbursedProjectFeeOutputModel)[]` ReimbursedProjectFee
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    reimbursedProjectFeesGetInvoiceRowReimbursedProjectFees: (
      invoiceRowGuid: string,
      query?: {
        /**
         * Optional: Number of rows to fetch
         * @format int32
         */
        rowCount?: number | null;
        /** Optional: page token to fetch the next page. */
        pageToken?: string | null;
      },
      params: RequestParams = {}
    ) =>
      this.request<ReimbursedProjectFeeOutputModel[], void | ExceptionModel>({
        path: `/v1/invoicerows/${invoiceRowGuid}/reimbursedprojectfees`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsRead
     * @name SalesStatusTypesGetSalesStatusTypes
     * @summary Get all the sales status types
     * @request GET:/v1/salesstatustypes
     * @secure
     * @response `200` `(SalesStatusTypeOutputModel)[]` Sales status types
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    salesStatusTypesGetSalesStatusTypes: (
      query?: {
        /** If not given, return all sales status types, if given as true return only active sales status types, if given as false returns only inactive sales status types */
        active?: boolean | null;
        /** Optional: Get sales status types of the sales state. */
        salesState?: SalesStatusType;
        /**
         * Optional: First row to fetch. Default 0 = first row.
         * @format int32
         * @default 0
         */
        firstRow?: number | null;
        /**
         * Optional: How many rows to fetch, Default 20, maximum 100.
         * @format int32
         */
        rowCount?: number | null;
        /**
         * Optional: Text to search from sales status type name.
         * @default ""
         */
        textToSearch?: string | null;
        /**
         * Optional: Calculate total number of rows.
         * @default false
         */
        calculateRowCount?: boolean;
        /** Optional: A list of Key-Value pairs, containing names of fields and directions by which the results should be sorted. Any sortable field name (submodel fields not supported) in the model can be used, while value can be "Desc" or "Asc". Example: "?sortings[0].key=Name&sortings[0].value=Desc &sortings[1].key=Code&sortings[1].value=Asc" */
        sortings?: KeyValuePairOfStringAndSortDirection[] | null;
      },
      params: RequestParams = {}
    ) =>
      this.request<SalesStatusTypeOutputModel[], void | ExceptionModel>({
        path: `/v1/salesstatustypes`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsWrite
     * @name SalesStatusTypesPostSalesStatusType
     * @summary Insert a sales status type
     * @request POST:/v1/salesstatustypes
     * @secure
     * @response `201` `SalesStatusTypeOutputModel` Sales status type
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    salesStatusTypesPostSalesStatusType: (data: SalesStatusTypeInputModel | null, params: RequestParams = {}) =>
      this.request<SalesStatusTypeOutputModel, void | ExceptionModel>({
        path: `/v1/salesstatustypes`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsRead
     * @name TravelExpenseTypeCountrySettingsGetTravelExpenseTypeCountrySettings
     * @summary Get all country settings for a travel expense type
     * @request GET:/v1/travelexpensetypes/{travelExpenseTypeGuid}/travelexpensetypecountrysettings
     * @secure
     * @response `200` `(TravelExpenseTypeCountrySettingsModel)[]` All the TravelExpenseCountrySettings (tax related information)
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    travelExpenseTypeCountrySettingsGetTravelExpenseTypeCountrySettings: (travelExpenseTypeGuid: string, params: RequestParams = {}) =>
      this.request<TravelExpenseTypeCountrySettingsModel[], void | ExceptionModel>({
        path: `/v1/travelexpensetypes/${travelExpenseTypeGuid}/travelexpensetypecountrysettings`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsWrite
     * @name TravelExpenseTypeCountrySettingsPostTravelExpenseTypeCountrySettings
     * @summary Insert a travel expense type country setting
     * @request POST:/v1/travelexpensetypecountrysettings
     * @secure
     * @response `201` `TravelExpenseTypeCountrySettingsModel` Added travel expense type country setting
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    travelExpenseTypeCountrySettingsPostTravelExpenseTypeCountrySettings: (
      data: TravelExpenseTypeCountrySettingsModel | null,
      params: RequestParams = {}
    ) =>
      this.request<TravelExpenseTypeCountrySettingsModel, void | ExceptionModel>({
        path: `/v1/travelexpensetypecountrysettings`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsWrite
     * @name TravelExpenseTypeCountrySettingsPatchTravelExpenseTypeCountrySettings
     * @summary Update (Patch) a travel expense type country setting
     * @request PATCH:/v1/travelexpensetypecountrysettings/{guid}
     * @secure
     * @response `200` `(TravelExpenseTypeCountrySettingsModel)[]` List of updated travel expense type country settings
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    travelExpenseTypeCountrySettingsPatchTravelExpenseTypeCountrySettings: (
      guid: string,
      data: PatchOperation[] | null,
      params: RequestParams = {}
    ) =>
      this.request<TravelExpenseTypeCountrySettingsModel[], void | ExceptionModel>({
        path: `/v1/travelexpensetypecountrysettings/${guid}`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * @description Returns: No Content (204) if succeeded. Not found (404) if travel expense type country setting can't be found.
     *
     * @tags SettingsDelete
     * @name TravelExpenseTypeCountrySettingsDeleteTravelExpenseTypeCountrySetting
     * @summary Deletes a travel expense type country setting
     * @request DELETE:/v1/travelexpensetypecountrysettings/{guid}
     * @secure
     * @response `204` `void`
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    travelExpenseTypeCountrySettingsDeleteTravelExpenseTypeCountrySetting: (guid: string, params: RequestParams = {}) =>
      this.request<void, void | ExceptionModel>({
        path: `/v1/travelexpensetypecountrysettings/${guid}`,
        method: 'DELETE',
        secure: true,
        ...params
      }),

    /**
     * No description
     *
     * @tags UsersRead
     * @name UsersGetUsers
     * @summary Get users
     * @request GET:/v1/users
     * @secure
     * @response `200` `(UserOutputModel)[]` All the users
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    usersGetUsers: (
      query?: {
        pageToken?: string | null;
        /**
         * Optional: How many rows to fetch.
         * @format int32
         */
        rowCount?: number | null;
        /** If not given, return all users, if given as true return only active users, if given as false returns only inactive users */
        isActive?: boolean | null;
        /** Optional: ID of the business unit of the user. If not provided, returns for all business units. Default all. */
        businessUnitGuids?: string[] | null;
        /** Optional: ID of the keyword of the user. If not provided, returns for all keywords. Default all. */
        keywordGuids?: string[] | null;
        /**
         * Optional: Get users that have been added or changed after this date time (greater or equal).
         * @format date-time
         */
        changedSince?: string | null;
        /** Optional: ID of the supervisor to get subordinates for. */
        supervisorUserGuids?: string[] | null;
        /**
         * Optional: Code of the user.
         * @default ""
         */
        code?: string | null;
        /**
         * Optional: Email address of the user.
         * @default ""
         */
        email?: string | null;
        /** Optional: Filter users by purpose. */
        purpose?: GetUsersPurpose;
      },
      params: RequestParams = {}
    ) =>
      this.request<UserOutputModel[], void | ExceptionModel>({
        path: `/v1/users`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags UsersWrite
     * @name UsersPostUser
     * @summary Insert an user.
     * @request POST:/v1/users
     * @secure
     * @response `201` `UserOutputModel` Created user.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    usersPostUser: (data: UserInputModel | null, params: RequestParams = {}) =>
      this.request<UserOutputModel, void | ExceptionModel>({
        path: `/v1/users`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags TravelsRead
     * @name TravelReimbursementsGetTravelReimbursements
     * @summary Get travel reimbursements.
     * @request GET:/v1/travelreimbursements
     * @secure
     * @response `200` `(TravelReimbursementOutputModel)[]`
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    travelReimbursementsGetTravelReimbursements: (
      query?: {
        /** Optional: page token to fetch the next page. */
        pageToken?: string | null;
        /**
         * Optional: How many rows to fetch.
         * @format int32
         */
        rowCount?: number | null;
        /**
         * Optional: Get travel reimbursements that have been added or changed after this date time (greater or equal).
         * @format date-time
         */
        changedSince?: string | null;
        /** Optional: List of travel reimbursement status ids. */
        travelReimbursementStatusGuids?: string[] | null;
      },
      params: RequestParams = {}
    ) =>
      this.request<TravelReimbursementOutputModel[], void | ExceptionModel>({
        path: `/v1/travelreimbursements`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags TravelsWrite
     * @name TravelReimbursementsPostTravelReimbursement
     * @summary Add a travel reimbursement
     * @request POST:/v1/travelreimbursements
     * @secure
     * @response `201` `TravelReimbursementOutputModel` Added travel reimbursement
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    travelReimbursementsPostTravelReimbursement: (
      data: TravelReimbursementInputModel | null,
      query?: {
        /**
         * Optional: Add all of user's unreimbursed travel expenses to reimbursement. Default is true. If TravelExpenseReimbursementStartDate is given in organization settings, travel expenses are added from that date onwards. If value is false then expenses from includedProjectTravelExpenses list are added.
         * @default true
         */
        addAllUnreimbursedTravelExpenses?: boolean;
        /** Optional: A list of included projectTravelExpense GUIDs belonging to the user. If addAllUnreimbursedTravelExpenses is true then this list is ignored. */
        includedProjectTravelExpenses?: string[] | null;
      },
      params: RequestParams = {}
    ) =>
      this.request<TravelReimbursementOutputModel, void | ExceptionModel>({
        path: `/v1/travelreimbursements`,
        method: 'POST',
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags TravelsRead
     * @name TravelReimbursementsGetTravelReimbursement
     * @summary Get travel reimbursement by ID
     * @request GET:/v1/travelreimbursements/{guid}
     * @secure
     * @response `200` `TravelReimbursementOutputModel`
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    travelReimbursementsGetTravelReimbursement: (guid: string, params: RequestParams = {}) =>
      this.request<TravelReimbursementOutputModel, void | ExceptionModel>({
        path: `/v1/travelreimbursements/${guid}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags TravelsWrite
     * @name TravelReimbursementsPatchTravelReimbursement
     * @summary Update (Patch) a travel reimbursement
     * @request PATCH:/v1/travelreimbursements/{guid}
     * @secure
     * @response `200` `(TravelReimbursementOutputModel)[]` Updated travel reimbursement
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    travelReimbursementsPatchTravelReimbursement: (guid: string, data: PatchOperation[] | null, params: RequestParams = {}) =>
      this.request<TravelReimbursementOutputModel[], void | ExceptionModel>({
        path: `/v1/travelreimbursements/${guid}`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags TravelsDelete
     * @name TravelReimbursementsDeleteTravelReimbursement
     * @summary Delete a travel reimbursement
     * @request DELETE:/v1/travelreimbursements/{guid}
     * @secure
     * @response `204` `void` No Content (204) if succeeded.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    travelReimbursementsDeleteTravelReimbursement: (guid: string, params: RequestParams = {}) =>
      this.request<void, void | ExceptionModel>({
        path: `/v1/travelreimbursements/${guid}`,
        method: 'DELETE',
        secure: true,
        ...params
      }),

    /**
     * No description
     *
     * @tags UsersRead
     * @name WorkdaysGetWorkdays
     * @summary Get workdays for a user.
     * @request GET:/v1/users/{userGuid}/workdays
     * @secure
     * @response `200` `(WorkdayModel)[]` User's workdays.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    workdaysGetWorkdays: (
      userGuid: string,
      query: {
        /**
         * Start date of the workdays.
         * @format date-time
         */
        startDate: string;
        /**
         * End date of the workdays.
         * @format date-time
         */
        endDate: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<WorkdayModel[], void | ExceptionModel>({
        path: `/v1/users/${userGuid}/workdays`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags UsersWrite
     * @name WorkdaysPatchWorkDay
     * @summary Update (Patch) a workday or a part of it
     * @request PATCH:/v1/users/{userGuid}/workdays/{date}
     * @secure
     * @response `200` `(WorkdayModel)[]` list of updated workdays
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    workdaysPatchWorkDay: (userGuid: string, date: string, data: PatchOperation[] | null, params: RequestParams = {}) =>
      this.request<WorkdayModel[], void | ExceptionModel>({
        path: `/v1/users/${userGuid}/workdays/${date}`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * @description Only the active work types are included in the list, whether they come from organization settings or project specific work types.
     *
     * @tags ProjectsRead
     * @name WorkTypesGetPhaseWorkTypes
     * @summary Get all work types that are available for a phase (for work hour entry)
     * @request GET:/v1/phases/{phaseGuid}/worktypes
     * @secure
     * @response `200` `(WorkTypeOutputModel)[]` All the work types matching search criteria
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    workTypesGetPhaseWorkTypes: (
      phaseGuid: string,
      query?: {
        /** Optional: page token to fetch the next page. */
        pageToken?: string | null;
        /**
         * Optional: number of rows to fetch
         * @format int32
         */
        rowCount?: number | null;
        /** Id of the user for whom the work types are retrieved. Default is current user. */
        userGuid?: string | null;
      },
      params: RequestParams = {}
    ) =>
      this.request<WorkTypeOutputModel[], void | ExceptionModel>({
        path: `/v1/phases/${phaseGuid}/worktypes`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsRead
     * @name VatRatesGetVatRates
     * @summary Get all organization vat rates
     * @request GET:/v1/vatrates
     * @secure
     * @response `200` `(VatRateOutputModel)[]` Vat rates
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    vatRatesGetVatRates: (
      query?: {
        /** If not given, return all vat rates in organizations country. If given return only for that country. */
        countryGuid?: string | null;
        /** If not given, return all vat rates, if given as true return only active ones, if given as false returns only inactive ones. */
        active?: boolean | null;
      },
      params: RequestParams = {}
    ) =>
      this.request<VatRateOutputModel[], void | ExceptionModel>({
        path: `/v1/vatrates`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsWrite
     * @name VatRatesPostVatRate
     * @summary Insert a vat rate
     * @request POST:/v1/vatrates
     * @secure
     * @response `201` `VatRateOutputModel` Inserted vat rate
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    vatRatesPostVatRate: (data: VatRateInputModel | null, params: RequestParams = {}) =>
      this.request<VatRateOutputModel, void | ExceptionModel>({
        path: `/v1/vatrates`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsRead
     * @name VatRatesGetVatRate
     * @summary Get a vat rate by GUID
     * @request GET:/v1/vatrates/{guid}
     * @secure
     * @response `200` `VatRateOutputModel` Vat rate
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    vatRatesGetVatRate: (guid: string, params: RequestParams = {}) =>
      this.request<VatRateOutputModel, void | ExceptionModel>({
        path: `/v1/vatrates/${guid}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsWrite
     * @name VatRatesPatchVatRate
     * @summary Update (Patch) a vat rate or a part of it
     * @request PATCH:/v1/vatrates/{guid}
     * @secure
     * @response `200` `(VatRateOutputModel)[]` list of updated vat rates
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    vatRatesPatchVatRate: (guid: string, data: PatchOperation[] | null, params: RequestParams = {}) =>
      this.request<VatRateOutputModel[], void | ExceptionModel>({
        path: `/v1/vatrates/${guid}`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * @description Returns: No Content (204) if succeeded. Bad Request (400) if vat rate is the default one. Not Found (404) if vat rate can't be found.
     *
     * @tags SettingsDelete
     * @name VatRatesDeleteVatRate
     * @summary Delete a vat rate
     * @request DELETE:/v1/vatrates/{guid}
     * @secure
     * @response `204` `void`
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    vatRatesDeleteVatRate: (guid: string, params: RequestParams = {}) =>
      this.request<void, void | ExceptionModel>({
        path: `/v1/vatrates/${guid}`,
        method: 'DELETE',
        secure: true,
        ...params
      }),

    /**
     * No description
     *
     * @tags HoursRead
     * @name WorkHoursGetWorkHour
     * @summary Get work hour by ID
     * @request GET:/v1/workhours/{guid}
     * @secure
     * @response `200` `WorkHourOutputModel`
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    workHoursGetWorkHour: (guid: string, params: RequestParams = {}) =>
      this.request<WorkHourOutputModel, void | ExceptionModel>({
        path: `/v1/workhours/${guid}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags HoursWrite
     * @name WorkHoursPatchWorkHour
     * @summary Update (Patch) a work hour or a part of it
     * @request PATCH:/v1/workhours/{guid}
     * @secure
     * @response `200` `(WorkHourOutputModel)[]` List of updated work hours
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    workHoursPatchWorkHour: (guid: string, data: PatchOperation[] | null, params: RequestParams = {}) =>
      this.request<WorkHourOutputModel[], void | ExceptionModel>({
        path: `/v1/workhours/${guid}`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * @description Returns: No Content (204) if succeeded.
     *
     * @tags HoursDelete
     * @name WorkHoursDeleteWorkHour
     * @summary Deletes a work hour.
     * @request DELETE:/v1/workhours/{guid}
     * @secure
     * @response `204` `void`
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    workHoursDeleteWorkHour: (guid: string, params: RequestParams = {}) =>
      this.request<void, void | ExceptionModel>({
        path: `/v1/workhours/${guid}`,
        method: 'DELETE',
        secure: true,
        ...params
      }),

    /**
     * No description
     *
     * @tags HoursRead
     * @name WorkHoursGetWorkHours
     * @summary Get the work hours.
     * @request GET:/v1/workhours
     * @secure
     * @response `200` `(WorkHourOutputModel)[]`
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    workHoursGetWorkHours: (
      query?: {
        /** Optional: page token to fetch the next page. */
        pageToken?: string | null;
        /**
         * Optional: How many rows to fetch, Default 20, maximum 100.
         * @format int32
         */
        rowCount?: number | null;
        /**
         * Optional: Get work hours that have been added or changed after this date time (greater or equal).
         * @format date-time
         */
        changedSince?: string | null;
        /** Billable status type */
        billableStatus?: BillableStatusType;
        /**
         * Optional: Get work hours that have event date after this date time (greater or equal).
         * @format date
         */
        eventDateStart?: string | null;
        /**
         * Optional: Get work hours that have event date before this date time (less or equal).
         * @format date
         */
        eventDateEnd?: string | null;
      },
      params: RequestParams = {}
    ) =>
      this.request<WorkHourOutputModel[], void | ExceptionModel>({
        path: `/v1/workhours`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags HoursWrite
     * @name WorkHoursPostWorkHour
     * @summary Insert a work hour
     * @request POST:/v1/workhours
     * @secure
     * @response `201` `WorkHourOutputModel` Created work hour
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    workHoursPostWorkHour: (data: WorkHourInputModel | null, params: RequestParams = {}) =>
      this.request<WorkHourOutputModel, void | ExceptionModel>({
        path: `/v1/workhours`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags HoursRead
     * @name WorkHoursGetWorkHoursForUser
     * @summary Get all the work hours for a user
     * @request GET:/v1/users/{userGuid}/workhours
     * @secure
     * @response `200` `(WorkHourOutputModel)[]` WorkHours
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    workHoursGetWorkHoursForUser: (
      userGuid: string,
      query?: {
        /**
         * Optional: starting date from which to get the hours. Default all.
         * @format date-time
         */
        startDate?: string | null;
        /**
         * Optional: starting date to which to get the hours. Default all.
         * @format date-time
         */
        endDate?: string | null;
        /** Optional: ID of the phase to get the hours for. Default all. */
        phaseGuid?: string[] | null;
        /** Optional: ID of the work type. Default all. */
        workTypeGuid?: string[] | null;
        /** Optional: page token to fetch the next page. */
        pageToken?: string | null;
        /**
         * Optional: How many rows to fetch, Default 20, maximum 100.
         * @format int32
         */
        rowCount?: number | null;
      },
      params: RequestParams = {}
    ) =>
      this.request<WorkHourOutputModel[], void | ExceptionModel>({
        path: `/v1/users/${userGuid}/workhours`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags HoursRead
     * @name WorkHoursGetDeletedWorkHours
     * @summary Get the deleted work hours.
     * @request GET:/v1/deletedworkhours
     * @secure
     * @response `200` `(DeletedWorkHourModel)[]`
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    workHoursGetDeletedWorkHours: (
      query?: {
        /** Optional: page token to fetch the next page. */
        pageToken?: string | null;
        /**
         * Optional: How many rows to fetch, Default 20, maximum 100.
         * @format int32
         */
        rowCount?: number | null;
        /** Optional: ID of the project for the deleted work hours to be fetched. If not provided, returns for all projects. Default all. */
        projectGuids?: string[] | null;
        /** Optional: ID of the user. If not provided, returns for all users. Default all. */
        userGuids?: string[] | null;
        /**
         * Optional: Get work hours that have been deleted after this date time (greater or equal).
         * @format date-time
         */
        deletedSince?: string | null;
      },
      params: RequestParams = {}
    ) =>
      this.request<DeletedWorkHourModel[], void | ExceptionModel>({
        path: `/v1/deletedworkhours`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags HoursRead
     * @name WorkHoursGetProjectWorkHours
     * @summary Get all the work hours for phases of a project for invoicing
     * @request GET:/v1/projects/{projectGuid}/workhours
     * @secure
     * @response `200` `(WorkHourOutputModel)[]` WorkHours
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    workHoursGetProjectWorkHours: (
      projectGuid: string,
      query?: {
        /** Optional: Filter the work hours. If true/false, only the billable/non-billable ones are returned. If null, all are returned. Default is null. */
        isBillable?: boolean | null;
        /** Optional: Filter the work hours. If true/false, only the ones that are/are not invoiced are returned. If null, all are returned. Default is null. */
        isBilled?: boolean | null;
        /**
         * Optional: starting date from which to get the hours. Default all.
         * @format date-time
         */
        startDate?: string | null;
        /**
         * Optional: starting date to which to get the hours. Default all.
         * @format date-time
         */
        endDate?: string | null;
        /** Optional: page token to fetch the next page. */
        pageToken?: string | null;
        /**
         * Optional: How many rows to fetch, Default 20, maximum 100.
         * @format int32
         */
        rowCount?: number | null;
      },
      params: RequestParams = {}
    ) =>
      this.request<WorkHourOutputModel[], void | ExceptionModel>({
        path: `/v1/projects/${projectGuid}/workhours`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags InvoicesRead
     * @name WorkHoursGetInvoiceRowWorkHours
     * @summary Get all the work hours on an invoice row
     * @request GET:/v1/invoicerows/{invoiceRowGuid}/workhours
     * @secure
     * @response `200` `(WorkHourOutputModel)[]` WorkHours
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    workHoursGetInvoiceRowWorkHours: (
      invoiceRowGuid: string,
      query?: {
        /** Optional: page token to fetch the next page. */
        pageToken?: string | null;
        /**
         * Optional: How many rows to fetch, Default 20, maximum 100.
         * @format int32
         */
        rowCount?: number | null;
      },
      params: RequestParams = {}
    ) =>
      this.request<WorkHourOutputModel[], void | ExceptionModel>({
        path: `/v1/invoicerows/${invoiceRowGuid}/workhours`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags InvoicesRead
     * @name WorkHoursGetInvoiceWorkHours
     * @summary Get all the work hours on an invoice
     * @request GET:/v1/invoices/{invoiceGuid}/workhours
     * @secure
     * @response `200` `(WorkHourOutputModel)[]` WorkHours
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    workHoursGetInvoiceWorkHours: (
      invoiceGuid: string,
      query?: {
        /** Optional: page token to fetch the next page. */
        pageToken?: string | null;
        /**
         * Optional: How many rows to fetch, Default 20, maximum 100.
         * @format int32
         */
        rowCount?: number | null;
      },
      params: RequestParams = {}
    ) =>
      this.request<WorkHourOutputModel[], void | ExceptionModel>({
        path: `/v1/invoices/${invoiceGuid}/workhours`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags InvoicesRead
     * @name WorkHoursGetUninvoicedWorkHoursForInvoice
     * @summary Get uninvoiced work hours available for invoice
     * @request GET:/v1/invoices/{invoiceGuid}/uninvoicedworkhours
     * @secure
     * @response `200` `(WorkHourOutputModel)[]` WorkHours
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    workHoursGetUninvoicedWorkHoursForInvoice: (
      invoiceGuid: string,
      query?: {
        /** Optional: Filter the work hours. If true/false, only the billable/non-billable ones are returned. If null, all are returned. Default is null. */
        isBillable?: boolean | null;
        /** Optional: page token to fetch the next page. */
        pageToken?: string | null;
        /**
         * Optional: How many rows to fetch, Default 20, maximum 100.
         * @format int32
         */
        rowCount?: number | null;
      },
      params: RequestParams = {}
    ) =>
      this.request<WorkHourOutputModel[], void | ExceptionModel>({
        path: `/v1/invoices/${invoiceGuid}/uninvoicedworkhours`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsRead
     * @name ProjectStatusTypesGetProjectStatusTypes
     * @summary Get all the ProjectStatusTypes
     * @request GET:/v1/projectstatustypes
     * @secure
     * @response `200` `(ProjectStatusTypeModel)[]` All the ProjectStatusTypes
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    projectStatusTypesGetProjectStatusTypes: (
      query?: {
        /** If not given, return all ProjectStatusTypes, if given as true return only active ProjectStatusTypes, if given as false returns only inactive ProjectStatusTypes */
        active?: boolean | null;
        /**
         * Optional: first row to fetch. Default 0 = first row.
         * @format int32
         */
        firstRow?: number | null;
        /**
         * Optional: How many rows to fetch, Default 20, maximum 100.
         * @format int32
         */
        rowCount?: number | null;
        /**
         * Optional: Text to search from ProjectStatusType name.
         * @default ""
         */
        textToSearch?: string | null;
        /**
         * Optional: Calculate total number of rows.
         * @default false
         */
        calculateRowCount?: boolean;
        /** Optional: A list of Key-Value pairs, containing names of fields and directions by which the results should be sorted. Any sortable field name (submodel fields not supported) in the model can be used, while value can be "Desc" or "Asc". Example: "?sortings[0].key=name&sortings[0].value=Asc&sortings[1].key=isActive&sortings[1].value=Asc" */
        sortings?: KeyValuePairOfStringAndSortDirection[] | null;
      },
      params: RequestParams = {}
    ) =>
      this.request<ProjectStatusTypeModel[], void | ExceptionModel>({
        path: `/v1/projectstatustypes`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsWrite
     * @name ProjectStatusTypesPostProjectStatusType
     * @summary Insert a project status type
     * @request POST:/v1/projectstatustypes
     * @secure
     * @response `201` `ProjectStatusTypeModel` Project status type
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    projectStatusTypesPostProjectStatusType: (data: ProjectStatusTypeModel | null, params: RequestParams = {}) =>
      this.request<ProjectStatusTypeModel, void | ExceptionModel>({
        path: `/v1/projectstatustypes`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsRead
     * @name ProjectStatusTypesGetProjectStatusType
     * @summary Get projectStatusType by ID
     * @request GET:/v1/projectstatustypes/{guid}
     * @secure
     * @response `200` `ProjectStatusTypeModel` projectStatusType
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    projectStatusTypesGetProjectStatusType: (guid: string, params: RequestParams = {}) =>
      this.request<ProjectStatusTypeModel, void | ExceptionModel>({
        path: `/v1/projectstatustypes/${guid}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsWrite
     * @name ProjectStatusTypesPatchProjectStatusType
     * @summary Update (Patch) a projectStatusType or a part of it
     * @request PATCH:/v1/projectstatustypes/{guid}
     * @secure
     * @response `200` `(ProjectStatusTypeModel)[]` List of updated business units
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    projectStatusTypesPatchProjectStatusType: (guid: string, data: PatchOperation[] | null, params: RequestParams = {}) =>
      this.request<ProjectStatusTypeModel[], void | ExceptionModel>({
        path: `/v1/projectstatustypes/${guid}`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * @description Returns: No Content (204) if succeeded. Not found (404) if projectStatusType can't be found.
     *
     * @tags SettingsDelete
     * @name ProjectStatusTypesDeleteProjectStatusType
     * @summary Delete a projectStatusType
     * @request DELETE:/v1/projectstatustypes/{guid}
     * @secure
     * @response `204` `void`
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    projectStatusTypesDeleteProjectStatusType: (
      guid: string,
      query?: {
        /** Optional: ID of the project status type to which to move usages of this project status type. Default null. If project status type is in use and usages aren't moved the deletion might fail. */
        moveUsagesToGuid?: string | null;
      },
      params: RequestParams = {}
    ) =>
      this.request<void, void | ExceptionModel>({
        path: `/v1/projectstatustypes/${guid}`,
        method: 'DELETE',
        query: query,
        secure: true,
        ...params
      }),

    /**
     * No description
     *
     * @tags ProjectsRead
     * @name SalesStatusHistoryGetSalesStatusHistory
     * @summary Get the sales status history for a project
     * @request GET:/v1/projects/{projectGuid}/salesstatushistory
     * @secure
     * @response `200` `(SalesStatusHistoryOutputModel)[]` Sales status history
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    salesStatusHistoryGetSalesStatusHistory: (projectGuid: string, params: RequestParams = {}) =>
      this.request<SalesStatusHistoryOutputModel[], void | ExceptionModel>({
        path: `/v1/projects/${projectGuid}/salesstatushistory`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags ProjectsRead
     * @name ProjectForecastsGetForecasts
     * @summary Get the project forecasts
     * @request GET:/v1/projects/{projectGuid}/projectforecasts
     * @secure
     * @response `200` `(ProjectForecastOutputModel)[]` List of project forecasts.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    projectForecastsGetForecasts: (
      projectGuid: string,
      query?: {
        /**
         * Start date of the date range for the forecasts
         * @format date-time
         */
        startDate?: string | null;
        /**
         * End date of the date range for the forecasts
         * @format date-time
         */
        endDate?: string | null;
      },
      params: RequestParams = {}
    ) =>
      this.request<ProjectForecastOutputModel[], void | ExceptionModel>({
        path: `/v1/projects/${projectGuid}/projectforecasts`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags ProjectsDelete
     * @name ProjectForecastsDeleteForecasts
     * @summary Delete the project forecasts from a month onward, including the given month.
     * @request DELETE:/v1/projects/{projectGuid}/projectforecasts
     * @secure
     * @response `204` `void` List of project forecasts.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    projectForecastsDeleteForecasts: (
      projectGuid: string,
      query?: {
        /**
         * Year where to start deleting the forecasts
         * @format int32
         * @min 1900
         * @max 2075
         */
        year?: number;
        /**
         * Month where to start deleting the forecasts
         * @format int32
         * @min 1
         * @max 12
         */
        month?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<void, void | ExceptionModel>({
        path: `/v1/projects/${projectGuid}/projectforecasts`,
        method: 'DELETE',
        query: query,
        secure: true,
        ...params
      }),

    /**
     * No description
     *
     * @tags ProjectsRead
     * @name ProjectForecastsGetForecast
     * @summary Get project forecast by ID
     * @request GET:/v1/projectforecasts/{guid}
     * @secure
     * @response `200` `ProjectForecastOutputModel` Project forecast
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    projectForecastsGetForecast: (guid: string, params: RequestParams = {}) =>
      this.request<ProjectForecastOutputModel, void | ExceptionModel>({
        path: `/v1/projectforecasts/${guid}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags ProjectsWrite
     * @name ProjectForecastsPatchForecast
     * @summary Update (Patch) an project forecast or a part of it
     * @request PATCH:/v1/projectforecasts/{guid}
     * @secure
     * @response `200` `(ProjectForecastOutputModel)[]` List of updated Project forecast
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    projectForecastsPatchForecast: (guid: string, data: PatchOperation[] | null, params: RequestParams = {}) =>
      this.request<ProjectForecastOutputModel[], void | ExceptionModel>({
        path: `/v1/projectforecasts/${guid}`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * @description Returns: No Content (204) if succeeded. Not found (404) if product can't be found.
     *
     * @tags ProjectsDelete
     * @name ProjectForecastsDeleteForecast
     * @summary Delete a project forecast
     * @request DELETE:/v1/projectforecasts/{guid}
     * @secure
     * @response `204` `void`
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    projectForecastsDeleteForecast: (guid: string, params: RequestParams = {}) =>
      this.request<void, void | ExceptionModel>({
        path: `/v1/projectforecasts/${guid}`,
        method: 'DELETE',
        secure: true,
        ...params
      }),

    /**
     * No description
     *
     * @tags ProjectsWrite
     * @name ProjectForecastsPostForecast
     * @summary Insert a project forecast
     * @request POST:/v1/projectforecasts
     * @secure
     * @response `201` `ProjectForecastOutputModel` Project forecast
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    projectForecastsPostForecast: (data: ProjectForecastInputModel | null, params: RequestParams = {}) =>
      this.request<ProjectForecastOutputModel, void | ExceptionModel>({
        path: `/v1/projectforecasts`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsRead
     * @name BankAccountsGetBankAccounts
     * @summary Get all bank accounts for current organization.
     * @request GET:/v1/bankaccounts
     * @secure
     * @response `200` `(BankAccountOutputModel)[]` Bank accounts.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    bankAccountsGetBankAccounts: (
      query?: {
        /** Optional: ID of the company. */
        companyGuid?: string | null;
        /** Optional: ID of the business unit. */
        businessUnitGuid?: string | null;
        /** If not given, returns all bank accounts, if given as true returns only active bank accounts, if given as false returns only inactive bank accounts. */
        active?: boolean | null;
        /**
         * Optional: first row to fetch. Default 0 = first row.
         * @format int32
         * @default 0
         */
        firstRow?: number | null;
        /**
         * Optional: How many rows to fetch, Default 20, maximum 100.
         * @format int32
         */
        rowCount?: number | null;
        /**
         * Optional: Text to search from bank account name.
         * @default ""
         */
        textToSearch?: string | null;
        /**
         * Optional: Calculate total number of rows.
         * @default false
         */
        calculateRowCount?: boolean;
        /** Optional: A list of Key-Value pairs, containing names of fields and directions by which the results should be sorted. Any sortable field name (submodel fields not supported) in the model can be used, while value can be "Desc" or "Asc". Example: "?sortings[0].key=BankName&sortings[0].value=Desc &sortings[1].key=BusinessUnitName&sortings[1].value=Asc". */
        sortings?: KeyValuePairOfStringAndSortDirection[] | null;
      },
      params: RequestParams = {}
    ) =>
      this.request<BankAccountOutputModel[], void | ExceptionModel>({
        path: `/v1/bankaccounts`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsRead
     * @name BankAccountsGetBankAccount
     * @summary Get bank account by ID.
     * @request GET:/v1/bankaccounts/{guid}
     * @secure
     * @response `200` `BankAccountOutputModel` Bank account.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    bankAccountsGetBankAccount: (guid: string, params: RequestParams = {}) =>
      this.request<BankAccountOutputModel, void | ExceptionModel>({
        path: `/v1/bankaccounts/${guid}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsRead
     * @name CurrenciesGetCurrencies
     * @summary Get all the Currencies
     * @request GET:/v1/currencies
     * @secure
     * @response `200` `(CurrencyOutputModel)[]` All the Currencies
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    currenciesGetCurrencies: (
      query?: {
        /** If not given, return all Currencies, if given as true return only active Currencies, if given as false returns only inactive Currencies. */
        active?: boolean | null;
        /**
         * Optional: first row to fetch. Default 0 = first row.
         * @format int32
         * @default 0
         */
        firstRow?: number | null;
        /**
         * Optional: How many rows to fetch, Default 20, maximum 100.
         * @format int32
         */
        rowCount?: number | null;
        /**
         * Optional: Text based search applied to the result. Matches currency name and code.
         * @default ""
         */
        textToSearch?: string | null;
        /**
         * Optional: Calculate total number of rows.
         * @default false
         */
        calculateRowCount?: boolean;
        /** Optional: A list of Key-Value pairs, containing names of fields and directions by which the results should be sorted. Any sortable field name (submodel fields not supported) in the model can be used, while value can be "Desc" or "Asc". Example: "?sortings[0].key=name&sortings[0].value=Asc". Using additional sorting fields "CreatedDate" and / or "LastUpdatedDate" as keys sort currencies without a timestamp provided when sorting with other date fields. */
        sortings?: KeyValuePairOfStringAndSortDirection[] | null;
      },
      params: RequestParams = {}
    ) =>
      this.request<CurrencyOutputModel[], void | ExceptionModel>({
        path: `/v1/currencies`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsRead
     * @name CurrenciesGetCurrency
     * @summary Get currency by ID.
     * @request GET:/v1/currencies/{guid}
     * @secure
     * @response `200` `CurrencyOutputModel` CurrencyModel.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    currenciesGetCurrency: (guid: string, params: RequestParams = {}) =>
      this.request<CurrencyOutputModel, void | ExceptionModel>({
        path: `/v1/currencies/${guid}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsWrite
     * @name CurrenciesPatchCurrency
     * @summary Update (Patch) an currency or a part of it.
     * @request PATCH:/v1/currencies/{guid}
     * @secure
     * @response `200` `(CurrencyOutputModel)[]` List of updated currencies.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    currenciesPatchCurrency: (guid: string, data: PatchOperation[] | null, params: RequestParams = {}) =>
      this.request<CurrencyOutputModel[], void | ExceptionModel>({
        path: `/v1/currencies/${guid}`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags FeesRead
     * @name FlatRatesGetFlatrate
     * @summary Get flat rate.
     * @request GET:/v1/flatrates/{guid}
     * @secure
     * @response `200` `(FlatRateOutputModel)[]` FlatRateModel.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    flatRatesGetFlatrate: (guid: string, params: RequestParams = {}) =>
      this.request<FlatRateOutputModel[], void | ExceptionModel>({
        path: `/v1/flatrates/${guid}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags FeesWrite
     * @name FlatRatesPatchFlatRate
     * @summary Update (Patch) a flat rate or a part of it.
     * @request PATCH:/v1/flatrates/{guid}
     * @secure
     * @response `200` `(FlatRateOutputModel)[]` list of updated flat rates.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    flatRatesPatchFlatRate: (guid: string, data: PatchOperation[] | null, params: RequestParams = {}) =>
      this.request<FlatRateOutputModel[], void | ExceptionModel>({
        path: `/v1/flatrates/${guid}`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * @description Returns: No Content (204) if succeeded.
     *
     * @tags FeesDelete
     * @name FlatRatesDeleteFlatRate
     * @summary Delete a flat rate of a phase.
     * @request DELETE:/v1/flatrates/{guid}
     * @secure
     * @response `204` `void`
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    flatRatesDeleteFlatRate: (guid: string, params: RequestParams = {}) =>
      this.request<void, void | ExceptionModel>({
        path: `/v1/flatrates/${guid}`,
        method: 'DELETE',
        secure: true,
        ...params
      }),

    /**
     * No description
     *
     * @tags FeesRead
     * @name FlatRatesGetFlatratesForProject
     * @summary Get project's flat rates.
     * @request GET:/v1/projects/{projectGuid}/flatrates
     * @secure
     * @response `200` `(FlatRateOutputModel)[]` All the flat rates for the project.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    flatRatesGetFlatratesForProject: (projectGuid: string, params: RequestParams = {}) =>
      this.request<FlatRateOutputModel[], void | ExceptionModel>({
        path: `/v1/projects/${projectGuid}/flatrates`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsRead
     * @name PriceListsGetPricelists
     * @summary Get all price lists.
     * @request GET:/v1/pricelists
     * @secure
     * @response `200` `(PriceListOutputModel)[]` All the price lists.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    priceListsGetPricelists: (
      query?: {
        /** If not given, return all price lists, if given as true return only active price lists, if given as false returns only inactive price lists. */
        active?: boolean | null;
        /**
         * Optional: first row to fetch. Default 0 = first row.
         * @format int32
         * @default 0
         */
        firstRow?: number | null;
        /**
         * Optional: How many rows to fetch, Default 20, maximum 100.
         * @format int32
         */
        rowCount?: number | null;
        /**
         * Optional: Text to search from price list name.
         * @default ""
         */
        textToSearch?: string | null;
        /** Optional: ID of the price list currency. */
        currencyGuid?: string | null;
        /**
         * Optional: Calculate total number of rows.
         * @default false
         */
        calculateRowCount?: boolean;
        /** Optional: A list of Key-Value pairs, containing names of fields and directions by which the results should be sorted. Any sortable field name (submodel fields not supported) in the model can be used, while value can be "Desc" or "Asc". */
        sortings?: KeyValuePairOfStringAndSortDirection[] | null;
        /**
         * Optional: Name of the price list.
         * @default ""
         */
        name?: string | null;
      },
      params: RequestParams = {}
    ) =>
      this.request<PriceListOutputModel[], void | ExceptionModel>({
        path: `/v1/pricelists`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
 * No description
 *
 * @tags ProjectsWrite
 * @name PriceListsPostCustomPricelist
 * @summary Create custom price list for a project. If project already has a custom price list returns existing price list.
Creates a new price list if project doesn't have a custom price list.
Project can only have one custom price list.
Note that project's price list will be changed to the custom price list created here and
also existing prices are copied to the new price list.
 * @request POST:/v1/projects/{projectGuid}/pricelists/custom
 * @secure
 * @response `201` `CustomPriceListOutputModel`
 * @response `404` `void` Resource not found
 * @response `default` `ExceptionModel` Default error response
 */
    priceListsPostCustomPricelist: (
      projectGuid: string,
      query?: {
        /**
         * Get the custom volume pricing price list or regular custom price list. Default is false.
         * @default false
         */
        isVolumePricing?: boolean;
      },
      params: RequestParams = {}
    ) =>
      this.request<CustomPriceListOutputModel, void | ExceptionModel>({
        path: `/v1/projects/${projectGuid}/pricelists/custom`,
        method: 'POST',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsRead
     * @name PriceListVersionsGetPricelistVersionsByPricelist
     * @summary Get all price list versions of a price list.
     * @request GET:/v1/pricelists/{pricelistGuid}/pricelistversions
     * @secure
     * @response `200` `(PricelistVersionOutputModel)[]` Price list versions.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    priceListVersionsGetPricelistVersionsByPricelist: (pricelistGuid: string, params: RequestParams = {}) =>
      this.request<PricelistVersionOutputModel[], void | ExceptionModel>({
        path: `/v1/pricelists/${pricelistGuid}/pricelistversions`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsRead
     * @name PriceListVersionsGetPricelistVersion
     * @summary Get a price list version by guid.
     * @request GET:/v1/pricelistversions/{guid}
     * @secure
     * @response `200` `PricelistVersionOutputModel` Price list version.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    priceListVersionsGetPricelistVersion: (guid: string, params: RequestParams = {}) =>
      this.request<PricelistVersionOutputModel, void | ExceptionModel>({
        path: `/v1/pricelistversions/${guid}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsRead
     * @name ProductPricesGetProductPrices
     * @summary Get all the product prices for a price list version.
     * @request GET:/v1/pricelistversions/{pricelistVersionGuid}/productprices
     * @secure
     * @response `200` `(ProductPriceOutputModel)[]` Projects.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    productPricesGetProductPrices: (
      pricelistVersionGuid: string,
      query?: {
        /**
         * If true return only prices from the price list, if false also returns prices from the products. Default is false.
         * @default false
         */
        fromPricelistOnly?: boolean;
        /**
         * Optional: first row to fetch. Default 0 = first row.
         * @format int32
         * @default 0
         */
        firstRow?: number | null;
        /**
         * Optional: How many rows to fetch, Default 20, maximum 100.
         * @format int32
         */
        rowCount?: number | null;
        /**
         * Optional: Text to search from Product name.
         * @default ""
         */
        textToSearch?: string | null;
        /**
         * Optional: Calculate the number of total rows. Default false = total row count is returned as zero.
         * @default false
         */
        calculateRowCount?: boolean;
        /**
         * Optional: Absolute search for products with specified product code.
         * @default ""
         */
        productCode?: string | null;
        /** Optional: Search all product price(s) by products guid(s). */
        productGuids?: string[] | null;
        /** Optional: If true, return only volume priced products. If false, return all non volume priced products. Default is null, which means return all products. */
        isVolumePriced?: boolean | null;
        /** Optional: Search product prices according to product category / categories by product category guid(s). */
        productCategoryGuids?: string[] | null;
        /** Optional: Search product prices according to product type / types. */
        productTypes?: ProductType[] | null;
      },
      params: RequestParams = {}
    ) =>
      this.request<ProductPriceOutputModel[], void | ExceptionModel>({
        path: `/v1/pricelistversions/${pricelistVersionGuid}/productprices`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags ProjectsRead
     * @name ProductPricesGetProductPricesForProject
     * @summary Get all the productPrices for a project.
     * @request GET:/v1/projects/{projectGuid}/productprices
     * @secure
     * @response `200` `(ProductPriceOutputModel)[]` Projects.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    productPricesGetProductPricesForProject: (
      projectGuid: string,
      query?: {
        /**
         * If true return only prices from the price list, if false also returns prices from the products. Default is false.
         * @default false
         */
        fromPricelistOnly?: boolean;
        /**
         * Optional: first row to fetch. Default 0 = first row.
         * @format int32
         * @default 0
         */
        firstRow?: number | null;
        /**
         * Optional: How many rows to fetch, Default 20, maximum 100.
         * @format int32
         */
        rowCount?: number | null;
        /**
         * Optional: Text to search from Product name.
         * @default ""
         */
        textToSearch?: string | null;
        /**
         * Optional: Calculate the number of total rows. Default false = total row count is returned as zero.
         * @default false
         */
        calculateRowCount?: boolean;
        /** Optional: If true, returns only prices that are available for the project, false returns price that are not available. Default all. */
        isAvailable?: boolean | null;
        /**
         * Optional: Absolute search for products with specified product code.
         * @default ""
         */
        productCode?: string | null;
        /** Optional: Search all product price(s) by products guid(s). */
        productGuids?: string[] | null;
        /** Optional: If true, return only volume priced products. If false, return all non volume priced products. Default is null, which means return all products. */
        isVolumePriced?: boolean | null;
        /** Optional: Search product prices according to product category / categories by product category guid(s). */
        productCategoryGuids?: string[] | null;
        /** Optional: Search product prices according to product type / types. */
        productTypes?: ProductType[] | null;
      },
      params: RequestParams = {}
    ) =>
      this.request<ProductPriceOutputModel[], void | ExceptionModel>({
        path: `/v1/projects/${projectGuid}/productprices`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsRead
     * @name ProductPricesGetProductPrice
     * @summary Get product price by ID.
     * @request GET:/v1/productprices/{guid}
     * @secure
     * @response `200` `ProductPriceOutputModel`
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    productPricesGetProductPrice: (guid: string, params: RequestParams = {}) =>
      this.request<ProductPriceOutputModel, void | ExceptionModel>({
        path: `/v1/productprices/${guid}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsRead
     * @name ProductsGetProduct
     * @summary Get product by ID.
     * @request GET:/v1/products/{guid}
     * @secure
     * @response `200` `ProductOutputModel` Product.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    productsGetProduct: (guid: string, params: RequestParams = {}) =>
      this.request<ProductOutputModel, void | ExceptionModel>({
        path: `/v1/products/${guid}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsWrite
     * @name ProductsPatchProduct
     * @summary Update (Patch) an product or a part of it.
     * @request PATCH:/v1/products/{guid}
     * @secure
     * @response `200` `(ProductOutputModel)[]` List of updated products.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    productsPatchProduct: (guid: string, data: PatchOperation[] | null, params: RequestParams = {}) =>
      this.request<ProductOutputModel[], void | ExceptionModel>({
        path: `/v1/products/${guid}`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * @description Returns: No Content (204) if succeeded. Not found (404) if product can't be found.
     *
     * @tags SettingsDelete
     * @name ProductsDeleteProduct
     * @summary Delete a product.
     * @request DELETE:/v1/products/{guid}
     * @secure
     * @response `204` `void`
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    productsDeleteProduct: (guid: string, params: RequestParams = {}) =>
      this.request<void, void | ExceptionModel>({
        path: `/v1/products/${guid}`,
        method: 'DELETE',
        secure: true,
        ...params
      }),

    /**
     * No description
     *
     * @tags FeesRead
     * @name ProjectFeesGetProjectFee
     * @summary Get projectFee by ID.
     * @request GET:/v1/projectfees/{guid}
     * @secure
     * @response `200` `ProjectFeeOutputModel`
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    projectFeesGetProjectFee: (guid: string, params: RequestParams = {}) =>
      this.request<ProjectFeeOutputModel, void | ExceptionModel>({
        path: `/v1/projectfees/${guid}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags FeesWrite
     * @name ProjectFeesPatchProjectFee
     * @summary Update (Patch) a projectFee or a part of it.
     * @request PATCH:/v1/projectfees/{guid}
     * @secure
     * @response `200` `(ProjectFeeOutputModel)[]` List of updated project fees.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    projectFeesPatchProjectFee: (guid: string, data: PatchOperation[] | null, params: RequestParams = {}) =>
      this.request<ProjectFeeOutputModel[], void | ExceptionModel>({
        path: `/v1/projectfees/${guid}`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * @description Returns: No Content (204) if succeeded.
     *
     * @tags FeesDelete
     * @name ProjectFeesDeleteProjectFree
     * @summary Deletes a project fee.
     * @request DELETE:/v1/projectfees/{guid}
     * @secure
     * @response `204` `void`
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    projectFeesDeleteProjectFree: (guid: string, params: RequestParams = {}) =>
      this.request<void, void | ExceptionModel>({
        path: `/v1/projectfees/${guid}`,
        method: 'DELETE',
        secure: true,
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsRead
     * @name ProjectMemberCostExceptionsGetProjectMemberCostException
     * @summary Get project member cost exception by ID.
     * @request GET:/v1/projectmembercostexceptions/{guid}
     * @secure
     * @response `200` `ProjectMemberCostExceptionOutputModel` Link.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    projectMemberCostExceptionsGetProjectMemberCostException: (guid: string, params: RequestParams = {}) =>
      this.request<ProjectMemberCostExceptionOutputModel, void | ExceptionModel>({
        path: `/v1/projectmembercostexceptions/${guid}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsWrite
     * @name ProjectMemberCostExceptionsPatch
     * @summary Update (Patch) project member cost exception.
     * @request PATCH:/v1/projectmembercostexceptions/{guid}
     * @secure
     * @response `200` `(ProjectMemberCostExceptionOutputModel)[]` list of updated links.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    projectMemberCostExceptionsPatch: (guid: string, data: PatchOperation[] | null, params: RequestParams = {}) =>
      this.request<ProjectMemberCostExceptionOutputModel[], void | ExceptionModel>({
        path: `/v1/projectmembercostexceptions/${guid}`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * @description Deletes project member cost exception. Returns: No Content (204) if succeeded.
     *
     * @tags SettingsDelete
     * @name ProjectMemberCostExceptionsDelete
     * @summary Deletes a project member cost exception.
     * @request DELETE:/v1/projectmembercostexceptions/{guid}
     * @secure
     * @response `204` `void`
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    projectMemberCostExceptionsDelete: (guid: string, params: RequestParams = {}) =>
      this.request<void, void | ExceptionModel>({
        path: `/v1/projectmembercostexceptions/${guid}`,
        method: 'DELETE',
        secure: true,
        ...params
      }),

    /**
     * No description
     *
     * @tags UsersRead
     * @name ProjectMemberCostExceptionsGetProjectMemberCostExceptionsForUser
     * @summary Get all cost exceptions of project members for user.
     * @request GET:/v1/users/{userGuid}/projectmembercostexceptions
     * @secure
     * @response `200` `(ProjectMemberCostExceptionOutputModel)[]` All the member cost exceptions for one project.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    projectMemberCostExceptionsGetProjectMemberCostExceptionsForUser: (
      userGuid: string,
      query?: {
        /** Search only for open or closed projects. Default all projects. */
        isProjectClosed?: boolean | null;
        /**
         * Optional: first row to fetch. Default 0 = first row.
         * @format int32
         * @default 0
         */
        firstRow?: number | null;
        /**
         * Optional: How many rows to fetch, Default 20, maximum 100.
         * @format int32
         */
        rowCount?: number | null;
      },
      params: RequestParams = {}
    ) =>
      this.request<ProjectMemberCostExceptionOutputModel[], void | ExceptionModel>({
        path: `/v1/users/${userGuid}/projectmembercostexceptions`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags ProjectsRead
     * @name ProjectMemberCostExceptionsGetProjectMemberCostExceptionsForProject
     * @summary Get all cost exceptions of project members for a project.
     * @request GET:/v1/projects/{projectGuid}/projectmembercostexceptions
     * @secure
     * @response `200` `(ProjectMemberCostExceptionOutputModel)[]` All the member cost exceptions for one project.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    projectMemberCostExceptionsGetProjectMemberCostExceptionsForProject: (
      projectGuid: string,
      query?: {
        /** Optional: Guid of the user. */
        userGuid?: string | null;
        /**
         * Optional: first row to fetch. Default 0 = first row.
         * @format int32
         * @default 0
         */
        firstRow?: number | null;
        /**
         * Optional: How many rows to fetch, Default 20, maximum 100.
         * @format int32
         */
        rowCount?: number | null;
      },
      params: RequestParams = {}
    ) =>
      this.request<ProjectMemberCostExceptionOutputModel[], void | ExceptionModel>({
        path: `/v1/projects/${projectGuid}/projectmembercostexceptions`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsWrite
     * @name ProjectMemberCostExceptionsPost
     * @summary Add a cost exception to a project member.
     * @request POST:/v1/projectmembercostexceptions
     * @secure
     * @response `201` `ProjectMemberCostExceptionOutputModel` Inserted link.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    projectMemberCostExceptionsPost: (data: ProjectMemberCostExceptionInputModel | null, params: RequestParams = {}) =>
      this.request<ProjectMemberCostExceptionOutputModel, void | ExceptionModel>({
        path: `/v1/projectmembercostexceptions`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags FeesRead
     * @name ProjectRecurringFeeRulesGetProjectRecurringFeeRules
     * @summary Get the recurring fee rules.
     * @request GET:/v1/projectrecurringfeerules
     * @secure
     * @response `200` `(ProjectRecurringFeeRuleOutputModel)[]` List of updated project recurring fee rules
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    projectRecurringFeeRulesGetProjectRecurringFeeRules: (
      query?: {
        /**
         * Optional: first row to fetch. Default 0 = first row.
         * @format int32
         * @default 0
         */
        firstRow?: number | null;
        /**
         * Optional: How many rows to fetch, Default 20, maximum 100.
         * @format int32
         */
        rowCount?: number | null;
        /** projectRecurringFeeRule's product type. if given, it filters the projectRecurringFeeRules by the given type. */
        productType?: ProductType;
        /**
         * Optional: Get recurring fee rules that have been added or changed after this date time (greater or equal).
         * @format date-time
         */
        changedSince?: string | null;
      },
      params: RequestParams = {}
    ) =>
      this.request<ProjectRecurringFeeRuleOutputModel[], void | ExceptionModel>({
        path: `/v1/projectrecurringfeerules`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags FeesWrite
     * @name ProjectRecurringFeeRulesPostProjectRecurringFeeRule
     * @summary Insert a projectRecurringFeeRule.
     * @request POST:/v1/projectrecurringfeerules
     * @secure
     * @response `201` `(ProjectRecurringFeeRuleOutputModel)[]` Created ProjectRecurringFeeRules.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    projectRecurringFeeRulesPostProjectRecurringFeeRule: (data: ProjectRecurringFeeRuleInputModel | null, params: RequestParams = {}) =>
      this.request<ProjectRecurringFeeRuleOutputModel[], void | ExceptionModel>({
        path: `/v1/projectrecurringfeerules`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags FeesRead
     * @name ProjectRecurringFeeRulesGetProjectRecurringFeeRulesForProject
     * @summary Get all the Recurring Fee Rules for a project
     * @request GET:/v1/projects/{projectGuid}/projectrecurringfeerules
     * @secure
     * @response `200` `(ProjectRecurringFeeRuleOutputModel)[]` List of updated project recurring fee rules
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    projectRecurringFeeRulesGetProjectRecurringFeeRulesForProject: (
      projectGuid: string,
      query?: {
        /** projectRecurringFeeRule's product type. if given, it filters the projectRecurringFeeRules by the given type. */
        productType?: ProductType;
        /**
         * Optional: first row to fetch. Default 0 = first row.
         * @format int32
         * @default 0
         */
        firstRow?: number | null;
        /**
         * Optional: How many rows to fetch, Default 20, maximum 100.
         * @format int32
         */
        rowCount?: number | null;
        /** Optional. Filter the project recurring fee rules. If true/false, only the ones that will be billable in the future are returned. If null, all are returned. Default is false. */
        isBillablePeriodInFuture?: boolean | null;
        /** the time period for any uninvoiced recurring rules. */
        billableTimePeriod?: BillablePeriod;
      },
      params: RequestParams = {}
    ) =>
      this.request<ProjectRecurringFeeRuleOutputModel[], void | ExceptionModel>({
        path: `/v1/projects/${projectGuid}/projectrecurringfeerules`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags FeesRead
     * @name ProjectRecurringFeeRulesGetProjectRecurringFeeRule
     * @summary Get project's RecurringFeeRule by ID.
     * @request GET:/v1/projectrecurringfeerules/{guid}
     * @secure
     * @response `200` `ProjectRecurringFeeRuleOutputModel` List of updated project recurring fee rules.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    projectRecurringFeeRulesGetProjectRecurringFeeRule: (
      guid: string,
      query?: {
        /**
         * Indicates the rule should be returned even if it is not active. Default is false.
         * @default false
         */
        includeInactive?: boolean;
      },
      params: RequestParams = {}
    ) =>
      this.request<ProjectRecurringFeeRuleOutputModel, void | ExceptionModel>({
        path: `/v1/projectrecurringfeerules/${guid}`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags FeesWrite
     * @name ProjectRecurringFeeRulesPatchProjectRecurringFeeRule
     * @summary Update (Patch) a projectRecurringFeeRule or a part of it.
     * @request PATCH:/v1/projectrecurringfeerules/{guid}
     * @secure
     * @response `200` `(ProjectRecurringFeeRuleOutputModel)[]` List of updated projectRecurringFeeRules.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    projectRecurringFeeRulesPatchProjectRecurringFeeRule: (guid: string, data: PatchOperation[] | null, params: RequestParams = {}) =>
      this.request<ProjectRecurringFeeRuleOutputModel[], void | ExceptionModel>({
        path: `/v1/projectrecurringfeerules/${guid}`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * @description Returns: No Content (204) if succeeded.
     *
     * @tags FeesDelete
     * @name ProjectRecurringFeeRulesDeleteProjectRecurringFeeRule
     * @summary Deletes a projectRecurringFeeRule.
     * @request DELETE:/v1/projectrecurringfeerules/{guid}
     * @secure
     * @response `204` `void`
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    projectRecurringFeeRulesDeleteProjectRecurringFeeRule: (guid: string, params: RequestParams = {}) =>
      this.request<void, void | ExceptionModel>({
        path: `/v1/projectrecurringfeerules/${guid}`,
        method: 'DELETE',
        secure: true,
        ...params
      }),

    /**
     * No description
     *
     * @tags TravelsRead
     * @name ProjectTravelExpensesGetProjectTravelExpense
     * @summary Get project travel expense by ID.
     * @request GET:/v1/projecttravelexpenses/{guid}
     * @secure
     * @response `200` `ProjectTravelExpenseOutputModel` ProjectTravelExpenseOutputModel.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    projectTravelExpensesGetProjectTravelExpense: (guid: string, params: RequestParams = {}) =>
      this.request<ProjectTravelExpenseOutputModel, void | ExceptionModel>({
        path: `/v1/projecttravelexpenses/${guid}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags TravelsWrite
     * @name ProjectTravelExpensesPatchProjectTravelExpense
     * @summary Update (Patch) a project travel expense or a part of it.
     * @request PATCH:/v1/projecttravelexpenses/{guid}
     * @secure
     * @response `200` `(ProjectTravelExpenseOutputModel)[]` List of updated project travel expenses.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    projectTravelExpensesPatchProjectTravelExpense: (guid: string, data: PatchOperation[] | null, params: RequestParams = {}) =>
      this.request<ProjectTravelExpenseOutputModel[], void | ExceptionModel>({
        path: `/v1/projecttravelexpenses/${guid}`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * @description Returns: No Content (204) if succeeded.
     *
     * @tags TravelsDelete
     * @name ProjectTravelExpensesDeleteProjectTravelExpense
     * @summary Deletes a project travel expense.
     * @request DELETE:/v1/projecttravelexpenses/{guid}
     * @secure
     * @response `204` `void`
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    projectTravelExpensesDeleteProjectTravelExpense: (guid: string, params: RequestParams = {}) =>
      this.request<void, void | ExceptionModel>({
        path: `/v1/projecttravelexpenses/${guid}`,
        method: 'DELETE',
        secure: true,
        ...params
      }),

    /**
     * No description
     *
     * @tags InvoicesRead
     * @name ReimbursedProjectTravelExpensesGetInvoiceProjectTravelExpenses
     * @summary Get all the project travel expenses on an invoice.
     * @request GET:/v1/invoices/{invoiceGuid}/reimbursedprojecttravelexpenses
     * @secure
     * @response `200` `(ReimbursedProjectTravelExpenseOutputModel)[]` ReimbursedProjectTravelExpenses.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    reimbursedProjectTravelExpensesGetInvoiceProjectTravelExpenses: (
      invoiceGuid: string,
      query?: {
        /**
         * Optional: first row to fetch. Default 0 = first row.
         * @format int32
         * @default 0
         */
        firstRow?: number | null;
        /**
         * Optional: How many rows to fetch, Default all.
         * @format int32
         */
        rowCount?: number | null;
        /**
         * Searched string: part of name or description.
         * @default ""
         */
        textToSearch?: string | null;
        /**
         * Optional. If true, calculates the total count of project fees. Default false.
         * @default false
         */
        calculateRowCount?: boolean;
        /** Optional: A list of Key-Value pairs, containing names of fields and directions by which the results should be sorted. Any sortable field name (sub-model fields not supported) in the model can be used, while value can be "Desc" or "Asc". Example: "?sortings[0].key=Name&sortings[0].value=Desc&sortings[1].key=Number&sortings[1].value=Asc". */
        sortings?: KeyValuePairOfStringAndSortDirection[] | null;
      },
      params: RequestParams = {}
    ) =>
      this.request<ReimbursedProjectTravelExpenseOutputModel[], void | ExceptionModel>({
        path: `/v1/invoices/${invoiceGuid}/reimbursedprojecttravelexpenses`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags InvoicesRead
     * @name ReimbursedProjectTravelExpensesGetInvoiceRowProjectTravelExpenses
     * @summary Get all the project travel expenses on an invoice row.
     * @request GET:/v1/invoicerows/{invoiceRowGuid}/reimbursedprojecttravelexpenses
     * @secure
     * @response `200` `(ReimbursedProjectTravelExpenseOutputModel)[]` ReimbursedProjectTravelExpenses.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    reimbursedProjectTravelExpensesGetInvoiceRowProjectTravelExpenses: (
      invoiceRowGuid: string,
      query?: {
        /**
         * Optional: first row to fetch. Default 0 = first row.
         * @format int32
         * @default 0
         */
        firstRow?: number | null;
        /**
         * Optional: How many rows to fetch, Default all.
         * @format int32
         */
        rowCount?: number | null;
        /**
         * Searched string: part of name or description.
         * @default ""
         */
        textToSearch?: string | null;
        /**
         * Optional. If true, calculates the total count of project fees. Default false.
         * @default false
         */
        calculateRowCount?: boolean;
        /** Optional: A list of Key-Value pairs, containing names of fields and directions by which the results should be sorted. Any sortable field name (sub-model fields not supported) in the model can be used, while value can be "Desc" or "Asc". Example: "?sortings[0].key=Name&sortings[0].value=Desc&sortings[1].key=Number&sortings[1].value=Asc". */
        sortings?: KeyValuePairOfStringAndSortDirection[] | null;
      },
      params: RequestParams = {}
    ) =>
      this.request<ReimbursedProjectTravelExpenseOutputModel[], void | ExceptionModel>({
        path: `/v1/invoicerows/${invoiceRowGuid}/reimbursedprojecttravelexpenses`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags InvoicesRead
     * @name ReimbursedWorkHoursGetInvoiceReimbursedWorkHours
     * @summary Get all reimbursed hours on an invoice.
     * @request GET:/v1/invoices/{invoiceGuid}/reimbursedworkhours
     * @secure
     * @response `200` `(ReimbursedWorkHourOutputModel)[]` ReimbursedWorkHour.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    reimbursedWorkHoursGetInvoiceReimbursedWorkHours: (
      invoiceGuid: string,
      query?: {
        /**
         * Optional: first row to fetch. Default 0 = first row.
         * @format int32
         */
        firstRow?: number | null;
        /**
         * Optional: How many rows to fetch, Default 20, maximum 100.
         * @format int32
         */
        rowCount?: number | null;
        /**
         * Optional: Text to search from description or invoice description.
         * @default ""
         */
        textToSearch?: string | null;
        /**
         * Optional: Calculate total number of rows.
         * @default false
         */
        calculateRowCount?: boolean;
        /** Optional: A list of Key-Value pairs, containing names of fields and directions by which the results should be sorted. Any sortable field name (sub-model fields not supported) in the model can be used, while value can be "Desc" or "Asc". Example: "?sortings[0].key=DueDate&sortings[0].value=Asc&sortings[1].key=TotalIncludingTax&sortings[1].value=Desc". */
        sortings?: KeyValuePairOfStringAndSortDirection[] | null;
      },
      params: RequestParams = {}
    ) =>
      this.request<ReimbursedWorkHourOutputModel[], void | ExceptionModel>({
        path: `/v1/invoices/${invoiceGuid}/reimbursedworkhours`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags InvoicesRead
     * @name ReimbursedWorkHoursGetInvoiceRowReimbursedWorkHours
     * @summary Get all reimbursed hours on an invoice row.
     * @request GET:/v1/invoicerows/{invoiceRowGuid}/reimbursedworkhours
     * @secure
     * @response `200` `(ReimbursedWorkHourOutputModel)[]` ReimbursedWorkHour.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    reimbursedWorkHoursGetInvoiceRowReimbursedWorkHours: (
      invoiceRowGuid: string,
      query?: {
        /**
         * Optional: first row to fetch. Default 0 = first row.
         * @format int32
         */
        firstRow?: number | null;
        /**
         * Optional: How many rows to fetch, Default 20, maximum 100.
         * @format int32
         */
        rowCount?: number | null;
        /**
         * Optional: Text to search from description or invoice description.
         * @default ""
         */
        textToSearch?: string | null;
        /**
         * Optional: Calculate total number of rows.
         * @default false
         */
        calculateRowCount?: boolean;
        /** Optional: A list of Key-Value pairs, containing names of fields and directions by which the results should be sorted. Any sortable field name (sub-model fields not supported) in the model can be used, while value can be "Desc" or "Asc". Example: "?sortings[0].key=DueDate&sortings[0].value=Asc&sortings[1].key=TotalIncludingTax&sortings[1].value=Desc". */
        sortings?: KeyValuePairOfStringAndSortDirection[] | null;
      },
      params: RequestParams = {}
    ) =>
      this.request<ReimbursedWorkHourOutputModel[], void | ExceptionModel>({
        path: `/v1/invoicerows/${invoiceRowGuid}/reimbursedworkhours`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags ProjectsRead
     * @name TeamProductivityGetTeamProductivity
     * @summary Get team productivity of a project.
     * @request GET:/v1/projects/{projectGuid}/teamproductivity
     * @secure
     * @response `200` `(TeamProductivityOutputModel)[]` List of project members with team productivity information.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    teamProductivityGetTeamProductivity: (projectGuid: string, params: RequestParams = {}) =>
      this.request<TeamProductivityOutputModel[], void | ExceptionModel>({
        path: `/v1/projects/${projectGuid}/teamproductivity`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsRead
     * @name TravelExpenseTypesGetTravelExpenseTypes
     * @summary Get all the travel expense types.
     * @request GET:/v1/travelexpensetypes
     * @secure
     * @response `200` `(TravelExpenseTypeOutputModel)[]` All the travel expense types.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    travelExpenseTypesGetTravelExpenseTypes: (
      query?: {
        /** If not given, return all travel expense types, if given as true return only active travel expense types, if given as false returns only inactive travel expense types. */
        active?: boolean | null;
        /**
         * Optional: first row to fetch. Default 0 = first row.
         * @format int32
         * @default 0
         */
        firstRow?: number | null;
        /**
         * Optional: How many rows to fetch, Default all.
         * @format int32
         */
        rowCount?: number | null;
        /** Searched string: part of name or code. */
        textToSearch?: string | null;
        /**
         * Optional: Code of the travel expense type.
         * @default ""
         */
        code?: string | null;
        /**
         * Optional: Calculate total number of rows.
         * @default false
         */
        calculateRowCount?: boolean;
        /** Optional: A list of Key-Value pairs, containing names of fields and directions by which the results should be sorted. Any sortable field name (submodel fields not supported) in the model can be used, while value can be "Desc" or "Asc". Example: "?sortings[0].key=IsActive&sortings[0].value=Asc&sortings[1].key=Name&sortings[1].value=Desc. */
        sortings?: KeyValuePairOfStringAndSortDirection[] | null;
        /**
         * Optional: Get travel expense types that have been added or changed after this date time (greater or equal).
         * @format date-time
         */
        changedSince?: string | null;
      },
      params: RequestParams = {}
    ) =>
      this.request<TravelExpenseTypeOutputModel[], void | ExceptionModel>({
        path: `/v1/travelexpensetypes`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsWrite
     * @name TravelExpenseTypesPostTravelExpenseType
     * @summary Insert a new travel expense type.
     * @request POST:/v1/travelexpensetypes
     * @secure
     * @response `201` `TravelExpenseTypeOutputModel` Created travel expense type.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    travelExpenseTypesPostTravelExpenseType: (data: TravelExpenseTypeInputModel | null, params: RequestParams = {}) =>
      this.request<TravelExpenseTypeOutputModel, void | ExceptionModel>({
        path: `/v1/travelexpensetypes`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsRead
     * @name TravelExpenseTypesGetTravelExpenseType
     * @summary Get travel expense type by guid.
     * @request GET:/v1/travelexpensetypes/{guid}
     * @secure
     * @response `200` `TravelExpenseTypeOutputModel` Travel expense type.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    travelExpenseTypesGetTravelExpenseType: (guid: string, params: RequestParams = {}) =>
      this.request<TravelExpenseTypeOutputModel, void | ExceptionModel>({
        path: `/v1/travelexpensetypes/${guid}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsWrite
     * @name TravelExpenseTypesPatchTravelExpenseType
     * @summary Update (Patch) an travel expense type or a part of it.
     * @request PATCH:/v1/travelexpensetypes/{guid}
     * @secure
     * @response `200` `(TravelExpenseTypeOutputModel)[]` List of updated travel expense types.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    travelExpenseTypesPatchTravelExpenseType: (guid: string, data: PatchOperation[] | null, params: RequestParams = {}) =>
      this.request<TravelExpenseTypeOutputModel[], void | ExceptionModel>({
        path: `/v1/travelexpensetypes/${guid}`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsDelete
     * @name TravelExpenseTypesDeleteTravelExpenseType
     * @summary Deletes a travel expense type.
     * @request DELETE:/v1/travelexpensetypes/{guid}
     * @secure
     * @response `204` `void`
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    travelExpenseTypesDeleteTravelExpenseType: (guid: string, params: RequestParams = {}) =>
      this.request<void, void | ExceptionModel>({
        path: `/v1/travelexpensetypes/${guid}`,
        method: 'DELETE',
        secure: true,
        ...params
      }),

    /**
     * No description
     *
     * @tags ProjectsRead
     * @name TravelExpenseTypesGetSearchedTravelExpenseTypes
     * @summary Search active travel expense types of project by part of the name or code.
     * @request GET:/v1/projects/{projectGuid}/travelexpensetypes
     * @secure
     * @response `200` `(TravelExpenseTypeOutputModel)[]` All the Travel expense types matching search criteria.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    travelExpenseTypesGetSearchedTravelExpenseTypes: (
      projectGuid: string,
      query?: {
        /**
         * Searched string: part of name or code.
         * @default ""
         */
        textToSearch?: string | null;
        /**
         * Optional: first row to fetch. Default 0 = first row.
         * @format int32
         */
        firstRow?: number | null;
        /**
         * Optional: How many rows to fetch, Default all.
         * @format int32
         */
        rowCount?: number | null;
        /** Optional: Id of the user to fetch travels for. */
        userGuid?: string | null;
        /** Optional: Expense class of the travel. Mileage/DailyAllowance/OtherTravelExpense. */
        expenseClass?: ExpensesClass;
      },
      params: RequestParams = {}
    ) =>
      this.request<TravelExpenseTypeOutputModel[], void | ExceptionModel>({
        path: `/v1/projects/${projectGuid}/travelexpensetypes`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsRead
     * @name TravelPricesGetTravelPrices
     * @summary Get all the travel prices for a price list version.
     * @request GET:/v1/pricelistversions/{pricelistVersionGuid}/travelprices
     * @secure
     * @response `200` `(TravelPriceOutputModel)[]` TravelPriceModel.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    travelPricesGetTravelPrices: (
      pricelistVersionGuid: string,
      query?: {
        /**
         * If true return only prices from the price list, if false also returns prices from the products. Default is false.
         * @default false
         */
        fromPricelistOnly?: boolean;
        /** Optional: List of expense classes to search by, defaults to all travel categories. */
        expenseClasses?: ExpensesClass[] | null;
        /**
         * Optional: first row to fetch. Default 0 = first row.
         * @format int32
         * @default 0
         */
        firstRow?: number | null;
        /**
         * Optional: How many rows to fetch, Default 20, maximum 100.
         * @format int32
         */
        rowCount?: number | null;
        /**
         * Optional: Text to search from Product name.
         * @default ""
         */
        textToSearch?: string | null;
        /**
         * Optional: Calculate the number of total rows. Default false = total row count is returned as zero.
         * @default false
         */
        calculateRowCount?: boolean;
      },
      params: RequestParams = {}
    ) =>
      this.request<TravelPriceOutputModel[], void | ExceptionModel>({
        path: `/v1/pricelistversions/${pricelistVersionGuid}/travelprices`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags ProjectsRead
     * @name TravelPricesGetTravelPricesForProject
     * @summary Get all the travel prices for a project.
     * @request GET:/v1/projects/{projectGuid}/travelprices
     * @secure
     * @response `200` `(TravelPriceOutputModel)[]` TravelPriceModel.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    travelPricesGetTravelPricesForProject: (
      projectGuid: string,
      query?: {
        /**
         * If true return only prices from the price list, if false also returns prices from the settings. Default is false.
         * @default false
         */
        fromPricelistOnly?: boolean;
        /** Optional: List of expense classes to search by, defaults to all travel categories. */
        expenseClasses?: ExpensesClass[] | null;
        /**
         * Optional: first row to fetch. Default 0 = first row.
         * @format int32
         * @default 0
         */
        firstRow?: number | null;
        /**
         * Optional: How many rows to fetch, Default 20, maximum 100.
         * @format int32
         */
        rowCount?: number | null;
        /**
         * Optional: Text to search from Product name.
         * @default ""
         */
        textToSearch?: string | null;
        /**
         * Optional: Calculate the number of total rows. Default false = total row count is returned as zero.
         * @default false
         */
        calculateRowCount?: boolean;
      },
      params: RequestParams = {}
    ) =>
      this.request<TravelPriceOutputModel[], void | ExceptionModel>({
        path: `/v1/projects/${projectGuid}/travelprices`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsRead
     * @name TravelPricesGetTravelPrice
     * @summary Get travel price by ID.
     * @request GET:/v1/travelprices/{guid}
     * @secure
     * @response `200` `TravelPriceOutputModel`
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    travelPricesGetTravelPrice: (guid: string, params: RequestParams = {}) =>
      this.request<TravelPriceOutputModel, void | ExceptionModel>({
        path: `/v1/travelprices/${guid}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags UsersRead
     * @name UsersGetUser
     * @summary Get user by ID.
     * @request GET:/v1/users/{guid}
     * @secure
     * @response `200` `UserOutputModel` User.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    usersGetUser: (guid: string, params: RequestParams = {}) =>
      this.request<UserOutputModel, void | ExceptionModel>({
        path: `/v1/users/${guid}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags UsersWrite
     * @name UsersPatchUser
     * @summary Update (Patch) an user or a part of it.
     * @request PATCH:/v1/users/{guid}
     * @secure
     * @response `200` `(UserOutputModel)[]` List of updated users.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    usersPatchUser: (guid: string, data: PatchOperation[] | null, params: RequestParams = {}) =>
      this.request<UserOutputModel[], void | ExceptionModel>({
        path: `/v1/users/${guid}`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * @description No Content (204) if succeeded. Bad Request (400) if user can't be deleted. Not Found (404) if the user can't be found.
     *
     * @tags UsersDelete
     * @name UsersDeleteUser
     * @summary Delete an user.
     * @request DELETE:/v1/users/{guid}
     * @secure
     * @response `204` `void`
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    usersDeleteUser: (guid: string, params: RequestParams = {}) =>
      this.request<void, void | ExceptionModel>({
        path: `/v1/users/${guid}`,
        method: 'DELETE',
        secure: true,
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsRead
     * @name WorkTypesGetWorkTypes
     * @summary Get all work types.
     * @request GET:/v1/worktypes
     * @secure
     * @response `200` `(WorkTypeOutputModel)[]` All the work types matching search criteria.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    workTypesGetWorkTypes: (
      query?: {
        /** Filter the work types. If true/false, only the active/inactive ones are returned. If null, all the work types are returned. */
        active?: boolean | null;
        /** Filter the work types. If true/false, only the productive/non-productive ones are returned. If null, all the work types are returned. */
        productive?: boolean | null;
        /**
         * Optional: first row to fetch. Default 0 = first row.
         * @format int32
         * @default 0
         */
        firstRow?: number | null;
        /**
         * Optional: How many rows to fetch, Default 20, maximum 100.
         * @format int32
         */
        rowCount?: number | null;
        /**
         * Optional: Text to search from work type name or code.
         * @default ""
         */
        textToSearch?: string | null;
        /**
         * Optional: Code of the work type.
         * @default ""
         */
        code?: string | null;
        /**
         * Optional: Get work types that have been added or changed after this date time (greater or equal).
         * @format date-time
         */
        changedSince?: string | null;
        /**
         * Optional: Calculate total number of rows.
         * @default false
         */
        calculateRowCount?: boolean;
        /** Optional: A list of Key-Value pairs, containing names of fields and directions by which the results should be sorted. Any sortable field name (submodel fields not supported) in the model can be used, while value can be "Desc" or "Asc". Example: "?sortings[0].key=name&sortings[0].value=Asc". */
        sortings?: KeyValuePairOfStringAndSortDirection[] | null;
      },
      params: RequestParams = {}
    ) =>
      this.request<WorkTypeOutputModel[], void | ExceptionModel>({
        path: `/v1/worktypes`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsWrite
     * @name WorkTypesPostWorkType
     * @summary Insert a work type.
     * @request POST:/v1/worktypes
     * @secure
     * @response `201` `WorkTypeOutputModel` Created work type.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    workTypesPostWorkType: (data: WorkTypeInputModel | null, params: RequestParams = {}) =>
      this.request<WorkTypeOutputModel, void | ExceptionModel>({
        path: `/v1/worktypes`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsRead
     * @name WorkTypesGetWorkType
     * @summary Get work type by ID.
     * @request GET:/v1/worktypes/{guid}
     * @secure
     * @response `200` `WorkTypeOutputModel`
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    workTypesGetWorkType: (guid: string, params: RequestParams = {}) =>
      this.request<WorkTypeOutputModel, void | ExceptionModel>({
        path: `/v1/worktypes/${guid}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsWrite
     * @name WorkTypesPatchWorkType
     * @summary Update (Patch) a work type or a part of it.
     * @request PATCH:/v1/worktypes/{guid}
     * @secure
     * @response `200` `(WorkTypeOutputModel)[]` List of updated work types.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    workTypesPatchWorkType: (guid: string, data: PatchOperation[] | null, params: RequestParams = {}) =>
      this.request<WorkTypeOutputModel[], void | ExceptionModel>({
        path: `/v1/worktypes/${guid}`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * @description Returns: No Content (204) if succeeded.
     *
     * @tags SettingsDelete
     * @name WorkTypesDeleteWorkType
     * @summary Deletes a work type.
     * @request DELETE:/v1/worktypes/{guid}
     * @secure
     * @response `204` `void`
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    workTypesDeleteWorkType: (
      guid: string,
      query?: {
        /** Optional: ID of the work type to which to move usages of this work type. Default null. If work type is in use and usages aren't moved the deletion might fail. */
        moveUsagesToGuid?: string | null;
      },
      params: RequestParams = {}
    ) =>
      this.request<void, void | ExceptionModel>({
        path: `/v1/worktypes/${guid}`,
        method: 'DELETE',
        query: query,
        secure: true,
        ...params
      }),

    /**
     * No description
     *
     * @tags ProjectsRead
     * @name WorkTypesGetSearchedWorktypes
     * @summary Search active work types by part of the name or code.
     * @request GET:/v1/projects/{projectGuid}/worktypesforproject
     * @secure
     * @response `200` `(WorktypeForProjectOutputModel)[]` All the work types matching search criteria.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    workTypesGetSearchedWorktypes: (
      projectGuid: string,
      query?: {
        /**
         * Optional: first row to fetch. Default 0 = first row.
         * @format int32
         */
        firstRow?: number | null;
        /**
         * Optional: How many rows to fetch, Default 20, maximum 100.
         * @format int32
         */
        rowCount?: number | null;
        /**
         * Searched string: part of name or code.
         * @default ""
         */
        textToSearch?: string | null;
      },
      params: RequestParams = {}
    ) =>
      this.request<WorktypeForProjectOutputModel[], void | ExceptionModel>({
        path: `/v1/projects/${projectGuid}/worktypesforproject`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags NoScope
     * @name PublicBearerAuthenticationLogout
     * @summary Logout. Invalidates refresh token. Access token will be invalid when it expires.
     * @request POST:/v1/signout
     * @secure
     * @response `200` `File`
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    publicBearerAuthenticationLogout: (data: string | null, params: RequestParams = {}) =>
      this.request<File, void | ExceptionModel>({
        path: `/v1/signout`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params
      }),

    /**
     * No description
     *
     * @tags CustomersRead
     * @name CustomersGetCustomer
     * @summary Get customer by GUID.
     * @request GET:/v1/customers/{guid}
     * @secure
     * @response `200` `CustomerModel`
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    customersGetCustomer: (guid: string, params: RequestParams = {}) =>
      this.request<CustomerModel, void | ExceptionModel>({
        path: `/v1/customers/${guid}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags CustomersWrite
     * @name CustomersPatchCustomer
     * @summary Update (Patch) an customer or a part of it.
     * @request PATCH:/v1/customers/{guid}
     * @secure
     * @response `200` `(CustomerModel)[]` List of updated customers.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    customersPatchCustomer: (guid: string, data: PatchOperation[] | null, params: RequestParams = {}) =>
      this.request<CustomerModel[], void | ExceptionModel>({
        path: `/v1/customers/${guid}`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * @description Returns: No Content (204) if succeeded.
     *
     * @tags CustomersDelete
     * @name CustomersDeleteCustomer
     * @summary Deletes a customer.
     * @request DELETE:/v1/customers/{guid}
     * @secure
     * @response `204` `void`
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    customersDeleteCustomer: (guid: string, params: RequestParams = {}) =>
      this.request<void, void | ExceptionModel>({
        path: `/v1/customers/${guid}`,
        method: 'DELETE',
        secure: true,
        ...params
      }),

    /**
     * No description
     *
     * @tags OrganizationRead
     * @name OrganizationsGetVismaFinancialsCompanyInfo
     * @summary Get Visma.net Financials integration company information.
     * @request GET:/v1/integrations/vismafinancials/companyinformation
     * @secure
     * @response `200` `VismaFinancialsCompanyModel` VismaFinancialsCompanyModel.
     * @response `403` `ExceptionModel` Addon required
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    organizationsGetVismaFinancialsCompanyInfo: (params: RequestParams = {}) =>
      this.request<VismaFinancialsCompanyModel, ExceptionModel | void>({
        path: `/v1/integrations/vismafinancials/companyinformation`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsRead
     * @name OvertimePricesGetOvertimePrices
     * @summary Get all the overtime prices for a price list version.
     * @request GET:/v1/pricelistversions/{pricelistVersionGuid}/overtimeprices
     * @secure
     * @response `200` `(OvertimePriceModel)[]` Projects.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    overtimePricesGetOvertimePrices: (pricelistVersionGuid: string, params: RequestParams = {}) =>
      this.request<OvertimePriceModel[], void | ExceptionModel>({
        path: `/v1/pricelistversions/${pricelistVersionGuid}/overtimeprices`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags ProjectsRead
     * @name OvertimePricesGetOvertimePricesForProject
     * @summary Get all the overtimePrices for a project.
     * @request GET:/v1/projects/{projectGuid}/overtimeprices
     * @secure
     * @response `200` `(OvertimePriceModel)[]` Projects.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    overtimePricesGetOvertimePricesForProject: (projectGuid: string, params: RequestParams = {}) =>
      this.request<OvertimePriceModel[], void | ExceptionModel>({
        path: `/v1/projects/${projectGuid}/overtimeprices`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsRead
     * @name OvertimePricesGetOvertimePrice
     * @summary Get overtime price by ID.
     * @request GET:/v1/overtimeprices/{guid}
     * @secure
     * @response `200` `OvertimePriceModel`
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    overtimePricesGetOvertimePrice: (guid: string, params: RequestParams = {}) =>
      this.request<OvertimePriceModel, void | ExceptionModel>({
        path: `/v1/overtimeprices/${guid}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsRead
     * @name OvertimesGetOvertimes
     * @summary Get overtime definitions.
     * @request GET:/v1/overtimes
     * @secure
     * @response `200` `(OvertimeModel)[]` Overtime definitions.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    overtimesGetOvertimes: (
      query?: {
        /** If not given, return all overtime definitions, if given as true return only active overtime definitions, if given as false returns only inactive overtime definitions. */
        active?: boolean | null;
        /**
         * Optional: first row to fetch. Default 0 = first row.
         * @format int32
         */
        firstRow?: number | null;
        /**
         * Optional: How many rows to fetch, Default all.
         * @format int32
         */
        rowCount?: number | null;
        /**
         * Optional: Text to search from overtime name.
         * @default ""
         */
        textToSearch?: string | null;
        /**
         * Optional: Calculate total number of rows.
         * @default false
         */
        calculateRowCount?: boolean;
        /** Optional: A list of Key-Value pairs, containing names of fields and directions by which the results should be sorted. Any sortable field name (submodel fields not supported) in the model can be used, while value can be "Desc" or "Asc". Example: "?sortings[0].key=name&sortings[0].value=Asc"". */
        sortings?: KeyValuePairOfStringAndSortDirection[] | null;
      },
      params: RequestParams = {}
    ) =>
      this.request<OvertimeModel[], void | ExceptionModel>({
        path: `/v1/overtimes`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsWrite
     * @name OvertimesPostOvertime
     * @summary Insert an overtime.
     * @request POST:/v1/overtimes
     * @secure
     * @response `201` `OvertimeModel` Created overtime.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    overtimesPostOvertime: (data: OvertimeModel | null, params: RequestParams = {}) =>
      this.request<OvertimeModel, void | ExceptionModel>({
        path: `/v1/overtimes`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsRead
     * @name OvertimesGetOvertime
     * @summary Get overtime definition by ID.
     * @request GET:/v1/overtimes/{guid}
     * @secure
     * @response `200` `OvertimeModel` OvertimeModel.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    overtimesGetOvertime: (guid: string, params: RequestParams = {}) =>
      this.request<OvertimeModel, void | ExceptionModel>({
        path: `/v1/overtimes/${guid}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsWrite
     * @name OvertimesPatchOvertime
     * @summary Update (Patch) an overtime or a part of it.
     * @request PATCH:/v1/overtimes/{guid}
     * @secure
     * @response `200` `(OvertimeModel)[]` list of overtimes.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    overtimesPatchOvertime: (guid: string, data: PatchOperation[] | null, params: RequestParams = {}) =>
      this.request<OvertimeModel[], void | ExceptionModel>({
        path: `/v1/overtimes/${guid}`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * @description Returns: No Content (204) if succeeded. Not found (404) if overtime can't be found.
     *
     * @tags SettingsDelete
     * @name OvertimesDeleteOvertime
     * @summary Delete an overtime.
     * @request DELETE:/v1/overtimes/{guid}
     * @secure
     * @response `204` `void`
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    overtimesDeleteOvertime: (guid: string, params: RequestParams = {}) =>
      this.request<void, void | ExceptionModel>({
        path: `/v1/overtimes/${guid}`,
        method: 'DELETE',
        secure: true,
        ...params
      }),

    /**
     * @description Users are always added as a root phase (project) member also.
     *
     * @tags ProjectsWrite
     * @name PhaseMembersPostPhaseMembersFromBusinessUnitUsers
     * @summary Adds business unit users to phase members.
     * @request POST:/v1/phasemembersfrombusinessunitusers
     * @secure
     * @response `200` `(PhaseMemberModel)[]` List of added members.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    phaseMembersPostPhaseMembersFromBusinessUnitUsers: (
      data: PhaseMembersFromBusinessUnitUsersModel | null,
      query?: {
        /**
         * Optional: Add member to all sub phases. Default true.
         * @default true
         */
        addToAllSubPhases?: boolean;
      },
      params: RequestParams = {}
    ) =>
      this.request<PhaseMemberModel[], void | ExceptionModel>({
        path: `/v1/phasemembersfrombusinessunitusers`,
        method: 'POST',
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * @description Returns: No Content (204) if succeeded. Only one of transferToRoleGuid and transferToUserGuid can be provided. Use root phase to delete a project member.
     *
     * @tags ProjectsDelete
     * @name PhaseMembersDeletePhaseMember
     * @summary Deletes a phase member
     * @request DELETE:/v1/phasemembers/{userGuid}
     * @secure
     * @response `204` `void`
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    phaseMembersDeletePhaseMember: (
      userGuid: string,
      data: PhaseMemberModel | null,
      query?: {
        /**
         * Optional: The action to be applied to the user's resource allocations
         * @default "None"
         */
        resourceAllocationAction?: ResourceAllocationAction;
        /** Optional: GUID of the user to whom the resource allocations are transferred. */
        transferToUserGuid?: string | null;
      },
      params: RequestParams = {}
    ) =>
      this.request<void, void | ExceptionModel>({
        path: `/v1/phasemembers/${userGuid}`,
        method: 'DELETE',
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsWrite
     * @name ProjectBillingCustomersPostProjectBillingCustomer
     * @summary Insert a billing customer for a project.
     * @request POST:/v1/projectbillingcustomers
     * @secure
     * @response `201` `ProjectBillingCustomerModel2` Created billing customer.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    projectBillingCustomersPostProjectBillingCustomer: (data: ProjectBillingCustomerModel2 | null, params: RequestParams = {}) =>
      this.request<ProjectBillingCustomerModel2, void | ExceptionModel>({
        path: `/v1/projectbillingcustomers`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsRead
     * @name ProjectBillingCustomersGetProjectBillingCustomer
     * @summary Get a project billing customer.
     * @request GET:/v1/projectbillingcustomers/{guid}
     * @secure
     * @response `200` `ProjectBillingCustomerModel2` Project billing customer.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    projectBillingCustomersGetProjectBillingCustomer: (guid: string, params: RequestParams = {}) =>
      this.request<ProjectBillingCustomerModel2, void | ExceptionModel>({
        path: `/v1/projectbillingcustomers/${guid}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsWrite
     * @name ProjectBillingCustomersPatchProjectBillingCustomer
     * @summary Update (Patch) a project billing customer.
     * @request PATCH:/v1/projectbillingcustomers/{guid}
     * @secure
     * @response `200` `(ProjectBillingCustomerModel2)[]` list of updated project billing customer.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    projectBillingCustomersPatchProjectBillingCustomer: (guid: string, data: PatchOperation[] | null, params: RequestParams = {}) =>
      this.request<ProjectBillingCustomerModel2[], void | ExceptionModel>({
        path: `/v1/projectbillingcustomers/${guid}`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * @description Returns: No Content (204) if succeeded.
     *
     * @tags SettingsDelete
     * @name ProjectBillingCustomersDeleteProjectBillingCustomer
     * @summary Deletes a project billing customer.
     * @request DELETE:/v1/projectbillingcustomers/{guid}
     * @secure
     * @response `204` `void`
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    projectBillingCustomersDeleteProjectBillingCustomer: (guid: string, params: RequestParams = {}) =>
      this.request<void, void | ExceptionModel>({
        path: `/v1/projectbillingcustomers/${guid}`,
        method: 'DELETE',
        secure: true,
        ...params
      }),

    /**
     * @description Returns: No Content (204) if succeeded.
     *
     * @tags ProjectsDelete
     * @name ProjectProductsDeleteProjectProduct
     * @summary Deletes a project product.
     * @request DELETE:/v1/projectproducts/{guid}
     * @secure
     * @response `204` `void`
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    projectProductsDeleteProjectProduct: (guid: string, params: RequestParams = {}) =>
      this.request<void, void | ExceptionModel>({
        path: `/v1/projectproducts/${guid}`,
        method: 'DELETE',
        secure: true,
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsRead
     * @name ProjectTaskStatusesGetProjectTaskStatuses
     * @summary Get the project task statuses.
     * @request GET:/v1/projecttaskstatuses
     * @secure
     * @response `200` `(ProjectTaskStatusModel)[]` List of Activity Types.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    projectTaskStatusesGetProjectTaskStatuses: (
      query?: {
        /** If not given, return all project task statuses, if given as true return only active project task statuses, if given as false returns only inactive project task statuses. */
        active?: boolean | null;
        /**
         * Optional: first row to fetch. Default 0 = first row.
         * @format int32
         * @default 0
         */
        firstRow?: number | null;
        /**
         * Optional: How many rows to fetch, Default 20, maximum 100.
         * @format int32
         */
        rowCount?: number | null;
        /**
         * Optional: Text to search from activity type name.
         * @default ""
         */
        textToSearch?: string | null;
        /**
         * Optional: Calculate total number of rows.
         * @default false
         */
        calculateRowCount?: boolean;
        /** Optional: A list of Key-Value pairs, containing names of fields and directions by which the results should be sorted. Any sortable field name (submodel fields not supported) in the model can be used, while value can be "Desc" or "Asc". Example: "?sortings[0].key=name&sortings[0].value=Asc". */
        sortings?: KeyValuePairOfStringAndSortDirection[] | null;
      },
      params: RequestParams = {}
    ) =>
      this.request<ProjectTaskStatusModel[], void | ExceptionModel>({
        path: `/v1/projecttaskstatuses`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsWrite
     * @name ProjectTaskStatusesPostProjectTaskStatus
     * @summary Insert a project task status.
     * @request POST:/v1/projecttaskstatuses
     * @secure
     * @response `201` `ProjectTaskStatusModel` Project task status.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    projectTaskStatusesPostProjectTaskStatus: (data: ProjectTaskStatusModel | null, params: RequestParams = {}) =>
      this.request<ProjectTaskStatusModel, void | ExceptionModel>({
        path: `/v1/projecttaskstatuses`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsRead
     * @name ProjectTaskStatusesGetProjectTaskStatus
     * @summary Get Project task status by ID.
     * @request GET:/v1/projecttaskstatuses/{guid}
     * @secure
     * @response `200` `ProjectTaskStatusModel` Project task status.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    projectTaskStatusesGetProjectTaskStatus: (guid: string, params: RequestParams = {}) =>
      this.request<ProjectTaskStatusModel, void | ExceptionModel>({
        path: `/v1/projecttaskstatuses/${guid}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsWrite
     * @name ProjectTaskStatusesPatchProjectTaskStatus
     * @summary Update (Patch) an Project task status or a part of it.
     * @request PATCH:/v1/projecttaskstatuses/{guid}
     * @secure
     * @response `200` `(ProjectTaskStatusModel)[]` List of updated Project task status.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    projectTaskStatusesPatchProjectTaskStatus: (guid: string, data: PatchOperation[] | null, params: RequestParams = {}) =>
      this.request<ProjectTaskStatusModel[], void | ExceptionModel>({
        path: `/v1/projecttaskstatuses/${guid}`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * @description Returns: No Content (204) if succeeded. Not found (404) if product can't be found.
     *
     * @tags SettingsDelete
     * @name ProjectTaskStatusesDeleteProjectTaskStatus
     * @summary Delete a project task status.
     * @request DELETE:/v1/projecttaskstatuses/{guid}
     * @secure
     * @response `204` `void`
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    projectTaskStatusesDeleteProjectTaskStatus: (
      guid: string,
      query?: {
        /** Optional: ID of the project task status to which to move usages of this project task status. Default null. */
        moveUsagesToGuid?: string | null;
      },
      params: RequestParams = {}
    ) =>
      this.request<void, void | ExceptionModel>({
        path: `/v1/projecttaskstatuses/${guid}`,
        method: 'DELETE',
        query: query,
        secure: true,
        ...params
      }),

    /**
     * No description
     *
     * @tags HoursRead
     * @name TimeEntriesGetTimeEntries
     * @summary Get the time entries.
     * @request GET:/v1/timeentries
     * @secure
     * @response `200` `(TimeEntryModel)[]`
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    timeEntriesGetTimeEntries: (
      query?: {
        /**
         * Optional: first row to fetch. Default 0 = first row.
         * @format int32
         * @default 0
         */
        firstRow?: number | null;
        /** Optional: Filters time entries for given phases. */
        phaseGuid?: string[] | null;
        /** Optional: Filters time entries for given time entry types. */
        timeEntryTypeGuid?: string[] | null;
        /**
         * Optional: How many rows to fetch, Default 20, maximum 100.
         * @format int32
         */
        rowCount?: number | null;
        /**
         * Optional: Get time entries that have been added or changed after this date time (greater or equal).
         * @format date-time
         */
        changedSince?: string | null;
      },
      params: RequestParams = {}
    ) =>
      this.request<TimeEntryModel[], void | ExceptionModel>({
        path: `/v1/timeentries`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags HoursWrite
     * @name TimeEntriesPostTimeEntry
     * @summary Insert a time entry.
     * @request POST:/v1/timeentries
     * @secure
     * @response `201` `(TimeEntryModel)[]` Created time entry.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    timeEntriesPostTimeEntry: (data: TimeEntryModel | null, params: RequestParams = {}) =>
      this.request<TimeEntryModel[], void | ExceptionModel>({
        path: `/v1/timeentries`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags HoursRead
     * @name TimeEntriesGetTimeEntriesForUser
     * @summary Get all the time entries for a user.
     * @request GET:/v1/users/{userGuid}/timeentries
     * @secure
     * @response `200` `(TimeEntryModel)[]` TimeEntries.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    timeEntriesGetTimeEntriesForUser: (
      userGuid: string,
      query?: {
        /**
         * Optional: starting date from which to get the time entries. Default all.
         * @format date-time
         */
        startDate?: string | null;
        /**
         * Optional: starting date to which to get the time entries. Default all.
         * @format date-time
         */
        endDate?: string | null;
        /** Optional: Filters time entries for given phases. */
        phaseGuid?: string[] | null;
        /** Optional: Filters time entries for given time entry types. */
        timeEntryTypeGuid?: string[] | null;
        /**
         * Optional: first row to fetch. Default 0 = first row.
         * @format int32
         * @default 0
         */
        firstRow?: number | null;
        /**
         * Optional: How many rows to fetch, Default 20, maximum 100.
         * @format int32
         */
        rowCount?: number | null;
      },
      params: RequestParams = {}
    ) =>
      this.request<TimeEntryModel[], void | ExceptionModel>({
        path: `/v1/users/${userGuid}/timeentries`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags HoursRead
     * @name TimeEntriesGetTimeEntry
     * @summary Get time entry by ID.
     * @request GET:/v1/timeentries/{guid}
     * @secure
     * @response `200` `TimeEntryModel`
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    timeEntriesGetTimeEntry: (guid: string, params: RequestParams = {}) =>
      this.request<TimeEntryModel, void | ExceptionModel>({
        path: `/v1/timeentries/${guid}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags HoursWrite
     * @name TimeEntriesPatchTimeEntry
     * @summary Update (Patch) a time entry or a part of it.
     * @request PATCH:/v1/timeentries/{guid}
     * @secure
     * @response `200` `(TimeEntryModel)[]` List of updated time entries.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    timeEntriesPatchTimeEntry: (guid: string, data: PatchOperation[] | null, params: RequestParams = {}) =>
      this.request<TimeEntryModel[], void | ExceptionModel>({
        path: `/v1/timeentries/${guid}`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * @description Returns: No Content (204) if succeeded.
     *
     * @tags HoursDelete
     * @name TimeEntriesDeleteTimeEntry
     * @summary Deletes a time entry.
     * @request DELETE:/v1/timeentries/{guid}
     * @secure
     * @response `204` `void`
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    timeEntriesDeleteTimeEntry: (guid: string, params: RequestParams = {}) =>
      this.request<void, void | ExceptionModel>({
        path: `/v1/timeentries/${guid}`,
        method: 'DELETE',
        secure: true,
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsRead
     * @name TimeEntryTypesGetTimeEntryTypes
     * @summary Get all time entry types.
     * @request GET:/v1/timeentrytypes
     * @secure
     * @response `200` `(TimeEntryTypeModel)[]` Projects.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    timeEntryTypesGetTimeEntryTypes: (
      query?: {
        /** Filter the time entry types. If true/false, only the active/inactive ones are returned. If null, all the time entry types are returned. */
        active?: boolean | null;
        /**
         * Optional: first row to fetch. Default 0 = first row.
         * @format int32
         * @default 0
         */
        firstRow?: number | null;
        /**
         * Optional: How many rows to fetch, Default 20, maximum 100.
         * @format int32
         */
        rowCount?: number | null;
        /**
         * Optional: Text to search from time entry type name.
         * @default ""
         */
        textToSearch?: string | null;
        /**
         * Optional: Calculates the total row count.
         * @default false
         */
        calculateRowCount?: boolean;
        /** Optional: A list of Key-Value pairs, containing names of fields and directions by which the results should be sorted. Any sortable field name (submodel fields not supported) in the model can be used, while value can be "Desc" or "Asc". Example: "?sortings[0].key=name&sortings[0].value=Asc". */
        sortings?: KeyValuePairOfStringAndSortDirection[] | null;
      },
      params: RequestParams = {}
    ) =>
      this.request<TimeEntryTypeModel[], void | ExceptionModel>({
        path: `/v1/timeentrytypes`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsWrite
     * @name TimeEntryTypesPostTimeEntryType
     * @summary Insert a time entry type.
     * @request POST:/v1/timeentrytypes
     * @secure
     * @response `201` `TimeEntryTypeModel` Created time entry type.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    timeEntryTypesPostTimeEntryType: (data: TimeEntryTypeModel | null, params: RequestParams = {}) =>
      this.request<TimeEntryTypeModel, void | ExceptionModel>({
        path: `/v1/timeentrytypes`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsRead
     * @name TimeEntryTypesGetTimeEntryType
     * @summary Get time entry type by ID.
     * @request GET:/v1/timeentrytypes/{guid}
     * @secure
     * @response `200` `TimeEntryTypeModel`
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    timeEntryTypesGetTimeEntryType: (guid: string, params: RequestParams = {}) =>
      this.request<TimeEntryTypeModel, void | ExceptionModel>({
        path: `/v1/timeentrytypes/${guid}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsWrite
     * @name TimeEntryTypesPatchTimeEntryType
     * @summary Update (Patch) a time entry type or a part of it.
     * @request PATCH:/v1/timeentrytypes/{guid}
     * @secure
     * @response `200` `(TimeEntryTypeModel)[]` Updated time entry type model.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    timeEntryTypesPatchTimeEntryType: (guid: string, data: PatchOperation[] | null, params: RequestParams = {}) =>
      this.request<TimeEntryTypeModel[], void | ExceptionModel>({
        path: `/v1/timeentrytypes/${guid}`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * @description Returns: No Content (204) if succeeded.
     *
     * @tags SettingsDelete
     * @name TimeEntryTypesDeleteTimeEntryType
     * @summary Deletes a time entry type.
     * @request DELETE:/v1/timeentrytypes/{guid}
     * @secure
     * @response `204` `void`
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    timeEntryTypesDeleteTimeEntryType: (guid: string, params: RequestParams = {}) =>
      this.request<void, void | ExceptionModel>({
        path: `/v1/timeentrytypes/${guid}`,
        method: 'DELETE',
        secure: true,
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsRead
     * @name TimezonesGetTimezones
     * @summary Get all the timezones.
     * @request GET:/v1/localization/timezones
     * @secure
     * @response `200` `(TimezoneModel)[]` All the Timezones.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    timezonesGetTimezones: (params: RequestParams = {}) =>
      this.request<TimezoneModel[], void | ExceptionModel>({
        path: `/v1/localization/timezones`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsRead
     * @name TimezonesGetTimezone
     * @summary Get timezone by ID.
     * @request GET:/v1/localization/timezones/{guid}
     * @secure
     * @response `200` `TimezoneModel` Timezone.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    timezonesGetTimezone: (guid: string, params: RequestParams = {}) =>
      this.request<TimezoneModel, void | ExceptionModel>({
        path: `/v1/localization/timezones/${guid}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsRead
     * @name TravelReimbursementStatusGetTravelReimbursementStatuses
     * @summary Get the travel reimbursement statuses.
     * @request GET:/v1/travelreimbursementstatuses
     * @secure
     * @response `200` `(TravelReimbursementStatusModel)[]`
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    travelReimbursementStatusGetTravelReimbursementStatuses: (
      query?: {
        /** Optional: Filter the travel reimbursement statuses. If true/false, only the active/inactive ones are returned. If null, all the travel reimbursement statuses are returned. */
        active?: boolean | null;
        /**
         * Optional: first row to fetch. Default 0 = first row.
         * @format int32
         * @default 0
         */
        firstRow?: number | null;
        /**
         * Optional: How many rows to fetch, Default 20, maximum 100.
         * @format int32
         */
        rowCount?: number | null;
        /**
         * Optional: Text to search from travel reimbursement name.
         * @default ""
         */
        textToSearch?: string | null;
        /**
         * Optional: Calculate total number of rows.
         * @default false
         */
        calculateRowCount?: boolean;
        /** Optional: A list of Key-Value pairs, containing names of fields and directions by which the results should be sorted. Any sortable field name (submodel fields not supported) in the model can be used, while value can be "Desc" or "Asc". Example: "?sortings[0].key=name&sortings[0].value=Asc". */
        sortings?: KeyValuePairOfStringAndSortDirection[] | null;
      },
      params: RequestParams = {}
    ) =>
      this.request<TravelReimbursementStatusModel[], void | ExceptionModel>({
        path: `/v1/travelreimbursementstatuses`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsWrite
     * @name TravelReimbursementStatusPostTravelReimbursementStatus
     * @summary Insert a travel reimbursement status.
     * @request POST:/v1/travelreimbursementstatuses
     * @secure
     * @response `201` `TravelReimbursementStatusModel` Created travel reimbursement status.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    travelReimbursementStatusPostTravelReimbursementStatus: (data: TravelReimbursementStatusModel | null, params: RequestParams = {}) =>
      this.request<TravelReimbursementStatusModel, void | ExceptionModel>({
        path: `/v1/travelreimbursementstatuses`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsRead
     * @name TravelReimbursementStatusGetTravelReimbursementStatus
     * @summary Get the travel reimbursement statuses by guid.
     * @request GET:/v1/travelreimbursementstatuses/{guid}
     * @secure
     * @response `200` `TravelReimbursementStatusModel` TravelReimbursementStatusModel.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    travelReimbursementStatusGetTravelReimbursementStatus: (guid: string, params: RequestParams = {}) =>
      this.request<TravelReimbursementStatusModel, void | ExceptionModel>({
        path: `/v1/travelreimbursementstatuses/${guid}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags SettingsWrite
     * @name TravelReimbursementStatusPatchTravelReimbursementStatus
     * @summary Update (Patch) a travel reimbursement status or a part of it.
     * @request PATCH:/v1/travelreimbursementstatuses/{guid}
     * @secure
     * @response `200` `(TravelReimbursementStatusModel)[]` list of updated travel reimbursement statuses.
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    travelReimbursementStatusPatchTravelReimbursementStatus: (guid: string, data: PatchOperation[] | null, params: RequestParams = {}) =>
      this.request<TravelReimbursementStatusModel[], void | ExceptionModel>({
        path: `/v1/travelreimbursementstatuses/${guid}`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * @description Returns: No Content (204) if succeeded. Not found (404) if travel reimbursement status can't be found.
     *
     * @tags SettingsDelete
     * @name TravelReimbursementStatusDeleteTravelReimbursementStatus
     * @summary Delete a travel reimbursement status.
     * @request DELETE:/v1/travelreimbursementstatuses/{guid}
     * @secure
     * @response `204` `void`
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    travelReimbursementStatusDeleteTravelReimbursementStatus: (
      guid: string,
      query?: {
        /** Optional: ID of the travel reimbursement status to which to move usages of this travel reimbursement status. Default null. If travel reimbursement status is in use and usages aren't moved the deletion might fail. */
        moveUsagesToGuid?: string | null;
      },
      params: RequestParams = {}
    ) =>
      this.request<void, void | ExceptionModel>({
        path: `/v1/travelreimbursementstatuses/${guid}`,
        method: 'DELETE',
        query: query,
        secure: true,
        ...params
      }),

    /**
     * No description
     *
     * @tags ResourceallocationsRead
     * @name ResourceAllocationsGetResourceAllocations
     * @summary Get resource allocations
     * @request GET:/v1/resourceallocations
     * @secure
     * @response `200` `ResourceAllocationOutputModel` ResourceAllocation
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    resourceAllocationsGetResourceAllocations: (
      query?: {
        /**
         * Optional: Number of rows to fetch.
         * @format int32
         */
        rowCount?: number | null;
        /** Optional: page token to fetch the next page. */
        pageToken?: string | null;
        /**
         * Optional: Get resource allocations that have been added or changed after this date time (greater or equal).
         * @format date-time
         */
        changedSince?: string | null;
      },
      params: RequestParams = {}
    ) =>
      this.request<ResourceAllocationOutputModel, void | ExceptionModel>({
        path: `/v1/resourceallocations`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags ResourceallocationsWrite
     * @name ResourceAllocationsPostResourceAllocation
     * @summary Insert a resource allocation
     * @request POST:/v1/resourceallocations
     * @secure
     * @response `201` `ResourceAllocationOutputModel` Created resource allocation
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    resourceAllocationsPostResourceAllocation: (data: ResourceAllocationInputModel | null, params: RequestParams = {}) =>
      this.request<ResourceAllocationOutputModel, void | ExceptionModel>({
        path: `/v1/resourceallocations`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags ResourceallocationsRead
     * @name ResourceAllocationsPostResourceAllocations
     * @summary Get resource allocations (its POST because of being able to accommodate more filters)
     * @request POST:/v1/resourceallocations/allocations
     * @secure
     * @response `200` `(ResourceAllocationOutputModel)[]` ResourceAllocationModel
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    resourceAllocationsPostResourceAllocations: (
      data: ResourceAllocationCriteriaModel | null,
      query?: {
        /**
         * Optional: Number of rows to fetch.
         * @format int32
         */
        rowCount?: number | null;
        /** Optional: page token to fetch the next page. */
        pageToken?: string | null;
        /**
         * Optional: Get resource allocations that have been added or changed after this date time (greater or equal).
         * @format date-time
         */
        changedSince?: string | null;
      },
      params: RequestParams = {}
    ) =>
      this.request<ResourceAllocationOutputModel[], void | ExceptionModel>({
        path: `/v1/resourceallocations/allocations`,
        method: 'POST',
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags ResourceallocationsRead
     * @name ResourceAllocationsGetResourceAllocationsByUserGuid
     * @summary Get resource allocations for a user with required filters (startDate and endDate or changedSince, max 30 days to be fetched at once)
     * @request GET:/v1/users/{userGuid}/resourceallocations/allocations
     * @secure
     * @response `200` `ResourceAllocationOutputModel`
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    resourceAllocationsGetResourceAllocationsByUserGuid: (
      userGuid: string,
      query?: {
        /**
         * Get resource allocations with startDate. Using startDate and endDate or changedSince parameters are required to fetch a maximum of 30 days
         * @format date-time
         */
        startDate?: string | null;
        /**
         * Get resource allocations with endDate. Using startDate and endDate or changedSince parameters are required to fetch a maximum of 30 days
         * @format date-time
         */
        endDate?: string | null;
        /**
         * Optional: Get resource allocations that have been added or changed after this date time (greater or equal).
         * @format date-time
         */
        changedSince?: string | null;
        userLicenseTypes?: LicenseUserType[] | null;
        phaseGuid?: string | null;
        projectGuid?: string | null;
        projectBusinessUnitGuid?: string | null;
        userBusinessUnitGuid?: string | null;
        projectManagerUserGuid?: string | null;
        userTagGuid?: string | null;
        /** @default true */
        useSalesProbability?: boolean;
        projectStatusTypeGuid?: string | null;
        projectTagGuid?: string | null;
        superiorUserGuid?: string | null;
        salesStatusTypeGuid?: string | null;
        resourceAllocationGuid?: string | null;
        salesProgress?: SalesProgress;
        /**
         * Optional: Number of rows to fetch.
         * @format int32
         */
        rowCount?: number | null;
        /** Optional: page token to fetch the next page. */
        pageToken?: string | null;
      },
      params: RequestParams = {}
    ) =>
      this.request<ResourceAllocationOutputModel, void | ExceptionModel>({
        path: `/v1/users/${userGuid}/resourceallocations/allocations`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags ResourceallocationsRead
     * @name ResourceAllocationsGetResourceAllocationsByProjectGuid
     * @summary Get resource allocations for a project with required filters (startDate and endDate or changedSince, max 30 days to be fetched at once)
     * @request GET:/v1/projects/{projectGuid}/resourceallocations/allocations
     * @secure
     * @response `200` `ResourceAllocationOutputModel`
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    resourceAllocationsGetResourceAllocationsByProjectGuid: (
      projectGuid: string,
      query?: {
        /**
         * Get resource allocations with startDate. Using startDate and endDate or changedSince parameters are required to fetch a maximum of 30 days
         * @format date-time
         */
        startDate?: string | null;
        /**
         * Get resource allocations with endDate. Using startDate and endDate or changedSince parameters are required to fetch a maximum of 30 days
         * @format date-time
         */
        endDate?: string | null;
        /**
         * Optional: Get resource allocations that have been added or changed after this date time (greater or equal).
         * @format date-time
         */
        changedSince?: string | null;
        userLicenseTypes?: LicenseUserType[] | null;
        phaseGuid?: string | null;
        userGuid?: string | null;
        projectBusinessUnitGuid?: string | null;
        userBusinessUnitGuid?: string | null;
        projectManagerUserGuid?: string | null;
        userTagGuid?: string | null;
        /** @default true */
        useSalesProbability?: boolean;
        projectStatusTypeGuid?: string | null;
        projectTagGuid?: string | null;
        superiorUserGuid?: string | null;
        salesStatusTypeGuid?: string | null;
        resourceAllocationGuid?: string | null;
        salesProgress?: SalesProgress;
        /**
         * Optional: Number of rows to fetch.
         * @format int32
         */
        rowCount?: number | null;
        /** Optional: page token to fetch the next page. */
        pageToken?: string | null;
      },
      params: RequestParams = {}
    ) =>
      this.request<ResourceAllocationOutputModel, void | ExceptionModel>({
        path: `/v1/projects/${projectGuid}/resourceallocations/allocations`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags ResourceallocationsRead
     * @name ResourceAllocationsGetResourceAllocationsByPhaseGuid
     * @summary Get resource allocations for a phase with required filters (startDate and endDate or changedSince, max 30 days to be fetched at once)
     * @request GET:/v1/phases/{phaseGuid}/resourceallocations/allocations
     * @secure
     * @response `200` `ResourceAllocationOutputModel`
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    resourceAllocationsGetResourceAllocationsByPhaseGuid: (
      phaseGuid: string,
      query?: {
        /**
         * Get resource allocations with startDate. Using startDate and endDate or changedSince parameters are required to fetch a maximum of 30 days
         * @format date-time
         */
        startDate?: string | null;
        /**
         * Get resource allocations with endDate. Using startDate and endDate or changedSince parameters are required to fetch a maximum of 30 days
         * @format date-time
         */
        endDate?: string | null;
        /**
         * Optional: Get resource allocations that have been added or changed after this date time (greater or equal).
         * @format date-time
         */
        changedSince?: string | null;
        userLicenseTypes?: LicenseUserType[] | null;
        projectGuid?: string | null;
        userGuid?: string | null;
        projectBusinessUnitGuid?: string | null;
        userBusinessUnitGuid?: string | null;
        projectManagerUserGuid?: string | null;
        userTagGuid?: string | null;
        /** @default true */
        useSalesProbability?: boolean;
        projectStatusTypeGuid?: string | null;
        projectTagGuid?: string | null;
        superiorUserGuid?: string | null;
        salesStatusTypeGuid?: string | null;
        resourceAllocationGuid?: string | null;
        salesProgress?: SalesProgress;
        /**
         * Optional: Number of rows to fetch.
         * @format int32
         */
        rowCount?: number | null;
        /** Optional: page token to fetch the next page. */
        pageToken?: string | null;
      },
      params: RequestParams = {}
    ) =>
      this.request<ResourceAllocationOutputModel, void | ExceptionModel>({
        path: `/v1/phases/${phaseGuid}/resourceallocations/allocations`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags ResourceallocationsRead
     * @name ResourceAllocationsGetResourceAllocation
     * @summary Get resource allocation by ID
     * @request GET:/v1/resourceallocations/{guid}
     * @secure
     * @response `200` `ResourceAllocationOutputModel` ResourceAllocation
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    resourceAllocationsGetResourceAllocation: (guid: string, params: RequestParams = {}) =>
      this.request<ResourceAllocationOutputModel, void | ExceptionModel>({
        path: `/v1/resourceallocations/${guid}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags ResourceallocationsWrite
     * @name ResourceAllocationsPatchResourceAllocation
     * @summary Update (Patch) a resource allocation or a part of it
     * @request PATCH:/v1/resourceallocations/{guid}
     * @secure
     * @response `200` `(ResourceAllocationOutputModel)[]` List of updated activities
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    resourceAllocationsPatchResourceAllocation: (guid: string, data: PatchOperation[] | null, params: RequestParams = {}) =>
      this.request<ResourceAllocationOutputModel[], void | ExceptionModel>({
        path: `/v1/resourceallocations/${guid}`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * @description Returns: No Content (204) if succeeded. Not found (404) if resource allocation can't be found.
     *
     * @tags ResourceallocationsDelete
     * @name ResourceAllocationsDeleteResourceAllocation
     * @summary Delete an resource allocation
     * @request DELETE:/v1/resourceallocations/{guid}
     * @secure
     * @response `204` `void`
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    resourceAllocationsDeleteResourceAllocation: (guid: string, params: RequestParams = {}) =>
      this.request<void, void | ExceptionModel>({
        path: `/v1/resourceallocations/${guid}`,
        method: 'DELETE',
        secure: true,
        ...params
      })
  };
  heartbeat = {
    /**
     * @description This does not require authentication.
     *
     * @tags NoScope
     * @name HeartBeatGetServerStatus
     * @summary Can be used to check the status of the REST Api.
     * @request GET:/heartbeat/server
     * @response `200` `File` Returns message "Server is alive."
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    heartBeatGetServerStatus: (params: RequestParams = {}) =>
      this.request<File, void | ExceptionModel>({
        path: `/heartbeat/server`,
        method: 'GET',
        ...params
      }),

    /**
     * @description This does not require authentication.
     *
     * @tags NoScope
     * @name HeartBeatGetDatabaseStatus
     * @summary Can be used to check the status of the database.
     * @request GET:/heartbeat/database
     * @response `200` `File` Returns message "Database is alive."
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    heartBeatGetDatabaseStatus: (params: RequestParams = {}) =>
      this.request<File, void | ExceptionModel>({
        path: `/heartbeat/database`,
        method: 'GET',
        ...params
      }),

    /**
     * @description This route requires authentication, returns 204 http status when successful.
     *
     * @tags NoScope
     * @name HeartBeatGetAuthorization
     * @summary Returns http status code 204 for successful authentication.
     * @request GET:/heartbeat/authorized
     * @secure
     * @response `204` `void`
     * @response `404` `void` Resource not found
     * @response `default` `ExceptionModel` Default error response
     */
    heartBeatGetAuthorization: (params: RequestParams = {}) =>
      this.request<void, void | ExceptionModel>({
        path: `/heartbeat/authorized`,
        method: 'GET',
        secure: true,
        ...params
      })
  };
}
