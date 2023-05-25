let isMousePressed = false;
let currentColour = 'red';

const defaultGridSize = 16;
const numColours = 8;
const colours = ['red', 'orange', 'yellow', 'greenyellow', 'skyblue', 'plum', 'pink', 'black']

function createGrid(gridSize) {
    const gridContainer = document.querySelector('.grid-container');

    for (let i = 0; i < gridSize * gridSize; i++) {
        const gridBlock = document.createElement('div');
        gridBlock.classList.add('grid-block');
        gridBlock.id = i;
        gridBlock.style.flexBasis = `calc(100% / ${gridSize})`
        gridBlock.style.height = `height: calc(100% / ${gridSize})`
        gridContainer.appendChild(gridBlock);
    }
}

function createColourSelector() {
    const colourContainer = document.querySelector('.colour-selector');

    for (let i = 0; i < numColours; i++) {
        const colourBlock = document.createElement('div');
        colourBlock.classList.add('colour-block');
        colourBlock.classList.add(colours[i]);
        colourContainer.appendChild(colourBlock);
    }
}

function changeCurrentColour() {
    currentColour = this.classList[1];
}

function changeGridColour(event) {
    if ((isMousePressed && event.shiftKey) || (event.type === 'click' && event.shiftKey) {
        this.style.backgroundColor = 'white';
    } else if (isMousePressed || event.type === 'click') {
        this.style.backgroundColor = currentColour;
    }
}

function handleMouseDown(event) {
    event.preventDefault();
    isMousePressed = true;
}

function handleMouseUp() {
    isMousePressed = false;
}

function changeGridSize() {
    let newSize = prompt('Please enter the new width/height of grid:', 32);
    const gridBlocks = document.querySelectorAll('.grid-block');

    gridBlocks.forEach(gridBlock => {
        gridBlock.remove();
    });

    createGrid(newSize);

    const newGridBlocks = document.querySelectorAll('.grid-block');
    newGridBlocks.forEach(newGridBlock => {
        newGridBlock.addEventListener('mouseenter', changeGridColour);
        newGridBlock.addEventListener('mousedown', handleMouseDown);
        newGridBlock.addEventListener('mouseup', handleMouseUp);
        newGridBlock.addEventListener('click', changeGridColour);
    });
}

function resetGrid() {
    const gridBlocks = document.querySelectorAll('.grid-block');
    gridBlocks.forEach(gridBlock => {
        gridBlock.style.backgroundColor = 'white';
    });

}

createGrid(defaultGridSize);
createColourSelector();

const changeGridButton = document.querySelector('#change-grid');
changeGridButton.addEventListener('click', changeGridSize);

const colourBlocks = document.querySelectorAll('.colour-block');
colourBlocks.forEach(colourBlock => {
    colourBlock.addEventListener('click', changeCurrentColour);
})

const gridBlocks = document.querySelectorAll('.grid-block');
gridBlocks.forEach(gridBlock => {
    gridBlock.addEventListener('mouseenter', changeGridColour);
    gridBlock.addEventListener('mousedown', handleMouseDown);
    gridBlock.addEventListener('mouseup', handleMouseUp);
    gridBlock.addEventListener('click', changeGridColour);
})
const reset = document.querySelector('#reset');
reset.addEventListener('click', resetGrid);
