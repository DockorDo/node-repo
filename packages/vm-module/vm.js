const vm = require("vm")
const fs = require("fs")
const path = require("path")

const prt = path.resolve(__dirname,'.','index.js')

function stripBOM(content){
    if(content.charCodeAt(0)=== 0xFEFF){
        content = content.slice(1)
    }
    return content
}

const wrapper = stripBOM(fs.readFileSync(prt,'utf8'))

const compiledWrapper = vm.runInThisContext(wrapper,{
    filename:prt,
    lineOffset:0,
    displayError:true
})