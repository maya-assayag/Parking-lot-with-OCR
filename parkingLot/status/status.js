import AvailbleSpotsStatus from "./AvailbleSpotsStatus.js";

let _parkingStatus;

export default class Status {
  constructor(regularSpots, handicapSpots) {
    if (!_parkingStatus) {
      _parkingStatus = new Map();

      this.totalRegularSpots = regularSpots;
      this.totalHandicapSpots = handicapSpots;

      _parkingStatus.set(
        "Large",
        new AvailbleSpotsStatus(regularSpots, handicapSpots)
      );
      _parkingStatus.set(
        "Meduim",
        new AvailbleSpotsStatus(regularSpots, handicapSpots)
      );
      _parkingStatus.set(
        "Small",
        new AvailbleSpotsStatus(regularSpots, handicapSpots)
      );
    }
  }

  getInstance = function() {
    return _parkingStatus;
  };

  getTotalRegularSpots = function() {
    return this.totalRegularSpots;
  };

  getTotalHandicapSpots = function() {
    return this.totalHandicapSpots;
  };

  description = function() {
    console.log(`STATUS DESCRIPTION:`);
    _parkingStatus.forEach((value, key) => {
      console.log(`${key} vehicles spots:
      `);

      console.log(`Total spots: ${this.totalRegularSpots}`);
      console.log(`Availble spots: ${value.regularSpotsAvailble}
      `);

      console.log(
        `Total handicap accessible spots: ${this.totalHandicapSpots}`
      );
      console.log(
        `Availble handicap accessible spots: ${value.handicapSpotsAvailble}
        `
      );
    });
  };
}
