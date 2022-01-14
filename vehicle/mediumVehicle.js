const { Vehicle } = require("./vehicle");

class MediumVehicle extends Vehicle {
  constructor(
    make,
    model,
    color,
    isHandicapAccessblepermissions,
    permissions,
    pathToVehicleLicensePlateImg
  ) {
    super(
      make,
      model,
      color,
      isHandicapAccessblepermissions,
      permissions,
      pathToVehicleLicensePlateImg
    );
    this.size = "Meduim";
  }
  getSize = function() {
    return this.size;
  };
}

module.exports = { MediumVehicle };
