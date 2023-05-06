class BankAccount {
  name: string;
  id: string;
  private _balance: number; // here "private" is a access modifier when we use this syntex befor any property then this property is only accessable within the class only.we can not accces this property from outside the class.

  constructor(name: string, id: string, _balance: number) {
    this.id = id;
    this.name = name;
    this._balance = _balance;
  }
  //getter
  get balance(): number {
    // here using "get" sytex we can access a private property value only but cant modify it.
    return this._balance;
  }

  // myBalance(): number {
  //   return this._balance;
  // }

  //setter

  set deposit(amount: number) {
    // here using "set" syntex we can modify any value without calling function.
    this._balance = this._balance + amount;
  }
  // addBalance(amount: number) {
  //   this._balance = this._balance + amount;
  // }
}

class MyAccount extends BankAccount {
  constructor(name: string, id: string, balance: number) {
    super(name, id, balance);
  }
}

const myAccountBalance = new MyAccount("Raihan", "w34", 600);

myAccountBalance.deposit = 90; // this is the use of "set syntex"
console.log(myAccountBalance.balance); // this is the use of "get syntex"
