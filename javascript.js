const container = document.querySelector('#container');

for (i = 0; i < 16; i++) {
    const square = document.createElement('div');
    square.style.width = '100px';
    square.style.height = '100px';
    square.style.backgroundColor = 'salmon';
    square.style.flex = '1 1 auto';
    container.appendChild(square);
}

