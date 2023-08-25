const array = [1, 2, 3, 4, 5];

// Checks whether an element is even
const even = (element) => element % 2 === 0;

// 2 min
// O(n) time O(1) space

function someMine(callback) {
    for (i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            return true
        }
    }
    return false
}

console.log(array.some(even));
// Expected output: true