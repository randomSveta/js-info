/* //https://javascript.info/number#sum-numbers-from-the-visitor

const num1 = +prompt("Enter the first number: ");
const num2 = +prompt("Enter the second number: ");

alert(num1 + num2) */

/* //https://javascript.info/number#why-6-35-tofixed-1-6-3

alert(1.35.toFixed(1)); // 1.4
alert(6.35.toFixed(1)); // 6.3 because of rounding
alert(Math.round(6.35 * 10) / 10); // 6.4 */


//https://javascript.info/number#repeat-until-the-input-is-a-number
/* //My solution:
function readNumber() {
    let input;
    while (isNaN(+input)) {
        input = prompt("Enter number: ", 0);
    }
    return input === "" || input === null ? null : +input;
}

alert(readNumber()); */

/* //Solution from tutorial:
function readNumber() {
    let num;

    do {
      num = prompt("Enter a number please?", 0);
    } while ( !isFinite(num) );

    if (num === null || num === '') return null;

    return +num;
  }

  alert(`Read: ${readNumber()}`); */


/* //https://javascript.info/number#an-occasional-infinite-loop
let i = 0;
//while (i != 10) {
while (i < 11) {
    i += 0.2;
}
//because of the JS rounding and small decimal numbers, i is never 10
 */

/* //https://javascript.info/number#a-random-number-from-min-to-max
function random(min, max) {
    const number = min + Math.random() * (max - min);
    return number;
}
alert(random(1, 5)); */

/* //https://javascript.info/number#a-random-integer-from-min-to-max
function randomInteger(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return min + Math.floor(Math.random() * (max - min + 1));
}
alert(randomInteger(1, 5)); */