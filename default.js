function add(a, b) {
  a = a || 0;
  b = b || 0;
  return a + b;
}

function add(a = 0, b = 0) {
  return a + b;
}
