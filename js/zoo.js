(function() {
  'use strict';

  window.zoo = window.zoo || {};

  let Animal = window.zoo.Animal;
  let Nudibranch = window.zoo.Nudibranch;
  let Narwhal = window.zoo.Narwhal;

  let John = new Nudibranch ('John', new Date('10/9/80'));
  console.log(John.reproduction);
  console.log(John.toString());
  console.log(John.age());
  console.log(John.getSkill(8, 3));
  console.log(Nudibranch.species()); 

  let Paul = new Nudibranch ('Paul', new Date('6/18/85'));
  console.log(Paul.dateOfBirth);
  console.log(Paul.skill);
  console.log(Paul.toString());
  Paul.rename('The Walrus');
  console.log(Paul.name);

  //laying eggs isn't working but I'd like it to accept an array from this input.
  // console.log(Paul.layEggs([
  //   {name: 'Sadie', dateOfBirth: new Date()},
  //   {name: 'Eleanor', dateOfBirth: new Date()}
  // ]));

  let George = new Narwhal ('George', new Date('2/25/90'));
  console.log(George.name);
  console.log(George.toString());
  console.log(George.skill);
  console.log(George.reproduction);
  console.log(George.age());

  let Ringo = new Narwhal ('Ringo', new Date('7/7/90'));
  console.log(Ringo.getSkill(15, 3));
  console.log(Ringo.giveBirth('Billy Shears', new Date()));
  console.log(Narwhal.species());
}());
