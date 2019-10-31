// 车
class Car {
  constructor(num) {
    this.num = num;
  }
}

// 摄像头
class Camera {
  shot(car) {
    return {
      num: car.num,
      inTime: Date.now()
    };
  }
}

// 显示屏
class Screen {
  show(car, inTime) {
    console.log(car.num);
    console.log(Date.now() - car.inTime);
  }
}

// 停车场
class Park {
  constructor(floors = []) {
    this.floors = floors;
    this.camera = new Camera();
    this.screen = new Screen();
    this.carList = {};
  }
  in(car) {
    const info = this.camera.shot(car);
    // 停车信息
    const i = parseInt(Math.random() * 100 % 100);
    const place = this.floors[0].places[i];
    place.in();
    info.place = place;
  }
  out(car) {
    const info = this.carList[car.num];
    const place = info.place;
    place.out();
    this.screen.show(car, info.inTime);
    delete this.carList[car.num];
  }
  emptyNum() {
    return this.floors.map(floor => {
      return `${floor.index}层还有${floor.emptyPlaceNum()}`;
    }).join('\n');
  }
}

// 层
class Floor {
  constructor(index, places = []) {
    this.index = index;
    this.places = places;
  }
  emptyPlaceNum() {
    let num = 0;
    this.places.forEach(p => {
      if (p.empty) {
        num++;
      }
    });
    return num;
  }
}

// 车位
class Place {
  constructor() {
    this.empty = false;
  }
  in() {
    this.empty = false;
  }
  out() {
    this.empty = true;
  }
}

const floors = [];
for (let i = 0; i < 3; i++) {
  const places = [];
  for (let j = 0; j < 100; j++) {
    places[j] = new Place();
  }
  floors[i] = new Floor(i + 1, places);
}

const park = new Park(floors);

const car1 = new Car(100);
const car2 = new Car(200);
const car3 = new Car(300);

