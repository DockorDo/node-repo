const Koa = require('koa');
const app = new Koa();
const serve = require('koa-static')
const mount = require('koa-mount')

// 给静态资源加前缀
app.use(mount('/static',serve('.')))

// http://localhost:3000/package.json
app.listen(3000,()=>{
    console.log(app)
    console.log(`koa server,start in http://127.0.0.1:3000`)
})