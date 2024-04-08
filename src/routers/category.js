import express from "express";
import { createCategory, deleteCategoryById, getAllCategory, getCategoryById, updateCategoryById } from "../controllers/category";

const router = express.Router();
router.get("/categories", getAllCategory);
router.get("/categories/:id", getCategoryById);
router.post("/categories", createCategory);
router.delete("/categories/:id", deleteCategoryById);
router.put("/categories/:id", updateCategoryById);
export default router;
