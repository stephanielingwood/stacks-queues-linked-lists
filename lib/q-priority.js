/*jshint node: true */
'use strict'

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
      retStr += this.dataStore[i] + "\n";
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

function Patient(name, code) {
  this.name = name;
  this.code = code;
}


var ed = new Deque();
var p = new Patient("Smith",5);
ed.enqueue(p);
p = new Patient("Jones", 4);
ed.enqueue(p);
p = new Patient("Fehrenbach", 6);
ed.enqueue(p);
p = new Patient("Brown", 1);
ed.enqueue(p);
p = new Patient("Ingram", 1);
ed.enqueue(p);

// print queue
console.log(ed.toString());

// first round
seen = ed.dequeue();
console.log("Patient being treated: " + seen[0].name);
console.log("Patients waiting to be seen: ");
console.log(ed.toString());

// second round
seen = ed.dequeue();
console.log("Patient being treated: " + seen[0].name);
console.log("Patients waiting to be seen: ");
console.log(ed.toString());

// third round
seen = ed.dequeue();
console.log("Patient being treated: " + seen[0].name);
console.log("Patients waiting to be seen: ");
console.log(ed.toString());

// fourth round
seen = ed.dequeue();
console.log("Patient being treated: " + seen[0].name);
console.log("Patients waiting to be seen: ");
console.log(ed.toString());

// fifth round
seen = ed.dequeue();
console.log("Patient being treated: " + seen[0].name);
console.log("Patients waiting to be seen: ");
console.log(ed.toString());
