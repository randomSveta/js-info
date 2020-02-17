/* // 1. https://javascript.info/while-for#last-loop-value

let i = 3;

while (i) {
  alert( i-- );
}

// 1, because when i is 0 , that means that i is false and loop stops */


/* 2. //https://javascript.info/while-for#which-values-does-the-while-loop-show
let i = 0;
while (++i < 5) alert(i);

let i = 0;
while (i++ < 5) alert(i);

//values are the same
// 0, 1, 2, 3, 4 */


// 3. https://javascript.info/while-for#output-even-numbers-in-the-loop
/* for (let i = 2; i < 11; i++) {
    if (i % 2 == 0) alert(i);
} */

/* // 4. https://javascript.info/while-for#replace-for-with-while
// for (let i = 0; i < 3; i++) {
//      alert(`number ${i}!`);
//}

//the same
let j = 0;
while (j < 3) {
    alert(`number ${j}!`);
    j++;
} */

/* // 5. https://javascript.info/while-for#repeat-until-the-input-is-correct

//let number = 1;
//while (number < 101 && number) {
//    number = prompt("Add a number greater than 100:");
//}
//or


let number;
do {
    number = prompt("Add a number greater than 100:");
}
while (number < 101 && number); */


/* // 6. https://javascript.info/while-for#output-prime-numbers

function findPrime(n) {
    let primeNumbers = [];
    for (let i = 2; i < n; i++) {
        let counter = 0;
        for (let j = 2; j < n; j++) {
            if (i % j == 0) {
                counter++;
            }
        }
        if (counter == 1) {
            primeNumbers.push(i);
        }
    }
    alert(primeNumbers);
    return primeNumbers;
}

//or

let n = 10;

findPrimeNumber:
for (let i = 2; i < n; i++) {
    for (let j = 2; j < i; j++) {
        if (i % j == 0) continue findPrimeNumber;
    }
    alert(i);
} */