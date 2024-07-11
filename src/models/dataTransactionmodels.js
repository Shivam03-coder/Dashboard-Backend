import mongoose from "mongoose";

const datatransactionSchema = new mongoose.Schema({
  userId: String,
  cost: Number,
  products: Array,
});

const TransactionModel = mongoose.model(
  "Transactiondata",
  datatransactionSchema
);

export { TransactionModel };
