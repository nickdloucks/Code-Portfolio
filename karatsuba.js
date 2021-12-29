function karatsuba(x, y)  {
    let x_string = x.toString();
    let y_string = y.toString();

    if ((x_string.length <= 4) || (y_string.length <= 4)) { // minimum 4 digits to use Karatsuba, otherwise use brute force
      return x * y;
    } else {
      let n = Math.max(y_string.length, x_string.length); // n = number of digits in the input numbers
      let m = Math.ceil(n / 2); 

      let x_left = Math.floor(x / (10**m));
      let x_right = x % (10**m);

      let y_left = Math.floor(x / (10**m));
      let y_right = x % (10**m);
  
      let z0 = karatsuba(x_right, y_right);
      let z1 = karatsuba((x_left + x_right), (y_left + y_right)); // z1=(x_left+x_right)(y_left+y_right)−a−c
      let z2 = karatsuba(x_left, y_left);

      // BUG MUST BE IN PRODUCT LINE
      let product = (z2 * (10**(2*m))) + ((z1-z2-z0) * (10**(m))) + z0; // xy=a∗B(2m)+b∗Bm+z0
      return product;
    }
  }
  let result = karatsuba(3141592653589793238462643383279502884197169399375105820974944592,
    2718281828459045235360287471352662497757247093699959574966967627);
  console.log(result);

  /*3141592653589793238462643383279502884197169399375105820974944592, 
    2718281828459045235360287471352662497757247093699959574966967627 */