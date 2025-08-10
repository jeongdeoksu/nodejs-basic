const EventEmitter = require('events');
// const emmiter = new EventEmitter();

// function log(callback) {
//   emmiter.emit('log', 'started...');
//   callback();
//   emmiter.emit('log', 'ended!');
// }

class Logger extends EventEmitter {
  log(callback) {
    this.emit('log', 'started...');
    callback();
    this.emit('log', 'ended!');
  }
}

module.exports.Logger = Logger;