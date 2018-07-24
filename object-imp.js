let name = "bmw";
let model = "x5";
const car = {
  name: name,
  model: model,
  describe: function() {
    console.log(`Name:${this.name} and model:${this.model}`);
  }
};
const car1 = {
  name,
  model,
  describe() {
    console.log(`Name:${this.name} and model:${this.model}`);
  },
  [`${name}_${model}`]: "",
  [new Date()]: ""
};
