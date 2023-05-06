class Person {
  name: string;
  age: number;
  address: string;

  constructor(name: string, age: number, address: string) {
    (this.name = name), (this.age = age), (this.address = address);
  }
  makeSleep(hours: string): string {
    return ` ${this.name} will sleep for ${hours}`; // here we use "this.name" syntex because name property specificaly come from the same class but "hours" is comming from parameter so that we do not need to use "this" syntex for "hours"
  }
}

class Student extends Person {
  constructor(name: string, age: number, address: string) {
    // (this.name = name), (this.age = age), (this.address = address);
    // here "name, age & age" extends from Person calss so that we dont need to defined it here
    super(name, age, address); //by using "super" syntex we extend the common property form Person class
  }

  /*  makeSleep(hours: string): string {
    return ` ${this.name} will sleep for ${hours}`; // here we use "this.name" syntex because name property specificaly come from the same class but "hours" is comming from parameter so that we do not need to use "this" syntex for "hours"
  } */ //This method is extends from Person class so we do not need to write it here
}

class Teachers extends Person {
  // here "name, age & age" extends from Person calss so that we dont need to defined it here

  /* name: string;
  age: string;
  address: string; */

  designation: string; //here desination is only the property of Teacher Class so that we have to write these

  constructor(name: string, age: number, address: string, designation: string) {
    super(name, age, address), //by using "super" syntex we extend the common property form Person class
      (this.designation = designation); //here desination is only the property of Teacher Class so that we have to write these
  }

  /*  makeSleep(hours: string): string {
    return ` ${this.name} will sleep for ${hours}`; // here we use "this.name" syntex because name property specificaly come from the same class but "hours" is comming from parameter so that we do not need to use "this" syntex for "hours"
  } 
  */

  //This method is extends from Person class so we do not need to write it here

  takeClass(numberOfClass: number): string {
    //This method is only the property of teacher calss.So we have to write it here.

    return `${this.name} will take ${numberOfClass} Classes`;
  }
}

const student1 = new Student("Mr.X", 34, "usa");

const teacher1 = new Teachers("Mr. Y", 45, "Canada", "Associate professor");
