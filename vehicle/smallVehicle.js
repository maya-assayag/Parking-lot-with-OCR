const { Vehicle } = require("./vehicle");

class SmallVehicle extends Vehicle {
  constructor(
    make,
    model,
    color,
    isHandicapAccessble,
    permissions,
    pathToVehicleLicensePlateImg
  ) {
    super(
      make,
      model,
      color,
      isHandicapAccessble,
      permissions,
      pathToVehicleLicensePlateImg
    );
    this.size = "Small";
  }
  getSize = function() {
    return this.size;
  };
}

module.exports = { SmallVehicle };
