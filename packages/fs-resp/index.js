    const fs = require('fs')


console.log("==============")
fs.stat('foo.txt',function(err,result){
    if(err)return console.log(err);

    console.log(result)
})
console.log("==============")


fs.writeFile('foo.txt',"Hello Node",{flag:"a",encoding:'UTF-8'},function(err){
    if(err)return console.log(err)

    console.log("写入成功")
})

    fs.readFile('./test.txt',{encoding:'UTF-8'},function(err,data){
        if(err)return console.log(err);
    // <Buffer 74 65 73 74 0a 0a e6 b5 8b e8 af 95 e5 93 a6 e5 93 a6 e5 93 a6 e5 93 a6>
        console.log(data)
    })