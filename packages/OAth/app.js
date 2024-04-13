const Koa = require("koa");
const session = require("koa-generic-session");
const RedisStore = require("koa-redis");

const app = new Koa();
app.keys = ["keys", "keykeys"];

app.use(
  session({
    store: new RedisStore(),
    ttl: 30 * 60 * 1000,
  })
);

app.use((ctx) => {
  switch (ctx.path) {
    case "/get":
      ctx.session.user = { name: "dodo" };
      ctx.body = ctx.session.user;
      break;
    case "/remove":
      ctx.session = null;
      ctx.body = "removed";
      break;
  }
});

app.listen(8080);
