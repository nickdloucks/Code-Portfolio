// NEEDS MORE ROBUST TESTING; MAKE THE ALGORITHM MORE FLEXIBLE FOR DYNAMIC "INTERVALS" OF ENCRYPTION
/**
 * Translates a message encoded in a Caesarian-cypher, given the offset interval.
 * @param code: string. The encoded/encrypted message to be translated.
 * @param interval: number. The specified offset interval used to decode the message.
 * @returns : string. The de-coded/unencrypted message.
 */

function decypher(code: string, interval: number): string {
  // <interval> parameter dynamically changes the offset interval of the cypher.
  let codeMsg = code; //copy input to avoid mutation

  const ALPH_NUM = [ // letters in normal order
    'A','B','C','D','E','F','G','H','I','J','K','L','M',
    'N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  
  let mutateLetters = ALPH_NUM.slice(); // copy the alphabet; this copy will be mutated
  let cypherKey = mutateLetters.splice(interval, 26 - interval); 
    // using the offset interval, start building out the key to decypher the message
  cypherKey = cypherKey.concat(...mutateLetters);
    // add remaining letters to the end of the cypher key


  // JVII GSHI GEQT

  let message = '';
  let letter = /[A-Z]/i; //regex to determine if a character is a letter


  //MAIN ALGORITHM BELOW:
  for (let i = 0; i < codeMsg.length; i++) {
    let codeChar: string = codeMsg.charAt(i); //current character from encrypted message
    if (letter.test(codeChar)) { //test if current code character is a letter
      const codePos: number = ALPH_NUM.indexOf(codeChar); //position of codeChar in the alphabet
      let nLetter: string = (codePos <= 13) ? ALPH_NUM[codePos + interval] : ALPH_NUM[codePos - interval];
      //if codeChar is in first half of alphabet, add "interval" to the codeChar's position in the alphabet to get the new letter for the de-coded message
      //if codechar is in the secode half of alphabet, subtract interval
      message = message.concat(nLetter);
      console.log(message);
    } else {
      // if <codeChar> is NOT a letter, concatenate it to <message> so that any spaces/punctuation are still included in the message when it is returned
      message = message.concat(codeChar);
      console.log(message);
      continue;
    }
  }
  return message;
}

decypher('SERR PBQR PNZC', 13);
decypher('JVII GSHI GEQT', 4);
