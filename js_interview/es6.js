// const let
let str = "tes str";
console.log(str);
// const strC;
// console.log(strC);

// template literal
let temp = `Hello ${str.toUpperCase()}`;

// function
// dec();
function dec() {
  console.log("Decc");
} // function declaration, Support Hoisting

let exp = function () {
  console.log("Expp");
}; // function expression
// exp();

function obj(name) {
  this.name = name;
  return this;
}

let objNew = obj("idrus");
// console.log(objNew);

// arrow function
let arrow = (a) => console.log("arrow");
arrow();

// ternary operator
// condition ? true : false
let cond = {
  address: {
    city: "palembang",
  },
};
cond.address && cond.address.city == "jakarta"
  ? console.log(true)
  : console.log(false);

// console.log(cond?.address?.city);

// spread and rest operator
let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let arr2 = [...arr];
let objInit = {
  name: "darwin",
  age: 20,
  city: "Jakarta",
};
let objCopy = { ...objInit };

function tesFunc(...rest) {
  console.log(rest);
  let [name, city] = rest;
  console.log(name, city);
}

tesFunc("Darwin", "Palembang", 3, 4, 5, 6, 7, 8, 9, 10, 11);

// Object Method (assign, values, keys, create)
// Array and Object Destructuring
