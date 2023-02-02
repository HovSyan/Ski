const itemsWrapper = document.getElementById('items-wrapper');

const renderItem = (item) => {
    const a = document.createElement('a');

    a.appendChild(createItemImage(item.image, item.name));
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

const alertError = () => {

}
