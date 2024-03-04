// const http = require("http");
import http from "http";
import express from "express";

// const server = http.createServer((req, res) => {
//   if (req.url === "/") {
//     res.end("<h1>Home page</h1>");
//   } else if (req.url === "/api/products") {
//     const data = [
//       { id: 1, name: "Product A" },
//       { id: 2, name: "Product B" },
//       { id: 3, name: "Product C" },
//     ];
//     res.end(JSON.stringify(data));
//   }
//   console.log("Kết nối thành công");
// });
// server.listen(3000, () => {
//     console.log("Máy chủ dg chạy cổng 3000");
//   });

const app = express();
app.get("/", (req, res) => {
  res.end("<h1>Home page</h1>");
});
app.get("/api/products", (req, res) => {
  const data = [
    { id: 1, name: "Product A" },
    { id: 2, name: "Product B" },
    { id: 3, name: "Product C" },
  ];
  res.json(data);
});
export const viteNodeApp = app;

//git 503
