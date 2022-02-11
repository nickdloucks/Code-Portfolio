import isPalindrome from '../src/Palindrome-checker';

describe("The Palindrome checker", () => {
  it("is no null", ()=>{
    expect(isPalindrome()).not.toBe(null);
  });
});
