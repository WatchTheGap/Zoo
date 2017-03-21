(function() {
  'use strict';

  window.zoo = window.zoo || {};

  window.zoo.Animal = class Animal {
    /**
    * Creates template for Animal class objects and methods
     * @param  {String} name          name of new Animal
     * @param  {Date}   dateOfBirth   date of birth
     * @return {void}
     */
    constructor(name, dateOfBirth) {
      // if (name typeof !== 'string') {
      //   throw new TypeError('please enter a valid name');
      // }
      // if (!(dateOfBirth instanceof Date)) {
      //   throw new TypeError('Please enter a valid date of birth');
      // }
      this.name = name;
      this.dateOfBirth = dateOfBirth;
    }

    /**
    * Gives the user the ability to rename the animal.
     * @param  {String} newName name provided to replace existing animal name
     * @return {void}
     */
    rename(newName) {
      if (!(newName instanceof String)) {
        throw new TypeError('please enter a valid name');
      }
      this.name = newName;
    }

    /**
    * Calculates the animal's age based on their date of birth.
     * @return {Number} animal's current age
     */
    age() {
      let birthYear = this.dateOfBirth.getFullYear();
      if (birthYear < 1900 || birthYear > 2017); {
        throw new Error('Birth year must be between 1900-2017');
      }
      let currentYear = new Date();
      let year = currentYear.getFullYear();

      let age = year - birthYear;
      return age;
      //could skip variables. (new Date()) needs bubble to use .getFullYear
    }

  };

}());
