let star = {
  name: '张三丰',
  age: 25,
  phone: 13800138000
};

let agent = new Proxy(star, {
  get: function(target, key) {
    if (key === 'phone') {
      // 返回经纪人的手机号
      return 123456789;
    }
    if (key === 'price') {
      // 经纪人报价,明星不参与
      return 120000;
    }
    return target[key];
  },
  set: function(target, key, val) {
    if (key === 'customPrice') {
      if (val < 100000) {
        throw new Error('报价过低');
      } else {
        target[key] = val;
        return true;
      }
    }
  }
});

console.log(agent.name);
console.log(agent.phone);
console.log(agent.age);
console.log(agent.price);
