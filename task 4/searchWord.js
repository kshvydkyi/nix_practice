function searchWord(str, needle){
    let words = str.toLowerCase().split(' ');
    for(i in words){
        if(words[i].includes(needle.toLowerCase())){
            return words[i];
        }
    }
    return -1;
}

console.log(searchWord('Ми знаємо, що монохромний колір – це градації сірого', 'хром'));
