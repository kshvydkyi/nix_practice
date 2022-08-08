function isPowOfTwo(number = 1){
    if(number < 1){
        return false;
    }
    return (number & (number - 1)) === 0;
}

console.log(isPowOfTwo(16)); //true
console.log(isPowOfTwo(14)); //false