(function() {
  'use strict';

  window.zoo = window.zoo || {};

  let Animal = window.zoo.Animal;
  let Nudibranch = window.zoo.Nudibranch;
  let Narwhal = window.zoo.Narwhal;

  let John = new Nudibranch ('John', new Date('10/9/80'));
  console.log('testing');
  console.log(John.reproduction);
  console.log(John.toString());
  console.log(John.age());
  console.log(John.getSkill(8, 3));

  let Paul = new Nudibranch ('Paul', new Date('6/18/85'));
  console.log(Paul.dateOfBirth);
  console.log(Paul.skill);
  console.log(Paul.toString());
  console.log(Paul.layEggs([
    {name: 'Sadie', dateOfBirth: new Date()},
    {name: 'Eleanor', dateOfBirth: new Date()}
  ]));
  
  let George = new Narwhal ('George', new Date('2/25/90'));
  console.log(George.name);
  console.log(George.toString()); //halp
  console.log(George.skill);
  console.log(George.reproduction);
  console.log(George.age()); //halp

  let Ringo = new Narwhal ('Ringo', new Date('7/7/90'));
  console.log(George.getSkill(15, 3));
  console.log(George.giveBirth('Billy Shears', new Date()));
}());
