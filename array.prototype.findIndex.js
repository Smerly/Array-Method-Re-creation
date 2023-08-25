
const array1 = [5, 12, 8, 130, 44];

const isLargeNumber = (element) => element > 13;

// 1 min
// O(n) time, O(1) space
function findIndex(callback) {
    for (i = 0; i < array1.length; i++) {
        if (callback(array1[i])) {
            return i
        }
    }
}

console.log(findIndex(isLargeNumber))

