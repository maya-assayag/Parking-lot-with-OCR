const { Spot } = require("./spot");

class SmallSpot extends Spot {
  constructor(isHandicap) {
    super(isHandicap);
    this.size = "Small";
  }
}

module.exports = { SmallSpot };
