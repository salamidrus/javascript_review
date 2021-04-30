// example
let str = "Tes" // str = new String()
str.toLowerCase()
str.toUpperCase()
str.substring()

let number = 1 // new Number()


// Pass By Value
// purely passing the data
// all data types

// Pass By Reference
// passing the reference not the data
// Object and Array


// Pass by Value example
function changeValue(val){
    val = "changed"
    return val
}

let sol = changeValue(str)
// console.log(sol, str)


// Pass by Reference example
let arr = [0,1,2,3,4,5]
let arr2 = arr

// proper duplicate the values only
let arr3 = [...arr] // spread operator
let obj = {
    name: "idrus",
    age: 12
}

let objCopy = {...obj}
delete objCopy.age

console.log(Object.keys(obj).some(el => el == "password"))

function changeRef(val) {
    val[0] = 100
    return val
}

let solution = changeRef(arr3)

// console.log(solution, arr, arr3)
// console.log(objCopy)