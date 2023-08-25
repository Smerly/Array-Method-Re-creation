
const array1 = [5, 12, 50, 130, 44];

// 4 min
// O(n) time, O(1) space
function findLastMine(callback) {
    // starting value of i as the end of the array's index
    // condition to end loop is if i is less than 0
    // increment backwards
    for (let i = array1.length; i > 0; i--) {
        if (callback(array1[i])) {
            return array1[i]
        }
    }
}

const found = findLastMine((element) => element > 45);

console.log(found)