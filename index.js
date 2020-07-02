'use strict';

const arr = [4, 2, 5, 19, 13, 0, 10];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += Math.pow(i, 3);
}
const result = Math.sqrt(sum);
