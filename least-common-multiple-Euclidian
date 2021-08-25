  /**
    *
    * input: array of two integers
    * output: single integer that is the lowest common multiple of all numbers in the range between the two input numbers
    */

function smallestCommons(arr) {
    let range = []; //range of numbers to be divisible by final output
    let max = 0; // biggest number in the range, initialized to 0
    if (arr[0]>arr[1]){
      range.push(arr[1]);
      max = arr[0];
    }else if(arr[1]>arr[0]){
      range.push(arr[0]);
      max = arr[1];
    }else{return arr[0]} // lines 10-16: arrange the input values low to high; or return first number if they are the same
    for(let i=range[0]+1; i<=max; i++){
      range.push(i);
    }// populate the <range> array; these numbers will be factored next
    
  function gcf(x,y){ // calculate the greatest common factor (GCF) for two given numbers
      if ((x===0) || (y===0)){ // if either number is 0, the GCF is the larger of the two
          return (x > y) ? x : y;
      }else{ // otherwise the GCF is found with the smaller number and the remainder of the bigger number divided by the smaller number.
            // once the smaller number is equal to 0, the recursion will stop at the <if> code block above
          return gcf(y, x % y);
      }
  }
  function lcm(x,y){ // calculate the c of two numbers
      return (x * y)/gcf(x,y); // multiply the two given numbers, 
                              // then divide by the greatest common factor of the same given numbers 
                              //to get their least common multiple
  }
  console.log(range.reduce(lcm));
  return range.reduce(lcm);
}
smallestCommons([23,18]);
