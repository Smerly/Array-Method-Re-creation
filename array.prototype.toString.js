const array1 = [1, 2, 'a', '1a'];

// 1 min
// O(n) time O(n) space
function toStringMine(arr) {
    let tempStr = ''
    for (let i = 0; i < arr.length; i++) {
        tempStr += String(arr[i])
        if (i !== arr.length - 1) {
            tempStr += ','
        }
    }
    return tempStr
}

console.log(toStringMine(array1))