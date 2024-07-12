import express from "express";

const router = express.Router();

router.get("/products", ProductsController);

export default router;