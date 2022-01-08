/**
 * This file is my solution to the Udacity modules execise in the Full-Stack Javascript Developer Nanodegree.
 * Prompt: You will see two files already created for you. Your index.js file and a file called sample.js. 
 * The sample.js file contains four javascript functions to work with arrays.
 * Create a utilities folder with two separate files and distribute the functions through these 2 files.
 * Import the functions into the main index and use two different methods for calling those functions.
 * Then call the functions using arrays of your choice and log the result to the console.
 * Make sure to run your index.js file to make certain that all of your modules work.
 */


const {concat, cut3} = require('./utilities/arrayMutate.js');
const {sum, lgNum} = require('./utilities/arrayAnalyze.js');

let arrA = [1, 2, 3, 4, 5, 6, 7];
let arrB = [8, 9, 10];

let arrC = concat(arrA, arrB);
let strArrC = arrC.toString();
console.log(strArrC + ' = concatenated array');

async function analyzeNo3 (arr, func){
    await cut3(arr);
    return func(arr);
}
analyzeNo3(arrA, sum).then(console.log);
console.log('was "await" first?');

process.on('beforeExit', () => {
    console.log(lgNum(arrB));
});