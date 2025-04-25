class Vehicle {
  constructor(
    protected wheelCount: number,
  ) {}

  showNumberOfWheels(): string {
    return `Driving a  ${this.wheelCount} wheeled vehicle`;
  }
}

class MotorCar extends Vehicle {
  constructor() {
    super(4);
  }
}
class MotorCycle extends Vehicle {
    constructor() {
      super(2);
    }
    updateWheelCount(newWheelCount: number){
        this.wheelCount = newWheelCount;
    }
} 

const mc  = new MotorCar();
console.log('Car: ' + mc.showNumberOfWheels()); // Driving a 4 wheeled vehicle
const mb = new MotorCycle();
console.log('Bike: ' + mb.showNumberOfWheels()); // Driving a 2 wheeled vehicle
