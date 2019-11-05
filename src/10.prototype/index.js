// 一个原型对象
const prototype = {
  getName: function() {
    return this.first + '' + this.last;
  },
  say: function() {
    console.log('hello');
  }
};

let x = Object.create(prototype);
x.first = 'A';
x.last = 'B';
console.log(x.getName());
x.say();

let y = Object.create(prototype);
y.first = 'C';
y.last = 'D';
console.log(y.getName());
y.say();
