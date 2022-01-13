import Spot from "./spot.js";

export default class SmallSpot extends Spot {
  constructor(isHandicap) {
    super(isHandicap);
    this.size = "Small";
  }
}
