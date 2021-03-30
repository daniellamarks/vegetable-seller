export function createVeggie(paramVeggie) {
    const li = document.createElement('li');
    li.classList.add('veggie');
    li.style.background = paramVeggie.color;
    
    const pName = document.createElement('p');
    pName.classList.add('name');
    
    const freshSpan = document.createElement('span');
    freshSpan.textContent = `${paramVeggie.status} `;
    
    const nameStrong = document.createElement('strong');
    nameStrong.textContent = paramVeggie.name;
    
    pName.append(freshSpan, nameStrong);
    
    const pPrice = document.createElement('p');
    
    if (paramVeggie.onSale === true) {
        pPrice.textContent = `SALE! Only $${paramVeggie.price}.00!`;  
    } else {
        pPrice.textContent = `$${paramVeggie.price}.00`;  
    }
    
    pPrice.classList.add('price');
    // img class=veggie-image
    const image = document.createElement('img');
    image.classList.add('veggie-image');
    image.src = paramVeggie.img;
    image.alt = paramVeggie.name;
    
    const pCrunch = document.createElement('p');
    pCrunch.classList.add('crunch');
    
    const crunchEm = document.createElement('em');
    crunchEm.classList.add('crunch-factor');
    crunchEm.textContent = paramVeggie.isCrunchy ? 'crunchy' : 'soft' ;
    
    pCrunch.append(crunchEm);
    
    const button = document.createElement('button');
    
    button.textContent = 'Add to cart';
    
    li.append(pName, pPrice, image, pCrunch, button);
    
    return li;
}
