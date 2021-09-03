/**
  * This function calculates the sum of all odd fibonacci numbers up to a given maximum.
  * input: integer
  * output: sum of odd fibonacci sequence numbers below the input
  */

function sumFibs(num) { // in Fibonacci sequence, the next number is calculated by adding together the two previous numbers.
  let fibs = [1, 1]; // store first pair of Fibonacci numbers, starting with [1, 1]. 
                     // (number <0> is omitted to reduce number of operations)
  const nextFib = function(){ // calculate the next number in the sequence
    return fibs[0] + fibs[1];
  }

  while (nextFib() <= num){ // while the next number in the Fibonacci sequence is less than the input, 
                            // continue to calculate the next number in the sequence and store in an array
    fibs.unshift(nextFib()); // add new number to the *beginning* of the array so that the input for <nextFib> function is correct
  }

  let oddFibs = fibs.filter(function(num){
    return ((num % 2) != 0); // remove even numbers from <fibs> array
  });

  let sum = oddFibs.reduce((a,b) => a+b); // add together the values in <fibs> array, (which should only be odd numbers now) and return
  return sum;
}

sumFibs(75025); // test case
