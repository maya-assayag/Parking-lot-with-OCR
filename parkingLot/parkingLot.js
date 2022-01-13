import Status from "./status/status.js";
import LargeSpot from "./spot/largeSpot.js";
import MeduinSpot from "./spot/mediumSpot.js";
import SmallSpot from "./spot/smallSpot.js";
const hasPermissions = require("./policyEntrance");

let _parkingLot;
let _parkingStatus;

export default class ParkingLot {
  constructor(regularSpots, handicapSpots) {
    if (!_parkingLot) {
      _parkingLot = new Map();
    }
    if (!_parkingStatus) {
      _parkingStatus = new Status(regularSpots, handicapSpots);
    }
  }

  getSpotsInstance = function() {
    return _parkingLot;
  };

  getStatusInstance = function() {
    return _parkingStatus;
  };

  park = function(vehicle) {
    if (_parkingLot.get(vehicle.getId()))
      throw new Error("This car is already park in the parking lot");

    if (!hasPermissions(image).accept)
      throw new Error("This vehicle has no parking lot entrance permissions");

    const size = vehicle.getSize();
    const isHundicap = vehicle.getIsHandicap();
    let status = _parkingStatus.getInstance().get(size);

    let availbleSpots;
    let spot;

    isHundicap
      ? (availbleSpots = status.handicapSpotsAvailble)
      : (availbleSpots = status.regularSpotsAvailble);

    size === "Large"
      ? (spot = new LargeSpot(isHundicap))
      : size === "Meduim"
      ? (spot = new MeduinSpot(isHundicap))
      : (spot = new SmallSpot(isHundicap));

    if (availbleSpots > 0) {
      _parkingLot.set(vehicle.id, spot);
      status.grabOneSpot(isHundicap);
      return;
    }

    throw new Error("There is no free parking for this vehicle at this moment");
  };

  freeSpot = function(vehicle) {
    if (_parkingLot.has(vehicle.id)) {
      _parkingLot.delete(vehicle.id);
      _parkingStatus
        .getInstance()
        .get(vehicle.getSize())
        .freeOneSpot(vehicle.getIsHandicap());
      return;
    }

    throw new Error(
      "This vehicle with the givan ID is not found in the parking lots"
    );
  };

  description = function() {
    _parkingStatus.description();
    _parkingLot.forEach((value, key) => {
      console.log(key);
    });
  };
}