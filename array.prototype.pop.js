const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

// 5 min
// O(1) time O(1) space
function popMine() {
    const temp = plants[plants.length - 1]
    plants.length--
    return temp
}

popMine(plants)

console.log(plants);
// Expected output: Array [ 'broccoli', 'cauliflower', 'cabbage', 'kale' ]

const poppedElement = popMine(plants)
console.log(poppedElement)
// Expected output: "kale"
