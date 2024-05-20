const http = require('http')

const server = http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end('Hello Node!')
})

server.listen(3000,function(){
    console.log('server run in http://127.0.0.1:3000')
})