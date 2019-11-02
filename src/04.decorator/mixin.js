/**
 * 定义一个mixins装饰器
 */
function mixins(...list) {
  return function(target) {
    Object.assign(target.prototype, ...list);
  };
}

const Foo = {
  foo() {
    console.log('foo');
  }
};

@mixins(Foo)
class Demo {}

let obj = new Demo();
obj.foo();
