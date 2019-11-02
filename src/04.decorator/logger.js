/**
 * 使用logger来装饰add方法,通过方法重写来实现,获取到descriptor中的value
 */
class Math {
  @logger
  add(a, b) {
    return a + b;
  }
}

function logger(target, name, descriptor) {
  let oldValue = descriptor.value;

  descriptor.value = function() {
    console.log(`calling ${name} width`, arguments);
    return oldValue.apply(this, arguments);
  };
}
