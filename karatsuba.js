function karatsuba(x, y)  {
    if ((x < 10) || (y < 10)) {
      return x * y;
    } else {
      let x_string = x.toString();
      let y_string = x.toString();
  
      let n = (x_string.length > y_string.length) ? x_string.length : y_string.length;
      let half_n = n/2; 
  
      let x1 = Number(x_string.slice(0, half_n));
      let x2 = Number(x_string.slice(half_n));
  
      let y1 = Number(y_string.slice(0, half_n));
      let y2 = Number(y_string.slice(half_n));
  
      let a = karatsuba(x1, y1);
      let c = karatsuba(x2, y2);
      let b = karatsuba((x1 + x2), (y1 + y2)) - a - c;
  
      let product = a * 10**(2*half_n) + (b * 10**half_n) + c;
      return product;
    }
  }
  let result = karatsuba(3141592653589793238462643383279502884197169399375105820974944592, 
    2718281828459045235360287471352662497757247093699959574966967627);
  console.log(result);