/** FizzBuzz JavaScript challenge:
  * print all numbers from 1 to 100
  * if number is divisible by 3, print "fizz" instead of the number.
  * if number is divisible by 5, print "buzz" instead of the number.
  * if number is divisible by both 3 and 5, print "fizzbuzz" instead of the number.
  */

let nums = Array.from({length:100}, function(_, index){ // initialize array of length 100, callback populates values
    let num = index + 1; // start Array at 1 instead of 0
    let fbStr = '';

    if((num % 3) === 0){
        fbStr = 'fizz'; // if <num> is divisible by 3, return 'fizz'
    }
    if((num % 5) === 0){
        fbStr = fbStr.concat('buzz'); // if <num> is divisible by 5, return 'buzz'
    }

    // if <num> is divisible by 3 AND 5, <fbStr> will be 'fizzbuzz'

    return (fbStr.length) ? fbStr : num; // if fbStr is still empty, return <num>
});

nums.forEach((val) => console.log(val));
