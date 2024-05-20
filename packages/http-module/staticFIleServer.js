const http = require('http')
const fs = require('fs')

const server = http.createServer(function(req,res){
    if(req.url=="/"){
        let fileList = fs.readdirSync("./");
        res.writeHead(200,{"Content-type":"text/plain"})

        res.end(fileList.toString())
    }
    else {
        let path = req.url;
        fs.readFile("."+path,function(err,data){
            if(err){
                res.end("Internal Error")
                throw err;
            }
            res.writeHead(200, {"Content-type":"text/plain"})
            res.end(data);
        })
    }
})

const port = 3000;

server.listen(port)
process.on("uncaughtException",function(){
    console.log("got error")
})