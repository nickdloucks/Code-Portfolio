/** FizzBuzz JavaScript challenge:
  * print all numbers from 1 to 100
  * if number is divisible by 3, print "fizz" instead of the number.
  * if number is divisible by 5, print "buzz" instead of the number.
  * if number is divisible by both 3 and 5, print "fizzbuzz" instead of the number.
  */

 let count = 1; // initialize counter
 for (let i=0; i<100; i++){ // loop through the number range
    if ((count % 3 === 0) && (count % 5 === 0)){
        console.log("FizzBuzz");
    } // number is divisible by both 3 and 5, print "fizzbuzz"
      
    else if ((count % 3 === 0) && (!count % 5 === 0)){
        console.log("Fizz");
    } // number is divisible by 3, print "fizz"
      
    else if ((count % 5 === 0) && (!count % 3 === 0)){
        console.log("Buzz");
    } // number is divisible by 5, print "buzz"
      
    else{
        console.log(count);
    } // reaching the default case means the number is divisible by neither 3 nor 5, so just print the number.
      
    count++;
 }
