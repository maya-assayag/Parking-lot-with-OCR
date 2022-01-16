const parse_image = require("../api/space_OCR_API");
//const tesseract_parse_image = require("../api/tesseract_OCR_API");
const { APIStatistics } = require("../api/API_statistics");

statistics = new APIStatistics();

function hasNoPermissions(licensePlate) {
  return licensePlate === undefined || licensePlate === "" ? true : false;
}

function has_m_le_permissions(licensePlate) {
  let prev = -1;

  for (let digit of licensePlate) {
    if (prev === digit) return true;
    prev = digit;
  }

  return false;
}

function has_pl_permissions(licensePlate) {
  return licensePlate.endsWith("7") || licensePlate.endsWith("25")
    ? true
    : false;
}

function has_VIP_permissions(licensePlate) {
  let sum = 0;
  [...licensePlate].forEach(digit => {
    sum += parseInt(digit);
  });

  return sum % 9 == 0 ? true : false;
}

async function can_enter_parking_lot(pathToVehicleLicensePlateImg) {
  // let ocr_res;
  // let statisticsRes = await statistics.bestPerformance();

  // statisticsRes === "Space"
  //   ? (ocr_res = await space_parse_image(pathToVehicleLicensePlateImg))
  //   : (ocr_res = await tesseract_parse_image(pathToVehicleLicensePlateImg));

  const ocr_res = await parse_image(pathToVehicleLicensePlateImg);

  return hasNoPermissions(ocr_res)
    ? { accept: false, reason: "error" }
    : has_m_le_permissions(ocr_res)
    ? { accept: false, reason: "m_le" }
    : has_pl_permissions(ocr_res)
    ? { accept: false, reason: "pl" }
    : has_VIP_permissions(ocr_res)
    ? { accept: true, reason: "VIP" }
    : { accept: true, reason: "regular" };
}

module.exports = can_enter_parking_lot;
