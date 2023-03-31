function createGrid() {
  // Find the HTML element with the ID "grid" and assign it to the variable "grid"
  let grid = document.querySelector('#grid');
  let grid_size = document.querySelector('#gridsize_input').value;

  if (grid_size > 100) {
    grid_size = 100;
  }

  if (grid_size < 1) {
    grid_size = 1;
  }

  // Use a loop to create HTML <div> elements with the class "cell"
  for (let i = 0; i < grid_size * grid_size; i++) {
    const div = document.createElement('div');
    div.className = 'cell lightgrey';
    // Add each <div> element to the HTML element with the ID "grid"
    grid.appendChild(div);
  }
}

function deleteGrid() {
  // Get all the elements with the class "cell"
  const old_grid = document.getElementsByClassName('cell');

  // Loop through each element and remove it
  [...old_grid].forEach(element => {
    element.remove();
  });
}

function startBrush(colour) {
  // Get all the elements with the class "cell"
  const cells = document.getElementsByClassName('cell');

  // Loop through each element and add a "mouseover" event listener to change the background color to the specified colour
  [...cells].forEach(element => {
   element.addEventListener('mouseover', () => {
      element.className = "cell " + colour;
    }, true);
  });
}

function startRandomColourBrush() {
  // Get all the elements with the class "cell"
  const cells = document.getElementsByClassName('cell');

  // Loop through each element and add a "mouseover" event listener to change the background color to a random colour
  [...cells].forEach(element => {
   element.addEventListener('mouseover', () => {
      element.className = "cell " + randomColour();
    }, true);
  });
}

function colourChanger(color) {
  // Get the preview element for the chosen color and set its background color to the specified color
  const chosen_color_preview = document.querySelector('#chosen_color_preview');
  chosen_color_preview.style.backgroundColor = color;
  // Start the brush with the specified color
  startBrush(color);
}

function createEventsForOptions() {
  // Get the create grid button and add a click event listener to delete the current grid and create a new one
  const create_grid_btn = document.querySelector('#create_grid_btn');
  create_grid_btn.addEventListener('click', () => {
    deleteGrid();
    createGrid();
  });

  // Get the random button and add a click event listener to start the random color brush
  const random_btn = document.querySelector('#random_btn');
  random_btn.addEventListener('click', () => {
    startRandomColourBrush();
  });

  // Get the erase button and add a click event listener to start the brush with a lightgrey color
  const erase_btn = document.querySelector('#erase_btn');
  erase_btn.addEventListener('click', () => {
    colourChanger('lightgrey');
  });

  // Get the red button and add a click event listener to start the brush with a red color
  const red_btn = document.querySelector('#red_btn');
  red_btn.addEventListener('click', () => {
    colourChanger('red');
  });

  // Get the green button and add a click event listener to start the brush with a green color
  const green_btn = document.querySelector('#green_btn');
  green_btn.addEventListener('click', () => {
    colourChanger('green');
  });

  // Get the blue button and add a click event listener to start the brush with a blue color
  const blue_btn = document.querySelector('#blue_btn');
  blue_btn.addEventListener('click', () => {
    colourChanger('blue');
  });

  // Get the orange button and add a click event listener to start the brush with a orange color
  const orange_btn = document.querySelector('#orange_btn');
  orange_btn.addEventListener('click', () => {
    colourChanger('orange');
  })

  // Get the purple button and add a click event listener to start the brush with a purple color
  const purple_btn = document.querySelector('#purple_btn');
  purple_btn.addEventListener('click', () => {
    colourChanger('purple');
  })
}

// A function that generates a random integer between two values
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// A function that returns a random color based on a switch statement using the random() function
function randomColour() {
  // Generate a random integer between 1 and 5
  let x = random(1, 5);

  // Based on the value of x, return a specific color
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
    // If x is not between 1 and 5, return an error message
    default:
      return "error";
  }
}

// Call the createGrid() function to generate the initial grid when the page loads
createGrid();

// Call the createEventsForOptions() function to create event listeners for the various buttons on the page
createEventsForOptions();

