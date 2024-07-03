import mongoose from "mongoose";
import appConfig from "../configurations/appconfig.js";

const connectdb = async () => {
  try {
    mongoose.connection.on("connected", () => {
      console.log("Database connected successfully");
    });
    mongoose.connection.on("disconnected", () => {
      console.log("Database disconnected ");
    });
    await mongoose.connect(appConfig.URI);
  } catch (error) {
    console.log("Error", error);
    process.exit(1);
  }
};

export default connectdb;
