import isPalindrome from 'palindrome-checker.js';

test('flips correctly with punctuation', () => {
  assert(isPalindrome('Racecar!') === true);
});
