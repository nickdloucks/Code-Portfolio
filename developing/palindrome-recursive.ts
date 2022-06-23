// recursive version of palindrome checker
export default function palindromeRecursive(str: string): boolean{
    if(!str.length || str.length === 1){
        return true; // if the input is an empty string or a single character, 
        // then it is the same backwards and forwards, so it's a palindrome
    }
    
    let nStr = str; // copy input to avoid mutation

    function compareEdges(word: string): boolean{
        return(word.charAt(0) === word.charAt(word.length - 1)) ? true : false;
    }

    
}