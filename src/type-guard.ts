//keyof guard
type alphaNumeric = string | number;

function add(param1: alphaNumeric, param2: alphaNumeric): alphaNumeric {
  if (typeof param1 === "number" && typeof param2 === "number") {
    return param1 + param2;
  } else {
    return param1.toString() + param2.toString();
  }
}
add(3, 4);
add("7", "7");

//in guard

type normalUserType = {
  name: string;
};

type adminUserType = {
  name: string;
  role: "admin";
};

const user1: normalUserType = { name: "Rahim" };
const user2: adminUserType = {
  name: "Jyotsna",
  role: "admin",
};

function getUser(user: normalUserType | adminUserType): string {
  if ("role" in user) {
    return `${user.name} is Admin user`;
  } else {
    return `${user.name} is Normal user`;
  }
}

console.log(getUser(user2));
console.log(getUser(user1));

//instance of guard

class Animal {
  name: string;
  species: string;

  constructor(name: string, species: string) {
    (this.name = name), (this.species = species);
  }

  makeSound() {
    console.log("I am making sound");
  }
}

class Dog extends Animal {
  constructor(name: string, species: string) {
    super(name, species);
  }

  makeBeark() {
    console.log("I am bearking");
  }
}

class Cat extends Animal {
  constructor(name: string, species: string) {
    super(name, species);
  }

  makeMeaw() {
    console.log("I am meawing");
  }
}
function isDog(animal: Animal): animal is Dog {
  //isDog is a function which return boolean value, here "animal instanceof Dog" syntex define that animal param take the properties of Dog class.and after the isDog function "animal is Dog" syntex has a "is" word which is used to give the typescript the information that animal will get the properties of Dog class so that typescript can access the "animal.makeBeark()" syntex.
  return animal instanceof Dog;
}
function isCat(animal: Animal): animal is Cat {
  return animal instanceof Cat;
}
// typeguard using instanof syntex
// function getAnimal(animal: Animal) {
//   if (animal instanceof Dog) {
//     animal.makeBeark();
//   } else if (animal instanceof Cat) {
//     animal.makeMeaw();
//   } else {
//     animal.makeSound();
//   }
// }

//typegurad using function with "is" syntex
function getAnimal(animal: Animal) {
  if (isDog(animal)) {
    animal.makeBeark();
  } else if (isCat(animal)) {
    animal.makeMeaw();
  } else {
    animal.makeSound();
  }
}

const animal1 = new Dog("German Shephard", "dog"); // instance of Dog class
const animal2 = new Cat("Persian", "Cat"); //instance of Cat class
getAnimal(animal1);
