const http = require('https');

http.get("https://blockchain.info/ticker",function(res){
    let statusCode = res.statusCode;
    if(statusCode = 200){
        let result = "";
        res.on("data",function(data){
            result+=data
        })
        .on("end",()=>{
            console.log(result.toString());
        })
        .on("error",(e)=>{
            console.log(e.message);
        })
    }
})