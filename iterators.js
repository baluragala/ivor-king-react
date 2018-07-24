function forOf(iterable) {
  var it = iterable[Symbol.iterator]();
  var r = it.next();
  while (!r.done) {
    console.log(r.value);
    r = it.next();
  }
}
