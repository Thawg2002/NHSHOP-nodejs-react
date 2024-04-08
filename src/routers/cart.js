import express from "express";
import {
  addItemToCart,
  decreaseProductQuantity,
  getCartByUserId,
  increaseProductQuantity,
  removeFromCart,
  updateProductQuantity,
} from "../controllers/cart";

const router = express.Router();
router.post("/carts/add-to-cart", addItemToCart);
router.get("/carts/:userId", getCartByUserId);
router.delete("/carts/remove", removeFromCart);
router.put("/carts/update-product-quantity", updateProductQuantity);
// Tăng số lượng của sản phẩm trong giỏ hàng
router.post("/carts/increase", increaseProductQuantity);
// Giảm số lượng của sản phẩm trong giỏ hàng
router.post("/carts/decrease", decreaseProductQuantity);
export default router;
