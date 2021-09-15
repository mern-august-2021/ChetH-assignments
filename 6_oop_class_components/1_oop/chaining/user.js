class User {
    constructor(name, balance = 0) {
        this.name = name;
        this.balance = balance;
    }

    makeDeposit(amount) {
        this.balance += amount;
        console.log(this.name + " just deposited: $" + amount + ", current balance: $" + this.balance);
        return this;
    }

    makeWithdrawl(amount) {
        this.balance -= amount;
        console.log(this.name + " just withdrew: $" + amount + ", current balance: $" + this.balance);
        return this;
    }

    displayBalance() {
        console.log("Account holder: " + this.name + " has current balance: $" + this.balance);
    }

    transfer(transferToUser, amount) {
        this.balance -= amount;
        transferToUser.balance += amount;
        console.log(this.name + " just transferred: $" + amount + ", current balance: $" + this.balance);
        console.log(transferToUser.name + " just received: $" + amount + ", current balance: $" + transferToUser.balance);
        return this;
    }
}

const chet = new User("Chet");
const sophie = new User("Sophie");
const uncleSam = new User("IRS", 1000);

chet.makeDeposit(100).makeDeposit(50).makeDeposit(500).makeWithdrawl(200);
sophie.makeDeposit(1000).makeDeposit(200).makeWithdrawl(300).makeWithdrawl(500);
uncleSam.makeDeposit(100).makeWithdrawl(200).makeWithdrawl(100).makeWithdrawl(500);
chet.transfer(uncleSam, 150);