var map = function(arr, fn) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        num = fn(arr[i], i)
        newArr.push(num)
    }
    return newArr
};

fn = function constant() { return 42; }
let arr = [1, 2, 3]

const newArray = map(arr, fn);
console.log(newArray)