/**
 * Checks if a given string is the same when read backwards and forwards.
 * @param str : string => The string to check.
 * @returns : boolean 
 */

const isPalindrome = function(str: string): boolean{
    // Returns the first character of the string str
    const firstCharacter = function(str: string): string{
        return str.slice(0, 1);
    };

    // Returns the last character of a string str
    const lastCharacter = function(str: string): string{
        return str.slice(-1);
    };

    // Returns the string that results from removing the first
    //  and last characters from str
    const middleCharacters = function(str: string): string{
        return str.slice(1, -1);
    };

    //-------------------------------------------------------

    // base case #1
    if(str.length === 0 || str.length === 1){
        return true; // Both "" and "a" are palindromes since they are read the same backwards and forwards.
    }
    // base case #2
    if(firstCharacter(str) !== lastCharacter(str)){
        return false; // If the first and last characters don't match, it's not a palindrome, stop the recursion.
    }
    // recursive case
    return isPalindrome(middleCharacters(str)); 
    // Check if the next two characters (in progression towards the middle of the string) match.
};

export default isPalindrome;

// TEST CASES:
// var checkPalindrome = function(str) {
//     console.log("Is this word a palindrome? " + str);
//     console.log(isPalindrome(str));
// };

// checkPalindrome("a");
// Program.assertEqual(isPalindrome("a"), true);
// checkPalindrome("motor");
// Program.assertEqual(isPalindrome("motor"), false);
// checkPalindrome("rotor");
// Program.assertEqual(isPalindrome("rotor"), true);
// checkPalindrome("bunny");
// Program.assertEqual(isPalindrome("bunny"), false);
// checkPalindrome("");
// Program.assertEqual(isPalindrome(""), true);
// checkPalindrome("racecar");
// Program.assertEqual(isPalindrome("racecar"), true);
