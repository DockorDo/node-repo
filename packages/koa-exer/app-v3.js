const Koa = require('koa')
const app = new Koa()

app.use(async (ctx)=>{
    return ctx.body = {
      method:ctx.method
    }
})
// http://127.0.0.1:3000/site/oneway_list.htm?a=1&b=2#abc
app.listen(3000)