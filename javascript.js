const container = document.querySelector('#container');

for (i = 0; i < 16; i++) {
    const square = document.createElement('div');
    square.setAttribute('id','square')
    square.style.width = '100px';
    square.style.height = '100px';
    square.style.backgroundColor = 'salmon';
    square.style.flex = '1 1 auto';
    container.appendChild(square);
}

const squares = document.querySelectorAll('#square');

function draw() {
    this.style.backgroundColor = 'black';
}

squares.forEach((square) => {
    square.addEventListener('mouseenter', draw)
})

