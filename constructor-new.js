/* //https://javascript.info/constructor-new#two-functions--one-object
//Is it possible to create functions A and B such as new A()==new B()?
const object = { name: "Sveta" }

function A() {
    return object;
}
function B() {
    return object;
}

let a = new A;
let b = new B;

alert(a == b); // true */


/* //https://javascript.info/constructor-new#create-new-calculator

function Calculator() {
    this.read = function () {
        this.value1 = +prompt("The first value:", 0);
        this.value2 = +prompt("The second value:", 0);
    }
    this.sum = function () {
        return this.value1 + this.value2;
    }
    this.mul = function () {
        return this.value1 * this.value2;
    }
}

let calculator = new Calculator();
calculator.read();

alert("Sum=" + calculator.sum());
alert("Mul=" + calculator.mul()); */

/* //https://javascript.info/constructor-new#create-new-accumulator
function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function () {
        const newValue = +prompt("Enter a new value", 0);
        this.value += newValue;
    }

}

let accumulator = new Accumulator(1); // initial value 1

accumulator.read(); // adds the user-entered value
accumulator.read(); // adds the user-entered value

alert(accumulator.value); // shows the sum of these values */