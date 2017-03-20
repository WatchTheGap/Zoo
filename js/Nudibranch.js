(function() {
  'use strict';

  window.zoo = window.zoo || {};

  let Animal = window.zoo.Animal;

  window.zoo.Nudibranch = class Nudibranch extends Animal{
    constructor(name, dateOfBirth) {
      super(name, dateOfBirth);
      this.skill = name + ' can emit sounds that are audible to humans!';
      this.reproduction = 'Egg Spiral';

    }

    toString() {
    return this.name + ' is a nudibranch!';
    }

  };


}());
