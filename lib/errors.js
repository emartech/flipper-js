'use strict';

class InvalidFlippersError extends Error {
  constructor() {
    super('InvalidFlippersError');
    this.message = 'InvalidFlippersError';
    this.name = 'InvalidFlippersError';
  }
}

module.exports.InvalidFlippersError = InvalidFlippersError;
