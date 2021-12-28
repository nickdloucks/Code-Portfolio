function karatsuba(x, y)  {
    let x_string = x.toString();
    let y_string = y.toString();

    if ((x_string.length <= 4) || (y_string.length <= 4)) { // minimum 4 digits to use Karatsuba, otherwise use brute force
      return x * y;
    } else {
      let n = Math.min(y_string.length, x_string.length); // n = number of digits in the input numbers
      let half_n = Math.floor(n / 2); 
  
      let x_left = Number(x_string.slice(0, half_n)); // split X into two numbers
      let x_right = Number(x_string.slice(half_n));
  
      let y_left = Number(y_string.slice(0, half_n)); // split Y into two numbers
      let y_right = Number(y_string.slice(half_n));
  
      let z0 = karatsuba(x_right, y_right);
      let z1 = karatsuba((x_left + x_right), (y_left + y_right)); // z1=(x_left+x_right)(y_left+y_right)−a−c
      let z2 = karatsuba(x_left, y_left);

      // BUG MUST BE IN PRODUCT LINE
      let product = (z2 * (10**(2*(n/2)))) + ((z1-z2-z0) * (10**(half_n))) + z0; // xy=a∗B(2m)+b∗Bm+z0
      return product;
    }
  }
  let result = karatsuba(12345, 67890);
  console.log(result);

  /*3141592653589793238462643383279502884197169399375105820974944592, 
    2718281828459045235360287471352662497757247093699959574966967627 */