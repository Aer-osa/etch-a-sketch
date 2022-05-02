const container = document.getElementById("container");
document.getElementById("grid-item").mouseover = mouseOver

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    cell.innerText = (c + 1);
    container.appendChild(cell).className = "grid-item";
  };
};

makeRows(16, 16);

function mouseOver(event) {
  document.querySelector('grid-item').style.backgroundColor = "rgba(241,63,247,1) "
}

mouseOver;
//Need to have mouse-over/hover