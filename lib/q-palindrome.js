/*jshint node: true */
'use strict';

var Deque = require('./q-deque.js');



// var checkPalindrome = function(string) {
  Deque.prototype.palincheck = function(string) {
  this.dataStore = string.split();
  var i = 0;
  var j = (this.dataStore.length - 1);
  var palindrome = false;

  while (i <= j) {
    if (this.dataStore[i] === this.dataStore[j]) {
      palindrome = true;
      if (i === j || i === (j - 1)) {
        return palindrome;
      }
      i++;
      j--;
    }
    else {
      palindrome = false;
      return palindrome;
    }
  }
  return palindrome;
};

  // var checkIt = new Deque();
  // checkIt.palincheck(string);
  // return palindrome;
// };

module.exports = Deque.palincheck();

// };


// var check = function(string) {
// var checkIt = new Deque();
// checkIt.dataStore = string.split('');
// console.log(checkIt.dataStore);
// var result = checkIt.palincheck()
// if (result) {
//   console.log("a palindrome!");
// }
// else {
//   console.log("so sad...not a palindrome.")
// }
// }

// check('rarcar');
