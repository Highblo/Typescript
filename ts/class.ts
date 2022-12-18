class Person {
  name: string;
  constructor(initName: string) {
    this.name = initName;
  }
  greeting() {
    console.log(`Hello! My name is ${this.name}`);
  }
}
const quill = new Person("quill");