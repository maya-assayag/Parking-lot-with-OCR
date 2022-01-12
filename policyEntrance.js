const parse_image = require("./ocrApi");

function can_enter_parking_lot(image) {
  //const ocr_resp = parse_image(image);
  let ocr_resp = image;
  ocr_resp = ocr_resp.replace(/[^0-9]/g, "");

  if (ocr_resp === undefined || ocr_resp === "")
    return { accept: false, reason: "error" };

  let prev = -1;
  for (let digit of ocr_resp) {
    if (prev === digit) return { accept: false, reason: "m_le" };
    prev = digit;
  }

  if (ocr_resp.endsWith("7") || ocr_resp.endsWith("25"))
    return { accept: false, reason: "pl" };

  let sum = 0;
  [...ocr_resp].forEach(digit => {
    sum += parseInt(digit);
  });

  if (sum % 9 == 0) return { accept: true, reason: "VIP" };

  return { accept: true, reason: "regular" };
}

console.log(can_enter_parking_lot("'fkj57849 5 5 -3556.68"));
console.log(can_enter_parking_lot("'fkj57849  5 -35627?jg"));
console.log(can_enter_parking_lot("'fkj57849  5 -35625?jg"));
console.log(can_enter_parking_lot("'fk301239jg"));
console.log(can_enter_parking_lot("njdfgnkdfgnkf"));
console.log(can_enter_parking_lot(""));
console.log(can_enter_parking_lot("12345679"));

module.exports = can_enter_parking_lot;
