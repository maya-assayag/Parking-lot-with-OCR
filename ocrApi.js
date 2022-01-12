const { ocrSpace } = require("ocr-space-api-wrapper");

async function parse_image(image) {
  try {
    // Using your personal API key + local file
    let res;
    res = await ocrSpace(`./licensePlatesImages/${image}.png`, {
      apiKey: "912a29a6d088957"
    });
    console.log(res.ParsedResults[0].ParsedText);
  } catch (error) {
    console.error(error);
  }
}

module.exports = parse_image;
