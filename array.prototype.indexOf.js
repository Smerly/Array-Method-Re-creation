
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

// 3 min
// O(n) time, O(1) space
function indexOfMine(arr, target, skips=1) {
    for (let i = 0; i < arr.length; i++) {
        if (beasts[i] === target && skips !== 1) {
            skips -= 1
        } else if (beasts[i] === target && skips === 1) {
            return i
        }
    }
    return -1
}

console.log(indexOfMine(beasts, 'bison'));
// Expected output: 1

// Start from index 2
console.log(indexOfMine(beasts, 'bison', 2));
// Expected output: 4

console.log(indexOfMine(beasts, 'giraffe'));
// Expected output: -1


