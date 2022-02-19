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

function can_enter_parking_lot(licensePlateNumber) {
  return hasNoPermissions(licensePlateNumber)
    ? { accept: false, reason: "error" }
    : has_m_le_permissions(licensePlateNumber)
    ? { accept: false, reason: "m_le" }
    : has_pl_permissions(licensePlateNumber)
    ? { accept: false, reason: "pl" }
    : has_VIP_permissions(licensePlateNumber)
    ? { accept: true, reason: "VIP" }
    : { accept: true, reason: "regular" };
}

module.exports = can_enter_parking_lot;
