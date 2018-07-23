var x = 3;

//hoisting
function func(randomize) {
  if (randomize) {
    x = Math.random();
    return x;
  }
  return x;
}

func(false);
//----------------------
let x = 3;

function func(randomize) {
  if (randomize) {
    let x = Math.random();
    return x;
  }
  return x;
}

func(false);
