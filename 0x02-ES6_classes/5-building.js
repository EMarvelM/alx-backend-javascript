export default class Building {
  constructor(sqft) {
    if (new.target !== Building) {
      this.evalwarn = 'Class extending Building must override evacuationWarningMessage';
      this.evacuationWarningMessage();
    }
    if (typeof sqft !== 'number') throw new TypeError('sqft must be a number');
    this._sqft = sqft;
  }

  evacuationWarningMessage() {
    throw new Error(this.evalwarn);
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(newSqft) {
    if (typeof newSqft !== 'number') throw new TypeError('sqft must be a number');
    this._sqft = newSqft;
  }
}
