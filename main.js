// Declaring Earth, Icon and Answer Container variables
let earth = 7917.5;               
let icons = [...document.querySelectorAll('.icon-container .fa')];
let answerContainer = document.getElementById("answer-container");

//Function to slide icons
function adjustActive (adjustment) { 
  var current = icons.find(it => it.id === 'active'); 
  var currentIndex = icons.indexOf(current);
  var nextIndex = (currentIndex + adjustment) % icons.length;

  if (nextIndex < 0) nextIndex = icons.length - 1;
  console.log(current);
  current.removeAttribute('id');
  icons[nextIndex].id = 'active'; 
  let orbitalPeriod = earth / current.getAttribute("value"); 
  answerContainer.innerHTML = orbitalPeriod
 
}

document.querySelector('#left-arrow').addEventListener('click', e => adjustActive(-1));
document.querySelector('#right-arrow').addEventListener('click', e => adjustActive(1));