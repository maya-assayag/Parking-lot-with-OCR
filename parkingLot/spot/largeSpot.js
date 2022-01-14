const { Spot } = require("./spot");

class LargeSpot extends Spot {
  constructor(isHandicap) {
    super(isHandicap);
    this.size = "Large";
  }
}

module.exports = { LargeSpot };
