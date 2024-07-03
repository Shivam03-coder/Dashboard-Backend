import { config } from "dotenv";
config();

const appConfig = {
  URI: process.env.DATABASE_URI,
  PORT: process.env.PORT,
};

export default appConfig;
