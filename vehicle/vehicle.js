let uniqeNumber = 0;
// const vehiclePermissions = new Enum(
//   "m_le",
//   "pt",
//   "VIP",
//   "regular",
//   "no-permissions"
// );
class Vehicle {
  constructor(
    make,
    model,
    color,
    isHandicap,
    permissions,
    pathToVehicleLicensePlateImg
  ) {
    this.id = ++uniqeNumber;
    this.make = make;
    this.model = model;
    this.color = color;
    this.isHandicap = isHandicap;
    this.permissions = permissions;
    this.pathToVehicleLicensePlateImg = pathToVehicleLicensePlateImg;
  }
  getIsHandicap = function() {
    return this.isHandicap;
  };
  getId = function() {
    return this.id;
  };
}

module.exports = { Vehicle };
//TODO: valdator
