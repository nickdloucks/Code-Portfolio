function karatsuba(x: number, y: number) : number {
  if ((x < 10) || (y < 10)) {
    return x * y;
  } else {
    let x_string = x.toString();
    let y_string = x.toString();

    let n = (x_string.length > y_string.length) ? x_string.length : y_string.length;
    let half_n = n/2; 

    let x1: number = Number(x_string.slice(0, half_n));
    let x2: number = Number(x_string.slice(half_n));

    let y1: number = Number(y_string.slice(0, half_n));
    let y2: number = Number(y_string.slice(half_n));

    let a = x1 * y1;
    let c = x2 * y2;
    let b = (x1 + x2) * (y1 + y2) - a - c;
  }
}
