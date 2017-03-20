(function() {
  'use strict';

  window.zoo = window.zoo || {};

  let Animal = window.zoo.Animal;

  window.zoo.Narwhal = class Narwhal extends Animal{
    constructor(name, dateOfBirth, reproduction) {
      super(name, dateOfBirth, reproduction);
    }

    toString() {
      return "I am a narwhal!";
    }
  };



}());
