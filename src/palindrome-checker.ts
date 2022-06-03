/**
 * Check whether a string is the same backwards as forwards.
 * NOTE: ignores punctuation characters, and letter case.
 * @param str: string. The string to be tested
 * @returns boolean: <true> if input is a palindrome, <false> if it's not.
 */

export default function palindrome(str: string): boolean {
  let testStr = str.toLowerCase(); // copy input to avoid mutation, and convert to lowercase to make comparison easier
  let noPunc = /[^a-z0-9]/gi; //regex for non-word characters like punctuation or spaces (ignore case)

  // I don't think that string.toLowerCase() and the <i> flag on the regex are both necessary, (one or the other should suffice)
  // but I want to demonsrate in my portfolio that I know about both.

  let badChars = noPunc.test(testStr); // test the input for characters to ignore, like punctuation.
  if (badChars) {
    // if there are "bad" characters, replace them with an empty string, effectively deleting them from the <testStr>
    testStr = testStr.replace(noPunc, '');
  }

  let backwards: string = testStr.slice(); // copy <testStr> for comparison
  backwards = backwards.split('').reverse().join(''); // reverse the new copy
  // (the method chaining above converts the string to an array of chars, reverses the new array, and concatenates it back to string format)

  // if <backwards> is the same as <testStr>, the input is the same backwards as it is forwards, so it is a palindrome
  return (backwards == testStr) ? true : false;
}

palindrome('A man, a plan, a canal. Panama'); // test case
