/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * @constructor
 * @param {NestedInteger[]} nestedList
 */
var NestedIterator = function(nestedList) {
    this.stack = [] // results
    this.flatten(nestedList)
};

NestedIterator.prototype.flatten = function(arr){
    for (item of arr){
        if(item.isInteger()){ // return true of item is an integer
            this.stack.push(item.getInteger()) // returns the integer
        } else {
            this.flatten(item.getList()) // calls the flattens function
        }
    }
}

/**
 * @this NestedIterator
 * @returns {boolean}
 */
NestedIterator.prototype.hasNext = function() {
    return this.stack.length
};

/**
 * @this NestedIterator
 * @returns {integer}
 */
NestedIterator.prototype.next = function() {
   return this.stack.shift()
};

/**
 * Your NestedIterator will be called like this:
 * var i = new NestedIterator(nestedList), a = [];
 * while (i.hasNext()) a.push(i.next());
*/


// const myClass = new NestedIterator(1)
// myClass.next() => 1
// myClass.hasNext() => false

// 1
// [1, 2] => getList() => [1, 2].shift() => 1
// [[1, 2], [[[3, 4]]], 5] => getList() => [1, 2, [3, 4], 5]
// Array.isArray(arr) // return true | false

/*
    const arr = [[1, 2], [[[3, 4]]], 5]
    const ourIterator = new NestedIterator(arr)
    
    ourIterator.hasNext() // return true
    // arr = [1, 2, [[3, 4]], 5]

    ourIterator.hasNext() // return true
    // arr = [1, 2, [3, 4], 5]

    ourIterator.hasNext() // return true
    // arr = [1, 2, 3, 4, 5]  

    ourIterator.hasNext() // return false
 */