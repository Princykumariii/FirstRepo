const obj = {
  value: 42,
  regularMethod: function() {
    console.log(this.value); // Works: 42
  },
  arrowMethod: () => {
    console.log(this.value); // Undefined because `this` is not bound to `obj`
  }
};
obj.regularMethod();
obj.arrowMethod();