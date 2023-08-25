const arr = [5, 12, 8, 130, 44]

const arr2 = [1, 2, 4, 6, 12]
// 3 min
// Time O(n) Space O(1)
function concatMine() {
    // console.log(arguments)
    let tempArr = []
    for (let i = 0; i < arguments.length; i++) {
        if (Array.isArray(arguments[i])) {
            tempArr = [...tempArr, ...arguments[i]]
        } else {
            tempArr.push(arguments[i])
        }
    }
    return tempArr
}

// console.log(concatMine(arr, arr2))
console.log(concatMine([], ...[0, 1, 2, [3, 4]]))

console.log(concatMine([1,2], [0, 1, 2, [3, 4]]))
