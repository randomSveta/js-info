'use strict';

/* //https://javascript.info/logical-operators#what-s-the-result-of-or
alert(null || 2 || undefined); //2 */

/* //https://javascript.info/logical-operators#what-s-the-result-of-or-ed-alerts
alert(alert(1) || 2 || alert(3));//1 */

/* //https://javascript.info/logical-operators#what-is-the-result-of-and
alert(1 && null && 2); //null */

/* //https://javascript.info/logical-operators#what-is-the-result-of-and-ed-alerts
alert(alert(1) && alert(2)); // undefined && 2 -> so alert(1) is falthy, answer 1 */

/* //https://javascript.info/logical-operators#the-result-of-or-and-or
alert(null || 2 && 3 || 4); // null || 3 || 4 -> 3 */

/* //https://javascript.info/logical-operators#check-the-range-between
const age = 50;
if (age >= 40 && age <= 90) {
    alert("It's true!");
}
else {
    alert("It's false!");
} */

/* //https://javascript.info/logical-operators#a-question-about-if
if (-1 || 0) alert('first'); //true
if (-1 && 0) alert('second'); //false
if (null || -1 && 1) alert('third'); //true */

/* //https://javascript.info/logical-operators#check-the-login
let user = prompt("Who is there?");

if (user !== null && user !== '') {
    if (user === "Admin") {
        const password = prompt("Password?");
        if (password !== null && password !== '') {
            if (password == "TheMaster") {
                alert("Welcome!");
            }
            else {
                alert("Wrong password");
            }
        }
        else {
            alert("Canceled");
        }
    }
    else {
        alert("I don't know you!");
    }
}
else {
    alert("Canceled");
}
 */