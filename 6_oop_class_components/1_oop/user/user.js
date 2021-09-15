class User {
    constructor(name, balance = 0) {
        this.name = name;
        this.balance = balance;
    }

    makeDeposit(amount) {
        this.balance += amount;
        console.log(this.name + " just deposited: $" + amount + ", current balance: $" + this.balance);
    }

    makeWithdrawl(amount) {
        this.balance -= amount;
        console.log(this.name + " just withdrew: $" + amount + ", current balance: $" + this.balance);
    }

    displayBalance() {
        console.log("Account holder: " + this.name + " has current balance: $" + this.balance);
    }

    transfer(transferToUser, amount) {
        this.balance -= amount;
        transferToUser.balance += amount;
        console.log(this.name + " just transferred: $" + amount + ", current balance: $" + this.balance);
        console.log(transferToUser.name + " just received: $" + amount + ", current balance: $" + transferToUser.balance);
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