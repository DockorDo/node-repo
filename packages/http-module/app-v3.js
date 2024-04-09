const http = require('http')
const fs = require('fs')
const PORT = 3000
const app = http.createServer((req,res)=>{
  if('/remote'===req.url){
   res.writeHead(200,{'Content-Type':'text/plain'})
   return res.end('Hello remote Page\n')
}else{
   proxy(req,res)
}
})

function proxy(req,res){
   let options = {
      host: req.host,
      port: 7890,
      headers:req.headers,
      path:'/remote',
      agent:false,
      methods:'GET'
   }
   let httpProxy = http.request(options, (response)=>{
      response.pipe(httpProxy)
   })
   req.pipe(httpProxy)
}
app.listen(PORT)

console.log('Server running at http://127.0.0.1:3000')