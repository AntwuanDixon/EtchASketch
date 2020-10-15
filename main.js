const genBtn = document.querySelector('#genBtn');
const resetBtn = document.getElementById('reset');
const numRows = document.getElementById('numRows');
genDivs();
genBtn.addEventListener("click", genDivs);
resetBtn.addEventListener("click", resetGrid);

function genDivs () {
    removeCells();
    let container = document.querySelector('#container');
    for (let i = 1; i <= numRows.value; i++) {
        var row = document.createElement('div');
        row.className = "row";
        //row.innerText = i;
        container.appendChild(row);
        
        for (let j = 1; j <= numRows.value; j++) {
            var cell = document.createElement('div');
            cell.className = 'gridsquare';
            cell.id = 'cell' + i +'.' + j;
            //cell.innerText = i + '.' + j;
            row.appendChild(cell);
        }
    }
    setCellWidth();
    container.addEventListener('mouseover', fillCell);
}

function setCellWidth () {
    const allRows = document.getElementsByClassName("row");
    let cellWidth = (100 / numRows.value);
    for (let i = 0; i < allRows.length; i++) {
        allRows[i].style.width = cellWidth + "%"
    }
}

function fillCell (e) {
    const targetCell = document.getElementById(e.target.id);

    if (targetCell !== null && e.target.className == "gridsquare") {
        targetCell.style.backgroundColor = "blue";
    }
    return targetCell;
    }

function resetGrid() {
    const allCells = document.getElementsByClassName("gridsquare");
    for (let i = 0; i < allCells.length; i++) {
        allCells[i].style.backgroundColor = "white";
    }  
}

function removeCells() {
    let gridRows = document.getElementsByClassName('row');
    let gridCells = document.getElementsByClassName('gridsquare');
    while (gridRows.length > 0) {
        while (gridCells.length > 0) {
            gridCells[0].parentNode.removeChild(gridCells[0]); 
        }
        gridRows[0].parentNode.removeChild(gridRows[0]);
    }
}