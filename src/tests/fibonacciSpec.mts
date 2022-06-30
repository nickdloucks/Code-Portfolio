import { default as getFibonacci } from '../algorithms/dynamic-programming/Fibonacci.mjs';

describe("The program for getting a number by position in the Fobonacci sequence", ()=>{
    it('returns the number at the specified position in the sequence.', ()=>{
        expect(getFibonacci(1)).toEqual(0);
        expect(getFibonacci(2)).toEqual(1);
        expect(getFibonacci(3)).toEqual(1);
        expect(getFibonacci(4)).toEqual(2);
        expect(getFibonacci(5)).toEqual(3);
        expect(getFibonacci(6)).toEqual(5);
        expect(getFibonacci(7)).toEqual(8);
        expect(getFibonacci(8)).toEqual(13);
    });
    it('returns -1 for invalid inputs.', ()=>{
        expect(getFibonacci(0)).toEqual(-1); // inputs less than 1 or that are not integers are invalid
        expect(getFibonacci(1.5)).toEqual(-1);
    })
})