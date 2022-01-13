import Vehicle from "./vehicle.js";

export default class SmallVehicle extends Vehicle {
  constructor(make, model, color, isHandicapAccessble) {
    super(make, model, color, isHandicapAccessble);
    this.size = "Small";
  }
  getSize = function() {
    return this.size;
  };
}
