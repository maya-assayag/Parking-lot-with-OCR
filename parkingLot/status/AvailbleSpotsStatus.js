export default class AvailbleSpotsStatus {
  constructor(regularSpots = 4, handicapSpots = 1) {
    this.regularSpotsAvailble = regularSpots;
    this.handicapSpotsAvailble = handicapSpots;
  }

  grabOneSpot = function(isHundicap) {
    isHundicap ? --this.handicapSpotsAvailble : --this.regularSpotsAvailble;
  };
  freeOneSpot = function(isHundicap) {
    isHundicap ? ++this.handicapSpotsAvailble : ++this.regularSpotsAvailble;
  };
}
