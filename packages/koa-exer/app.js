const Koa = require("koa");
const app = new Koa();
const bodyparser = require("koa-bodyparser");
const router = require("koa-router")();
const res_api = require('koa.res.api')

app.use(res_api())
app.use(bodyparser({
  enableTypes:['json','form']
}));

router.post("/post", (ctx) => {
  ctx.body = ctx.request.body;
});

router.get("/get", (ctx) => {
ctx.api({name:'dodo'})

});

app.use(router.routes(), router.allowedMethods());

// http://127.0.0.1:3000/site/oneway_list.htm?a=1&b=2#abc
app.listen(3000);

exports.module = app