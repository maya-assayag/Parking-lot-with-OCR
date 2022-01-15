const { cleanAPIRes } = require("../../../../api/utilities/utilities");
const { createImagePath } = require("../../../../api/utilities/utilities");

describe("API. Utilities", () => {
  describe("", () => {
    let strBeforClean = "";
    let pathToImg = "";
    let res;
    let onlyDigits = "0123456789";

    beforeEach(() => {});

    afterEach(() => {
      pathToImg = "";
    });

    it("should clean the result from letters", async () => {
      strBeforClean = "abcd0efg1h2i3j4k5lmnop6tqf7swz89lrqyuop";
      res = cleanAPIRes(strBeforClean);

      expect(res).toEqual(onlyDigits);
    });

    it("should clean the result from spacial characters", async () => {
      strBeforClean = "!0@#$12%^&*345()67---_..89~";
      res = cleanAPIRes(strBeforClean);

      expect(res).toEqual(onlyDigits);
    });

    it("should clean the result from spaces", async () => {
      strBeforClean = "    0123  456  78 9 ";
      res = cleanAPIRes(strBeforClean);

      expect(res).toEqual(onlyDigits);
    });
  });
  describe("should create image path", () => {
    let pathToImg = "";
    beforeEach(() => {});

    afterEach(() => {
      pathToImg = "";
    });

    it("should return path to image", async () => {
      pathToImg = createImagePath(1);

      expect(pathToImg).toEqual("./licensePlatesImages/l1.png");
    });
  });
});
