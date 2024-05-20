const http = require('http')
const fs = require('fs')

const server = http.createServer(function(req,res){
    if(req.url == "/"){
        let fileList = fs.readdirSync("./");
        res.writeHead(200,{"Content-type":"text/plain"});
        res.end(fileList.toString());
    } else {
        let path = "."+ req.url;
        let readStream = fs.createReadStream(path).pipe(ren)
    }
})
server.listen(3000)

process.on("uncaughtException", function(){
    console.log("got error");
})