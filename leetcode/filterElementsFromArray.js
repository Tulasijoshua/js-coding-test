var filter = function(arr, fn) {
    let newArray = [];
    for(let i = 0; i < arr.length; i++) {
        num = fn(arr[i], i);
        if(num) {
            newArray.push(arr[i]);
        }
    }
    return newArray;
};

arr = [-2,-1,0,1,2]
fn = function plusOne(n) { return n + 1 }
const newArray = filter(arr, fn);
console.log(newArray)