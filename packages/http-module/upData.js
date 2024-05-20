const http = require('http')
const fs = require('fs')

const server = http.createServer(function (req, res) {
    if (req.url == "/login") {
        switch (req.method) {
            case "GET":
                fs.createReadStream("login.html").pipe(res)
                break;
            case "POST":
            console.log(req.headers)
            break;
            default:
                console.log('other request')
        }
    } else {
        res.writeHead(302,{
            "location":"/login"
        })
        res.end()
    }
})

server.listen(3000)