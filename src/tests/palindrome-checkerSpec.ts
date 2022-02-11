import isPalindrome from '../Palindrome-checker';

describe("The Palindrome checker", () => {
  it("correctly checks 'racecar' input", ()=>{
    expect(isPalindrome("racecar")).toEqual(true);
  });
  it("correctly checks 'bunny'", ()=>{
    expect(isPalindrome('bunny')).toEqual(false);
  })
});
