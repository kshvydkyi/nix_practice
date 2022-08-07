function testString(str){
    let parentheses = [];
    for(let i = 0; i < str.length; i++){
        if (str[i] === '[' || str[i] === '(')
      parentheses.push(str[i]);
    else if ((str[i] === ']' && parentheses[parentheses.length - 1] === '[')
        || (str[i] === ')' && parentheses[parentheses.length - 1] === '('))
      parentheses.pop();
    }
    return !parentheses.length;
}