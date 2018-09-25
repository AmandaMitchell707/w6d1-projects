function sum(...args) {
  let sum = 0;
  let arr = args;
  arr.forEach ((el) => {
    sum += el;
  });
  return sum;
}

Function.prototype.myBind = function() {
  let arr = Array.from(arguments);
  const context = arr.shift();
  const that = this;
  
  return function () {
    let newArr = arr.concat(Array.from(arguments)); // this adds the arguments from the returned function
    return that.apply(context, newArr);
  };
};

Function.prototype.myBind = function(...args1) {
  let arr = args1;
  const context = arr.shift();
  
  return (...args2) => {
    let newArr = arr.concat(args2); // this adds the arguments from the returned function
    return this.apply(context, newArr);
  };
};

function curriedSum(numArgs) {
  
  let numbers = [];
  
  return function _curriedSum(num) {
    numbers.push(num);

    if (numbers.length === numArgs) {
      let sum = 0;
      numbers.forEach((el) => sum += el);
      return sum;
    }
    return _curriedSum;
  };    
}

Function.prototype.curry = function(numArgs) {
  let args = [];
  let that = this;
  return function _curry(arg) {
    args.push(arg);
    if (args.length === numArgs) {
      return that.apply(null,args);
    }
    return _curry;
  };
};

Function.prototype.curry = function(numArgs) {
  let args = [];
  let that = this;
  return function _curry(arg) {
    args.push(arg);
    if (args.length === numArgs) {
      return that(...args);
    }
    return _curry;
  };
};

function multiplyNumbers(num1, num2) {
  return num1 * num2;
}

multiplyNumbers.curry(2);
// Function.prototype.myBind = function() {
//   let arr = Array.from(arguments);
//   const context = arr.shift();
//   const that = this;
// 
//   return function () {
//     let newArr = arr.concat(Array.from(arguments)); // this adds the arguments from the returned function
//     return that.apply(context, newArr);
//   };
// };

// let meow = meow.myBind(this, "Markov","yay","fun","pizza")
// meow('liz')