//**** task */

const person = {
    _firstname: 'ismail',
    _lastname: 'ait wahmane',
    _age: 22,
    get fullname() {
      return `${this._firstname} ${this._lastname}`;
    },
  
    set fullname(value) {
      const [firstname, lastname] = value.split(' ', 2);
      this._firstname = firstname;
      this._lastname = lastname;
    }
  };
  console.log(`Full Name: ${person.fullname}`);
  person.fullname = "\"<ismail> <aitwahmane>\"";
  console.log(`Updated Full Name: ${person.fullname}`);

//**** task 2 : Task 2 : Are you Older Than me  */

class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    compareAge(other) {
      if (other.age > this.age) {
        return `${other.name} is older than me.`;
      } else if (other.age < this.age) {
        return `${other.name} is younger than me.`;
      } else {
        return `${otherPerson.name} is the same age as me.`;
      }
    }
  }
  const p1 = new Person("soufiane", 25);
  const p2 = new Person("said", 20);
  const p3 = new Person("aya", 22); 
  console.log(p1.compareAge(p2));
  console.log(p2.compareAge(p1)); 
  console.log(p1.compareAge(p3)); 

//*****Task 3 : Most Occurred */

function most(numbers) {
    if (numbers.length === 0) {
      return null;
    }
    let count = {};
    let mostNumber = numbers[0];
    for (let number of numbers) {
      count[number] = (count[number] || 0) + 1;
      if (count[number] > count[mostNumber]) {
        mostNumber = number;
      }
    }
    return mostNumber;
  }
  const result = most([4, 2, 2, 7, 2]);
  console.log(result); // Output: 2