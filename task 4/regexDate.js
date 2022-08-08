function regexDate(date){
    let regex = /^\d|\d\d[-]\d|dd[-]\d\d\d\d$/;
    return regex.test(date);
}

console.log( regexDate('25-07-2021'));
console.log( regexDate('25-7-2021'));
console.log( regexDate('1-1-2021'));
console.log( regexDate('2-12-1979'));