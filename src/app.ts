import express from "express";
import userController from "./controllers/userController";

const app = express();
app.use(express.json());
//"/users"パスに合致するミドルウェア関数を実行する
app.use("/users", userController);

app.get("/", (req, res) => {
  //writeHeadでレスポンスの形式を指定
  res.writeHead(200, { "Content-Type": "text/plain" });
  //endで書きおわりを宣言
  res.end("hello express\n");
});

export default app;
