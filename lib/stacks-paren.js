/*jshint node: true */
'use strict';
//Thanks to Chareesa for the idea for the use of stacks, and Karl Gentner for the module example.
var Stack = require('./stack.js');

var parens = function(arg){

  var parens = new Stack();
  var exp = arg.split('');

  for (var i = 0; i < (exp.length - 1); i++) {
    if (exp[i] === '(' ) {
      parens.push(i);
    }
    else if (exp[i] === ')') {
      if (parens.top === ')') {
        parens.push(i);
      }
      else {
        parens.pop();
      }
    }
  }

  return Number(parens.data[0]);

};


module.exports = parens;
