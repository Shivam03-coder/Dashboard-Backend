import mongoose from "mongoose";

const dataAffiliateStatSchema = new mongoose.Schema({
  productId: String,
  affiliateSales: Array,
});

const dataAffiliateStatmodels = mongoose.model(
  "dataAffiliateStat",
  dataAffiliateStatSchema
);

export { dataAffiliateStatmodels };
