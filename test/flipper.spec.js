'use strict';

var Flipper = require('../lib/');

describe('Flipper', function() {

  var flipper;

  describe('#isOn', function() {

    beforeEach(function() {
      flipper = Flipper.create(['bi', 'dummy', 'dummy2']);
    });

    it('should respond with true if given flipper is provided', function() {
      this.expect(flipper.isOn('bi')).to.be.true;
    });


    it('should respond with false if given flipper is not provided', function() {
      this.expect(flipper.isOn('predict')).to.be.false;
    });


    it('should run on the service context', function() {
      this.expect(flipper.isOn.call(undefined, 'bi')).to.be.true;
    });

  });

  describe('#isOff', function() {

    beforeEach(function() {
      flipper = Flipper.create(['bi', 'dummy', 'dummy2']);
    });

    it('should respond with false if given flipper is provided', function() {
      this.expect(flipper.isOff('bi')).to.be.false;
    });


    it('should respond with true if given flipper is not provided', function() {
      this.expect(flipper.isOff('predict')).to.be.true;
    });


    it('should run on the service context', function() {
      this.expect(flipper.isOff.call(undefined, 'bi')).to.be.false;
    });

  });

  describe('without given flipper list', function() {

    beforeEach(function() {
      flipper = Flipper.create();
    });

    it('should use empty array as default', function() {
      this.expect(flipper.isOn('bi')).to.be.false;
      this.expect(flipper.isOff('bi')).to.be.true;
    });

  });

  describe('Factories', function() {

    describe('#createForApiResponse', function() {

      beforeEach(function() {
        flipper = Flipper.createForApiResponse([
          { id: 'bi', isOn: true },
          { id: 'dummy', isOn: true },
          { id: 'dummy2', isOn: false }
        ]);
      });

      describe('#isOn', function() {

        it('should respond with true if given flipper is provided with isOn', function() {
          this.expect(flipper.isOn('bi')).to.be.true;
        });


        it('should respond with false if given flipper is not provided', function() {
          this.expect(flipper.isOn('predict')).to.be.false;
        });


        it('should respond with false if given flipper is provided with isOn false', function() {
          this.expect(flipper.isOn('dummy2')).to.be.false;
        });

      });

      describe('#isOff', function() {

        it('should respond with true if given flipper is provided with isOff', function() {
          this.expect(flipper.isOff('dummy2')).to.be.true;
        });


        it('should respond with true if given flipper is not provided', function() {
          this.expect(flipper.isOff('predict')).to.be.true;
        });


        it('should respond with false if given flipper is provided with isOn true', function() {
          this.expect(flipper.isOff('bi')).to.be.false;
        });

      });

    });

  });

});
