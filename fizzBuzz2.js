// FizzBuzz JavaScript exercise take 2
let count = 1;
for (let i=0; i<100; i++){
  switch(count){
    case ((count % 3 === 0) && (count % 5 === 0)):
      console.log("FizzBuzz");
    case ((count % 3 === 0) && (!count % 5 === 0)):
      console.log("Fizz");
    case ((count % 5 === 0) && (!count % 3 === 0)):
      console.log("Buzz");
    default:
      console.log(count);
  }
  count++;
}
