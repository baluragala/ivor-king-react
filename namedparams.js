function makeName({ first, last, title = "mr" }) {
  console.log(first, last, title);
}

let obj = { title: "mrs", first: "bala", last: "ragala" };
makeName(obj);
