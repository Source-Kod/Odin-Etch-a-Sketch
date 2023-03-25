function createGrid() {
  // Find the HTML element with the ID "grid" and assign it to the variable "grid"
  let grid = document.querySelector('#grid');
  // Use a loop to create 256 HTML <div> elements with the class "cell"
  for(i = 1; i < 256; i++) {
    let div = document.createElement('div');
    div.classList.add('cell');
    // Add each <div> element to the HTML element with the ID "grid"
    grid.appendChild(div);
  }
}

// Call the createGrid function to generate the grid
createGrid();
