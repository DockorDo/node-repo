const http = require('http')
const PORT = 3000
http.createServer((req,res)=>{
   if(req.method === 'GET' && req.url === '/echo'){
    req.pipe(res)
   } else {
    res.statusCode = 404
    res.end()
   }
}).listen(PORT)

console.log('Server running at http://127.0.0.1:3000')