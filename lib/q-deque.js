/*jshint node: true */
'use strict';

function Deque() {
  this.dataStore = [];

  this.addback = function(element) {
    this.dataStore.push(element);
  };

  this.addfront = function(element) {
    this.dataStore.unshift(element);
  };

  this.rmfront = function () {
    return this.dataStore.shift();
  };

  this.rmback = function() {
    return this.dataStore.pop();
  };

  this.front = function() {
    return this.dataStore[0];
  };

  this.back = function() {
    return this.dataStore[this.dataStore.length-1];
  };

  this.toString = function toString() {
    var retStr = "";
    for (var i = 0; i < this.dataStore.length; ++i) {
      retStr += this.dataStore[i] + "\n";
    }
  return retStr;
  };

  this.empty = function empty() {
    if (this.dataStore.length === 0) {
      return true;
    }
    else {
      return false;
    }
  };
}

// var shaker = function(word) {
//   arr = word.split('');
//   var frontLetter = 's';
//   var lastLetter = 'e';
//   arr.unshift(frontLetter);
//   console.log(arr.join(''));
//   arr.push(lastLetter);
//   console.log(arr.join(''));
//   arr.shift();
//   console.log(arr.join(''));
//   arr.pop();
//   console.log(arr.join(''));
// };

// shaker('car');

module.exports = Deque;
