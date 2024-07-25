// write code here
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const filteredArray = filterRange(arr, 3, 7);

function filterRange(arr, a ,b) {
    let result = arr.filter(x => x >= a && x <= b)
    return result
};

console.log(filteredArray);
