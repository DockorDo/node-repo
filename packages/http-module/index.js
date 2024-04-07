const http = require('http')

http.createServer(function(req,res){
    console.log(req);

    if(req.url=='/'){
        res.end('Hello world');
    } else if(req.url === '/2'){
        res.end('22222')
    } else{
        res.end('other')
    }
}).listen(8888)