// 实现readonly
class Person {
  constructor() {
    this.first = 'A';
    this.last = 'B';
  }
  @readonly
  name() {
    return `${this.first} ${this.last}`;
  }
}

/**
 *
 * @param target 使用装饰器的类
 * @param name 传入的function name或者属性名
 * @param descriptor 描述符
 * @return {*}
 */
function readonly(target, name, descriptor) {
  descriptor.writable = false;
  return descriptor;
}

let p = new Person();
console.log(p.name());
// 这里重新改写会报错
p.name = function() {
  console.log(1);
};
