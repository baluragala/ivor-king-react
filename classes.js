class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  describe() {
    return `${this.name} is of age ${this.age} years`;
  }
}

let p = new Person("jim", 22);
p.describe();

class Employee extends Person {
  constructor(name, age, salary) {
    super(name, age);
    this.salary = salary;
  }

  describe() {
    return `${this.name} is of age ${
      this.age
    } years and has a salary income of ${this.salary}`;
  }
}

let e = new Employee("kim", 24, 3000);
e.describe();
