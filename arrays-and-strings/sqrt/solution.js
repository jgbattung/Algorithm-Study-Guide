const n = 8

const sqrt = function(x) {
  let ops = 0;
  let sub = 1

  while (x > 0) {
    x = x - sub;
    ops = ops + 1
    sub = sub + 2
  }
  
  if (x < 0) {
    return Math.round(ops - 1)
  }
  return Math.round(ops)
};

sqrt(n)