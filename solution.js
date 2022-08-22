//closure

// when a function is written inside a funcion this inner function is called closure.

//2.
//a. unknown name function is the closure function here. since the nknown name function is written within personalDice function code block.

//b.

function personalDice(name) {
  return function () {
    // generate random number between 1 and 6
    const newRoll = Math.floor(Math.random() * 6) + 1;
    console.log(`${name} rolled a ${newRoll}`);
  };
}

const dansRoll = personalDice("Dan");

const zoesRoll = personalDice("Zoe");
dansRoll(); //returns one random number values

dansRoll();
dansRoll(); //returns two random number as value //dan rolled a 3 -dan rolled a 6

//c. newroll is having lexical scope from its the function itself, alsp from personalDice function and also all global scope variables.hence it has access to name variable also.

//3. using a closure;

function createBase(x) {
  return function (y) {
    console.log(x, y, x + y);
  };
}

const addSix = createBase(6);
addSix(10); // returns 16
addSix(21); // returns 27
