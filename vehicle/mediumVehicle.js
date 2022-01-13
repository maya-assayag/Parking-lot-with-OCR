import Vehicle from "./vehicle.js";

export default class MediumVehicle extends Vehicle {
  constructor(make, model, color, isHandicapAccessble) {
    super(make, model, color, isHandicapAccessble);
    this.size = "Meduim";
  }
  getSize = function() {
    return this.size;
  };
}
