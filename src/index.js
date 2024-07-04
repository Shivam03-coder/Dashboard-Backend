import { app } from "./app/app.js";
import appConfig from "./configurations/appconfig.js";
import connectdb from "./database/connectdb.js";

(async () => {
  try {
    await connectdb();

    app.get("/", (_, res) => {
      res.status(200).json({
        status: "success",
        message: "Shivam Anand",
      });
    });

    app.listen(appConfig.PORT || 3030, () => {
      console.log(
        `Server started at http://localhost:${appConfig.PORT || 3030}`
      );
    });
  } catch (error) {
    console.log("Server connection failed", error);
  }
})();
