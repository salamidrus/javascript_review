function init() {
  let name = "Darwin";
  function showName() {
    console.log(name);
  }
  showName();
}

// init();

function initRef() {
  return function (name) {
    console.log(name);
  };
}

let initExec = initRef();
// initExec("Karina");

// function factories
function greeting(time) {
  return function (name) {
    console.log(`Halo ${name}, Good ${time}`);
  };
}

let morningGreeting = greeting("morning");
let afternoonGreeting = greeting("afternoon");
// morningGreeting("Darwin");
// morningGreeting("Karina");
// afternoonGreeting("Darwin");

// immediate executed function
let add = (function () {
  let counter = 0;
  return function () {
    return ++counter;
  };
})();

counter = 100;

// console.log(add());
// console.log(add());
// console.log(add());

// let count = add();
// console.log(count());
// console.log(count());
// console.log(count());
// console.log(count());

function factorial(n) {
  // code base
  if (n == 1) return 1;
  return n + factorial(n - 1);
}

let sol = factorial(5);
console.log(sol);
