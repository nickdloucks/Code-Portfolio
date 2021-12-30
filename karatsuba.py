import math

def karatsuba(x, y):
    x_string = str(x);
    y_string = str(y);

    if len(x_string) <= 4 or len(y_string.length) <= 4: # minimum 4 digits to use Karatsuba, otherwise use brute force
      return x * y;
    else:
      n = max(y_string.length, x_string.length); # n = number of digits in the input numbers
      m = math.ceil(n / 2); 

      x_left = math.floor(x / (10**m));
      x_right = x % (10**m);

      y_left = math.floor(y / (10**m));
      y_right = y % (10**m);
  
      c = karatsuba(x_right, y_right);
      b = karatsuba((x_left + x_right), (y_left + y_right)); # b=(x_left+x_right)(y_left+y_right)−a−c
      a = karatsuba(x_left, y_left);

      product = (a * (10**(n))) + ((b-a-c) * (10**m)) + c; # xy=a∗B(2m)+b∗Bm+c
      return product;
    
    
result = (karatsuba(3141592653589793238462643383279502884197169399375105820974944592,
    2718281828459045235360287471352662497757247093699959574966967627));
print(result.toString());

  #3141592653589793238462643383279502884197169399375105820974944592, 
  #  2718281828459045235360287471352662497757247093699959574966967627 