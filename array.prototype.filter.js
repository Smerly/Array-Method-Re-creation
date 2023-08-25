const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];


// 4 min
// O(n) time, O(n) space
function filterMine(callback) {
    let tempArr = []
    for (let i = 0; i < words.length; i++) {
        if (callback(words[i])) {
            tempArr.push(words[i])
        }
    }
    return tempArr
}

const result = filterMine(word => word.length > 6);
console.log(result)