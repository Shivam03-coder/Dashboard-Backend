import express, { urlencoded } from "express";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import { userRoutes } from "../routes/userRoutes.js";
import clientRoutes from "../routes/clientRoutes.js";
import salesRoutes from "../routes/salesRoutes.js";
import adminRoutes from "../routes/adminRoutes.js";
const app = express();

// App mmiddleswares

app.use(cookieParser());
app.use(
  cors({
    origin: "*",
    Credential: true,
  })
);
app.use(
  helmet({
    crossOriginResourcePolicy: { policy: "same-origin" },
  })
);
app.use(
  urlencoded({
    extended: false,
  })
);
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(cors());

//Routes
app.use("/api/v1", userRoutes);
app.use("/api/v1/client", clientRoutes);
app.use("/api/v1/sales", salesRoutes);
app.use("/api/v1/appadmins", adminRoutes);

export { app };
