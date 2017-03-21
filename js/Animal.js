(function() {
  'use strict';

  window.zoo = window.zoo || {};

  /**
   * Creates template for Animal class objects and methods
   * @type {Object}
   */
  window.zoo.Animal = class Animal {
    //docblock was failing, must add better ones
    constructor(name, dateOfBirth) {
      //add if to check if instanceof Date
      this.name = name;
      this.dateOfBirth = dateOfBirth;
    }

    /**
     * Gives the user the ability to rename the animal.
     */
    rename(newName) {
      this.name = newName;
    }

    /**
     * Calculates the animal's age based on their date of birth.
     * @return {Number}
     */
    age() {
      let birthYear = this.dateOfBirth.getFullYear();
      let currentYear = new Date();
      let year = currentYear.getFullYear();
      let age = year - birthYear;
      return age;
      //could skip variables. (new Date()) needs bubble to use .getFullYear
    }

  };

}());
