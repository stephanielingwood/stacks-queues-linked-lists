/*jshint node: true */
'use strict';

module.exports = function(arg){
  var infix = arg;
  var postfix = '';

  // var convert = function(infix) {
    var operand1 = infix[0];
    var operand2 = infix[2];
    var operator = infix[1];

    postfix = operand1 + ' ' + operand2 + ' ' + operator;
    var result = eval(operand1 + ' ' + operator + ' ' + operand2);

    console.log(postfix);
    console.log(result);
    return result;
  };

  // convert(exp);
// };
