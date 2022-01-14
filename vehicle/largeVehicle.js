const { Vehicle } = require("./vehicle");

class LargeVehicle extends Vehicle {
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
    this.size = "Large";
  }
  getSize = function() {
    return this.size;
  };
}

module.exports = { LargeVehicle };
