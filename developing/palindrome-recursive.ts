// recursive version of palindrome checker
// this version does not yet account for differences in capitalization nor spaces between words
// future versions will be useable on sentances, not just single words, and will ignore letter case

export default function palindromeRecursive(str: string): boolean{
    if(!str.length || str.length === 1){
        return true; // if the input is an empty string or a single character, 
        // then it is the same backwards and forwards, so it's a palindrome
    }
    
    let nStr = str; // copy input to avoid mutation outside the scope of this function

    function compareEdges(word: string): boolean{
        // determines whether the first and last character match
        return(word.charAt(0) === word.charAt(word.length - 1)) ? true : false;
    }

    if(compareEdges(nStr)){
        // if first and last char match, move inward towards the middle of the string and recurse
        nStr = nStr.slice(1, nStr.length - 1);
        return palindromeRecursive(nStr);
    }
    //if the first and last characters do not match, it is not a palindrome
    return false;
}