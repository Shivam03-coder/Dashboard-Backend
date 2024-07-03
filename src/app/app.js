import express, { urlencoded } from "express";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
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
// app.use("/user", userRoutes);

export { app };
