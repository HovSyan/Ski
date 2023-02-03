const itemsWrapper = document.getElementById('items-wrapper');

const renderItem = (item, index) => {
    const a = document.createElement('a');

    a.appendChild(createItemImage(item.image, item.name));
    a.appendChild(createItemDescription(item));
    // a.style.transition = (index + 1) * 1000 + 's';
    a.className = 'item';
    itemsWrapper.appendChild(a);
}

const createItemImage = (src, alt) => {
    const image = document.createElement('img');
    image.alt = alt;
    image.src = src;
    image.className = 'item-image';
    return image;
}

const createItemDescription = (item) => {
    const div = document.createElement('div');
    const pName = `<p class="item-name">${item.name}</p>`
    const pPrice = `<p class="item-price">${item.price}</p>`
    const pStatus = getStatusSpan(item.status);
    const button = `<button class="purchase-btn">Buy</button>`
    div.className = 'item-description';
    div.innerHTML += (pName + pPrice);
    div.appendChild(pStatus);
    div.innerHTML += (button);
    return div;
}

const getStatusSpan = (status) => {
    const p = document.createElement('p');
    p.classList.add('item-status');
    p.classList.add(status === 'available' ? 'status-available' : 'status-unavailable');
    p.innerText = `Status ${status}`;
    return p;
}

const alertError = () => {

}
