const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const condition = (accumulator, currentValue) => accumulator + currentValue


// 11 min
// O(n) time O(n) space

function reduceMine(callback, initial) {
    for (let i = 0; i < array1.length; i++) {
        initial = callback(initial, array1[i])
        
    }
    return initial
}

console.log(reduceMine(condition, initialValue));
// Expected output: 10