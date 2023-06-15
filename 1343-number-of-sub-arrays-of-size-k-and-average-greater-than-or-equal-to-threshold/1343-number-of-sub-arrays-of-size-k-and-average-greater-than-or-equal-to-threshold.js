/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
var numOfSubarrays = function(arr, k, threshold) {
    let count = 0, currSum = 0;
    for (let i = 0; i < k; i++) {
        currSum += arr[i];
    }

    if (currSum / k >= threshold) {
        count += 1;
    }

    for (let i = k; i < arr.length; i++) {
        currSum += arr[i] - arr[i - k];

        if (currSum / k >= threshold) {
            count += 1;
        }
    }

    return count;
};
