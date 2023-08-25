const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

// 3 min
// O(n) time O(n) space

function sliceMine(start, end=animals.length) {
    let tempArr = []
    for (let i = start; i < end; i++) {
        tempArr.push(animals[i])
    }
    return tempArr
}

console.log(sliceMine(2))
// expect ['camel', 'duck', 'elephant']

console.log(sliceMine(4))
// expect ['elephant']

console.log(sliceMine(2, 4))
// expect ['bison', 'camel', 'duck']