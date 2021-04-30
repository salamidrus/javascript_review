function init() {
  let name = "idrus";
  function showName() {
    console.log(name);
  }
  showName();
}

init();

function initRef() {
  return function (name) {
    console.log(name);
  };
}

let func = initRef("idrus");

// function factories
function greeting(time) {
  return function (name) {
    console.log(`Halo ${name}, Good ${time}`);
  };
}

let morning = greeting("morning");
let afternoon = greeting("afternoon");

morning("idrus");

let add = (function () {
  let counter = 0;
  return function () {
    return ++counter;
  };
})();

// counter = 10;
console.log(add());
// let count = add();
// console.log(count());
// console.log(count());

// without assigning to variables
// console.log(add());
