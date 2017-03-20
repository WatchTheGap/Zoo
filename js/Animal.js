(function() {
  'use strict';

  window.zoo = window.zoo || {};

  window.zoo.Animal = class Animal {
    constructor(name, dateOfBirth, reproduction) {
      this.name = name;
      this.dateOfBirth = dateOfBirth;
      this.reproduction = reproduction;
    }
    rename(newName) {
      this.name = newName;
    }
    getAge(dateOfBirth) {
      let today = new Date();
      this.age = today - dateOfBirth;
    }

  };

}());
