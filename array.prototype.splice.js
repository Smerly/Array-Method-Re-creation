const months = ['Jan', 'March', 'April', 'June'];

// ['Jan', 'March', 'April', 'June']
// ['Jan', 'March', 'April', 'June']

// 20 min
// This was the best solution I could think of
// O(n) time, O(n) space

function spliceMine(start, deleteCount) {
    const items = [...arguments].slice(2)
    const removed = months.slice(start, start + deleteCount)
    const before = months.slice(0, start)
    const after = months.slice(start + deleteCount)
    const tempArr = [...before, ...items ,...after]
    months.length = 0
    months.push(...tempArr)
    return months
}

spliceMine(1, 0, 'Feb');
// Inserts at index 1
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]

spliceMine(4, 1, 'May');
// Replaces 1 element at index 4
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "May"]
