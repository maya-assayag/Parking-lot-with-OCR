const { createWorker } = require("tesseract.js");
const { cleanAPIRes } = require("./utilities/utilities");

const worker = createWorker({
  logger: m => console.log(m)
});

async function parse_image(imgPath) {
  if (!imgPath)
    throw new Error(
      "Falsy path image to tesseract OCR - API parse image function"
    );

  await worker.load();
  await worker.loadLanguage("eng");
  await worker.initialize("eng");

  try {
    const {
      data: { text }
    } = await worker.recognize(imgPath);
    return cleanAPIRes(text);
  } catch (ex) {
    throw new Error("The path is not valid tesseract OCR - API");
  }

  //await worker.terminate();
}

module.exports = parse_image;
