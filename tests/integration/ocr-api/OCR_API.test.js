const parse_image = require("../../../OCR_API");

describe("OCR.space-API", () => {
  describe("parse image to Json function", () => {
    let imgLicensePlatePath = "";
    let licensePlateNumberExpect = "";
    let licensePlateNumberRecognaized = "";

    createImagePath = function(photoNumber) {
      return "./licensePlatesImages/l" + photoNumber + ".png";
    };

    beforeEach(() => {});

    afterEach(() => {});

    const exec = async () => {
      try {
        return await parse_image(imgLicensePlatePath);
      } catch (ex) {
        console.error(ex.message);
        return ex.message;
      }
    };

    it("should parse license plate not clear photo to null string", async () => {
      licensePlateNumberExpect = "";

      imgLicensePlatePath = createImagePath(1);

      licensePlateNumberRecognaized = await exec();

      expect(licensePlateNumberRecognaized).toEqual(licensePlateNumberExpect);
    });

    it("should parse license plate photo to string describes license plate number", async () => {
      licensePlateNumberExpect = "12345678";

      imgLicensePlatePath = createImagePath(2);

      licensePlateNumberRecognaized = await exec();

      expect(licensePlateNumberRecognaized).toEqual(licensePlateNumberExpect);
    });

    // it("should return 403 status code not found photo path", async () => {
    //   imgLicensePlatePath = "";

    //   res = await exec();

    //   expect(res).toEqual("The path is falsy");
    // });
  });
});
