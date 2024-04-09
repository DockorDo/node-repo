const router = require('koa-router')()
router.get('/',function(ctx,next){
    ctx.body='hello koa2 router'
})