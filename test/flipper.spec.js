'use strict';

var Flipper = require('../dist/');

describe('Flipper', function() {

  var flipper;

  describe('initiated by #create', function() {

    it('should throw an error if the provided flippers are not array', function() {
      this.expect(() => Flipper.create('["flipper1", "flipper2"]')).to.throw('InvalidFlippersError');
    });


    describe('without given flipper list', function() {

      it('should use empty array as default', function() {
        flipper = Flipper.create();
        this.expect(flipper.isOn('bi')).to.be.false;
        this.expect(flipper.isOff('bi')).to.be.true;
      });

    });


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


  });


  describe('initiated by #createForApiResponse', function() {

    let createFlipper = function() {
      flipper = Flipper.createForApiResponse([
        { id: 'bi', isOn: true },
        { id: 'dummy', isOn: true },
        { id: 'dummy2', isOn: false }
      ]);
    };


    it('should throw an error if the provided flippers are not array', function() {
      this.expect(() => Flipper.createForApiResponse('["flipper1", "flipper2"]')).to.throw('InvalidFlippersError');
    });


    describe('without given flipper list', function() {

      it('should use empty array as default', function() {
        flipper = Flipper.createForApiResponse();
        this.expect(flipper.isOn('bi')).to.be.false;
        this.expect(flipper.isOff('bi')).to.be.true;
      });

    });


    describe('#isOn', function() {
      beforeEach(createFlipper);

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
      beforeEach(createFlipper);

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
