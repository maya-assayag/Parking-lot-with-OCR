const { ocrSpace } = require("ocr-space-api-wrapper");

function cleanRes(ocr_resp) {
  return ocr_resp.replace(/[^0-9]/g, "");
}

async function parse_image(pathToVehicleLicensePlateImg) {
  if (!pathToVehicleLicensePlateImg)
    throw new Error("Falsy path image to OCR - API parse image function");

  let res;
  let licensePlate;

  try {
    res = await ocrSpace(pathToVehicleLicensePlateImg, {
      apiKey: "912a29a6d088957"
    });
  } catch (error) {
    return error.message;
  }

  if (res) {
    if (res.hasOwnProperty("ParsedResults")) {
      if (res.ParsedResults[0].hasOwnProperty("ParsedText")) {
        licensePlate = res.ParsedResults[0].ParsedText;
        return cleanRes(licensePlate);
      }
    }
  }
  throw new Error(
    "Failes on recognzied license plate image or the path image is not found"
  );
}

module.exports = parse_image;
