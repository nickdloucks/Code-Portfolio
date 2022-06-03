/**
 * Binary Search implementation: Returns the index of the target value in the array,
 * or -1 if the targetValue is not present.
 * @param array : Array<number> => Sorted (ascending), numeric data to search through.
 * @param targetValue : number => Target value.
 * @returns : number => Index of target value, or -1 if target value not found.
 */


const binarySearch = function(array: number[], targetValue: number): number {
	let min: number = 0; // min and max will define the ever-narrowing search range over the input
	let max: number = array.length - 1;
    let guess: number; // An index: compare the value at this location to the targetValue
    while(max >= min){
        guess = Math.floor((max + min) / 2); // always guess the middle of the current search range
        if(array[guess] < targetValue){
            min = guess + 1; // narrow the search range if guess did not match the target
        }else if(array[guess] > targetValue){
            max = guess - 1;
        }else{
            return guess; // if this block is reached, the targetValue has been found
        }
    }
    return -1; // targetValue not found
};

export default binarySearch;