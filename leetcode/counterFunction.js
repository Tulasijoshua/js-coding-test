var createCounter = function(init) {
    let initial = init
    let handleCounter = {
        increment: function() {
            return ++init;
        },
        decrement: function() {
            return --init;
        },
        reset: function() {
            return init = initial
        }
    }
    return handleCounter;
};

let counter = createCounter(0);
console.log(counter.increment())
console.log(counter.increment())
console.log(counter.decrement())
console.log(counter.reset())
console.log(counter.reset())