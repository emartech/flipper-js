'use strict';

let InvalidFlippersError = require('./errors').InvalidFlippersError;

class Flipper {

  constructor(avalaibleFlippers = []) {
    this._avalaibleFlippers = avalaibleFlippers;
    this.isOn = this.isOn.bind(this);
    this.isOff = this.isOff.bind(this);
  }


  isOn(flipperName) {
    return this._avalaibleFlippers.indexOf(flipperName) > -1;
  }


  isOff(flipperName) {
    return !this.isOn(flipperName);
  }


  static create(avalaibleFlippers = []) {
    if (!Array.isArray(avalaibleFlippers)) throw new InvalidFlippersError();

    return new Flipper(avalaibleFlippers);
  }


  static createForApiResponse(apiResponse = []) {
    if (!Array.isArray(apiResponse)) throw new InvalidFlippersError();

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
module.exports.InvalidFlippersError = InvalidFlippersError;
