// 引入数据库链接
require("./connect");
// 引入模型文件
const User = require("./user");
// 实例化模型
const user = new User({
  username: "dodo",
  password: "0123456789",
});
// 保存
user.save().then((res) => console.log(res));
