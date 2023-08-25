const array1 = [5, 12, 8, 130, 44];

// 2 min
// O(n) time, O(1) space
function findMine(callback) {
    for (let i = 0; i < array1.length; i++) {
        if (callback(array1[i])) {
            return array1[i]
        }
    }
    // returns undefined by default
}


const found = findMine(element => element > 10);
console.log(found)