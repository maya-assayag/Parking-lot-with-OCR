class AvailbleSpotsStatus {
  constructor(regularSpots, handicapSpots) {
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
module.exports = { AvailbleSpotsStatus };
