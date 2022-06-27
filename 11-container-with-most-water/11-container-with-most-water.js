/**
 * @param {number[]} height
 * @return {number}
 */

/* breaking the question down 
- Given an integer passed in the height argument 
- The integer has a length of n 
- There are n vertical lines with two endpoints (i, 0) and (i, height[i]) 

Problem 
- Find two lines that meets a line at the x axis and this forms a container 
- This container contains the most water 
- Return the maximum amount of water a container can store */ 

//Example
// if our input height has [1,8,6,2,5,4,8,3,7] array  
// The maximum amount of water the container can store is 49. But how ? 

/* Thought process 
If the max amount of water was gotten by summing up the entire nums in the array then we 
would have max amount of water as 44 not 49. 
*/ 


// someone's code that i'm trying to understand 


var maxArea = function(height) {
    let maxCapacity = 0;
    let firstPoint = 0;
    let secondPoint = height.length - 1;
    for(let i = 0; i<height.length; i++) {
        let lowestValueIndex = height[firstPoint] < height[secondPoint] ? firstPoint : secondPoint;
        let capacity = height[lowestValueIndex] *  (secondPoint - firstPoint);
        maxCapacity = capacity > maxCapacity ? capacity : maxCapacity;
        
        if(height[firstPoint] < height[secondPoint]) {
            firstPoint++;
        } else {
            secondPoint--;
        }
    }
    return maxCapacity;
    
};