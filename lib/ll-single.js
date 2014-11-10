/*jshint node: true */
'use strict';

module.exports = function() {
  function Node(element) {
    this.element = element;
    this.next = null;
    this.previous = null;
  }

  function LList() {
    this.head = new Node("head");
    this.find = find;
    this.insert = insert;
    this.display = display;
    this.findPrevious = findPrevious;
    this.remove = remove;
  }

  LList.prototype.remove(item) {
    var prevNode = this.findPrevious(item);
    if (prevNode.next !== null)) {
      prevNode.next = prevNode.next.next;
    }
  };

  LList.prototype.findPrevious(item) {
    var currNode = this.head;
    while (currNode.next !== null) &&
      (currNode.next.element != item)) {
      currNode = currNode.next;
    }
    return currNode;
  };

  LList.prototype.display() {
    var currNode = this.head;
    while (currNode.next !== null)) {
      content.log(currNode.next.element);
      currNode = currNode.next;
    }
  };

  LList.prototype.find(item) {
    var currNode = this.head;
    while (currNode.element != item) {
      currNode = currNode.next;
    }
    return currNode;
  };

  LList.prototype.insert(newElement, item) {
    var newNode = new Node(newElement);
    var current = this.find(item);
    newNode.next = current.next;
    current.next = newNode;
  };
};
