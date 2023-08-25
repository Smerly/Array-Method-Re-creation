const array1 = [1, 2, 3, 4, 5];

// [1, 2, 3, 4, 5]
// [1, 3, 3, 4, 5]
// [1, 3, 4, 4, 5]
// [1, 3, 4, 5, 5]
// [1, 3, 4, 5, 6]

// [1, 2, 3, 4, 5]
// [2, 3, 4, 5, 6]
// [2, 3, 4, 5]

// 8 min
// O(n) time O(1) space

function shiftMine() {
    const returnElement = array1[0]
    for (let i = 0; i < array1.length; i++) {
        if (array1[i+1]){
            array1[i] = array1[i + 1]
        }
    }
    array1.length--
    return returnElement
}

const firstElement = shiftMine();

console.log(array1);
console.log(firstElement)