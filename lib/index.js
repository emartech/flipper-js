'use strict';

class Flipper {

  constructor(avalaibleFlippers) {
    this._avalaibleFlippers = avalaibleFlippers || [];
  }


  isOn(flipperName) {
    return this._avalaibleFlippers.indexOf(flipperName) > -1;
  }


  isOff(flipperName) {
    return !this.isOn(flipperName);
  }


  static create(avalaibleFlippers) {
    return new Flipper(avalaibleFlippers);
  }


  static createForApiResponse(apiResponse) {
    var flippers = apiResponse
      .filter(function(flipper) {
        return flipper.isOn;
      })
      .map(function(flipper) {
        return flipper.id;
      });

    return new Flipper(flippers);
  }

}

module.exports = Flipper;
