const { SpaceOCRProcessor } = require("./space_OCR_API");
const { TesseractOCRProcessor } = require("./tesseract_OCR_API");
const { createImagePath } = require("./utilities/utilities");

let spaceCounter = 0;
let tesseractCounter = 0;
let licensePlateSpaceRes;
let licensePlateTrsseractRes;
let path;
let imgCount;
let recognize = {
  space: {
    success: [],
    failed: []
  },
  tesseract: {
    success: [],
    failed: []
  }
};

imgCounter = function() {
  const fs = require("fs");
  const dir = "./licensePlatesImages";
  let res;

  res = fs.readdirSync(dir, (err, files) => {
    if (err) {
      return err;
    } else {
      return files.length;
    }
  });
  return res.length;
};

spaceExec = async function() {
  const space_OCR = new SpaceOCRProcessor();
  try {
    licensePlateSpaceRes = await space_OCR.parse_image(path);
  } catch (error) {
    console.error(error.message);
  }

  if (licensePlateSpaceRes !== undefined && licensePlateSpaceRes !== "") {
    ++spaceCounter;
    recognize.space.success.push(licensePlateSpaceRes);
    return;
  }
  recognize.space.failed.push(licensePlateSpaceRes);
};

tesseractExec = async function() {
  const tesseract_OCR = new TesseractOCRProcessor();
  try {
    licensePlateTrsseractRes = await tesseract_OCR.parse_image(path);
  } catch (error) {
    console.error(error.message);
  }

  if (
    licensePlateTrsseractRes !== undefined &&
    licensePlateTrsseractRes !== ""
  ) {
    ++tesseractCounter;
    recognize.tesseract.success.push(licensePlateTrsseractRes);
    return;
  }
  recognize.tesseract.failed.push(licensePlateTrsseractRes);
};

class APIStatistics {
  constructor() {
    imgCount = imgCounter();
  }

  bestPerformance = async function() {
    await this.statistics();
    return recognize.space.success.length > recognize.tesseract.success.length
      ? new SpaceOCRProcessor()
      : new TesseractOCRProcessor();
  };

  statistics = async function() {
    let i = 1;
    while (i <= imgCount) {
      path = createImagePath(i);

      await tesseractExec();
      await spaceExec();

      ++i;
    }
  };

  print = function() {
    console.log(`
  Space OCR resultes: ${spaceCounter} / ${imgCount}

      Detailse: 
          Success: 
            ${recognize.space.success}
          Failed: 
            ${recognize.space.failed}

  Tesseract OCR resultes: ${tesseractCounter} / ${imgCount} 

      Detailse: 
          Success: 
            ${recognize.tesseract.success}
          Failed: 
            ${recognize.tesseract.failed}`);
  };
}

module.exports = { APIStatistics };
