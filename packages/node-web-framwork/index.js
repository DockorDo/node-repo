const http = require('http')

const server = http.createServer((req, res) => {
    console.log(req)
})

server.listen(3000,err=>{
    err && console.log(err)
    console.log("http://127.0.0.1:3000")
})

