import express from "express";
import {
  ProductsController,
  CustomerController,TranscationsController,GeographyController
} from "../controllers/clientsController.js";

const clientRoutes = express.Router();

clientRoutes.route("/products").get(ProductsController);
clientRoutes.route("/customer").get(CustomerController);
clientRoutes.route("/transcations").get(TranscationsController);
clientRoutes.route("/geography").get(GeographyController);

export default clientRoutes;
