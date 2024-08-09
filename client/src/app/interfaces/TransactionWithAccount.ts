import { Account } from './Account';

export interface TransactionWithAccount {
  id?: number;
  account: Account;
  description: string;
  amount: number;
  currency: string;
}
