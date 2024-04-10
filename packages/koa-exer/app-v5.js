const Koa = require('koa')
const app = new Koa()

app.use(async (ctx)=>{
  ctx.status=404;
  ctx.type= null;
  ctx.body="<h1>this is status demo</h1>"
})
// http://127.0.0.1:3000/site/oneway_list.htm?a=1&b=2#abc
app.listen(3000)