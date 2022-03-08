import { default as phoneCheck } from '../telephone-number-validator.mjs';

describe('Validator for U.S. telephone numbers.', ()=>{
    it('Rejects "numbers" with invalid characters.', ()=>{
        expect(phoneCheck('123-456-78%0')).toBe(false);
        expect(phoneCheck('1 568 ge#-78)hf')).toBe(false);
        expect(phoneCheck('(1@3) 456 7890')).toBe(false);
    });

    it('Rejects "numbers" that are too long.', ()=>{
        expect(phoneCheck('123-456-78902')).toBe(false);
        expect(phoneCheck('1-923-456-78902')).toBe(false);
        expect(phoneCheck('72034840718461217')).toBe(false);
    });

    it('Rejects "numbers" with bad parenthese placement.', ()=>{
        expect(phoneCheck('(123( 456 7890')).toBe(false);
        expect(phoneCheck('1(-923)-456-6396')).toBe(false);
        expect(phoneCheck('1-923)-456-6396')).toBe(false);
        expect(phoneCheck('1.(923.456.6396')).toBe(false);
    });

    it('Rejects "numbers" with a non-U.S. country code.', ()=>{
        expect(phoneCheck('44-7911123456')).toBe(false);
    });

    it('Accepts phone numbers with clean formatting.', ()=>{
        expect(phoneCheck('(123) 456 7890')).toBe(true);
        expect(phoneCheck('1(923)-456-6396')).toBe(true);
        expect(phoneCheck('1.923.456.6396')).toBe(true);
        expect(phoneCheck('720 348 1217')).toBe(true);
        expect(phoneCheck('7203481217')).toBe(true);
        expect(phoneCheck('17203481217')).toBe(true);
        expect(phoneCheck('1 720 348 1217')).toBe(true);
        expect(phoneCheck('(123) 456-7890')).toBe(true);
    });
})