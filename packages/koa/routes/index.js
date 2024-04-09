const router = require('koa-router')()

// 指定前缀
router.prefix('/test')
router.get('/',function(ctx,next){
    ctx.body='hello koa2 router'
})
module.exports=router