"use strict";
class BankAccount {
    constructor(name, id, _balance) {
        this.id = id;
        this.name = name;
        this._balance = _balance;
    }
    //getter
    get balance() {
        // here using "get" sytex we can access a private property value only but cant modify it.
        return this._balance;
    }
    // myBalance(): number {
    //   return this._balance;
    // }
    //setter
    set deposit(amount) {
        // here using "set" syntex we can modify any value without calling function.
        this._balance = this._balance + amount;
    }
}
class MyAccount extends BankAccount {
    constructor(name, id, balance) {
        super(name, id, balance);
    }
}
const myAccountBalance = new MyAccount("Raihan", "w34", 600);
myAccountBalance.deposit = 90; // this is the use of "set syntex"
console.log(myAccountBalance.balance); // this is the use of "get syntex"
