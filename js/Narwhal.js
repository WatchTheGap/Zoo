(function() {
  'use strict';

  window.zoo = window.zoo || {};

  let Animal = window.zoo.Animal;


  window.zoo.Narwhal = class Narwhal extends Animal{
    /**
     * Creates blueprint for new Narwhal objects
     * @param  {String}   name          for the animal's name
     * @param  {Date}     dateOfBirth   for the animal's date of birth
     * @return {void}
     */
    constructor(name, dateOfBirth) {
      super(name, dateOfBirth);
      this.reproduction = name + ' gives birth to live babies';
      this.skill = this.name + ' has a long spiral tusk!';
    }
    /**
     * Calculates hourly rate at which holes are poked in ice
     * @param  {Number} [iceHoles=0] total number of holes in ice
     * @param  {Number} [hours=1]    total number of hours spent poking holes
     * @return {String}              string stating animal's name and ice hole poking speed.
     */
    getSkill(iceHoles = 0, hours = 1) {
      let funTime = iceHoles/hours;
      return 'In his spare time, ' + this.name + ' pokes ' + funTime + ' holes in the ice per hour.';
    }


    /**
     * Creates a new Narwhal object
     * @param  {String} name        name of new baby Narwhal
     * @param  {Date} dateOfBirth   date of birth set to NOW, time of birth.
     * @return {Object}              new Narwhal object
     */
    giveBirth (name, dateOfBirth) {
      return new Narwhal(name, dateOfBirth);
    }

    /**
     * Returns the scientific classification of the Narwhal
     * @return {String} Scientific name of the Narwhal
     */
    static species () {
      return 'Monodon Monoceros';
    }

    /**
     * Overrides the toString default to display the animal's name and date of birth.
     * @return {String} 
     */
    toString() {
      return this.name + ' is a narwhal born on ' + this.dateOfBirth + '!';
    }
  };



}());
