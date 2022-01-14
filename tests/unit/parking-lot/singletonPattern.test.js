const { ParkingLot } = require("../../../parkingLot/parkingLot");
const { SmallSpot } = require("../../../parkingLot/spot/smallSpot");

describe("Parking lot.", () => {
  let parkingLot;
  let otherParkingLot;
  let totalSpotsForAreaVehicleSize = 2;
  let totalHandicapSpotsForAreaVehicleSize = 1;
  let isHundicap = false;
  let size = "Small";
  let spot = new SmallSpot(isHundicap);
  let vehicleId = "1";

  describe("singleton pattern", () => {
    beforeEach(() => {});

    afterEach(() => {});

    createParkingLot = function(
      totalSpotsForAreaVehicleSize,
      totalHandicapSpotsForAreaVehicleSize
    ) {
      return new ParkingLot(
        totalSpotsForAreaVehicleSize,
        totalHandicapSpotsForAreaVehicleSize
      );
    };

    it("should not create a new instance of parking lot after it create once", async () => {
      parkingLot = createParkingLot(
        totalSpotsForAreaVehicleSize,
        totalHandicapSpotsForAreaVehicleSize
      );

      totalSpotsForAreaVehicleSize = 10;
      totalHandicapSpotsForAreaVehicleSize = 5;

      otherParkingLot = createParkingLot(
        totalSpotsForAreaVehicleSize,
        totalHandicapSpotsForAreaVehicleSize
      );

      expect(otherParkingLot.getStatusInstance()).toEqual(
        parkingLot.getStatusInstance()
      );

      expect(otherParkingLot.getSpotsInstance()).toEqual(
        parkingLot.getSpotsInstance()
      );

      expect(
        otherParkingLot.getStatusInstance().getTotalRegularSpots()
      ).toEqual(parkingLot.getStatusInstance().getTotalRegularSpots());

      expect(
        otherParkingLot.getStatusInstance().getTotalHandicapSpots()
      ).toEqual(parkingLot.getStatusInstance().getTotalHandicapSpots());
    });

    it("should display in both instances one spot less after parking a car at parking lot", async () => {
      parkingLot.getSpotsInstance().set(vehicleId, spot);
      parkingLot
        .getStatusInstance()
        .getInstance()
        .get(size)
        .grabOneSpot(isHundicap);

      expect(
        otherParkingLot
          .getStatusInstance()
          .getInstance()
          .get(size).regularSpotsAvailble
      ).toEqual(
        parkingLot
          .getStatusInstance()
          .getInstance()
          .get(size).regularSpotsAvailble
      );

      expect(otherParkingLot.getSpotsInstance().has(vehicleId)).toEqual(
        parkingLot.getSpotsInstance().has(vehicleId)
      );

      expect(otherParkingLot.getSpotsInstance().get(vehicleId)).toEqual(
        parkingLot.getSpotsInstance().get(vehicleId)
      );
    });
  });
});
