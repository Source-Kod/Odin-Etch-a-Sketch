function createGrid() {
  // Find the HTML element with the ID "grid" and assign it to the variable "grid"
  let grid = document.querySelector('#grid');
  let grid_size = document.querySelector('#gridsize_input').value;

  if(grid_size > 100) grid_size = 100;

  if(grid_size < 1) grid_size = 1;

  // Use a loop to create 256 HTML <div> elements with the class "cell"
  for(i = 0; i < (grid_size * grid_size); i++) {
    let div = document.createElement('div');
    div.classList.add('cell');
    // Add each <div> element to the HTML element with the ID "grid"
    grid.appendChild(div);
  }
}

// Call the createGrid function to generate the grid
createGrid();
