import { default as toPigLatin } from '../Pig-Latin-translator';

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
        // NOT YET IMPLEMENTED IN PROGRAM
    });

    it('Leaves dashes and non-posessive apostrophes alone.', ()=>{
        expect(toPigLatin("Qui'Gon")).toEqual("Ui'Gonquay");
        // NOT YET IMPLEMENTED IN PROGRAM
    });

    it('Capitalizes new first letter if previous first letter was capitalized',()=>{
        expect(toPigLatin('Nick')).toEqual('Icknay');
        expect(toPigLatin('nick')).toEqual('icknay');
        expect(toPigLatin('car')).toEqual('arcay');
    });
    it('Moves first consonant to the end and adds "ay" at the end.', ()=>{
        expect(toPigLatin('Nick')).toEqual('Icknay');
        expect(toPigLatin('bunny')).toEqual('unnybay');
    });
    it('Leaves beginning vowels alone and adds "way" at the end.', ()=>{
        expect(toPigLatin('animal')).toEqual('animalway');
    });
});