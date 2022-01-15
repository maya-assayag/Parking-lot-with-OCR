const parse_image = require("../../../api/tesseract_OCR_API");
const { createImagePath } = require("../../../api/utilities/utilities");

describe("OCR.tesseract-API", () => {
  describe("parse image to Json function", () => {
    let imgLicensePlatePath = "";
    let licensePlateNumberExpect = "";
    let licensePlateNumberRecognaized = "";

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

      imgLicensePlatePath = createImagePath(4);

      licensePlateNumberRecognaized = await exec();

      expect(licensePlateNumberRecognaized).toEqual(licensePlateNumberExpect);
    });

    it("should parse license plate photo to string describes license plate number", async () => {
      licensePlateNumberExpect = "9946616";

      imgLicensePlatePath = createImagePath(10);

      licensePlateNumberRecognaized = await exec();

      expect(licensePlateNumberRecognaized).toEqual(licensePlateNumberExpect);
    });

    it("should throw error for falsy,undefined photo path", async () => {
      imgLicensePlatePath = undefined;

      res = await exec();

      expect(res).toEqual(
        "Falsy path image to tesseract OCR - API parse image function"
      );
    });

    it("should throw error for falsy,null photo path", async () => {
      imgLicensePlatePath = null;

      res = await exec();

      expect(res).toEqual(
        "Falsy path image to tesseract OCR - API parse image function"
      );
    });

    it("should throw error for falsy,null string photo path", async () => {
      imgLicensePlatePath = "";

      res = await exec();

      expect(res).toEqual(
        "Falsy path image to tesseract OCR - API parse image function"
      );
    });

    it("should throw error when the path is not found", async () => {
      imgLicensePlatePath = "notValidPath";

      res = await exec();

      expect(res).toEqual("The path is not valid tesseract OCR - API");
    });
  });
});
