const { SmallVehicle } = require("../../../vehicle/smallVehicle");
const { MediumVehicle } = require("../../../vehicle/mediumVehicle");
const { LargeVehicle } = require("../../../vehicle/largeVehicle");
const { ParkingLot } = require("../../../parkingLot/parkingLot");

describe("Parking lot .E2E", () => {
  let vehicle,
    totalSpotsForAreaVehicleSize = 2,
    totalHandicapSpotsForAreaVehicleSizevehicle = 1,
    imgLicensePlatePath = "./licensePlatesImages/l9.png",
    permissions = "regular",
    size = "",
    make = "Fiat",
    model = 505,
    color = "Red",
    isHandicapAccessble = false,
    realseSpotFlag = false;

  parkingLot = new ParkingLot(
    totalSpotsForAreaVehicleSize,
    totalHandicapSpotsForAreaVehicleSizevehicle
  );

  const createVehicle = function() {
    return size === "Small"
      ? new SmallVehicle(
          make,
          model,
          color,
          isHandicapAccessble,
          permissions,
          imgLicensePlatePath
        )
      : size === "Medium"
      ? new MediumVehicle(
          make,
          model,
          color,
          isHandicapAccessble,
          permissions,
          imgLicensePlatePath
        )
      : new LargeVehicle(
          make,
          model,
          color,
          isHandicapAccessble,
          permissions,
          imgLicensePlatePath
        );
  };

  beforeEach(() => {});
  afterEach(() => {
    if (realseSpotFlag) {
      try {
        parkingLot.freeSpot(vehicle);
      } catch (ex) {
        console.log(`while cleaning after test ERROR: ${ex.message}`);
      }
    }
    realseSpotFlag = false;
  });

  const exec = async () => {
    vehicle = createVehicle();

    try {
      await parkingLot.park(vehicle);
    } catch (ex) {
      console.error(ex.message);
    }
  };

  it("should park a small vehicle in the parking lot", async () => {
    size = "Small";
    realseSpotFlag = true;

    await exec();

    expect(parkingLot.getSpotsInstance().has(vehicle.getId())).toEqual(true);
  }, 50000);

  it("should park a medium vehicle in the parking lot", async () => {
    size = "Medium";
    realseSpotFlag = true;

    await exec();

    expect(parkingLot.getSpotsInstance().has(vehicle.getId())).toEqual(true);
  }, 50000);

  it("should park a large vehicle in the parking lot", async () => {
    size = "Large";
    realseSpotFlag = true;

    await exec();

    expect(parkingLot.getSpotsInstance().has(vehicle.getId())).toEqual(true);
  }, 50000);
});
