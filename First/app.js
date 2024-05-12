const EventEmitter=require('events');
const customEmitter= new EventEmitter();
customEmitter.on('response',(name,id)=>{
    console.log(`This is customEmitter.on function working. Name=${name} with id:${id}`);
})
customEmitter.on('response',()=>{
    console.log(`This is second function working simultaneously`);
})
customEmitter.emit('response','john',20);
