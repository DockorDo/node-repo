const mongoose = require("mongoose");

main().catch((err) => console.log(err));

async function main() {
  // 链接数据库
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
  // 定义要存储的结构
  const kittySchema = new mongoose.Schema({
    name: String,
    age: Number,
    sexy: Number,
    length: String,
  });
  kittySchema.methods.speak = function speak(){
    const greeting = this.name ? '我嘞个骚刚'+this.name:'哎呦我去？啥都没有？';
    console.log(greeting)
  }

  //  定义模型
  const kitten = mongoose.model("Kitten", kittySchema);
    // 创建实例
  const silence = new kitten({
    name: "Silence",
    age: 3,
    sexy: 0,
    length: "18cm",
  });
  await silence.save()
  console.log(silence);

  const fluffy = new kitten({
    name: 'DoDo',
    age:24,
    sexy:1,
    length:'18cm'
  })
  // 保存实例
  await fluffy.save()
  fluffy.speak()

  console.log('======================')
  const kittens = await kitten.find();
  console.log(kittens)
}
