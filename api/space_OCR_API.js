const { ocrSpace } = require("ocr-space-api-wrapper");
const { cleanAPIRes } = require("./utilities/utilities");

class SpaceOCRProcessor {
  async parse_image(imgPath) {
    if (!imgPath)
      throw new Error("Falsy path image to OCR - API parse image function");
    let res;
    let licensePlate;

    try {
      res = await ocrSpace(imgPath, {
        apiKey: "912a29a6d088957"
      });
    } catch (error) {
      return error.message;
    }

    if (res) {
      if (res.hasOwnProperty("ParsedResults") && res.ParsedResults.length > 0) {
        if (res.ParsedResults[0].hasOwnProperty("ParsedText")) {
          licensePlate = res.ParsedResults[0].ParsedText;
          return cleanAPIRes(licensePlate);
        }
      }
    }
    throw new Error(
      "Failes on recognzied license plate image or the path image is not found"
    );
  }
}

module.exports = { SpaceOCRProcessor };
