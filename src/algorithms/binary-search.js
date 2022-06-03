/* Returns either the index of the location in the array,
  or -1 if the array did not contain the targetValue */

const binarySearch = function(array, targetValue) {
	let min = 0;
	let max = array.length - 1;
    let guess;
    while(max >= min){
        guess = Math.floor((max + min) / 2);
        if(array[guess] < targetValue){
            min = guess + 1;
        }else if(array[guess] > targetValue){
            max = guess - 1;
        }else{
            return guess;
        }
    }
    return -1;
};

let primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 
		41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

let result = binarySearch(primes, 73);
console.log("Found prime at index " + result);


Program.assertEqual(binarySearch(primes, 73), 20);
Program.assertEqual(binarySearch(primes, 71), 19);
Program.assertEqual(binarySearch(primes, 7), 3);