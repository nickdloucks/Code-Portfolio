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

/* NOTE: the second parameter to <Array.from()> is a "mapFn" callback which takes 2 parameters:
 -value
 -index
 
 see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
 
 I'm ignoring the <value> param of this callback function with an "_" because I don't need it, I just use the index. 
 When the <nums> Array is constructed, it is initialized with a length of 100, but the elements do not yet have a value.
 I set the value of each element based on the index, or based on whether <num> is divisible by 3 and/or 5. */
