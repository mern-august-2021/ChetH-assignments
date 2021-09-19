class BankAccount {
    constructor(intRate=0.01, balance=0) {
        this.intRate=intRate;
        this.balance=balance;
    }

    deposit(amount) {
        this.balance += amount;
        return this;
    }

    withdrawl(amount) {
        this.balance -= amount;
        return this;
    }

    displayAccontInfo() {
        console.log("Current balance: $" + this.balance);
        console.log("Current interest rate: " + this.intRate*100 + "%");
        return this;
    }

    yieldInterest() {
        console.log("Interest: $" + this.balance*this.intRate);
        return this.balance * this.intRate;
    }
}

class User {
    constructor(name, balance = 0) {
        this.name = name;
        this.balance = balance;
        this.account = new BankAccount();
    }

    makeDeposit(amount) {
        this.account.balance += amount;
        console.log(this.name + " just deposited: $" + amount + ", current balance: $" + this.account.balance);
    }

    makeWithdrawl(amount) {
        this.account.balance -= amount;
        console.log(this.name + " just withdrew: $" + amount + ", current balance: $" + this.account.balance);
    }

    displayBalance() {
        console.log("Account holder: " + this.name + " has current balance: $" + this.account.balance);
    }

    transfer(transferToUser, amount) {
        this.account.balance -= amount;
        transferToUser.account.balance += amount;
        console.log(this.name + " just transferred: $" + amount + ", current balance: $" + this.account.balance);
        console.log(transferToUser.name + " just received: $" + amount + ", current balance: $" + transferToUser.account.balance);
    }
}

const chet = new User("Chet");
const sophie = new User("Sophie");
const uncleSam = new User("IRS", 1000);

chet.makeDeposit(100);
chet.makeDeposit(50);
chet.makeDeposit(500);
chet.makeWithdrawl(200);
sophie.makeDeposit(1000);
sophie.makeDeposit(200);
sophie.makeWithdrawl(300);
sophie.makeWithdrawl(500);
uncleSam.makeDeposit(100);
uncleSam.makeWithdrawl(200);
uncleSam.makeWithdrawl(100);
uncleSam.makeWithdrawl(500);
chet.transfer(uncleSam, 150);