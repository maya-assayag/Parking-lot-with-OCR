const { ParkingLot } = require("./parkingLot/parkingLot");
const { SmallVehicle } = require("./vehicle/smallVehicle");
const { MediumVehicle } = require("./vehicle/mediumVehicle");
const { LargeVehicle } = require("./vehicle/largeVehicle");

const make = "Fiat";
const model = 500;
const color = "Red";
const isHandicapAccessble = false;
const permissions = "regular";
const imgLicensePlatePath = "./licensePlatesImages/l9.png";

let vehicle = new SmallVehicle(
  make,
  model,
  color,
  isHandicapAccessble,
  permissions,
  imgLicensePlatePath
);

const parkingLot = new ParkingLot();

(async () => {
  console.log("START");
  await parkingLot.park(vehicle);
  parkingLot.description();
  console.log("FINISH");
})();
