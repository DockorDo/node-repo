const http = require('http');
const fs = require('fs');
const { log } = require('console');

const server = http.createServer(async function (req, res) {
    if (req.url == '/upload') {
        switch (req.method) {
            case "GET":
                fs.createReadStream("file.html").pipe(res);
                break;
            case "POST":
                try {
                    const body = await getBody(req);
                } catch (error) {

                }
        }
    }
})
server.listen(3000, () => console.log("http://127.0.0.1:3000/upload"))
async function getBody(req) {
   const body = await new Promise((response,reject)=>{
    const body = []
    req.on('data', (chunk) => {
        body.push(chunk)
    })
    .on('end',()=>{
        response(body)
    })
   }) 
    console.log(body.toString());
    console.log(req.headers);

}