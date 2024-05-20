const child = require('child_process').fork('son.js')

const server = require('net').createServer();

server.on('connection',socket => {
    socket.on('data',function(data){
        socket.write('你好');
        console.log(data.toString()+1)
    });
    socket.on('end',function(){
        console.log('断开连接')
    })
    socket.write("自定义tcp连接成功\n");
})

server.listen(1337,function(){
    console.log("向子进程发送信息");
    child.send('server',server)
})