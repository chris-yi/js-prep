// What is the difference between the comparison operators == and === ?

console.log(7 == '7');  // true
 
console.log(7 === '7');  // false

/* Notes:

== (equals) vs === (strict equals)

1.  == tests for abstract equality while === tests for strict equality
2.  == does not test for data types
3.  === does test for data type
4.  What happens "under the hood" when using == compare?
    - If we are comparing numbers and strings
        - string is converted to a number then the comparison is made.
    - If we are comparing boolean and non-boolean
        - non-boolean is converted to a boolean then the comparison is made.
    - If we are comparing an object with a primitive data-type
        - object is converted to a primitive data-type then the comparison is made.

*/