(function() {
  'use strict';

  window.zoo = window.zoo || {};

  let Animal = window.zoo.Animal;


  window.zoo.Nudibranch = class Nudibranch extends Animal{
    /**
     * Creates template for Nudibranch objects and methods.
     * @param {String} name         for the animal's name
     * @param {Date}   dateOfBirth  for the animal's date of birth
     * @type {Object}
     */
    constructor(name, dateOfBirth = (new Date())) {
      if (!(name instanceof String)) {
        // throw new TypeError('"name" must be in quotes');
      }
      if (!(dateOfBirth instanceof Date)) {
        // throw new TypeError('Please enter a valid date of birth');
      }
      super(name, dateOfBirth);
      this.skill = name + ' can emit sounds that are audible to humans!';
      this.reproduction = name + ' lays thousands of eggs in an egg spiral!';
    }

    /**
     * Calculates the species-specific skill based on time and speed of crawling.
     * @param {Number}  hours         for the number of hours spent crawling
     * @param {Number}  feetPerHour   for the number of feet crawled per hour
     * @return {Object}
     */
    getSkill(hours, feetPerHour) {
      let distance = hours * feetPerHour;
      return this.name + ' crawled over ' + distance + ' feet of substrate today!';
    }

    /**
     * Returns the scientific name of the animal.
     * @return {String}
     */
    static species() {
      return 'Gastropodia Nudibranchia';
    }

    /**
     * Overrides the toString default to display the animal's name and date of birth.
     * @return {String}
     */
    toString() {
      let dob = this.dateOfBirth;
    return this.name + ' is a nudibranch born on ' + this.dateOfBirth + '!';
    }
    /**
     * Allows the Nudibranch to create one or more new Nudibranch objects
     * @param  {Array} eggs Array containing name & date of each new baby Nudibranchs
     * @return {void}
     */
    layEggs(eggs) { //should accept an array
      let newEggs = [];
      forEach(function layEggs(egg) {
        newEggs.push(new Nudibranch(egg));
        //this is wrong but this is what I'd like it to do.
      });
      }
    };



}());
