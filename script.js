function createGrid() {
  // Find the HTML element with the ID "grid" and assign it to the variable "grid"
  let grid = document.querySelector('#grid');
  let grid_size = document.querySelector('#gridsize_input').value;

  if(grid_size > 100) grid_size = 100;

  if(grid_size < 1) grid_size = 1;

  // Use a loop to create 256 HTML <div> elements with the class "cell"
  for(i = 0; i < (grid_size * grid_size); i++) {
    const div = document.createElement('div');
    div.className = 'cell lightgrey';
    // Add each <div> element to the HTML element with the ID "grid"
    grid.appendChild(div);
  }
}

function deleteGrid() {
  const [...old_grid] = document.getElementsByClassName('cell');

  old_grid.forEach(element => {
    element.remove();
  });
}

function startBrush(colour) {
  const [...cells] = document.getElementsByClassName('cell');

  cells.forEach(element => {
   element.addEventListener('mouseover', () => {
      element.className = "cell " + colour;
    },true);
  });
}

function startRandomColourBrush() {
  const [...cells] = document.getElementsByClassName('cell');

  cells.forEach(element => {
   element.addEventListener('mouseover', () => {
      element.className = "cell " + randomColour();
    },true);
  });
}

function colourChanger(color) {
  const chosen_color_preview = document.querySelector('#chosen_color_preview');
  chosen_color_preview.style.backgroundColor = color;
  startBrush(color);
}

function createEventsForOptions(){
  const create_grid_btn = document.querySelector('#create_grid_btn');
  create_grid_btn.addEventListener('click', () => {
    deleteGrid();
    createGrid();
  })

  const random_btn = document.querySelector('#random_btn');
  random_btn.addEventListener('click', () => {
    startRandomColourBrush();
  });

  const erase_btn = document.querySelector('#erase_btn');
  erase_btn.addEventListener('click', () => {
    colourChanger('lightgrey')
  });

  const red_btn = document.querySelector('#red_btn');
  red_btn.addEventListener('click', () => {
    colourChanger('red')
  });

  const green_btn = document.querySelector('#green_btn');
  green_btn.addEventListener('click', () => {
    colourChanger('green');
  });

  const blue_btn = document.querySelector('#blue_btn');
  blue_btn.addEventListener('click', () => {
    colourChanger('blue')
  });

  const orange_btn = document.querySelector('#orange_btn');
  orange_btn.addEventListener('click', () => {
    colourChanger('orange');
  })

  const purple_btn = document.querySelector('#purple_btn');
  purple_btn.addEventListener('click', () => {
    colourChanger('purple');
  })
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomColour() {
  let x = random(1, 5);

  switch (x) {
    case 1:
      return "purple";
    case 2:
      return "green";
    case 3:
      return "blue";
    case 4:
      return "red";
    case 5:
      return "orange";
    default:
      return "error";
  }
}
// Call the createGrid function to generate the grid
createGrid();
createEventsForOptions();
