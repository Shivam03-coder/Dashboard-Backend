import mongoose from "mongoose";

const ddataProductStatSchema = new mongoose.Schema({
  productId: String,
  yearlySalesTotal: Number,
  yearlyTotalSoldUnits: Number,
  monthlyData: Array,
  dailyData: Array,
});

const dataProductStatmodel = mongoose.model(
  "dataProductStat",
  ddataProductStatSchema
);

export { dataProductStatmodel };
