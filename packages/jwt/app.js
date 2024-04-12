const koa = require("koa")
const app = new koa()
const router = require("koa-router")()
const jwt = require('koa-jwt')

router.get('/api',jwt({secret:'shared-secret'}),(ctx,next)=>{
    ctx.body={msg:'ok'}
})
app.use(router.routes(),router.allowedMethods())

app.listen(3000)