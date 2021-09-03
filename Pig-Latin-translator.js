/**
  * translate a given string to Pig-Latin
  * input: string (word)
  * output: string in Pig-Latin
  * note: to translate a whole sentence of words, pass this function as a callback after separating the sentance into an array of words
  */

function translatePigLatin(str) {
  let nStr = str; // save copy of input string to avoid mutation
  const consonants = /(^[bcdfghjklmnpqrstvwxyz]+)?/i; // regex checking whether the string begins with one or more consonants
  let match = nStr.match(consonants);
  let consCluster = match[0]; // grab the consonants at the beginning of the word if there are any
  if (consCluster.length){ // if there is a consonant at the beginning,
    nStr = nStr.slice(consCluster.length) // cut the consonant(s) off the beginning of the word
                .concat(consCluster) // add the consonant(s) to the end of the word
                .concat("ay"); // add "ay" at the end
  }else{ // reaching this block means the word begins with a vowel
    nStr = nStr.concat("way"); // don't cut anything off the beginning, just add "way" to the end
  }
  console.log(nStr);
  return nStr;
}

translatePigLatin("consonant");
