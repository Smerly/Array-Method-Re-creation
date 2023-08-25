

const animals = ['pigs', 'goats', 'sheep'];

// 4 min
// O(n) time O(n) space
function pushMine() {
    // console.log(arguments)
    for (let i = 0; i < arguments.length; i++) {
        console.log(`animal len: ${animals.length}`)
        // length will always be 1 above the index
        animals[animals.length] = arguments[i]
        // console.log(animals)
    }
    return animals.length
}

const count = pushMine('cows');

// console.log(count);
// Expected output: 4

// console.log(animals);
// Expected output: Array ["pigs", "goats", "sheep", "cows"]

pushMine('chickens', 'cats', 'dogs');

console.log(animals);
// Expected output: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]


