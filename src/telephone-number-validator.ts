/**
 * validates whether an input string is a valid US phone number
 * input: string
 * output: boolean
 */

function telephoneCheck(phone) {
  let last7nums = /(\d{3}[- .]?\d{4})$/; // regex validating the last 7 digits
  /** a US phone number will end with:
   * - a sequence of 3 digits, possibly book-ended by a spacing character (such as a dash, dot, or space)
   * - a sequence of 4 digits at the end */
  let end = phone.match(last7nums); // check for a match at the end of the phone number string
  if (!end) {
    return false;
  } // if the end of the provided string does not match the pattern for the last 7 digits, it's not a valid phone number

  // The second part of this function validates the beginning of the phone number if the end of the phone number is valid.

  let start = phone.replace(last7nums, ''); // start is a copy of the phone number without the last 7 digits
  // reaching this statement means the last 7 digits are valid, so we can ignore them and focus on the beginning.

  let parens = /1?[- .]?[(]\d{3}[)][- .]?/; // regex for if the phone number uses parentheses around the area code
  /** - the phone number could begin with a 1 (country code signifying a US phone number)
   * - there must be a 3-digit area code
   * - there could be spacing characters between the 1 (if present), the area code, and the last 7 digits */
  let areaCode = start.match(parens); // check the remainder of the phone number string for a match

  if (areaCode) {
    // this block is for when the area code is surrounded by parentheses (on both sides, facing the proper direction)
    let extraChars = start.replace(parens, ''); // ignore the country code, area code, parentheses and spacing characters since they are valid at this point
    let final = extraChars.length ? false : true; // if any characters remain, the input is NOT a valid US phone number
    return final;
  } else {
    // this block is for when the area code does NOT have parentheses
    let noParens = /1?[- .]?\d{3}[- .]?/; // regex for if the phone number does NOT use parentheses around the area code
    // same validation of the country code and area code used above, but this time without parentheses around the area code
    let areaCode2 = start.match(noParens); // check for a match

    if (areaCode2) {
      let extraChars = start.replace(noParens, '');
      let final = extraChars.length ? false : true;
      return final;
    }
  }
  /* NOTE: If there is the wrong number of parentheses, or they are in the wrong place, or they face the wrong direction,
   * the remaining characters will match neither the <parens> nor the <noParens> regex,
   * and this function will return <false> */
  return false; // return false by default. If this statement is reached, it's because the beginning part of the phone number is not valid
}

telephoneCheck('555-555-5555');
