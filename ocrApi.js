const { ocrSpace } = require("ocr-space-api-wrapper");
async function parse_image() {
  try {
    // Using your personal API key + local file
    let i = 8;
    let res;
    let obj;
    while (i > 0) {
      res = await ocrSpace(`./licensePlatesImages/l${i}.png`, {
        apiKey: "912a29a6d088957"
      });
      //obj = JSON.parse(res);
      console.log(res.ParsedResults[0].ParsedText);
      //console.log(`license plate number ${i}: ${res}`);
      --i;
    }
  } catch (error) {
    console.error(error);
  }
}

parse_image();
