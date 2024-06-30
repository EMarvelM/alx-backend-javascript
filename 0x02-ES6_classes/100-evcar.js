import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  cloneCar() {
    const clonedCar = Object.create(
      Object.getPrototypeOf(this), // Get prototype of the Car class
      Object.getOwnPropertyDescriptors(new Car()),
    );
    clonedCar._brand = undefined;
    clonedCar._motor = undefined;
    clonedCar._color = undefined;
    return clonedCar;
  }
}
