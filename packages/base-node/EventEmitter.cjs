const EventEmitter = require('events');
const observer = new EventEmitter;

observer.on('topic',()=>{
    console.log('topic has occured');
});

function main(){
    console.log('start');
    observer.emit('topic');
    console.log('end ')
}
main()