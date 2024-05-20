const download = require("download-git-repo")
const path = require("path")

const dir = path.join(process.cwd(),"test")

download(
    "direct:https://github.com/DockorDo/my-npm.git", // git的下载地址
    dir,
    {
        clone:true,
    },
    err => {
        console.log(err);
    }
)