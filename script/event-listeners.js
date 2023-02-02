const onStartButtonClick = (e) => {
    const element = e.target;
    fadeOutButton(element, 100);
    createRippleElement(e.clientX, e.clientY);
    handleStartClick();
}

const fadeOutButton = (element, duration) => {
    let opacity = 100;
    const interval = setInterval(() => {
        element.style.opacity = opacity + '%';
        opacity--;

        if(opacity === 0) {
            element.parentElement.removeChild(element);
            clearInterval(interval);
        }
    }, duration / 100)
}

const createRippleElement = (x, y) => {
    const span = document.createElement('span');
    span.className = 'ripple';
    span.style.top = y;
    span.style.left = x;
    span.style.transition = '2s';
    document.body.appendChild(span);

    setTimeout(() => {
        document.body.removeChild(span);
    }, 2000)
}
