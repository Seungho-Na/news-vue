const express = require("express");
const app = express();
const port = 5000;
const search = require("./routes");
// dotenv
require("dotenv").config();
// CORS
const cors = require("cors");

// body-parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS 허용
let corsOptions = {
  origin: "https://openapi.naver.com",
  credentials: true,
};

app.use(cors(corsOptions));
app.use("/api/search", search);

app.listen(port, () => {
  console.log(`${port}포트 서버 구동 중`);
});
