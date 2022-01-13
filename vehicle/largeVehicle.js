import Vehicle from "./vehicle.js";

export default class LargeVehicle extends Vehicle {
  constructor(make, model, color, isHandicapAccessble) {
    super(make, model, color, isHandicapAccessble);
    this.size = "Large";
  }
  getSize = function() {
    return this.size;
  };
}
