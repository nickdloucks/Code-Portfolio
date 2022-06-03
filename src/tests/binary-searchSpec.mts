import binarySearch from "../algorithms/binary-search";

describe("A funtion used to search through sorted data for a target value.", ()=>{
    
    // TEST CASES, SAMPLE DATA:
    let primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 
		41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];


    it("finds the value at the correct index.", ()=>{
        let result = binarySearch(primes, 73);
        console.log("Found prime at index " + result);
        expect(binarySearch(primes, 73)).toEqual(20);
    });

    it("returns -1 if value is not found.", ()=>{
        expect(binarySearch(primes, 6)).toEqual(-1);
    });
    
});