document.querySelector('#priceDown').onclick = priceDownSort;
document.querySelector('#priceUP').onclick = priceUPSort;

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
