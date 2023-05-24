let isMousePressed = false;

const defaultGridSize = 16;

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

function changeGridColour(event) {
    if (isMousePressed || event.type === 'click') {
        this.style.backgroundColor = 'red';
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
    let newSize = prompt('Please enter the new size of grid.');
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

createGrid(defaultGridSize);
const changeGridButton = document.querySelector('#change-grid');
changeGridButton.addEventListener('click', changeGridSize);
const gridBlocks = document.querySelectorAll('.grid-block');
gridBlocks.forEach(gridBlock => {
    gridBlock.addEventListener('mouseenter', changeGridColour);
    gridBlock.addEventListener('mousedown', handleMouseDown);
    gridBlock.addEventListener('mouseup', handleMouseUp);
    gridBlock.addEventListener('click', changeGridColour);
})