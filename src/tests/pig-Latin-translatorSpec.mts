import { default as toPigLatin } from '../Pig-Latin-translator.mjs';

describe('A function for translating English to Pig Latin.', ()=>{
    it('Returns <undefined> for words with non-letter characters.', ()=>{
        expect(toPigLatin('n1ch0la$')).not.toBeDefined();
        // NOT YET IMPLEMENTED IN PROGRAM
    });

    it('Repositions possesive apostrophes if necessary.', ()=>{
        expect(toPigLatin("Nick's")).toEqual("Icknay's");
        // NOT YET IMPLEMENTED IN PROGRAM
    });

    it('Moves "qu" as one unit from the beginning of words.', ()=>{
        expect(toPigLatin('quack')).toEqual('ackquay');
        expect(toPigLatin('question')).toEqual('estionquay');
        // NOT YET IMPLEMENTED IN PROGRAM
    });

    it('Leaves dashes and non-posessive apostrophes alone.', ()=>{
        expect(toPigLatin("Qui'Gon")).toEqual("Ui'Gonquay");
        expect(toPigLatin("T'Pol")).toEqual("'Poltay");
        // NOT YET IMPLEMENTED IN PROGRAM
    });

    it('Capitalizes new first letter if previous first letter was capitalized',()=>{
        expect(toPigLatin('car')).toEqual('arcay');
        expect(toPigLatin('Corvette')).toEqual('Orvettecay');
        // NOT YET IMPLEMENTED IN PROGRAM
    });

    it('Moves first consonant to the end and adds "ay" at the end.', ()=>{
        expect(toPigLatin('bunny')).toEqual('unnybay');
    });

    it('Leaves beginning vowels alone and adds "way" at the end.', ()=>{
        expect(toPigLatin('animal')).toEqual('animalway');
    });
});