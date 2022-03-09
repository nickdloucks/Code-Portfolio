/**
 * Translates a given word into Pig-Latin.
 * NOTE: To translate a whole sentence of words, 
 * pass this function as a callback after separating the sentence into an array of words.
 * @param str: string. Word to be translated.
 * @returns The string in Pig-Latin.
 */

export default function translatePigLatin(str: string): string {
  if (str === ' ' || !str){
    return str;
  }
  let nStr = str; // save copy of input string to avoid mutation
  const consonants = /(^[bcdfghjklmnpqrstvwxyz]+)?/i; // regex checking whether the string begins with one or more consonants
  const possesive = /(\'s)$|(s\')$/;
  let possPop: string | undefined;
  if (possesive.test(nStr)) { // If there is a substring at the end indicating posession,
    possPop = nStr.split(possesive)[1]; // remove it and store it in a variable so it can be added to end after processing any beginning consonants
    nStr = nStr.split(possesive)[0]; // ==> represents the string with any possessive substring removed ("Nick's" becomes "Nick")
  }

  function configEnd(): void{ // Subroutine for configuring the end of the string
    let match: RegExpMatchArray | null = nStr.match(consonants);
    let consCluster: string = (match) ? match[0]: ''; // grab the consonants at the beginning of the word if there are any
      // if there are no consonants at beginning, consCluster will be an empty string
    if (consCluster.length) {
      // if there is a consonant at the beginning,
      nStr = nStr
        .slice(consCluster.length) // cut the consonant(s) off the beginning of the word
        .concat(consCluster) // add the consonant(s) to the end of the word
        .concat('ay'); // add "ay" at the end
    } else {
      // reaching this block means the word begins with a vowel
      nStr = nStr.concat('way'); // don't cut anything off the beginning, just add "way" to the end
    }
  }

  configEnd();
  nStr = (possPop) ? nStr.concat(possPop) : nStr; // If there is a possesive substring, concat to end.

  return nStr;
}

translatePigLatin('consonant');
