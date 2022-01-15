createImagePath = function(photoNumber) {
  return "./licensePlatesImages/l" + photoNumber + ".png";
};
function cleanAPIRes(ocr_resp) {
  return ocr_resp.replace(/[^0-9]/g, "");
}

module.exports = { createImagePath, cleanAPIRes };
