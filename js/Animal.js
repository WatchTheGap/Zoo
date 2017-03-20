(function() {
  'use strict';

  window.zoo = window.zoo || {};

  window.zoo.Animal = class Animal {
    constructor(name, dateOfBirth) {
      this.name = name;
      this.dateOfBirth = dateOfBirth;
    }
    rename(newName) {
      this.name = newName;
    }
    age() {
      let birthYear = this.dateOfBirth.getFullYear();
      let currentYear = new Date();
      let year = currentYear.getFullYear();
      let age = year - birthYear;
      return age;
    }

  };

}());
