export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(pers) {
    if (this.members.has(pers)) {
      throw new Error(`Персонаж ${pers.name} уже есть в команде`);
    } else {
      this.members.add(pers);
    }
  }

  addAll(...rest) {
    rest.forEach((item) => this.members.add(item));
  }

  toArray() {
    const arr = Array.from(this.members);
    return arr;
  }
}
