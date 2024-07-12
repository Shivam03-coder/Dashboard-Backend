import { Router } from "express";
import userControlller from "../controllers/userControlller.js";


export const userRoutes = Router();

userRoutes.route("/user/:id").get(userControlller);
