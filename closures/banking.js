
function makeBank() {
  var accounts = [];

  function makeAccount(number) {
    var balance = 0;
    var transactions = [];
    
    return {
      number: function() {
        return number;
      },
      balance: function() {
        return balance;
      },
      transactions: function() {
        return transactions;
      },
      deposit: function(amount) {
        balance += amount;
        transactions.push({ type: 'deposit', amount: amount });
        return amount;
      },
      withdraw: function(amount) {
        if (amount > balance) amount = balance;
        balance -= amount;
        transactions.push({ type: 'withdrawl', amount: amount });
        return amount;
      },
    };
  }

  return {
    openAccount: function() {
      var account = makeAccount(accounts.length + 101);
      accounts.push(account);
      return account;
    },
    transfer: function(sourceAcct, destAcct, amount) {
      return destAcct.deposit(sourceAcct.withdraw(amount));
    }
  };
}

// var account = makeAccount();
// p(account.balance);
// p(account.deposit(42));
// p(account.deposit(33));
// p(account.balance);
// p(account.withdraw(19));
// p(account.balance);
// p(account.withdraw(100));
// p(account.balance);
// pa(account.transactions);

var bank = makeBank();
var account = bank.openAccount();
account.deposit(199);
account.withdraw(30);
p(account.number(), account.balance());
var secondAccount = bank.openAccount();
bank.transfer(account, secondAccount, 50);
p(secondAccount.number(), secondAccount.balance());
bank.transfer(account, secondAccount, 2000);
p(account.number(), account.balance());
p(secondAccount.number(), secondAccount.balance());