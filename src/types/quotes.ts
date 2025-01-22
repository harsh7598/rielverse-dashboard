export interface QuotesTypes {
  _id: string;
  meta: Meta;
  BusinessName: string;
  CarrierQuoteNumber: string;
  CarrierReferenceNumber: string;
  EffectiveDate: Date;
  PolicyStatus: number;
  ProductCode: string;
  Product: string;
  TransactionType: string;
  OperatingCompany: string;
}

export interface Meta {
  user: string;
  role: string;
  createdAt: Date;
}
