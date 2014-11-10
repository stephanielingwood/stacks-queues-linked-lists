/*jshint node: true */
'use strict';

  var Stack = function(){
    this.data = [];
  };

  Stack.prototype.push = function(item) {
    this.data.push(item);
  };

  Stack.prototype.pop = function(item) {
    this.data.pop(item);
  };

  Stack.prototype.top = function() {
    return (this.data[this.data.length - 1]);
  };

module.exports = Stack;
