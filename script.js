// // alert('hello');
const container = document.querySelector('.container')
const gridInput = document.querySelector('.gridInput')
const table = document.querySelector('table')
const rainbowColors = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet'];
let isClear = true;

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
        tr.append(td);
    }
}

let c = 0;
container.addEventListener("mouseover", function (e) {
    if (c == 0)
        isClear = false;
    const target = e.target;
    const isStyleSet = target.getAttribute("style");
    console.log(isStyleSet);

    c = 1;
    if (target.id == 'flex-item' && !isStyleSet) {
        target.setAttribute('style', `background-color: ${getRandomColor(rainbowColors)};`);
        target.setAttribute('class', `colourSet`);
    }
});


gridInput.addEventListener('click', (e) => {

    switch (e.target.id) {
        case "createGrid":
            console.log('create grid!');
            break;
        case "clearGrid":
            console.log('clear!');
            if (!isClear) {
                const allHighlighted = document.querySelectorAll('.colourSet');
                allHighlighted.forEach(element => {
                    element.removeAttribute('style');
                });
            }
            break;
        default:
            break;
    }
});