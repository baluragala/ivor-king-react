const scores = [60, 40, 56, 77, 89];
scores.filter(score => score > 60);

let result = [];
for (let i = 0; i < scores.length; i++) {
  if (scores[i] > 60) {
    result.push(scores[i]);
  }
}

scores.filter(function(score) {
  return score > 60;
});

const makeName = ({ first, last, title = "mr" }) => `${title}.${first},${last}`;
let obj = { title: "mrs", first: "bala", last: "ragala" };
makeName(obj);

function Person(age) {
  this.age = age;
  this.describre = () => {
    console.log(`Age of person is ${this.age}`);
  };
}
