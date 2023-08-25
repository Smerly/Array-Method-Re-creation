const arr1 = [0, 1, 2, [3, 4]];

// expected output: Array [0, 1, 2, 3, 4]
// 15 min
// O(n^2) time O(n^2) space
const arr2 = [0, 1, [2, [3, [4, 5]]], 1];

function flatMine(depth) {
    let tempArr = []
    while (depth !== 0) {
        for (let i = 0; i < arr1.length; i++) {
            if (Array.isArray(arr1[i])) {
                tempArr.push(...arr1[i])
            } else {
                tempArr.push(arr1[i])
            }
        }
        depth--
    }
    return tempArr
    // return [].concat(...arr2)
}

console.log(flatMine(1))

// console.log(arr1.concat(...arr2))
