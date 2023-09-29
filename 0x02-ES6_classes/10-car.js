export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  // Method to create new object
  cloneCar() {
    const NewCar = this.constructor[Symbol.species] || this.constructor;
    const clone = new NewCar();
    return clone;
  }

  // Setter
  set brand(value) {
    this._brand = value;
  }

  set motor(value) {
    this._motor = value;
  }

  set color(value) {
    this._color = value;
  }

  // Getter
  get brand() {
    return this._brand;
  }

  get motor() {
    return this._motor;
  }

  get color() {
    return this._color;
  }
}
