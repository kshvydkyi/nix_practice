function regexNames(names){
    names = names.replaceAll(',', '');
    let map = {
        Lennon:"John",John:"Lennon", 
        McCartney:"Paul",Paul:"McCartney", 
        Harrison:"George",George:"Harrison", 
        Star:"Ringo ",Ringo:"Star"
    };
    let regex = new RegExp(Object.keys(map).join("|"),"gi");
    names = names.replace(regex, function(matched){  
        return map[matched];
    });
    return names;
}

let names = "Lennon, John\nMcCartney, Paul\nHarrison, George\nStar, Ringo";
console.log(regexNames(names));

