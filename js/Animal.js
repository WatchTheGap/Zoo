(function() {
  'use strict';

  window.zoo = window.zoo || {};

  window.zoo.Animal = class Animal {
    constructor(species, name, dateOfBirth) {
      this.name = name;
      this.dateOfBirth = dateOfBirth;
      this.species = species;
    }
    rename(newName) {
      this.name = newName;
    }
    getAge(dateOfBirth) {
      let today = new Date();
      this.age = today - dateOfBirth;
    }


    toString() {
    return "I am a " + name + "!";
    }
  };

}());
