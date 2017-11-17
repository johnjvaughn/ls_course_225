// var scissors = {
//   id: 0,
//   name: 'Scissors',
//   stock: 8,
//   price: 10,
// };
// var drill = {
//   id: 1,
//   name: 'Cordless Drill',
//   stock: 15,
//   price: 45,
//   setPrice: function(newPrice) {
//     if (newPrice >= 0) {
//       this.price = newPrice;
//     } else {
//       console.log('Invalid new price for product.');
//     }
//   },
//   describe: function() {
//     console.log('Name: ' + this.name);
//     console.log('id: ' + this.id);
//     console.log('Price: $' + this.price);
//     console.log('Stock: ' + this.stock);
//   },
// }

// function setPrice(product, newPrice) {
//   if (newPrice < 0) {
//     console.log('Invalid new price for product.');
//     return;
//   }
//   product.price = newPrice;
// }

// function describeProduct(product) {
//   console.log('Name: ' + product.name);
//   console.log('id: ' + product.id);
//   console.log('Price: $' + product.price);
//   console.log('Stock: ' + product.stock);
// }

function createProduct(id, name, price, stock) {
  return {
    id: id,
    name: name,
    stock: stock,
    price: price,
    setPrice: function(newPrice) {
      if (newPrice >= 0) {
        this.price = newPrice;
      } else {
        console.log('Invalid new price for product.');
      }
    },
    describe: function() {
      console.log('Name: ' + this.name);
      console.log('id: ' + this.id);
      console.log('Price: $' + this.price);
      console.log('Stock: ' + this.stock);
    },
  };
}

var scissors = createProduct(0, 'Scissors', 10, 8);
var drill = createProduct(1, 'Cordless Drill', 45, 15);
var hammer = createProduct(2, 'Hammer', 12, 23);
var saw = createProduct(3, 'Saw', 16, 12);
scissors.describe();
drill.describe();
hammer.describe();
saw.describe();

var foo = {};
var bar = foo;

var a = 10;
var b = a;

foo.a = a;
foo.b = foo.a;

a += 10;
foo.a += 10;

b === a; // false
foo.a === bar.a; // true
