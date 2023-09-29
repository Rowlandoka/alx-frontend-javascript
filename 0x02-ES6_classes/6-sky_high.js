import Building from './5-building';

export default class SkyHighBuilding extends Building {
  // Instantiate an create object
  constructor(sqft, floors) {
    super(sqft);
    this._floors = floors;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors.`;
  }

  // Getter
  get sqft() {
    return this._sqft;
  }

  get floors() {
    return this._floors;
  }
}
