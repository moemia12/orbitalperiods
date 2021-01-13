// Declaring Earth, Icon and Answer Container variables
               
let icons = [...document.querySelectorAll('.icon-container .fa')];
let answerContainer = document.getElementById("answer-container");

//Function to slide icons
function adjustActive (adjustment) { 
  var current = icons.find(it => it.id === 'active'); 
  var currentIndex = icons.indexOf(current);
  var nextIndex = (currentIndex + adjustment) % icons.length;

  if (nextIndex < 0) nextIndex = icons.length - 1;
  current.removeAttribute('id');
  icons[nextIndex].id = 'active'; 

// Action to find Orbital Period
  let earth = 7917.5;  
  let nextElement = document.getElementById("active");
  let nextElements = nextElement.getAttribute("value")
  let orbitalPeriod = earth / nextElements;

  answerContainer.innerHTML = orbitalPeriod.toFixed(2) 

}

document.querySelector('#left-arrow').addEventListener('click', e => adjustActive(-1));
document.querySelector('#right-arrow').addEventListener('click', e => adjustActive(1));

// Function to create Planets Container

function adjustActive (adjustment) { 
  var current = icons.find(it => it.id === 'active'); 
  var currentIndex = icons.indexOf(current);
  var nextIndex = (currentIndex + adjustment) % icons.length;

  if (nextIndex < 0) nextIndex = icons.length - 1;
  current.removeAttribute('id');
  icons[nextIndex].id = 'active'; }