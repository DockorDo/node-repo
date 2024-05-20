process.on('message',function(m,server){
    if(m === 'server'){
    console.log("子进程收到了",server);
    server.on('connection',socket =>{
            socket.end('dodo son best wishes to you')
        })
    }
})