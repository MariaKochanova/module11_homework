function createAdder(x) {
    return function (y) {
        return x + y;
    }
}

let addFive = createAdder(5);
let result = addFive(3);

console.log(result); 