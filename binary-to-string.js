function binaryAgent(str) {
  let binArr = str.split(" ");//split the string into
	//an array of bytes, one per character
  const biVals = [128, 64, 32, 16, 8, 4, 2, 1];//these
  //are all the possible values of a <1> in a byte
  function byteToUtf(byte){//takes a byte as a string
    let indexes = [];//will hold values of the <1>'s in
    //the provided byte argument
    for(let i = 0; i < byte.length; i++){
      if(byte.charAt(i) === "1"){
        indexes.push(biVals[i]);//if the current
        //character in the byte is a <1>, retain its binary value
      }
    }
    return indexes.reduce((a,b) => a+b);//add all binary values of 
    //the [indexes] array together to get 
    //the total of the byte, which is the character code
  }
  let utfCodes = binArr.map(byteToUtf);
  //map the array of bytes to a new array of char codes
  return String.fromCharCode(...utfCodes);
	//turn each character code into a string character and return
	// the resulting string
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
