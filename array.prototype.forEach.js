const array1 = ['a', 'b', 'c'];

const doForEach = (element) => {
    console.log(element)
}

// 1 min
// O(n) time, O(1) space

function forEachMine(callback) {
    for (let i = 0; i < array1.length;i++) {
            array1[i] = callback(array1[i])
    }
}

console.log(forEachMine(doForEach))