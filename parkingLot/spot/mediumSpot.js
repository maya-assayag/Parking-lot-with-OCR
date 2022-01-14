const { Spot } = require("./spot");
class MediumSpot extends Spot {
  constructor(isHandicap) {
    super(isHandicap);
    this.size = "Meduim";
  }
}

module.exports = { MediumSpot };
