const eventEmitter = require("events");
const myEmitter = new eventEmitter();
// 定义
myEmitter.on("begin",function(){
    console.log("begin")
})
// 触发
myEmitter.emit("begin");