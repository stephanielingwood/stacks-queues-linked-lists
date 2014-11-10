var expect = require('chai').expect;
var paren = require('../lib/stacks-paren.js');
var infix = require('../lib/stacks-infix.js');
var pez = require('../lib/stacks-pez.js');
var palindrome = require('../lib/q-palindrome.js');

describe('Stacks - parenthesis', function() {
  it('finds lone parenthesis', function() {
    expect(paren('2.3+23/12+(3.14+.24*10')).to.eql(10);
  });
});

describe('Stacks - infix', function() {
  it('returns an evaluated postfix expression', function() {
    expect(infix('2+2')).to.eql(4);
  });
});

describe('Stacks - pez', function() {
  it('returns a pez dispenser with the yellow ones removed', function() {
    expect(pez(['red', 'yellow', 'red', 'white', 'yellow', 'red'])).to.eql(['red', 'red', 'white', 'red']);
  });
});

// describe('Queues - palindrome', function() {
//   it('correctly identifies a palindrome', function() {
//     expect(palindrome.palincheck('racecar')).to.eql(true);
//   });

  // it('correctly identifies no palindrome', function() {
  //   expect(palindrome.palincheck('hello')).to.eql(false);
  // });
});
