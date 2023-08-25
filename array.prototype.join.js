const elements = ['Fire', 'Air', 'Water'];

// 3 min
// O(n) time O(1) space 
function joinMine(separator=',') {
    let tempStr = ''
    for (let i = 0; i < elements.length; i++) {
        tempStr += `${elements[i]}${separator}`
    }
    return tempStr
}

console.log(joinMine());
// Expected output: "Fire,Air,Water"

console.log(joinMine(''));
// Expected output: "FireAirWater"

console.log(joinMine('-'));
// Expected output: "Fire-Air-Water"