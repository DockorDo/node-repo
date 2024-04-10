const Koa = require("koa");
const app = new Koa();
const bodyparser = require("koa-bodyparser");
const router = require("koa-router")();
const multer = require('koa-multer')
const path = require('path')

// 文件上传配置
const storage = multer.diskStorage({
  destination: (req,file,cb)=>{
    cb(null,path.join(__dirname,'/uploads'))
  },
  filename:(req,file,cb)=>{
    let type = file.originalname.split('.')[1]
    cb(null, `${file.fieldname}-${Date.now().toString(16)}.${type}`)
  }
})
const limits = {
  files:1
}

const upload = multer({dest:'uploads/',storage,limits})

app.use(bodyparser({
  enableTypes:['json','form']
}));

router.post("/post", (ctx) => {
  ctx.body = ctx.request.body;
});

router.get("/get", (ctx) => {
  ctx.body = ctx.query
});

router.post('/post/formdata', upload.any(),ctx=>{
  console.log(ctx.req.files);
  ctx.body={
    status:{
      code:0,
      msg:'upload success'
    },
    data:{
      body:ctx.req.body,
      files:ctx.req.files
    }
  }
})


app.use(router.routes(), router.allowedMethods());

// http://127.0.0.1:3000/site/oneway_list.htm?a=1&b=2#abc
app.listen(3000);
