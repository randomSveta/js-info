/*//https://javascript.info/object-methods#syntax-check

let user = {
    name: "John",
    go: function () { alert(this.name) }
} //;

    (user.go)()

  //the result is an "error" because of the missing semicolon */


/* //https://javascript.info/object-methods#explain-the-value-of-this

let obj, method;

obj = {
    go: function () { alert(this); }
};

obj.go();               // (1) [object Object] - this is "obj" object itself

(obj.go)();             // (2) [object Object] - this is "obj" object itself

(method = obj.go)();    // (3) undefined - because of assignment to method at the left we have an expression, "this" lost its object.

(obj.go || obj.stop)(); // (4) undefined - because of || at the left we have an expression, "this" lost its object

//Any operation on it except a method call (like assignment = or ||) turns it into an ordinary value, which does not carry the information allowing to set this. */

/* //https://javascript.info/object-methods#using-this-in-object-literal
function makeUser() {
    return {
        name: "John",
        ref: this
    };
};

let user = makeUser();

alert(user.ref.name); // What's the result? "error" */

/* //https://javascript.info/object-methods#create-a-calculator
let calculator = {
    read() {
        const value1 = prompt("Enter the first value:", 0);
        const value2 = prompt("Enter the second value:", 0);
        this.value1 = +value1;
        this.value2 = +value2;
    },
    sum() { return this.value1 + this.value2 },
    mul() { return this.value1 * this.value2 }
}
calculator.read();
alert(calculator.sum());
alert(calculator.mul()); */


/* //https://javascript.info/object-methods#chaining

let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep: function () { // shows the current step
        alert(this.step);
        return this;
    }
};

ladder.up().up().down().showStep(); // 1
 */

