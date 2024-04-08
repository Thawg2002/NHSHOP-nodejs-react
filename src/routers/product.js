import express from "express";
import {
  create,
  deleteProductById,
  getAll,
  getProductById,
  related,
  updateProductById,
} from "../controllers/product";

const router = express.Router();

router.get("/products", getAll);
router.get("/products/:id", getProductById);
router.get("/products/:categoryId/related", related);
router.delete("/products/:id", deleteProductById);
router.post("/products", create);
router.put("/products/:id", updateProductById);

export default router;
