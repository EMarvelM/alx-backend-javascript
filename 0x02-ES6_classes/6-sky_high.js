import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(SkyHighBuilding, floors) {
    super(SkyHighBuilding);
    this._floors = floors;
  }

  get floors() {
    return this._floors;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
