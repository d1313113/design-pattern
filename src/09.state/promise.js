import StateMachine from 'javascript-state-machine';

// 状态机模型
let fsm = new StateMachine({
  init: 'pending', // 初始化状态
  transitions: [
    {
      name: 'resolve',
      from: 'pending',
      to: 'fullfilled'
    },
    {
      name: 'reject',
      from: 'pending',
      to: 'rejected'
    }
  ],
  methods: {
    /**
     * 监听resolve
     * @param state 当前状态机实例
     * @param data fsm.resolve(data) 传递过来的参数
     */
    onResolve(state, data) {
      console.log('resolve');
      console.log(data);
      data.successFns.forEach(fn => fn());
    },
    /**
     * 监听reject
     * @param state 当前状态机实例
     * @param data fsm.reject(data) 传递过来的参数
     */
    onReject(state, data) {
      console.log('reject');
      data.failFns.forEach(fn => fn());
    }
  }
});

// myPromise
class MyPromise {
  constructor(fn) {
    this.successFns = [];
    this.failFns = [];

    fn(() => {
      // resolve
      fsm.resolve(this);
    }, () => {
      // reject
      fsm.reject(this);
    });
  }

  then(successFn, failFn) {
    this.successFns.push(successFn);
    this.failFns.push(failFn);
  }
}

// 测试代码
function loadImg(src) {
  const promise = new MyPromise(function(resolve, reject) {
    let img = document.createElement('img');
    img.onload = function() {
      resolve(img);
    };
    img.onerror = function() {
      reject();
    };
    img.src = src;
  });

  return promise;
}

let src = 'https://pic1.zhimg.com/da8e974dc_is.jpg';
let result = loadImg(src);

result.then(res => {
  console.log('ok1');
}, error => {
  console.log('error1');
});

result.then(res => {
  console.log('ok2');
}, error => {
  console.log('error2');
});
