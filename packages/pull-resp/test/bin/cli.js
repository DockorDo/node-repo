#!/usr/bin/env node
const path = require('path')

var argv = process.argv;

argv.shift();

var file_path = __dirname;
// 输出当前目录路径
var current_path = process.cwd();
console.log(current_path)

// 遍历查找到对应的选项，手动解析。
for(let i in argv){
    let _argv = argv[i];
    if(_argv == '-h' || _argv == '--help'){
        console.log('这是一个help info')
    }
}
// 文件路径
// console.log(path.join(__dirname,"..","cli.js"))

// 获取命令行路径
console.log(process.cwd())

// 获取用户主目录
console.log(process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE)
