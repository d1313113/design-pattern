const EventeEmitter = require('events').EventEmitter;

const emitter1 = new EventeEmitter();

emitter1.on('some', (info) => {
  console.log('fn1', info);
});
emitter1.on('some', (info) => {
  console.log('fn2', info);
});

emitter1.emit('some', 'xxx');

// 自定义继承
class Dog extends EventeEmitter {
  constructor(name) {
    super();
    this.name = name;
  }
}

let simon = new Dog('simon');

simon.on('bark', () => {
  console.log(this.name, ' braked');
});

setInterval(() => {
  simon.emit('bark');
}, 5000);
