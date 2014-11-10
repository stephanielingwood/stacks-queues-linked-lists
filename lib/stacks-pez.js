/*jshint node: true */
'use strict';

module.exports = function(pez) {

  var holdingStack = []
  var noYellowPez = []

  for (var i = (pez.length - 1); i >= 0; i--) {
    if (pez[i] !== 'yellow') {
      holdingStack.push(pez[i]);
    }
  }

  for (var j = (holdingStack.length - 1); j >= 0; j--) {
    noYellowPez.push(holdingStack[j]);
  }

  for (var k = 0; k < noYellowPez.length; k++) {
    console.log(noYellowPez[k]);
  }

  return noYellowPez;
};
