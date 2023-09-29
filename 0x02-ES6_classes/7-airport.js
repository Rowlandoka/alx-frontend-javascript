export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  // Methods
  get [Symbol.toStringTag]() {
    return `${this._code}`;
  }

  // Setter
  set code(newCode) {
    this._code = newCode;
  }

  set name(newName) {
    this._name = newName;
  }

  // Getters
  get name() {
    return this._name;
  }

  get code() {
    return this._code;
  }
}
