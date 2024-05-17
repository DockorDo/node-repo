const { MongoClient, ServerApiVersion } = require("mongodb");

// 用您的Atlas连接字符串替换占位符
const uri = "mongodb://localhost:27017/";

// 创建一个带有MongoClientOptions对象的MongoClient来设置稳定的API版本
const client = new MongoClient(uri,  {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    }
);

async function run() {
    try {
        // 将客户机连接到服务器(从v4.7开始是可选的)
        await client.connect();

        // 发送ping以确认连接成功
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // 确保客户端将关闭当你完成/错误
        await client.close();
    }
}
// run().catch(console.dir);
module.exports=client;