export interface Transaction {
  id?: number;
  idAccount: number;
  description: string;
  amount: number;
  currency: string;
}
