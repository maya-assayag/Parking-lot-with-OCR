import Spot from "./spot.js";

export default class LargeSpot extends Spot {
  constructor(isHandicap) {
    super(isHandicap);
    this.size = "Large";
  }
}
