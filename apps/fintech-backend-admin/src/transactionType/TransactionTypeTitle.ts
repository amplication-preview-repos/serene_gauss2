import { TransactionType as TTransactionType } from "../api/transactionType/TransactionType";

export const TRANSACTIONTYPE_TITLE_FIELD = "id";

export const TransactionTypeTitle = (record: TTransactionType): string => {
  return record.id?.toString() || String(record.id);
};
