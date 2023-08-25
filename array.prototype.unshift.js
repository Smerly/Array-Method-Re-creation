const array1 = [1, 2, 3, 4, 5, 6];

// [1, 2, 3, 4, 5, 6]
// [1, 2, 3, 4, 5, 6]

// 10 min
// O(1) time O(n) space
function unshiftMine() {
    const original = [...array1]
    array1.length = 0
    array1.push(...arguments, ...original)
    return array1.length
}

console.log(unshiftMine(4, 5));
// Expected output: 5

console.log(array1);
// Expected output: Array [4, 5, 1, 2, 3]