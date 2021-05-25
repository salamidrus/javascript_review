function createObj(name, age) {
  this.age = age;
  this.name = name;
  return this;
}

let obj = createObj("idrus", 10);
// console.log(obj);

class Person {
  #password;
  #securityKey;

  constructor(name = "Anonym", age, password) {
    this.name = name;
    this.id = name + age;
    this.age = age;
    this.#securityKey = "secretKey";
    this.#password = password;
    this.forgetPassword = function (securityKey) {
      if (securityKey == "secretKey") return this.#password;

      return "Invalid Security Key";
    };

    this.greet = function () {
      return `Hi ${this.name}`;
    };
  }
}

let personObj = {
  name: "darwin",
  age: 10,
};

let person = new Person("karina", 25);
// console.log(person.name);

let numb = 10;

// Inheritance
class Programmer extends Person {
  constructor(name, age, password, codingSkills) {
    super(name, age, password);
    this.codingSkills = codingSkills;
  }
}

let prog = new Programmer("risa", 10, "risa123", "javascript");
console.log(prog);
console.log(prog.forgetPassword());

// Abstraction
// class Person {
//   #password;
//   #securityKey;
//   constructor(name, age, password) {
//     this.name = name;
//     this.age = age;
//     this.#securityKey = "secretKey";
//     this.#password = password;
//     this.forgetPassword = function (securityKey) {
//       if (securityKey == "secretKey") return this.#password;

//       return "Invalid Security Key";
//     };
//   }
// }

// Polymorphism
class Police extends Person {
  constructor(name, age, password, certificate) {
    super(name, age, password);
    this.certificate = certificate;
  }
}

let police = new Police("karina", 10, "abi123", "expert");
police.name = "karinaaa";
console.log(police);
console.log(police.name);

// Encapsulation
