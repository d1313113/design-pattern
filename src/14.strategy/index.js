class User {
  constructor(type) {
    this.type = type;
  }
  buy() {
    if (this.type === 'ordinary') {
      console.log('普通用户购买');
    } else if (this.type === 'member') {
      console.log('会员用户购买');
    } else if (this.type === 'vip') {
      console.log('vip用户购买');
    }
  }
}

// 测试代码, 在原有的类中含有大量的if else
let u1 = new User('ordinary');
u1.buy();
let u2 = new User('ordinary');
u2.buy();
let u3 = new User('ordinary');
u3.buy();

// 重构后
class OrdinaryUser {
  buy() {
    console.log('普通用户购买');
  }
}
class MemberUser {
  buy() {
    console.log('会员用户购买');
  }
}
class VipUser {
  buy() {
    console.log('vip用户购买');
  }
}

let u11 = new OrdinaryUser();
u11.buy();
let u22 = new MemberUser();
u22.buy();
let u33 = new VipUser();
u33.buy();
