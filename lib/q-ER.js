/*jshint node: true */
'use strict';

function Deque() {
  this.dataStore = [];

  this.enqueue = function(element) {
    this.dataStore.push(element);
  };

  this.addfront = function(element) {
    this.dataStore.unshift(element);
  };

  this.dequeue = function () {
    var entry = 0;
    for (var i = 0; i < this.dataStore.length; i++) {
        if (this.dataStore[i].code > this.dataStore[entry].code) {
          entry = i;
        }
      }
    return this.dataStore.splice(entry,1);
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
      retStr += this.dataStore[i].name + "\n";
    };
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
};
//use Queue.prototype.enqueue = function


function Patient(name, code) {
  this.name = name;
  this.code = code;
}

var ed = new Deque();


var patientEnters = function(name, priority) {
  var p = new Patient(name, priority)
  ed.enqueue(p);
};

var seenByDoctor = function() {
  seen = ed.dequeue();
  console.log("the doctor is seeing " + seen[0].name)
};

var waitingList = function() {
  console.log(ed.toString());
};

patientEnters('mike', 2)
patientEnters('george', 4)
patientEnters('sarah', 6)
patientEnters('amanda', 3)
seenByDoctor();
waitingList();
