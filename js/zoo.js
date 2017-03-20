(function() {
  'use strict';

  window.zoo = window.zoo || {};

  let Animal = window.zoo.Animal;
  let Nudibranch = window.zoo.Nudibranch;
  let Narwhal = window.zoo.Narwhal;

  let John = new Nudibranch ('John', new Date('10/9/16'));
  console.log('testing');
  console.log(John.reproduction);
  console.log(John.toString());
  console.log(John.age());

  let Paul = new Nudibranch ('Paul', new Date('6/18/16'));
  console.log(Paul.dateOfBirth);
  console.log(Paul.skill);
  console.log(Paul.toString());

  let George = new Narwhal ('George', new Date('2/25/16'));
  console.log(George.name);
  console.log(George.toString()); //halp
  console.log(George.skill);
  console.log(George.reproduction);
  console.log(George.age()); //halp

  let Ringo = new Narwhal ('Ringo', new Date('7/7/16'));
}());
