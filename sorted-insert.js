function getIndexToIns(arr, num) {
  let number = parseFloat(num);
  let newArr = arr.sort(function(a,b){
    return a - b;
  });
  console.log(newArr);
  for (let i=0; i < newArr.length; i++){
    if (number <= newArr[i]){
      return 0;
    } else if ((number > arr[i]) && (number <= arr[i+1])){
      return i+1;
    }
  }
  return arr.length;
}

getIndexToIns([40, 60], 50);
