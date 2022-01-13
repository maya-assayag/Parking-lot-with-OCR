import Spot from "./spot.js";

export default class MediumSpot extends Spot {
  constructor(isHandicap) {
    super(isHandicap);
    this.size = "Meduim";
  }
}
