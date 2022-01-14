const policyEnterance = require("../../../parkingLot/policyEntrance");

describe("Parking lot. Policy enterance", () => {
  let pathToImg = "";

  createImagePath = function(photoNumber) {
    return "./licensePlatesImages/l" + photoNumber + ".png";
  };

  describe("can_enter_parking_lot", () => {
    beforeEach(() => {});

    afterEach(() => {});

    const exec = async () => {
      try {
        return await policyEnterance(pathToImg);
      } catch (ex) {
        return ex.message;
      }
    };

    it("should return object with false and error if license plate is null", async () => {
      pathToImg = createImagePath(1);

      res = await exec();

      expect(res).toEqual({ accept: false, reason: "error" });
    });

    it("should return object with true and VIP string if the sum of numbers in license plate divided in 9", async () => {
      pathToImg = createImagePath(2);

      res = await exec();

      expect(res).toEqual({ accept: true, reason: "VIP" });
    });

    it("should return object with false and p_l string if the license plate number ends with 7 or 25", async () => {
      pathToImg = createImagePath(8);

      res = await exec();

      expect(res).toEqual({ accept: false, reason: "pl" });
    });

    it("should return object with false and m_le string if in the license plate number has sequens of identical digit", async () => {
      pathToImg = createImagePath(12);

      res = await exec();

      expect(res).toEqual({ accept: false, reason: "m_le" });
    });

    it("should return object with true and regular string if the license plate has no spacial properties", async () => {
      pathToImg = createImagePath(9);

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
