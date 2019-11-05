import StateMachine from 'javascript-state-machine';

let fsm = new StateMachine({
  init: '收藏', // 初始状态,待收藏
  transitions: [
    {
      name: 'doStore',
      form: '收藏',
      to: '取消收藏'
    },
    {
      name: 'deleteStore',
      from: '取消收藏',
      to: '收藏'
    }
  ],
  methods: {
    onDoStore() {
      console.log('收藏成功');
      updateBtnText();
    },
    onDeleteStore() {
      console.log('取消收藏成功');
      updateBtnText();
    }
  }
});

function init() {
  let btn = document.createElement('button');
  // btn.textContent = '按钮';
  btn.id = 'btn';
  document.querySelector('body').appendChild(btn);
}
init();

let $btn = document.querySelector('#btn');
$btn.addEventListener('click', function() {
  if (fsm.is('收藏')) {
    fsm.doStore();
  } else {
    fsm.deleteStore();
  }
});

// 更新按钮文案
function updateBtnText() {
  $btn.innerHTML = fsm.state;
}
updateBtnText();
