class Vnode {
  constructor(tag, attr) {
    this.tag = tag;
    this.attr = attr;
  }
}

/**
 * 将操作封装起来,外部并不关心内部实现
 */
function Factory(tag, attr) {
  return new Vnode(tag, attr);
}
