// What would log when the function is ran?

var num = 50;

function logNumber() {
    console.log(num);

    var num = 100;
}

logNumber();

// Answer:
/* 

It logs underfined as var is function scoped.  It gets hoisted to the top like the code below, therefore it is undefined.

Under the hood:

var num = 50;

function logNumber() {
    var num;
    
    console.log(num);

    var num = 100;
}

logNumber();

*/

/* Notes:

1.  

*/