function karatsuba(num1, num2)  {

    x = Number(num1);
    y = Number(num2);

    let x_string = x.toString();
    let y_string = y.toString();

    if ((x_string.length <= 4) || (y_string.length <= 4)) { // minimum 4 digits to use Karatsuba, otherwise use brute force
      return x * y;
    } else {
      let n = Math.max(y_string.length, x_string.length); // n = number of digits in the input numbers
      let m = Math.ceil(n / 2); 

      let x_left = BigInt(Math.floor(x / (10**m)));
      let x_right = BigInt(x % (10**m));

      let y_left = BigInt(Math.floor(y / (10**m)));
      let y_right = BigInt(y % (10**m));
  
      let c = BigInt(karatsuba(x_right, y_right));
      let b = BigInt(karatsuba((x_left + x_right), (y_left + y_right))); // b=(x_left+x_right)(y_left+y_right)−a−c
      let a = BigInt(karatsuba(x_left, y_left));

      // BUG MUST BE IN PRODUCT LINE
      let product = (a * (10**(n))) + ((b-a-c) * (10**m)) + c; // xy=a∗B(2m)+b∗Bm+c
      return BigInt(product);
    }
  }
  let result = BigInt(karatsuba(3141592653589793238462643383279502884197169399375105820974944592,
    2718281828459045235360287471352662497757247093699959574966967627));
  console.log(result.toString());

  /*3141592653589793238462643383279502884197169399375105820974944592, 
    2718281828459045235360287471352662497757247093699959574966967627 */