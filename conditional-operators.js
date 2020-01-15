'use strict';

// https://javascript.info/ifelse#if-a-string-with-zero
/*
if ("0") {
    alert('Hello');
}
// Yes, it will, because sting with zero is string with value '0' -> true
*/


// https://javascript.info/ifelse#the-name-of-javascript
/*
let jsName = prompt('What is the \'official\' name of JavaScript?', '');

if (jsName === 'ECMAScript') {
    alert('Right!');
}
else {
    alert('You don\'t know? \'ECMAScript\'');
}
*/


// https://javascript.info/ifelse#show-the-sign
/*
let number = prompt('Write a number', '0');

if (number > 0) {
    alert(1);
}
else if (number < 0) {
    alert(-1);
}
else {
    alert(0);
}
*/


// https://javascript.info/ifelse#rewrite-if-into
// let result;
// if (a + b < 4) {
//   result = 'Below';
// } else {
//   result = 'Over';
// }

/*
let result = a + b < 4 ? 'Below' : 'Over';
*/


// https://javascript.info/ifelse#rewrite-if-else-into
// let message;
// if (login == 'Employee') {
//   message = 'Hello';
// } else if (login == 'Director') {
//   message = 'Greetings';
// } else if (login == '') {
//   message = 'No login';
// } else {
//   message = '';
// }
/*
let message = (login == 'Employee') ? 'Hello' :
    (login == 'Director') ? 'Greetings' :
        (login == '') ? 'No login' : '';
*/