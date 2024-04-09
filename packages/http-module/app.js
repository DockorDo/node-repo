const http = require('http')
const PORT = 3000
http.createServer((req,res)=>{
    console.log(`${req.method}--${req.url}`);
    res.writeHead(200, {'Content-Type':'text/plain'});

    res.end('Hello Node.js\n');
}).listen(PORT)

console.log('Server running at http://127.0.0.1:3000')