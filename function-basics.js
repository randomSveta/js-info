/* //https://javascript.info/function-basics#is-else-required

function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      // ...
      return confirm('Did parents allow you?');
    }
  }

  function checkAge(age) {
    if (age > 18) {
      return true;
    }
    // ...
    return confirm('Did parents allow you?');
  }

  //they are doing the same  */

/* //https://javascript.info/function-basics#rewrite-the-function-using-or

function checkAge(age) {

    return age > 18 ? true : confirm('Did parents allow you?');

}
//or

function checkAge(age) {

    return age > 18 || confirm('Did parents allow you?');
} */

/* // https://javascript.info/function-basics#function-min-a-b

function min(a, b) {
    return a > b ? b : a;
} */


/* //https://javascript.info/function-basics#function-pow-x-n

let number = prompt('Please enter a number x from 1:', 1);
let power = prompt('Please enter a number n from 1:', 1);

function pow(x, n) {
    let i = n;
    let result = x;
    while (i > 1) {
        result *= x;
        i--;
    }
    return result;
}

function showResult(f) {
    alert(f);
}

if (Number.isInteger(number) && Number.isInteger(power)) {
    showResult(pow(number, power));
}
else {
    alert("Add different numbers. They should be integer and positive");
} */
