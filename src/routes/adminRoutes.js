import express from "express";
import { adminController } from "../controllers/adminController.js";

const adminRoutes = express.Router();
adminRoutes.route("/admins").get(adminController)

export default adminRoutes;
