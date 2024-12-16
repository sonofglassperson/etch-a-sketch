// // alert('hello');
const container = document.querySelector('.container')
const grid = document.querySelector('.grid')
const tableContainer = document.querySelector('.tableContainer')
const rainbowColors = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet'];
let isClear = true;
let table = document.createElement('table');
tableContainer.appendChild(table);

// For Default 16 x 16 grid
let cellWidth = getComputedStyle(tableContainer).width.slice(0, 3);
let cellHeight = getComputedStyle(tableContainer).height.slice(0, 3);

function getRandomColor(colors) {
    return colors[random(colors.length)];
}

function random(length) {
    return Math.floor(Math.random() * (length));
    // to be inclusive:
    // return Math.floor(Math.random() * (length + 1));
}

for (let index = 0; index < 16; index++) {
    const tr = document.createElement('tr');
    table.appendChild(tr)

    for (let j = 0; j < 16; j++) {
        const td = document.createElement('td');
        td.setAttribute('id', 'flex-item');
        td.setAttribute('style', `width:${cellWidth / 16}px; height:${cellHeight / 16}px;`)
        tr.append(td);
    }
}

function createGrid(gridSize) {
    for (let index = 0; index < gridSize; index++) {
        const tr = document.createElement('tr');
        table.appendChild(tr)

        for (let j = 0; j < gridSize; j++) {
            const td = document.createElement('td');
            td.setAttribute('id', 'flex-item');
            td.setAttribute('style', `width:${cellWidth / gridSize}px; height:${cellHeight / gridSize}px;`)
            tr.append(td);
        }
    }
}

let c = 0;
tableContainer.addEventListener("mouseover", function (e) {
    isClear = false;
    const target = e.target;
    const isStyleSet = target.classList.contains('colourSet')
    if (target.id == 'flex-item' && !isStyleSet) {
        target.style.setProperty('background-color', `${getRandomColor(rainbowColors)}`);
        target.setAttribute('class', `colourSet`);
    }
});


grid.addEventListener('click', (e) => {

    switch (e.target.id) {
        case "createGrid":
            const gridInput = document.getElementById('gridInput');
            const gridValue = +gridInput.value;
            if (gridValue > 0 && gridValue <= 100 && Number.isInteger(gridValue)) {
                // Remove current table
                tableContainer.removeChild(table)
                // Create new table
                table = document.createElement('table');
                // Append it to the table container
                tableContainer.appendChild(table);
                // Create grid
                createGrid(gridValue);
            } else {
                alert('Please insert grid value.')
            }

            break;
        case "clearGrid":
            if (!isClear) {
                const allHighlighted = document.querySelectorAll('.colourSet');
                allHighlighted.forEach(element => {
                    element.style.removeProperty('background-color')
                    //element.classList.remove('colourSet')
                    element.removeAttribute('class')
                });
            }
            break;
        default:
            break;
    }
});