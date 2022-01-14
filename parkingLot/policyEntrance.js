const parse_image = require("../OCR_API");

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
