const arrayMutate = require('./utilities/arrayMutate.js');
const arrayAnalyze = require('./utilities/arrayAnalyze.js');

let arrA = [1, 2, 3, 4, 5, 6, 7];
let arrB = [8, 9, 10];

let arrC = arrayMutate.concat(arrA, arrB);
process.stdout.write(arrC, '\n');

async function analyzeNo3 (arr, func){
    await arrayMutate.cut3(arr);
    return func(arr);
}
analyzeNo3(arrA, arrayAnalyze.sum).then(console.log);

process.on('beforeExit', () => {
    console.log(arrayAnalyze.lgNum(arrB));
});