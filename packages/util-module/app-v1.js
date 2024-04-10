const Koa = require('koa')
const app = new Koa()

app.use(async (ctx)=>{
    return ctx.body = {
        href:ctx.href,
        path:ctx.path,
        url:ctx.url,
        query:ctx.query,
        querystring:ctx.querystring,
        search:ctx.search,
        host:ctx.host,
        hostname:ctx.hostname,
        protocol:ctx.protocol,
        secure:ctx.secure,
        subdomains:ctx.subdomains,
        origin:ctx.origin
    }
})
// http://127.0.0.1:3000/site/oneway_list.htm?a=1&b=2#abc
app.listen(3000)