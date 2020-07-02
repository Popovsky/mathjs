'use strict';

const a = Number(prompt('Enter the number'));
const b = Number(prompt('Enter the number'));

if (a % b) {
    console.log(`Делится с остатком: ${a} % ${b} = ${a % b}`);
} else console.log(`Делится: ${a} / ${b} = ${a / b}`);
