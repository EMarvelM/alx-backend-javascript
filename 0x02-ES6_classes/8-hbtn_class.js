export default class HolbertonClass {
  constructor(size, location) {
    if (typeof size !== 'number') throw new TypeError('size must be a number');
    this._size = size;
    if (typeof location !== 'string') throw new TypeError('location must be a string');
    this._location = location;
  }

  toString() {
    return String(this._location);
  }

  valueOf() {
    return Number(this._size);
  }
}
