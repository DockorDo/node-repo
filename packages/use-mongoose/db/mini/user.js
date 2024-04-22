  require('./connect')
  const mongoose = require("mongoose");

  const UserSchema = new mongoose.Schema({
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      require: true,
    },
  });

  const UserModel = mongoose.model("User", UserSchema);


  UserModel.updateMany({username:'dodo1'},{password:'hahahahahah'}).then(res=>{
    console.log('值：',res)
  })

  UserModel.updateOne({username:'dodo'},{password:"991022"}).then(res=>{
    console.log('updateOne:===>',res)
  })

  UserModel.findOne({ username: "dodo" }, "username password").then((res) => {
    console.log(res);
  });

  UserModel.find({username:'dodo1'},'username password').then(res=>{
    console.log('getNew==========>',res)
  })


  UserModel.deleteOne({_id:'66215588729dae9e036828d7'}).then(res=>{console.log("delete",res)})

  UserModel.find({username:'dodo'},'username password').then(res=>{
    console.log('getDODO==========>',res)
  })

  module.exports = UserModel;
