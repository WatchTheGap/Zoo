(function() {
  'use strict';

  window.zoo = window.zoo || {};

  let Animal = window.zoo.Animal;

  /**
   * Creates template for all Narwhal objects and methods.
   * @type {Object}
   */
  window.zoo.Narwhal = class Narwhal extends Animal{
    constructor(name, dateOfBirth) {
      super(name, dateOfBirth);
      this.reproduction = name + ' gives birth to live babies';
      this.skill = this.name + ' has a long spiral tusk!';
    }
    /**
     * Calculates species-specific skill of how many ice holes per hour the animal creates.
     * @type {Number}
     */
    getSkill(iceHoles = 0, hours = 1) {
      let funTime = iceHoles/hours;
      return 'In his spare time, ' + this.name + ' pokes ' + funTime + ' holes in the ice per hour.';
    }

    /**
     * Creates a new Narwhal object.
     */
    giveBirth (name, dateOfBirth) {
      return new Narwhal(name, dateOfBirth);
    }
    /**
     * Returns the scientific name of the animal.
     */
    static species () {
      return 'Monodon Monoceros';
    }

    /**
     * Overrides the toString default to display the animal's name and date of birth.
     */
    toString() {
      return this.name + ' is a narwhal born on ' + this.dateOfBirth + '!';
    }
  };



}());
