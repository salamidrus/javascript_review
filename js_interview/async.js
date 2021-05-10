// callback
// function translateLetter(letter, callback) {
//   return setTimeout(() => {
//     callback(letter.split("").reverse().join(""));
//   }, 2000);
// }
// function assembleToy(instruction, callback) {
//   return setTimeout(() => {
//     const toy = instruction.split("").reverse().join("");
//     if (toy.includes("wooden")) {
//       return callback(`polished ${toy}`);
//     } else if (toy.includes("stuffed")) {
//       return callback(`colorful ${toy}`);
//     } else if (toy.includes("robotic")) {
//       return callback(`flying ${toy}`);
//     }
//     callback(toy);
//   }, 3000);
// }
// function wrapPresent(toy, callback) {
//   return setTimeout(() => {
//     callback(`wrapped ${toy}`);
//   }, 1000);
// }

// translateLetter("wooden truck", (instruction) => {
//   assembleToy(instruction, (toy) => {
//     wrapPresent(toy, console.log);
//   });
// });

// promise
function translateLetter(letter) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(letter.split("").reverse().join(""));
    }, 2000);
  });
}
function assembleToy(instruction) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const toy = instruction.split("").reverse().join("");
      if (toy.includes("wooden")) {
        return resolve(`polished ${toy}`);
      } else if (toy.includes("stuffed")) {
        return resolve(`colorful ${toy}`);
      } else if (toy.includes("robotic")) {
        return resolve(`flying ${toy}`);
      }
      resolve(toy);
    }, 3000);
  });
}
function wrapPresent(toy) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`wrapped ${toy}`);
    }, 1000);
  });
}

// translateLetter("wooden truck")
//   .then((instruction) => {
//     return assembleToy(instruction);
//   })
//   .then((toy) => {
//     return wrapPresent(toy);
//   })
//   .then(console.log);

(async function main() {
  const instruction = await translateLetter("wooden truck");
  const toy = await assembleToy(instruction);
  const present = await wrapPresent(toy, instruction);
  console.log(present);
})();
