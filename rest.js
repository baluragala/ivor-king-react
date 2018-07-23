function sum() {
  let total = 0;
  for (let n of arguments) {
    total += n;
  }
  return total;
}

function sum(a, b, ...args) {
  let total = 0;
  console.log(args);
  for (let n of args) {
    total += n;
  }
  return total;
}

sum(1, 2);
sum(1, 2, 4, 5, 6, 6);
