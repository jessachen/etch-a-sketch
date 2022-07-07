const grid = document.querySelector('#grid');

let size = 4;

for (i = 0; i < size * size; i++) {
    const square = document.createElement('div');
    square.setAttribute('id','square');
    let numberDimension = 500 / size;
    let stringDimension = numberDimension.toString().concat('px');
    square.style.width = stringDimension;
    square.style.height = stringDimension;
    square.style.backgroundColor = 'pink';
    square.style.flex = '1 1 auto';
    grid.appendChild(square);
}

function draw() {
    this.style.backgroundColor = 'black';
}

grid.childNodes.forEach((square) => {
    square.addEventListener('mouseenter', draw);
});

function clearGrid() {
   grid.childNodes.forEach((square) => {
       square.style.backgroundColor = 'pink';
    });
} 

const button = document.getElementById('btn');
button.addEventListener('click', clearGrid);

const slider = document.getElementById('rangeSlider');
const output = document.getElementById('sizeValue');
output.innerHTML = slider.value;

slider.oninput = function() {
    output.innerHTML = slider.value;
}

function newGrid () {
   while (grid.firstChild) {
       grid.removeChild(grid.firstChild)
   }
   
    let size = slider.value;
    for (i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.setAttribute('id','square');
        let numberDimension = 500 / size;
        let stringDimension = numberDimension.toString().concat('px');
        square.style.width = stringDimension;
        square.style.height = stringDimension;
        square.style.backgroundColor = 'pink';
        square.style.flex = '1 1 auto';
        grid.appendChild(square);
    }

}

