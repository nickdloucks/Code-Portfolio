
function calcNthFib(nth : number): number{
    let nthFib : number = nth;

    if (nthFib <= 1){
        return 1;
    }else{
        return calcNthFib(nthFib - 1) + calcNthFib(nthFib - 2);
}
