(function() {
  'use strict';

  window.zoo = window.zoo || {};

  let Animal = window.zoo.Animal;

  window.zoo.Nudibranch class Nudibranch extends Animal{
    constructor(name, dateOfBirth, reproduction) {
      super(name, dateOfBirth, reproduction);
      this.skill = 'can emit sounds that are audible to humans';

    }

    toString() {
    return "I am a nudibranch!";
    }

  }


}());
