function getIndexToIns(arr, num) {
  let number = parseFloat(num); // ensure number is a floating point decimal
  let newArr = arr.sort(function(a,b){ // save input array as a sorted array
    return a - b;
  });
  console.log(newArr);
  for (let i=0; i < newArr.length; i++){
    if (number <= newArr[i]){ // if the number to insert is less than the number at the current index, return 0
      return 0;
    } else if ((number > arr[i]) && (number <= arr[i+1])){ // otherwise return index at which there is a value greater and a value lower
      // this will be where the number is inserted
      return i+1;
    }
  }
  return arr.length;
}

getIndexToIns([40, 60], 50);
