import { readonly } from 'core-decorators';

class Person {
  @readonly
  name() {
    return 123;
  }
};

let p = new Person();
console.log(p.name());
// 报错
p.name = function() {
};
