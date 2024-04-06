const Crawler = require('crawler');
const jsdom = require('jsdom')

const c = new Crawler({
    jQuery: jsdom,
    maxConnections: 100,
    forceUTF8: true,
    callback:(err,res,$)=>{
        var urls = $('li');
        console.log(urls)
        // console.log(res)
        console.log(err)
    }
})

c.queue('https://juejin.cn/')