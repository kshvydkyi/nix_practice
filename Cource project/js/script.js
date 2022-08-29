document.querySelector('#priceDown').onclick = priceDownSort;
document.querySelector('#priceUP').onclick = priceUPSort;
document.querySelector('#search-button').onclick = search;
document.querySelector('#arrowNext').onclick = imgforward;
document.querySelector('#arrowPrewious').onclick = imgbackward;
document.querySelector('#to_items').onclick = scroll;


function inProgress(){
    window.location.href = "./inProgress.html";
}
function scroll(){
    window.scrollTo(0, 700);
}
function priceDownSort(){
    let items = document.querySelector('#list_wares');
    for(let i = 0; i < items.children.length; i++){
        for(let j = i; j < items.children.length; j++){
            if(+items.children[i].getAttribute('data-price') > +items.children[j].getAttribute('data-price')){
                replacedNode = items.replaceChild(items.children[j], items.children[i])
                insertAfter(replacedNode, items.children[i])
            }
        }
    }
}
function priceUPSort(){
    let items = document.querySelector('#list_wares');
    for(let i = 0; i < items.children.length; i++){
        for(let j = i; j < items.children.length; j++){
            if(+items.children[i].getAttribute('data-price') < +items.children[j].getAttribute('data-price')){
                replacedNode = items.replaceChild(items.children[j], items.children[i])
                insertAfter(replacedNode, items.children[i])
            }
        }
    }
}
function insertAfter(elem, refElem){
    return refElem.parentNode.insertBefore(elem, refElem.nextSibling)
}

function search(){
    window.scrollTo(0, 700);
    let items = document.querySelector('#list_wares');
    let searchValue = $('#search-bar').val();
    searchValue = searchValue.toLowerCase();
    console.log(searchValue);
    let countNotFound = 0;
    for(let i in items.children){
        let key = items.children[i].getAttribute('name');
        key = key.toLowerCase();
            let ifFound = key.search(searchValue);
            console.log(ifFound);
            if(ifFound > -1){
                console.log('found')
                items.children[i].style.display = 'block';
        }
        else{
            console.log('not found')
            items.children[i].style.display = 'none';
            countNotFound++;
        }
        if(countNotFound === items.children.length){
            alert("Вибачте, але такого товару немає в нашому магазині");
            location.reload();
            window.scrollTo(0,0);
        }
    }
 
    
}

let counter = 0;
let image = document.getElementById("sliderImage");

let imgs = new Array('./assets/images/threads.png','./assets/images/m1.png','./assets/images/m2.png', 
                    './assets/images/m3.png', './assets/images/m4.png');
function imgforward(){
    counter++;
    if(counter === 5){
        counter = 4;
    }
    image.src=imgs[counter];
    $('.counter').html(`${counter + 1} / 5`)
    
}
function imgbackward(){
    counter--;
    if(counter === -1){
        counter = 0;
    }
    image.src=imgs[counter];
    $('.counter').html(`${counter + 1} / 5`)
 
}
$('.counter').html(`${counter + 1} / 5`)