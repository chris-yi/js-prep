// Describe what variable and function hoisting is and how it works.

// 1.  Scope is either global and function scope

// 2.  (Variable Hoisting) When we write:

var color = "blue";

// Javascript interprets it as

var color;
color = "blue";

// 3.  (Function Hoisting) works in the same way:

// Function Expression (when using var, let, const):
var getProduct = function(num1, num2) {
  return num1 * num2;
};

// It gets hoisted like this:

var getProduct;

console.log(getProduct(2, 3)); // will be undefined;

getProduct = function(num1, num2) {
  return num1 * num2;
};

// 4.  Function declaration:

function getProduct(num1, num2) {
  return num1 * num2;
}

// Function expression and function declartion are hoisted differently!.

console.log(getProduct(2, 3)); // This will work!

function getProduct(num1, num2) {
  return num1 * num2;
}

// 5.  var(function scoped) = global, function scope
//     const, let (block scoped) = global, function, block

// if you use const or let, the declartion will only be hoisted to the block that its in, never into the function or global scope.

// 6.  Variables and function are hoisted to the top of the scope that they are declared in.

// Example:

// This is what we would write

function getTotal() {
  console.log(multiplier);
  console.log(total);

  let total = 0;

  for (var i = 0; i < 10; i++) {
    let valueToAdd = i;
    var multiplier = 2;
    total += valueToAdd * multiplier;
  }

  return total;
}

getTotal();

// This is how it looks under the hood(hoisting)

function getTotal() {
  let total;
  var multiplier;

  total = 0;

  for (var i = 0; i < 10; i++) {
    let valueToAdd;

    valueToAdd = i;
    multiplier = 2;
    total += valueToAdd * multiplier;
  }

  return total;
}

getTotal();
