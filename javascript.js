const container = document.querySelector('#container');

let size = 4;

for (i = 0; i < size * size; i++) {
    const square = document.createElement('div');
    square.setAttribute('id','square');
    square.style.width = '100px';
    square.style.height = '100px';
    square.style.backgroundColor = 'pink';
    square.style.flex = '1 1 auto';
    container.appendChild(square);
}

function draw() {
    this.style.backgroundColor = 'black';
}

container.childNodes.forEach((square) => {
    square.addEventListener('mouseenter', draw);
});

function clearGrid() {
   container.childNodes.forEach((square) => {
       square.style.backgroundColor = 'pink';
    });
} 

const button = document.getElementById('btn');
button.addEventListener('click', clearGrid);

