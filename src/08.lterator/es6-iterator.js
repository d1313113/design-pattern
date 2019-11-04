function each(data) {
  // 生成迭代器
  let iterator = data[Symbol.iterator]();

  let item = { done: false };
  while (!item.done) {
    item = iterator.next();
    if (!item.done) {
      console.log(item.value);
    }
  }
}

// 测试
let arr = [1, 2, 3, 4, 5];
let nodeList = document.querySelector('p');
let m = new Map();
m.set('a', 100);
m.set('b', 200);

each(arr);
each(nodeList);
each(m);
