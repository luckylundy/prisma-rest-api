import app from "./app";

//ポートに環境変数か3000番を指定
const PORT = process.env.PORT || 3000;
//外部からのアクセスでポートを指定して処理を実行し、表示する
app.listen(PORT, () => {
  console.log(`REST API server ready at: http://localhost:${PORT}`);
});
