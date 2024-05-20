const net = require('net')
const server = net.createServer(function(c){
    console.log('client connected');

    c.on('end',function(){
        console.log('client disconnected');
    });
    c.write()

})