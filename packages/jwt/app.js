const koa = require("koa")
const app = new koa()
const router = require("koa-router")()
const jwt = require('koa-jwt')

/*
 jwt可以通过三种方式传回
 1. ctx.request.body.token
 2. ctx.query.token
 3. ctx.headers['x-access-token']
*/
router.get('/api',jwt({secret:'shared-secret'}),(ctx,next)=>{
    ctx.body={msg:'ok'}
})
app.use(router.routes(),router.allowedMethods())

app.listen(3000)