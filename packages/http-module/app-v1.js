const http = require('http')
const PORT = 3000
const serve = http.createServer((req,res)=>{
    console.log(`${req.method}--${req.url}`);
    res.writeHead(200, {'Content-Type':'text/html'});
    res.write('<!DOCTYPE>')
    res.write('<html>')
    res.write('<head>')
    res.write('<title>Test</title>')
    res.write('</head>')
    res.write('<body>')
    res.write('Hello Html')
    res.write('</body>')
    res.write('</html>')
    res.end();
}).listen(PORT,()=>{
   const host = serve.address().address
   const port = serve.address().port

   console.log("server at http://%s:%s",host,port)
})
