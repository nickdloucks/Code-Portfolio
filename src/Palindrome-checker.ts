/**
 * check whether a string is the same backwards as forwards
 * NOTE: ignores punctuation characters, and letter case.
 * input: a string
 * returns boolean: true if input is a palindrome, false if it's not.
 */

export default function palindrome(str: string) {
  let testStr = str.toLowerCase(); // copy input to avoid mutation, and convert to lowercase to make comparison easier
  let noPunc = /[^a-z0-9]/gi; //regex for non-word characters like punctuation or spaces
  let badChars = noPunc.test(testStr); // test the input for characters to ignore, like punctuation.
  if (badChars) {
    // if there are "bad" characters, replace them with an empty string, effectively deleting them from the <testStr>
    testStr = testStr.replace(noPunc, '');
    console.log(testStr + ' _punctuation removed');
  }

  let backwards = testStr.slice(); // copy <testStr> for comparison
  backwards = backwards.split('').reverse().join(''); // reverse the new copy
  // (the method chaining above converts the string to an array of chars, reverses the new array, and concatenates it back to string format)
  if (backwards == testStr) {
    // if <backwards> is the same as <testStr>, the input is the same backwards as it is forwards, so it is a palindrome
    console.log('palindrome');
    return true;
  } else {
    console.log('NOT a palindrome');
    return false;
  }
}

palindrome('A man, a plan, a canal. Panama'); // test case
