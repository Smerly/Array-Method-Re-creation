const arr1 = [1, 2, 1];

const condition = (num) => (num === 2 ? [2, 2] : 1)

// 4 min
// O(n) time O(n) space

function flatMapMine(callback) {
    let tempArr = [];
    for (let i = 0; i < arr1.length; i++) {
        tempArr.push(condition(arr1[i]))
    }
    return tempArr
}

console.log(flatMapMine(condition))

