const container = document.getElementById("grid-container");
const newGrid = document.getElementById("new-grid");
const UserInterface = document.getElementById("ui");
const click = document.getElementById("click");
const drag = document.getElementById("drag");

// ToDo: Make Click and Drag mode work 

let clickMode = "click"; 

click.addEventListener("click", function() {
    clickMode = "click";
});
drag.addEventListener("click", function() {
    clickMode = "drag";
})

console.log(clickMode);

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

    while (canvasSize < 2 || canvasSize > 100) {
        canvasSize = prompt("Please Enter A Valid Grid Size: ");
    }

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
            gridItem[i].classList.toggle("grid-square-black");
        })
    }
})

MakeGrid(16);

const gridItem = document.querySelectorAll(".grid-square");

for (let i = 0; i < gridItem.length; i++) {
    if (clickMode == "click") {
        gridItem[i].addEventListener("click", function() {
            gridItem[i].classList.toggle("grid-square-black");
        })
    }
    else if (clickMode == "drag") {
        gridItem[i].addEventListener("mouseover", function() {
            gridItem[i].classList.toggle("grid-square-black");
        })
    }
}


