(function() {
  'use strict';

  window.zoo = window.zoo || {};

  let Animal = window.zoo.Animal;

  window.zoo.Narwhal = class Narwhal extends Animal{
    constructor(name, dateOfBirth) {
      super(name, dateOfBirth);
      this.reproduction = 'Live Birth';
      this.skill = this.name + ' has a long spiral tusk!';
    }

    toString() {
      return 'I am a narwhal!';
    }
  };



}());
