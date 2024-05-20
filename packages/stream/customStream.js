const Readable = require('stream').Readable
const util = require('util')

util.inherits(MyReadable,Readable)

function MyReadable(array){
    Readable.call(this,{objectMode:true})
    this.array = array
}

MyReadable.prototype._read = function(){
    if(this.array.length){
        this.push(this.array.shift())
    }else {
        this.push(null);
    }
}