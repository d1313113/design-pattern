class SingleObject {
  login() {
    console.log('login...');
  }
}

// 静态方法
SingleObject.getInstance = (function() {
  /*
  * 核心,对instance对判断,只能初始化一次
  * 外部通过SingleObject.getInstance获取到实例
  * 因为无法私有化构造函数,因此外部使用时不能用过new使用
  */
  let instance;
  return function() {
    if (!instance) {
      instance = new SingleObject();
    }
    return instance;
  };
})();

let a = SingleObject.getInstance();
let b = SingleObject.getInstance();
console.log(a === b);
