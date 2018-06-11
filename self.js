// What will be the output when the code below runs?

var myCar = {
    color: "Blue",
    logColor: function() {
        var self = this;
        console.log("In logColor - this.color: " + this.color);
        console.log("In logColor - self.color: " + self.color);
        (function() {
            console.log("In IIFE - this.color: " + this.color);
            console.log("In IIFE - self.color: " + self.color);
        })();
    }
};
 
myCar.logColor

// Answer:
/* 
In logColor - this.color: Blue
In logColor - self.color: Blue
In IIFE - this.color: undefined
In IIFE - self.color: Blue
*/

/* Notes:

1.  The this in the IIFE loses context because the this keyword is now in another function.  Which went to the global object which is why its undefined.
2. this = self is a common practice because its purpose is to store a reference to a certain scope that you need to use later on.

*/
