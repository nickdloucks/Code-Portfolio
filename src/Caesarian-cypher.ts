// NEEDS MORE ROBUST TESTING; MAKE THE ALGORITHM MORE FLEXIBLE FOR DYNAMIC "INTERVALS" OF ENCRYPTION
/**
 * Translates a message encoded in a Caesarian-cypher, given the offset interval.
 * @param code: string. The encoded/encrypted message to be translated.
 * @param interval: number. The specified offset interval used to decode the message.
 * @returns : string. The de-coded/unencrypted message.
 */

function rot13(code: string, interval: number): string {
  // <interval> parameter dynamically changes the offset interval of the cypher.
  let codeMsg = code; //copy input to avoid mutation
  const NUM_ALPH = {
    //object storing all letters indexed by alphabetical position to reduce time complexity
    1: 'A',
    2: 'B',
    3: 'C',
    4: 'D',
    5: 'E',
    6: 'F',
    7: 'G',
    8: 'H',
    9: 'I',
    10: 'J',
    11: 'K',
    12: 'L',
    13: 'M',
    14: 'N',
    15: 'O',
    16: 'P',
    17: 'Q',
    18: 'R',
    19: 'S',
    20: 'T',
    21: 'U',
    22: 'V',
    23: 'W',
    24: 'X',
    25: 'Y',
    26: 'Z',
  };
  const ALPH_NUM = {
    //object storing all letters as keys which hold their alphabetical position
    'A': 1,
    'B': 2,
    'C': 3,
    'D': 4,
    'E': 5,
    'F': 6,
    'G': 7,
    'H': 8,
    'I': 9,
    'J': 10,
    'K': 11,
    'L': 12,
    'M': 13,
    'N': 14,
    'O': 15,
    'P': 16,
    'Q': 17,
    'R': 18,
    'S': 19,
    'T': 20,
    'U': 21,
    'V': 22,
    'W': 23,
    'X': 24,
    'Y': 25,
    'Z': 26,
  };

  let message = '';
  let letter = /[A-Z]/i; //regex to determine if a character is a letter

  //MAIN ALGORITHM BELOW:
  for (let i = 0; i < codeMsg.length; i++) {
    let codeChar: string = codeMsg.charAt(i); //current character from encrypted message
    if (letter.test(codeChar)) { //test if current code character is a letter
      const codePos: number = ALPH_NUM[codeChar]; //position of codeChar in the alphabet
      let nLetter = (codePos <= 13) ? NUM_ALPH[codePos + interval] : NUM_ALPH[codePos - interval];
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

rot13('SERR PBQR PNZC', 13);
