
const arr = [1, 30, 39, 29, 10, 13]

const myCondition = (each) => {
    return each < 40
}
// 3 min
function everyMine(arr, condition) {
    for (let i = 0; i < arr.length; i++) {
        if (!condition(arr[i])) {
            return false
        }
    }
    return true
}

console.log(everyMine(arr, myCondition))