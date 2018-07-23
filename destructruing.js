let members = ["jim", "kim", "lim", "bim"];
// let manager = members[0];
// let lead = members[1];

let [manager, , , se2] = members;

let [, , se1, se2] = members;

console.log(manager, lead);

let apiResponse = {
  username: "baluragala",
  url: "https://github.com/baluragala",
  type: "paid",
  settings: {
    recurring: false,
    active: true
  }
};

const {
  type,
  username,
  url: profileUrl = "n/a",
  settings: { active }
} = apiResponse;
