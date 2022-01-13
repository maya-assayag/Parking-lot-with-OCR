let uniqeNumber = 0;
const vehiclePermissions = new Enum(
  "m_le",
  "pt",
  "VIP",
  "regular",
  "no-permissions"
);
export default class Vehicle {
  constructor(make, model, color, isHandicap, permissions) {
    this.id = ++uniqeNumber;
    this.make = make;
    this.model = model;
    this.color = color;
    this.isHandicap = isHandicap;
    this.permissions = permissions;
  }
  getIsHandicap = function() {
    return this.isHandicap;
  };
  getId = function() {
    return this.id;
  };
}

//TODO: valdator
