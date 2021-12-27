function karatsuba(x: number, y: number) : number {
  if ((x < 10) && (y < 10)) {
    return x * y;
  } else {
    let x_string = x.toString();
    let y_string = x.toString();

    let x1: number = Number(x_string[0]);
    let x2: number = Number(x_string.slice(1));

    let y1: number = Number(y_string[0]);
    let y2: number = Number(y_string.slice(1));

    let a = x1 * y1;
    let c = x2 * y2;
  }
}
