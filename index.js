//write your code here
function receivesAFunction(callback) {
    callback();
  }
  
  function returnsANamedFunction() {
    return function namedFunction() {
      console.log("This is a named function");
    }
  }
  
  function returnsAnAnonymousFunction() {
    return function() {
      console.log("This is an anonymous function");
    }
  }
  
  module.exports = { receivesAFunction, returnsANamedFunction, returnsAnAnonymousFunction };
  
