import { default as isPalindrome } from '../algorithms/dynamic-programming/palindrome-recursive.mjs';

describe("The Palindrome checker", () => {
  it("considers empty strings and single character strings to be palindromes", ()=>{
    expect(isPalindrome('')).toEqual(true);
    expect(isPalindrome('a')).toEqual(true);
  });
  it("correctly checks single-word inputs.", ()=>{
    expect(isPalindrome("racecar")).toEqual(true);
    expect(isPalindrome('bunny')).toEqual(false);
  });
  it("ignores capital letters, spaces, and puctuation characters", ()=>{
    expect(isPalindrome("Don't nod.")).toEqual(true);
  });
  it("correctly checks sentence/multi-word inputs", ()=>{
    expect(isPalindrome('A man, a plan, a canal, Panama.')).toEqual(true);
    expect(isPalindrome('Nick Loucks')).toEqual(false);
  })
});
