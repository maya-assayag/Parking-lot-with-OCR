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

    afterEach(() => {
      imgLicensePlatePath = "";
      licensePlateNumberExpect = "";
      licensePlateNumberRecognaized = "";
    });

    const exec = async () => {
      try {
        return await parse_image(imgLicensePlatePath);
      } catch (ex) {
        //console.error(ex.message);
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

    it("should throw error for falsy,undefined photo path", async () => {
      imgLicensePlatePath = undefined;

      res = await exec();

      expect(res).toEqual("Falsy path image to OCR - API parse image function");
    });

    it("should throw error for falsy,null photo path", async () => {
      imgLicensePlatePath = null;

      res = await exec();

      expect(res).toEqual("Falsy path image to OCR - API parse image function");
    });

    it("should throw error for falsy,null string photo path", async () => {
      imgLicensePlatePath = "";

      res = await exec();

      expect(res).toEqual("Falsy path image to OCR - API parse image function");
    });

    // it("should throw error when the path is not found", async () => {
    //   imgLicensePlatePath = "notValidPath";

    //   res = await exec();

    //   expect(res).toEqual(
    //     "Failes on recognzied license plate image or the path image is not found"
    //   );
    // });
  });
});
