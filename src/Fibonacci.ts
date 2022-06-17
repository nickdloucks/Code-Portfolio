/**
 * A dynamic program to calculate fibonacci numbers with memoization. 
 * It will be used in the "Sum-Odd-Fibonacci" program in this repo once it is finished.
 * @param nth : number => Get any fibonacci number by it's place in the sequence.
 * @returns 
 */
function calcNthFib(nth : number): number{
    let memo: number[] = [];
    let nthFib : number = nth;

    if (nthFib <= 1){
        return 1;
    }else{
        // TODO: may need to compare to length of memo before calculating new value
        let newResult = calcNthFib(nthFib - 1) + calcNthFib(nthFib - 2);
        memo.push(newResult);
        return newResult;
    }
}
