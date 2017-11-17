function makeCountry(name, continent, visited = false) {
  return {
    name: name,
    continent: continent,
    visited: visited,
    getDescription: function() {
      return this.name + ' is located in ' + this.continent + '. I ' + 
             (this.visited ? 'have' : 'haven\'t') + ' visited ' + 
             this.name + '.';
    },
    visitCountry: function() {
      this.visited = true;
    },
  };
}

var chile = makeCountry("The Republic of Chile", "South America");
var canada = makeCountry("Canada", "North America");
var southAfrica = makeCountry("The Republic of South Africa", "Africa");

console.log(chile.getDescription()); // "The Republic of Chile is located in South America."
console.log(canada.getDescription()); // "Canada is located in North America."
console.log(southAfrica.getDescription()); // "The Republic of South Africa is located in Africa."

canada.visitCountry();
console.log(canada.getDescription()); // "Canada is located in North America."
