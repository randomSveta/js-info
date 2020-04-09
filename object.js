/* //https://javascript.info/object#hello-object

user = {};

user.name = "John";
user.surname = "Smith";

user.name = "Pete"
delete user.name; */



/* //https://javascript.info/object#check-for-emptiness

function isEmpty(obj) {
    return Object.keys(obj).length == 0 ? true : false
}

function isEmpty1(obj) {
    for (let key in obj) {
        // if the loop has started, there is a property
        return false;
    }
    return true;
}

let schedule = {};

alert(isEmpty(schedule)); // true

schedule["8:30"] = "get up";

alert(isEmpty(schedule)); // false */



/* //https://javascript.info/object#constant-objects

const user = {
    name: "John"
};

// does it work?
user.name = "Pete";

  //yes, because object is the same, we are changing only object property */



/* //https://javascript.info/object#sum-object-properties

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};

//first solution
sum = Object.values(salaries).length > 0
  ? Object.values(salaries).reduce((a, b) => a + b)
  : 0

//second solution
// sum = 0;
// for (let key in salaries) {
//     sum += salaries[key]
// }
// console.log(sum); */



/* //https://javascript.info/object#multiply-numeric-properties-by-2

function multiplyNumeric(obj) {

    for (let key in obj) {
        if (typeof obj[key] === "number") {
            obj[key] *= 2;
        }
    }
}

// before the call
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

multiplyNumeric(menu); */