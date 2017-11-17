var invoices = {
  unpaid: [],
  paid: [],
  add: function(name, amount) {
    var invoice = {
      name: name,
      amount: amount,
    };
    this.unpaid.push(invoice);
  },
  totalDue: function() {
    return this.unpaid.reduce(function (sum, invoice) {
      return sum + invoice.amount;
    }, 0);
  },
  totalPaid: function() {
    return this.paid.reduce(function (sum, invoice) {
      return sum + invoice.amount;
    }, 0);
  },
  payInvoice: function(name) {
    var unpaid = [];

    for (var i = 0; i < this.unpaid.length; i += 1) {
      if (this.unpaid[i].name === name) {
        this.paid.push(this.unpaid[i]);
      } else {
        unpaid.push(this.unpaid[i]);
      }
    }

    this.unpaid = unpaid;
  },
};

invoices.add("Due North Development", 250);
invoices.add("Moonbeam Interactive", 187.50);
invoices.add("Slough Digital", 300);
invoices.payInvoice("Due North Development");
invoices.payInvoice("Slough Digital");
console.log(invoices.totalPaid());
console.log(invoices.totalDue());
