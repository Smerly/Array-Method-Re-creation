
const array1 = [5, 12, 50, 130, 44];

const isLargeNumber = (element) => element > 45;
// 2 min
// O(n) time O(1) space
function findLastIndexMine(callback) {
    for (i = array1.length; i > 0; i--) {
        if (callback(array1[i])) {
            return i
        }
    }
}

console.log(findLastIndexMine(isLargeNumber))