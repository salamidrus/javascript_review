let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for loop
for (let el of arr) {
  //   console.log(el);
}

// arr.forEach((el, index) => console.log(el, index));

// filter
for (let el of arr) {
  //   if (el > 5) console.log(el * 10);
}

let arrFiltered = arr.filter((el) => el > 5);
// console.log(arrFiltered);

// map
for (let el of arr) {
  //   console.log(el * 5);
}

let arrMapped = arr.map((el) => el * 5);
// console.log(arrMapped);

// chaining
let arrChain = arr.filter((el) => el > 5).map((el) => el * 10);
// console.log(arrChain);

let arr2 = [
  {
    name: "Idrus",
    class: "Backend",
  },
  {
    name: "Darwin",
    class: "Backend",
  },
  {
    name: "Karina",
    class: "Frontend",
  },
  {
    name: "Amril",
    class: "Backend",
  },
  {
    name: "Abi",
    class: "Mobile",
  },
];

let backendStudents = arr2
  .filter(
    //   (el) => el.class == "Backend" || el.class == "Frontend"
    //   (el) => ["Backend", "Frontend", "Mobile"].includes(el.class)
    (el) => ["Backend", "Frontend", "Mobile"].includes(el.class)
  )
  .map((el) => {
    return { name: el.name, location: "Jakarta" };
  });
console.log(backendStudents);

let obj = {
  nama: "Idrus",
  age: 13,
};

let { nama, age } = obj;
console.log(nama);

// let _ = require("lodash");
