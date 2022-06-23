// recursive version of palindrome checker
// this version does not yet account for differences in capitalization nor spaces between words
// future versions will be useable on sentances, not just single words, and will ignore letter case

export default function palindromeRecursive(str: string): boolean{
    if(!str.length || str.length === 1){
        return true; // if the input is an empty string or a single character, 
        // then it is the same backwards and forwards, so it's a palindrome
    }

    function initialValidation(input: string): string{
        let validStr = input.toLowerCase(); // copy input to avoid mutation outside the scope of this function
        // store as lower-case string in order to disregard letter case

        let noPunc = /[^a-z0-9]/gi; //regex for non-word characters like punctuation or spaces (ignore case)
        let badChars = noPunc.test(validStr); // test the input for characters to ignore, like punctuation.

        // if there are "bad" characters, replace them with an empty string, effectively deleting them from the <validStr>
        return (badChars) ? validStr.replace(noPunc, '') : validStr;
    }

    let nStr = initialValidation(str); // validate the copy once so the recursion doesn't repeadedly re-validate

    function recurse(input: string){
        if(!input.length || input.length === 1){
            return true; // base case: same as above ^ (needed for when the middle of the input is reached)
        }

        function compareEdges(word: string): boolean{
            // determines whether the first and last character match
            return(word.charAt(0) === word.charAt(word.length - 1)) ? true : false;
        }

        if(compareEdges(input)){
            // if first and last char match, move inward towards the middle of the string and recurse
            input = input.slice(1, input.length - 1);
            return recurse(input);
        } else{
            //if the first and last characters do not match, it is not a palindrome
            return false;
        }
    }

    return recurse(nStr);
}