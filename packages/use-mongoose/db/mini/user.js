const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    require:true
  },
});

const UserModel = mongoose.model("User", UserSchema);


// 实例化模型
const user = new User({
  username: "dodo",
  password: "0123456789",
});

module.exports = UserModel;
