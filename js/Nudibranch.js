(function() {
  'use strict';

  window.zoo = window.zoo || {};

  let Animal = window.zoo.Animal;

/**
 * Creates template for Nudibranch objects and methods.
 * @type {Object}
 */
  window.zoo.Nudibranch = class Nudibranch extends Animal{
    constructor(name, dateOfBirth) {
      super(name, dateOfBirth);
      this.skill = name + ' can emit sounds that are audible to humans!';
      this.reproduction = name + ' lays thousands of eggs in an egg spiral!';
    }

    /**
     * Calculates the species-specific skill based on time and speed of crawling.
     * @return {Object}
     */
    getSkill(hours, feetPerHour) {
      let distance = hours * feetPerHour;
      return this.name + ' crawled over ' + distance + ' feet of substrate today!';
    }

    /**
     * Returns the scientific name of the animal.
     */
    static species() {
      return 'Gastropodia Nudibranchia';
    }

    /**
     * Overrides the toString default to display the animal's name and date of birth.
     */
    toString() {
      let dob = this.dateOfBirth;
    return this.name + ' is a nudibranch born on ' + this.dateOfBirth + '!';
    }

    layEggs(eggArray) { //should accept an array
      let newEggs = [] ;
      for (let i = 0; i<= eggArray.length; i++) {
        newEggs.push(new Nudibranch(eggArray));
      }
    }

  };


}());
