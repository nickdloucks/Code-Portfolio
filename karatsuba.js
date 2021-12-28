function karatsuba(x, y)  {
    if ((x < 10) || (y < 10)) {
      return x * y;
    } else {
      let x_string = x.toString();
      let y_string = y.toString();
  
      let n = (x_string.length > y_string.length) ? y_string.length : x_string.length;
      let half_n = Math.floor(n / 2); 
  
      let x_left = Number(x_string.slice(0, half_n));
      let x_right = Number(x_string.slice(half_n));
  
      let y_left = Number(y_string.slice(0, half_n));
      let y_right = Number(y_string.slice(half_n));
  
      let z0 = karatsuba(x_right, y_right);
      let z1 = karatsuba((x_left + x_right), (y_left + y_right)); // z1=(x_left+x_right)(y_left+y_right)−a−c
      let z2 = karatsuba(x_left, y_left);

      // BUG MUST BE IN PRODUCT LINE
      let product = (z2 * (10**(2*half_n))) + ((z1-z2-z0) * (10**half_n)) + z0; // xy=a∗B(2m)+b∗Bm+z0
      return product;
    }
  }
  let result = karatsuba(123, 567);
  console.log(result);

  /*3141592653589793238462643383279502884197169399375105820974944592, 
    2718281828459045235360287471352662497757247093699959574966967627 */