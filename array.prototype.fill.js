
const arr = [1, 2, 3, 4]

// 3 min
// O(n) time, O(1) space
function fillMine(value, start=0, end=arr.length) {
    for (let i = start; i < end; i++) {
        console.log(i)
        arr[i] = value
    }
    return arr
}

console.log(fillMine(5, 1, 4))