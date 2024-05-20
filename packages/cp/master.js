const child_process = require("child_process");
const worker = child_process.fork("worker.js",["args1"]);

worker.on("exit",function(){
    console.log("child process exit");
})

worker.send({hello:"im dodo,hello"})

worker.on("message",function(msg){
    console.log("child :",msg);
})