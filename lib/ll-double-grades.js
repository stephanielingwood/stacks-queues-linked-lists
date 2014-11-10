/*jshint node: true */
'use strict';
// Pair Progammed with Christian Townsdin. Woot!
//--------------------------------
// Doubly Linked Lists
// -------------------------------
// The Node Class

//added this.grade to function Node
//

// module.exports = function() {

  function Node(element, grade) {
      this.element = element;
      this.next = null;
      this.previous = null;
      this.grade = grade || 0;
  }
  // The LList Class
  function LList() {
      this.head = new Node("head");
      this.tail = this.head;
  }
  LList.prototype.find = function (item) {
      var currNode = this.head;
      while (currNode.element !== item) {  // while (not found)
          currNode = currNode.next;   // keep looking
      }
      return currNode;    // return found item
  };
  LList.prototype.findPrevious = function (item) {
  var currNode = this.head;
      while ((currNode.next !== null) &&
                     (currNode.next.element !== item)) {
          currNode = currNode.next;       // keep looking till we find prev
      }
      return currNode;    // return prev
  };
  // LList.prototype.insert = function (newElement, item) {
  //     var newNode = new Node(newElement);
  //     var current = this.find(item);
  //     newNode.next = current.next;
  //     newNode.previous = current;
  //     current.next = newNode;
  //     this.tail = newNode
  // };
  LList.prototype.display = function () {
      var currNode = this.head;
      while (currNode.next !== null) {
          console.log(currNode.next.element);  // log next
          currNode = currNode.next;       // move next
      }
  };
  LList.prototype.dispReverse = function () {
      var currNode = this.head;
      currNode = this.findLast();
      while (currNode.previous !== null) {
          console.log(currNode.element);
          currNode = currNode.previous;
      }
  };
  LList.prototype.findLast = function () {
      var currNode = this.head;
      while (currNode.next !== null) {
          currNode = currNode.next;
      }
      return currNode;
  };
  // TODO:  fix, if the next IS Null, fix.
  LList.prototype.remove = function (item) {
      var currNode = this.find(item);
      if (currNode.next !== null) {
          currNode.previous.next = currNode.next;
          currNode.next.previous = currNode.previous;
          currNode.next = null;
          currNode.previous = null;
      }
      else {
        this.tail = currNode.previous;
      }
  };
  LList.prototype.advance = function(item, n) {
      var current = this.find(item);
      var temp = current;
      this.remove(item);
      for (var i = 0; i < n; i++) {
        current = current.next;
      }
      temp.next = current.next;
     current.next = temp;
  };
  // TODO: This only works if you're not on the edges of the List
  // TODO:  Fix this late if time
  // ADD a check to keep from moving back the head!
  LList.prototype.back = function(item, n) {
      var current = this.find(item);
      var previous = this.findPrevious(item);
      this.remove(item);

      for (var i=0; i<n; i++) {
        previous = this.findPrevious(previous.element);
      }
      // temp.next = current.next;
      // temp.previous = current;
      current.next = previous.next;
      current.previous = previous;
      previous.next = current;
      previous.next.previous = current;
  };



// ADD STUDENT FUNCTION
LList.prototype.addStudent = function (newElement, grade) {
    var newNode = new Node(newElement, grade);
    var current = this.tail;
    newNode.next = current.next;
    newNode.previous = current;
    current.next = newNode;
    this.tail = newNode;
};


// UPDATE GRADE FUNCTION
LList.prototype.updateGrade = function (student, grade) {
    var currNode = this.head;
    while (currNode.element !== student) {  // while (not found)
        currNode = currNode.next;   // keep looking
    }
    currNode.grade = grade;
    console.log(student + '--' + currNode.grade); // report to teacher
};

// SHOW GRADE FUNCTION
LList.prototype.displayStudent = function(student) {
  var current = this.find(student);
  console.log(student + '--' + current.grade);
};

// SHOW ALL GRADES FUNCTION
LList.prototype.displayAll = function () {
var currNode = this.head;
while (currNode.next !== null) {
          console.log(currNode.next.element + ' ' + currNode.next.grade);
          currNode = currNode.next;
       }
};

// Write a program that uses a singly linked list to keep track of a set of test // grades entered interactively into the program.

var classList = new LList();
classList.addStudent("Alice", 95);
classList.addStudent("Rus", 85);
classList.addStudent("Ada");
classList.displayAll();

classList.displayStudent('Rus');
classList.updateGrade('Ada', 95);
classList.displayAll();

