// class Counter {// in this counter class whent we make different instance different space and work from two different area.If we want to use this Class from a single space with different instance then we have to use "static syntex."
//   count: number;

//   constructor(count: number) {
//     this.count = count;
//   }
//   increament(): number {
//     return (this.count = this.count + 1);
//   }
//   decreament(): number {
//     return (this.count = this.count - 1);
//   }
// }
// class with "static" syntex
class Counter {
  // in this counter class whent we make different instance it will make different space and work from  different area.If we want to use this Class from a single space  we have to use "static" syntex.In that case we dont need to use constructor.
  static count: number;

  increament(): number {
    return (this.count = this.count + 1);
  }
  decreament(): number {
    return (this.count = this.count - 1);
  }
}

const increament1 = new Counter(0);
const increament2 = new Counter(1);
console.log(increament1.increament());
console.log(increament2.increament());
