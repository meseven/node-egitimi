const events = require('events');
const eventEmitter = events.EventEmitter;
const emitter = eventEmitter();

/*eventEmitter.on('selamla', (object) => {
   console.log(`merhaba ${object.name} ${object.surname}`);
});

eventEmitter.emit('selamla', { name: 'mehmet', surname: 'seven' });*/

eventEmitter.once('merhabaDe', () => {
   console.log('merhaba');
});

eventEmitter.emit('merhabaDe');
eventEmitter.emit('merhabaDe');

console.log(eventEmitter.listenerCount(emitter, 'merhabaDe'));
