export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(person) {
    if (this.members.has(person)) {
      throw new Error('Character is alresdy in team');
    }
    this.members.add(person);
  }

  addAll(...persons) {
    for (let index = 0; index < persons.length; index += 1) {
      this.members.add(persons[index]);
    }
  }

  toArray() {
    return [...this.members];
  }
}
