// What is the 'this' keyword and how is it used?

/* 
1. It refers to whatever object it is directly inside of.
2. For example, if you open the browser console and console.log(this), we get the global window object.
*/


var house = {
    price: 100000,
    squareFeet: 2000,
    owner: 'Taylor',
    getPricePerSquareFoot: function() {
      return this.price / this.squareFeet;
    }
  };
   
  console.log(house.price);
  console.log(house.getPricePerSquareFoot());
  




/* 

Notes:

1.  IIFE = Immediately Invoked Function Expression
2.  Function that is executed right after it is created
3. The main reason to use a IIFE is to preserve a private scope within your function.
4.  Variables inside the IIFE are not accessible outside the function

*/