(function() {
  'use strict';

  window.zoo = window.zoo || {};

  let Animal = window.zoo.Animal;
  let Nudibranch = window.zoo.Nudibranch;
  let Narwhal = window.zoo.Narwhal;

  // try {
  //   let Testing = new Nudibranch('test');
  //     console.log(Testing);
  //   } catch(err) {
  //       console.warn('SAD', err);
  //   }

    try {
      let John = new Nudibranch ('John', new Date('10/9/80'), 'pink and orange');
      console.log(John.toString());
      console.log(John.age());
      console.log(John.getSkill(8, 3));
      console.log(John.getColor()); //broken
      console.log(Nudibranch.species());
    } catch(err) {
      if (err instanceof TypeError) {
      console.warn(err);
      }
    }
    try {
      let Paul = new Nudibranch ('Paul', new Date('6/18/85'), 'blue and green');
      console.log(Paul.dateOfBirth);
      console.log(Paul.toString());
      Paul.rename('The Walrus');
      console.log(Paul.name);
    } catch(err) {
      if (err instanceof TypeError) {
      console.warn(err);
      }
    }
  //laying eggs isn't working but I'd like it to accept an array from this input.
  // console.log(Paul.layEggs([
  //   {name: 'Sadie', dateOfBirth: new Date()},
  //   {name: 'Eleanor', dateOfBirth: new Date()}
  // ]));
    try {
    let George = new Narwhal ('George', new Date('2/25/90'), 10);
    console.log(George.name);
    console.log(George.toString());
    console.log(George.age());
  } catch(err) {
    if (err instanceof TypeError) {
    console.warn(err);
    }
  }
  try {
    let Ringo = new Narwhal ('Ringo', new Date('7/7/90'), 6);
    console.log(Ringo.getSkill(15, 3));
    console.log(Ringo.giveBirth('Billy Shears', new Date(), 2));
    console.log(Narwhal.species());
  } catch(err) {
    if (err instanceof TypeError) {
    console.warn(err);
    }
  }
}());
