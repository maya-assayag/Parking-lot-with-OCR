const { createWorker } = require("tesseract.js");
const { cleanAPIRes } = require("./utilities/utilities");

const worker = createWorker({
  logger: m => console.log(m)
});

async function parse_image(imgPath) {
  await worker.load();
  await worker.loadLanguage("eng");
  await worker.initialize("eng");
  const {
    data: { text }
  } = await worker.recognize(imgPath);
  return cleanAPIRes(text);

  //await worker.terminate();
}

module.exports = parse_image;
