/* class Animals {
  name: string;
  species: string;
  sound: string;

  constructor(name: string, species: string, sound: string) {
    (this.name = name), (this.species = species), (this.sound = sound);
  }
 */

// parameter  properties

class Animals1 {
  // by using public paramter we can avoid repeted task whic we have do in "Animals" Class
  constructor(
    public name: string,
    public species: string,
    public sound: string
  ) {}

  makesound() {
    console.log(`This ${this.name} ${this.species} says ${this.sound}`); // This German shephard says Ghew Ghew
  }
}

// const dog = new Animals("German Shaphered", "dog", "Ghew Ghew");
// dog.makesound();

// const cat = new Animals("Parsian", "Cat", "Mew Mew");
// cat.makesound();

const dog = new Animals1("German Shaphered", "dog", "Ghew Ghew");
dog.makesound();

const cat = new Animals1("Parsian", "Cat", "Mew Mew");
cat.makesound();
