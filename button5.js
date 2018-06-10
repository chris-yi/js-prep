// Paste code below to JS Bin and try to figure out what will happen when you click on Button 5

// function createButtons() {
//     for (var i = 1; i <= 5; i++) {
//       var body = document.getElementsByTagName("BODY")[0];
//       var button = document.createElement("BUTTON");
//       button.innerHTML = 'Button ' + i;
//       button.onclick = function() {
//            alert('This is button ' + i);
//       }
//       body.appendChild(button);
//     }
//  }

//  createButtons();

// When button 5 in clicked, it says button 6.  Every button you click on says button 6.  Change the code to fix this.

// Solution 1 (Using IIFE)
function createButtons() {
  for (var i = 1; i <= 5; i++) {
    var body = document.getElementsByTagName("BODY")[0];
    var button = document.createElement("BUTTON");
    button.innerHTML = "Button " + i;
    //Solution, create an IIFE
    (function(num) {
      button.onclick = function() {
        alert("This is button " + num);
      };
    })(i);
    body.appendChild(button);
  }
}

// Solution 2  Create a helper function where you pass in button and i.
function createButtons() {
  for (var i = 1; i <= 5; i++) {
    var body = document.getElementsByTagName("BODY")[0];
    var button = document.createElement("BUTTON");
    button.innerHTML = "Button " + i;
    addClickFunctionality(button, i);
    body.appendChild(button);
  }
}

createButtons();

function addClickFunctionality(button, num) {
  button.onclick = function() {
    alert("This is button " + num);
  };
}

// Solution 3 using ES6 let

function createButtons() {
  for (let i = 1; i <= 5; i++) {
    var body = document.getElementsByTagName("BODY")[0];
    var button = document.createElement("BUTTON");
    button.innerHTML = "Button " + i;
    button.onclick = function() {
      alert("This is button " + i);
    };
    body.appendChild(button);
  }
}

createButtons();

/* 
Notes:

1.  If you dont use an IIFE, the for loop completes and i = 6, therefore in the alert, i is always 6.
2.  Everytime the IIFE is called, it stores a new variable for num, which we pass in i.
3.  Every instance is store, therefore the current i is preserved.
4.  Let solves this problem because let is block scoped and not function scoped.
5.  Practice this as this comes up in interviews a lot.
*/
