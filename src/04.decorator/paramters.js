/**
 * 可以传递参数的形式
 * 在装饰器中,返回一个函数形式,并且接受参数
 */
@test(false)
class Demo {}

function test(params) {
  return function(target) {
    target.t = params;
  };
}
