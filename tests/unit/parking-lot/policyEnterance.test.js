const policyEnterance = require("../../../parkingLot/policyEntrance");
const { createImagePath } = require("../../../api/utilities/utilities");

describe("Parking lot. Policy enterance", () => {
  let licensePlateNumber = "";

  describe("can_enter_parking_lot", () => {
    beforeEach(() => {});

    afterEach(() => {});

    const exec = async () => {
      try {
        return await policyEnterance(licensePlateNumber);
      } catch (ex) {
        return ex.message;
      }
    };

    it("should return object with false and error if license plate is null", async () => {
      res = await exec();

      expect(res).toEqual({ accept: false, reason: "error" });
    });

    it("should return object with true and VIP string if the sum of numbers in license plate divided in 9", async () => {
      licensePlateNumber = "34569";

      res = await exec();

      expect(res).toEqual({ accept: true, reason: "VIP" });
    });

    it("should return object with false and p_l string if the license plate number ends with 25", async () => {
      licensePlateNumber = "1525";

      res = await exec();

      expect(res).toEqual({ accept: false, reason: "pl" });
    });

    it("should return object with false and p_l string if the license plate number ends with 7", async () => {
      licensePlateNumber = "1237";

      res = await exec();

      expect(res).toEqual({ accept: false, reason: "pl" });
    });

    it("should return object with false and m_le string if in the license plate number has sequens of identical digit", async () => {
      licensePlateNumber = "1234456";

      res = await exec();

      expect(res).toEqual({ accept: false, reason: "m_le" });
    });

    it("should return object with true and regular string if the license plate has no spacial properties", async () => {
      licensePlateNumber = "1234";

      res = await exec();

      expect(res).toEqual({ accept: true, reason: "regular" });
    });
  });
});

// console.log("m_le", can_enter_parking_lot("'fkj57849 5 5 -3556.68"));
// console.log("pl", can_enter_parking_lot("'fkj57849  5 -35627?jg"));
// console.log("pl", can_enter_parking_lot("'fkj57849  5 -35625?jg"));
// console.log("VIP", can_enter_parking_lot("'fk301239jg"));
// console.log("error", can_enter_parking_lot("njdfgnkdfgnkf"));
// console.log("error", can_enter_parking_lot(""));
// console.log("regular", can_enter_parking_lot("12345679"));
