const EventEmitter = require('events');
const emitter = new EventEmitter();

// emitter.on('ellie', (args) => {
//   console.log('First callback - ', args);
// })

const callback1 = (args) => {
  console.log('First callback - ', args);
}

emitter.on('ellie', callback1);

emitter.on('ellie', (args) => {
  console.log('Second callback - ', args);
})

emitter.emit('ellie', {message: '1'});
emitter.emit('ellie', {message: '2'});
emitter.removeListener('ellie', callback1);
emitter.emit('ellie', {message: '3'});