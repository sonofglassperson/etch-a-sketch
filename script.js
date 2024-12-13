// // alert('hello');
const container = document.querySelector('.container')
const grid = document.querySelector('.grid')
const tableContainer = document.querySelector('.tableContainer')

const rainbowColors = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet'];
let isClear = true;
let table = document.createElement('table');
tableContainer.appendChild(table);

const cellWidth = getComputedStyle(tableContainer).width.slice(0, 3) / 16;
const cellHeight = getComputedStyle(tableContainer).height.slice(0, 3) / 16;


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
        td.setAttribute('style', `width:${cellWidth}px; height:${cellHeight}px;`)
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
            td.setAttribute('style', `width:${cellWidth}px;`)
            td.setAttribute('style', `height:${cellHeight}px;`)
            // td.style.setProperty('width', `${cellWidth}px`)
            // td.style.setProperty('height', `${cellHeight}px`)
            tr.append(td);
        }
    }
}

let c = 0;
tableContainer.addEventListener("mouseover", function (e) {
    if (c == 0)
        isClear = false;
    const target = e.target;
    const isStyleSet = target.classList.contains('colourSet')
    c = 1;
    if (target.id == 'flex-item' && !isStyleSet) {
        target.style.setProperty('background-color', `${getRandomColor(rainbowColors)}`);
        target.setAttribute('class', `colourSet`);
    }
});


grid.addEventListener('click', (e) => {

    switch (e.target.id) {
        case "createGrid":
            const gridInput = document.getElementById('gridInput');
            tableContainer.removeChild(table)
            table = document.createElement('table');
            tableContainer.appendChild(table);
            // let v = gridInput.value;
            // console.log(v);
            createGrid(gridInput.value);
            break;
        case "clearGrid":
            console.log('clear!');
            if (!isClear) {
                const allHighlighted = document.querySelectorAll('.colourSet');
                allHighlighted.forEach(element => {
                    //element.removeAttribute('style');
                    element.style.setProperty('background-color', '')
                });
            }
            break;
        default:
            break;
    }
});