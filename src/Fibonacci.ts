/**
 * A dynamic program to calculate fibonacci numbers with memoization. 
 * It will be used in the "Sum-Odd-Fibonacci" program in this repo once it is finished.
 * @param nth : number => Get any fibonacci number by it's place in the sequence.
 * @returns 
 */
function calcNthFib(nth : number, all?: boolean): number{ // provide the target position of a fibonacci number in the sequence
    // optional <all> param is for requesting the list of fibonacci numbers up to the specified position
    let memo: number[] = [0, 1, 1];
    let nthFib : number = nth;

    if(nthFib <= 1){ // no inputs should be less than 1, and the first fibonacci number is 0
        return memo[0];
    }
    if(nthFib <= 3){ // the second and third fibonnaci number are both 1
        return 1;
    }else{
        let twoBeforeNth = memo[nthFib - 3]; // it's -3 to account for zero-based indexing of the memo array. 
        // Example: 2 positions before the third fibonacci is 0
        if(!twoBeforeNth){ // calculate the fibonacci number two before the desired position if it hasn't be calculated already
            memo.push(calcNthFib(nthFib - 2));
            twoBeforeNth = memo[memo.length - 1];
        }

        let oneBeforeNth = memo[nthFib - 2]; // it's -2 to account for zero-based indexing of the memo array. 
        // Example: 1 position before the fourth fibonacci is 1 (the second 1 appearing in the memo array at memo[2])
        if(!oneBeforeNth){ // calculate the previous fibonacci number if it hasn't been calculated already
            memo.push(calcNthFib(nthFib - 1));
            oneBeforeNth = memo[memo.length - 1];
        }
        // prior to this stage, all previous fibonacci numbers will have been calculated thru recursion and saved in the memo[]
        let newResult = twoBeforeNth + oneBeforeNth;
        memo.push(newResult); // save the newly calculated result for future reference and return
        return newResult;
    }
}
