import express from "express";
import { overviewController } from "../controllers/salesController.js";

const salesRoutes = express.Router();
salesRoutes.route("/overview").get(overviewController);

export default salesRoutes;
