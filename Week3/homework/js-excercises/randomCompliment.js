"use strict";
function giveCompliment(name) {
  const compliments = [
    "cool",
    "great",
    "funny",
    "looking good",
    "awesome",
    "amazing",
    "hilarious",
    "something",
    "one of a kind",
    "the best",
  ];
  // Getting a random number between two inclusive integer values according to the following formula Math.floor(Math.random() * (max-min +1)) +min; (source:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random) , in our case min =0 , and max=9.
  // let i = Math.floor(Math.random()*10);  Instead of Choosing a random number hardcoded between 1-10, we can choose directly from the array

  const randomCompliment =
    compliments[Math.floor(Math.random() * compliments.length)];
  // return `You are ${compliments[i]}, ${name}!`;
  return `You are ${randomCompliment}, ${name}!`;
}
console.log(giveCompliment("Anis"));
console.log(giveCompliment("Anis"));
console.log(giveCompliment("Anis"));
