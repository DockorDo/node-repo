const fs = require("fs");
const Koa = require("koa");
const app = new Koa();

app.use((ctx) => {
  if (ctx.path === "/good") {
    return (ctx.body = "good");
  }
  fs.readFile("index1.txt", (err, data) => {
    if (err) throw err;
    console.log('1:',data.toString());
    ctx.body = 'Hello Koa'
  });
});
process.on('uncaughtException',function(err){
    console.log('2:',err)
})
app.listen(3000)
