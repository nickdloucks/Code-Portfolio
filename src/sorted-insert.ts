/**
 * Finds the correct index to insert a number into an array of numbers.
 * @param arr: Array<number>
 * @param num: number
 * @returns index at which to insert : number
 */

function getIndexToIns(arr: Array<number>, num: number): number {
  //let number = parseFloat(num); // ensure number is a floating point decimal: this line only needed in plain Javascript, not Typescript
  let number: number = num;
  let newArr = arr.sort(function (a, b) {
    // ensures we are working with a sorted array and there is no mutation outside this function
    return a - b;
  });

  for (let i = 0; i < newArr.length; i++) {
    if (number <= newArr[i]) {
      // if the number to insert is less than the number at the current index, return 0
      return 0; // element is smaller than the rest, so it goes at the beginning
    } else if (number > arr[i] && number <= arr[i + 1]) {
      // otherwise return index at which there is a value greater and a value lower
      // this will be where the number is inserted
      return i + 1;
    }
  }
  return arr.length; // if this statement is reached, the element belongs at the end
}

getIndexToIns([40, 60], 50);
