const array1 = ['one', 'two', 'three'];

// Odd number of elements
// [1, 2, 3, 4, 5, 6, 7]
// [7, 2, 3, 4, 5, 6, 1]
// [7, 6, 3, 4, 5, 2, 1]
// [7, 6, 5, 4, 3, 2, 1]

// Even number of elements
// [1, 2, 3, 4, 5, 6]
// [6, 2, 3, 4, 5, 1]
// [6, 5, 4, 3, 2, 1]

// 3 min
// O(n) time, O(1) time, tempElement goes out of scope after the loop
function reverseMine() {

    for (let i = 0; i < array1.length / 2; i++) {
        let tempElement = array[i]
        array1[i] = array1[array1.length - i]
        array1[array1.length - i] = tempElement
    }
    return array1
}

console.log('array1:', array1);
// Expected output: "array1:" Array ["one", "two", "three"]

const reversed = array1.reverse();
console.log('reversed:', reversed);
// Expected output: "reversed:" Array ["three", "two", "one"]

// Careful: reverse is destructive -- it changes the original array.
console.log('array1:', array1);
// Expected output: "array1:" Array ["three", "two", "one"]