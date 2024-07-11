import mongoose from "mongoose";

const dataOverallStatSchema = new mongoose.Schema({
  totalCustomers: Number,
  yearlySalesTotal: Number,
  yearlyTotalSoldUnits: Number,
  year: Number,
  monthlyData: Array,
  dailyData: Array,
  salesByCategory: Object,
  createdAt: String,
  updatedAt: String,
});

const dataOverallStatmodels = mongoose.model(
  "dataOverallStat",
  dataOverallStatSchema
);

export { dataOverallStatmodels };
