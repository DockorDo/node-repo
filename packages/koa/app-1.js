const Koa = require('koa');
const app = new Koa();
const serve = require('koa-static')

app.use(serve('.'))

const index = require('./routes/index')


// app.use(async (ctx, next)=>{
//     const start = new Date()

//     console.log('[logger middleware] before await ...');
//     await next();
//     console.log('[logger middleware] after await ...');

//     const ms = new Date() - start;
//     console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
// })

// app.use(index.routes()).use(index.allowedMethods())


app.listen(3000,()=>{
    console.log(app)
    console.log(`koa server,start in http://127.0.0.1:3000`)
})