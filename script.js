function createGrid() {
  // Find the HTML element with the ID "grid" and assign it to the variable "grid"
  let grid = document.querySelector('#grid');
  let grid_size = document.querySelector('#gridsize_input').value;

  if(grid_size > 100) grid_size = 100;

  if(grid_size < 1) grid_size = 1;

  // Use a loop to create 256 HTML <div> elements with the class "cell"
  for(i = 0; i < (grid_size * grid_size); i++) {
    let div = document.createElement('div');
    div.className = 'cell lightgrey';
    // Add each <div> element to the HTML element with the ID "grid"
    grid.appendChild(div);
  }
}

function startBrush(colour) {
  let [...cells] = document.getElementsByClassName('cell');

  cells.forEach(element => {
   element.addEventListener('mouseover', () => {
      element.className = "cell " + colour;
    },true);
  });
}

function colourChanger(color) {
  const chosen_color_preview = document.querySelector('#chosen_color_preview');
  chosen_color_preview.style.backgroundColor = color;
  startBrush(color);
}

function createEventsForOptions(){
  const erase_btn = document.querySelector('#erase_btn')
  erase_btn.addEventListener('click', () => {
    colourChanger('lightgrey')
  })

  const red_btn = document.querySelector('#red_btn')
  red_btn.addEventListener('click', () => {
    colourChanger('red')
  })

  const green_btn = document.querySelector('#green_btn')
  green_btn.addEventListener('click', () => {
    colourChanger('green')
  })

  const blue_btn = document.querySelector('#blue_btn')
  blue_btn.addEventListener('click', () => {
    colourChanger('blue')
  })

  const orange_btn = document.querySelector('#orange_btn')
  orange_btn.addEventListener('click', () => {
    colourChanger('orange')
  })

  const purple_btn = document.querySelector('#purple_btn')
  purple_btn.addEventListener('click', () => {
    colourChanger('purple')
  })


}
// Call the createGrid function to generate the grid
createGrid();
createEventsForOptions();
