function newPerson(name) {
  var obj = {
    name: name,
    log: function() {
      console.log(this.name);
    },
  };
  Object.defineProperties(obj, {
    log: { writable: false }
  });
  return obj;
}

var me = newPerson('Shane Riley');
me.log();     // Shane Riley
me.log = function() { console.log("Amanda Rose"); };
me.log();     // Shane Riley
