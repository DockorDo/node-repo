const begin = process.argv[2];

console.log("dodo son run "+ begin);

process.on("message",function(msg){
    console.log("from parent:",msg);
    process.exit();
})

process.send({hello:"dodo is my father"})