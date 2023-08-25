const array1 = [1, 4, 9, 16];

const mapChange = (x) => {
    return x * 2
}

// 3 min
// O(n) time O(n) space

function mapMine(arr, callback) {
    let tempArr = []
    for (let i = 0; i < arr.length; i++) {
        tempArr.push(mapChange(arr[i]))
    }
    return tempArr
}


const map1 = mapMine(array1, mapChange);

console.log(map1)
// Expected output: Array [2, 8, 18, 32]