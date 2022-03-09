import { default as toPigLatin } from '../Pig-Latin-translator.mjs';

describe('A function for translating English to Pig Latin.', ()=>{
    it("Doesn't operate on a space string (' ') nor on falsy inputs", ()=>{
        expect(toPigLatin(' ')).toEqual(' ');
        expect(toPigLatin('')).toEqual('');
    });

    xit('Returns <undefined> for words with non-letter characters.', ()=>{
        expect(toPigLatin('n1ch0la$')).not.toBeDefined();
        // NOT YET IMPLEMENTED IN PROGRAM
    });

    it('Repositions possesive apostrophes if necessary.', ()=>{
        expect(toPigLatin("Nick's")).toEqual("Icknay's");
        // NOT YET IMPLEMENTED IN PROGRAM
    });

    xit('Moves double-letter sounds ["qu", "ch", "th", "pt", "sh"] as one unit from the beginning of words.', ()=>{
        expect(toPigLatin('quack')).toEqual('ackquay');
        expect(toPigLatin('question')).toEqual('estionquay');
        expect(toPigLatin('should')).toEqual('ouldshay');
        expect(toPigLatin('there')).toEqual('erethay');
        expect(toPigLatin('pterodactyl')).toEqual('erodactylptay');
        expect(toPigLatin('change')).toEqual('angechay');
        // NOT YET IMPLEMENTED IN PROGRAM
    });

    xit('Leaves dashes and non-posessive apostrophes alone.', ()=>{
        expect(toPigLatin("Qui'Gon")).toEqual("Ui'Gonquay");
        expect(toPigLatin("T'Pol")).toEqual("'Poltay");
        expect(toPigLatin('La-a')).toEqual('A-alay'); // In Pig latin, pronounced "ah-DASH-ah-lay"
        // NOT YET IMPLEMENTED IN PROGRAM
    });

    xit('Capitalizes new first letter if previous first letter was capitalized',()=>{
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

xdescribe('used as a callback function on each word.', ()=>{
    it('The pig latin traslator works on an entire sentence as an array of string words.', ()=>{
        expect("The bunnies' ears perked up at the sound of Healthy Toppings."
            .split(' ')
            .map(str => toPigLatin(str))
            .join(' '))
            .toEqual("Ethay unniebays' earsway erkedpay upway atway ethay oundsay ofway Ealthyhay Oppingstay.");
    });

});