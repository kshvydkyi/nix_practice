function strPad(input, fullLen, fillStr, fillType='FILL_RIGHT'){
    
    if(fillType === 'FILL_RIGHT')
        return input.padEnd(fullLen, fillStr);
    else if(fillType === 'FILL_LEFT')
        return input.padStart(fullLen, fillStr);
    else if(fillType === 'FILL_BOTH'){
        return input.padStart((input.length + fullLen) / 2, fillStr).padEnd(fullLen, fillStr);
    }
}

console.log(strPad('star', 10, '_*_')); // star_*__*_
console.log(strPad('star', 8, '_*_', 'FILL_LEFT' )); // _*__star
console.log(strPad('star', 8, '*', 'FILL_BOTH')); // **star**