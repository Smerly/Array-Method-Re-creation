const array1 = [1, 2, 3];

const pets = ['cat', 'dog', 'bat'];

// 1 min
// O(n) time O(1) space
function includesMine(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return true
        }
    }
    return false
}

console.log(includesMine(array1, 2));
// Expected output: true

console.log(includesMine(pets, 'cat'));
// Expected output: true

console.log(includesMine(pets, 'at'));
// Expected output: false