export default class Car {
  constructor(brand, motor, color) {
    if (typeof brand !== 'string') throw new TypeError('brand must be a string');
    this._brand = brand;
    if (typeof motor !== 'string') throw new TypeError('motor must be a string');
    this._motor = motor;
    if (typeof color !== 'string') throw new TypeError('color must be a string');
    this._color = color;
  }

  static static_cloneCar(brand, motor, color) {
    return new this(brand, motor, color);
  }

  cloneCar() {
    return this.constructor.static_cloneCar(this._brand, this._motor, this._color);
  }
}
