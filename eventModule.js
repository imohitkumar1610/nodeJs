const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('logging',(arg) => {
    console.log(`logging: ${arg}`);
});

emitter.emit('logging', `this is a message i want to log`);