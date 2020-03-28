function sequence(startNumber, step) {
    function plus() {
        let a = startNumber
        startNumber += step;
        return a;
    }
    return plus;
}
let generatorOne = sequence(4,5)
console.log(generatorOne())
console.log(generatorOne())
console.log(generatorOne())
console.log('another')
let generatorTwo = sequence(3, 2);
console.log(generatorTwo())
console.log(generatorTwo())
console.log(generatorTwo())
console.log(generatorTwo())
console.log(generatorTwo())
console.log(generatorTwo())
console.log('another')
let generatorThree = sequence(0, 7);
console.log(generatorThree())
console.log(generatorThree())
console.log(generatorThree())
console.log(generatorThree())


