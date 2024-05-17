const client = require('./index')

// 添加的数据库
const myDb = client.db("user");
// 数据库内的文档
const myColl = myDb.collection("userAdmin")

async function add(){
  // 定义数据内容
    const doc = {name:'dodo',age:18,length:18,local:'shenzhen'};
// 使用insertOne插入一条数据
    const result = await myColl.insertOne(doc);
    console.log('添加成功，数据id为'+result.insertedId)
    // 关闭连接
    await client.close()
}
add()