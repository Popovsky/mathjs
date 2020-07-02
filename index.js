'use strict';

const num = Number(prompt('Enter the number'));
let factorial = 1;

for (let i = 2; i <= num; i++) {
    factorial *= i;
}
