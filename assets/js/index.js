let test = 1234;

// console.log(`log: ${test}`);

// function log() {
//   console.log(`log: ${test}`);
// }

function wrapper() {
  let test = 43211;
  // console.log(`wrapper: ${test}`);

  function log() {
    console.log(test);
  }

  log();
}

function makeCounter() {
  let i = 0; // переменная в замыкании

  function increment() {
    debugger;
    i++;
    return i;
  }

  function decrement() {
    debugger;
    i--;
    return i;
  }

  function getCounter() {
    return i;
  }

  return {
    increment: increment,
    decrement: decrement,
    getCounter: getCounter,
  };
}

const obj = makeCounter();
