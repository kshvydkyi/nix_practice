function substrCount(input, needle, offset, length){
    let inputLower = input.toLowerCase();
    let needleLower = needle.toLowerCase();

    let str = '';
    for(let i = offset; i < length + offset; i++){
        str += inputLower[i];
    }
    let count = str.split(needleLower).length - 1;
    return count;
}

console.log(substrCount('Good Golllllly Miss Molly', 'll', 7, 10))