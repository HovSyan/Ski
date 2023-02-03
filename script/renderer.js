const sections = {};

const getSection = (category) => {
    if(sections[category]) {
        return sections[category];
    }

    sections[category] = document.createElement('section');
    sections[category].id = 'category';
    sections[category].className = 'items-section';
    sections[category].innerHTML = `<h2 class="section-title">${category}</h2>`;
    document.querySelector('#items-wrapper').appendChild(sections[category]);

    return sections[category];
}

const renderItem = (item) => {
    const a = document.createElement('a');
    const section = getSection(item.category);

    a.appendChild(createItemImage(item.image, item.name));
    a.appendChild(createItemDescription(item));
    a.animate([
        { transform: 'translateX(100%)', opacity: '0'},
        { transform: 'translateX(0)', opacity: '1'}
    ], {duration: 300, delay: section.children.length * 300, fill: 'backwards', easing: 'ease-out'})
    a.className = 'item';
    section.appendChild(a);
    section.querySelector('.section-title').textContent = `${item.category} (${section.children.length - 1})`;
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
