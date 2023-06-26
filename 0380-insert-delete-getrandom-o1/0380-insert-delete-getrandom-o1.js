/*
-Store the data in an array and use a hashmap to track the location of each element in the array 
- use the hashmap to lookup the location of the element to delete 
- Swap the element in the array with the one to be deleted 
- Update the location of the moved element in the hashmap 
- Delete the key-value pair of the target data element from the array. 
*/


var RandomizedSet = function() {
    this.hashmap = new Map();
    this.arr = []; 
 
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if(!this.hashmap.has(val)){
        this.arr.push(val)
       
        this.hashmap.set(val, this.arr.length-1)
        return true;
    }
    return false; 
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
if(!this.hashmap.has(val)){
      return false;
      }

else{
     const currIdx =  this.hashmap.get(val)
    const lastIdx = this.arr.length-1
    const lastItem = this.arr[lastIdx]
    
    swap(currIdx, lastIdx, this.arr)
    this.hashmap.set(lastItem, currIdx)
    this.hashmap.delete(val)
    this.arr.pop()
    return true 
 
}
}

 const swap = (curr, last, arr) => {
        let temp = arr[curr]
        arr[curr] = arr[last]
        arr[last] = temp
    }

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
  let genRandom = Math.floor((Math.random() * this.arr.length)) 
  console.log(this.arr.length)
  return this.arr[genRandom]
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

// this.map = new Map()
//     this.arr = []
// };

/** 
 * @param {number} val
 * @return {boolean}
 */
// RandomizedSet.prototype.insert = function(val) {
//     if(this.map.has(val)){
//       return false  
//     }
//     this.arr.push(val)
//     let idx = this.arr.length === 0 ? 0 : this.arr.length - 1  // to get the length of the existing arr, to update the map with the value and index. if the length of arr is 0, then we set the index to 0. If not, get the length o the array - 1 and use that as the index in the map. 
//     this.map.set(val, idx)  //set value and index in the map 
//     return true
// };

/** 
 * @param {number} val
 * @return {boolean}
 */
/**RandomizedSet.prototype.remove = function(val) {
   if(this.map.has(val)) {
        let currIdx = this.map.get(val) // idx of number
        let lastIdx = this.arr.length - 1
        let lastItem = this.arr[lastIdx]

        swap(currIdx, lastIdx, this.arr)
        this.map.set(lastItem, currIdx)
        this.map.delete(val)
        this.arr.pop()
        return true 
    }
    return false
};
// [ 3, 4, 20, 10, 7]
// 3: 0,  4: 1, 7:2, 10:3, 20:4  
const swap = (currIdx, lastIdx, arr)=>{
    let temp = arr[currIdx]
    arr[currIdx] = arr[lastIdx]
    arr[lastIdx] = temp
}


/**
 * @return {number}
 */
// RandomizedSet.prototype.getRandom = function() {
//    let random =  Math.floor((Math.random() * this.arr.length))
//    return this.arr[random]
    