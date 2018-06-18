// What does using 'strict mode' do to your code?
// What are the benfits of using 'strict mode'?

'use strict';

/* 

Notes:

1.  Enforce stricter parsing and error handling in your code.
2.  Prevents the use of global variables.

Example 1:

If we declare city without using the var keyword;

city = london;

console.log(city);

// This would log it because it is now stored as a global variable.

by putting 'use strict';

it will output city is not defined.


Example 2:

'use strict'

function myFunc(a, a, b) {
    console.log(a, a, b);
}

We will get an error because 2 of the paramenters are the same name.


If we dont use it, it will log it out.

myFunc(1, 2, 3)

it will log out 2 2 3 because it thinks we overrode the a with 2

*/