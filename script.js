const container = document.getElementById("grid-container");
const newGrid = document.getElementById("new-grid");
const UserInterface = document.getElementById("ui");

//Todo: Make "New Grid" button pass its value to the for-loop

function MakeGrid(gridArea)
{
    let squareSize = 100 / gridArea;
    let squareString = squareSize.toString();

    for (let i = 0; i < (gridArea * gridArea); i++) {
        const gridSquare = document.createElement("div");
        gridSquare.classList.add("grid-square");
        gridSquare.style.height = squareString + "%";
        gridSquare.style.width = squareString + "%";
        container.appendChild(gridSquare);
    }
}

newGrid.addEventListener("click", function() {
    let canvasSize = prompt("Grid Size: ");

    container.innerHTML = "";

    let pixelSize = 100 / canvasSize;
    let pixelString = pixelSize.toString();

    for (let i = 0; i < (canvasSize * canvasSize); i++) {
        const pixel = document.createElement("div");
        pixel.classList.add("grid-square");
        pixel.style.height = pixelString + "%";
        pixel.style.width = pixelString + "%";
        container.appendChild(pixel);
    }

    const gridItem = document.querySelectorAll(".grid-square");

    for (let i = 0; i < gridItem.length; i++) {
        gridItem[i].addEventListener("click", function() {
            gridItem[i].classList.toggle("grid-square-colored");
        })
    }
})

MakeGrid(16);

const gridItem = document.querySelectorAll(".grid-square");

for (let i = 0; i < gridItem.length; i++) {
    gridItem[i].addEventListener("click", function() {
        gridItem[i].classList.toggle("grid-square-colored");
    })
}


