import express from "express";
import morgan from "morgan";
import cors from "cors";
import productRouter from "./routers/product";
import { connectDB } from "./config/db";
import dotenv from "dotenv";
import authRouter from "./routers/auth";
import categoryRouter from "./routers/category";
import cartRouter from "./routers/cart";
import orderRouter from "./routers/order";
dotenv.config();
const app = express();

//middleware
app.use(express.json()); //=>xử lý giữ liệu :gom dữ liệu
app.use(morgan("tiny")); // hiển thị nhật kí của http
app.use(cors()); //=> dùng để giới hạn quyền truy cập

//connect db
connectDB(process.env.DB_URI);

//Router
app.use("/api/v1", authRouter);
app.use("/api/v1", productRouter);
app.use("/api/v1", categoryRouter);
app.use("/api/v1", cartRouter);
app.use("/api/v1", orderRouter);
export const viteNodeApp = app;
