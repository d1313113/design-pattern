class RealImg {
  constructor(fileName) {
    this.fileName = fileName;
    this.loadFromDisk();
  }
  loadFromDisk() {
    console.log('loading...' + this.fileName);
  }
  display() {
    console.log('display...' + this.fileName);
  }
}

class ProxyImg {
  constructor(fileName) {
    this.realImg = new RealImg(fileName);
  }
  display() {
    this.realImg.display();
  }
}

let proxyImg = new ProxyImg('1.jpg');
proxyImg.display();
