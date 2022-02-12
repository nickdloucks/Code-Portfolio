import { default as isPalindrome } from '../Palindrome-checker.js';

describe("The Palindrome checker", () => {
  it("correctly checks 'racecar' input", ()=>{
    expect(isPalindrome("racecar")).toEqual(true);
  });
  it("correctly checks 'bunny'", ()=>{
    expect(isPalindrome('bunny')).toEqual(false);
  })
});
