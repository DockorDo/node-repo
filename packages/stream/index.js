const fs = require('fs')
const readStream = fs.createReadStream("index.txt","utf-8");

readStream.on("data", function(data){
    console.log(data);
})

readStream.on("close",function(){
    console.log("closed");
})

readStream.on("error",function(e){
    console.log("error");
})