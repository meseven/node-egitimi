const events = require('events');
const eventEmitter = events.EventEmitter;
const emitter = new eventEmitter();

/*eventEmitter.on('selamla', (object) => {
   console.log(`merhaba ${object.name} ${object.surname}`);
});

eventEmitter.emit('selamla', { name: 'mehmet', surname: 'seven' });*/

emitter.once('merhabaDe', () => {
    console.log('merhaba');
});

emitter.emit('merhabaDe');
emitter.emit('merhabaDe');

console.log(eventEmitter.listenerCount(emitter, 'merhabaDe'));
