function createReq(url,originalUrl){
    return {
        originalUrl: originalUrl,
        url:url
    }
}

const req = createReq('https://www.baidu.com/')
const url = require('parseurl')(req)

console.log(url)