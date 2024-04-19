/**
 * 链接数据库
 */
const mongoose = require("mongoose");
const db = mongoose
  .connect("mongodb://127.0.0.1:27017/db_crud")
  .catch((err) => console.log(err.message));

mongoose.connection.on("error", (err) => {
  console.log(err.message);
});
mongoose.connection.on("open", (res) => {
  console.log("链接成功");
});