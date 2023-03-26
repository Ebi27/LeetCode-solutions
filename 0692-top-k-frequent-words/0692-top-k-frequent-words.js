/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */


function topKFrequent(words, k) {
  let freq = new Map(), res = []
    for(let i = 0; i < words.length; i++){
        let item = words[i]
        if(freq.has(item)){
            let count = freq.get(item)
            freq.set(item, count + 1)
        } else {
            freq.set(item, 1)
        }
    }
    let bigList = []
    for(let item of freq){
        bigList.push(item)
    }
    const sortedOrder = bigList.sort((a, b) => {
        if (a[1] === b[1]) {
            return a[0].localeCompare(b[0]); // sort by word in lexicographical order
        }
        return b[1] - a[1]
    })
    for(let i = 0; i < k; i++) {
        res.push(sortedOrder[i][0])
    }
    return res
}
