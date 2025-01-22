export interface PoliciesTypes {
  _id: string;
  meta: Meta;
  BrokerFee: number;
  BusinessName: string;
  CarrierReferenceNumber: string;
  DuePremium: number;
  EffectiveDate: string;
  GSTBrokerFee: number;
  PolicyNo: string;
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
