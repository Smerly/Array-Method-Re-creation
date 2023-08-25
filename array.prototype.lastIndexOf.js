
const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];


function lastIndexOfMine(searchElement, fromIndex=0) {
    for (let i = animals.length; i > fromIndex; i--) {
        if (animals[i] === searchElement) {
            return i
        }
    } 
}


console.log(lastIndexOfMine('Dodo'));
// Expected output: 3

console.log(lastIndexOfMine('Tiger'));
// Expected output: 1


