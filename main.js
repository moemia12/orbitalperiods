// Declaring Earth, Icon and Answer Container variables
               
let icons = [...document.querySelectorAll('.icon-container .fa')];
let answerContainer = document.getElementById("answer-container");
let answerDiv = document.getElementById("answer-div");
let planetImgs = [...document.querySelectorAll(".planet-container img")];
let currentPlanet = document.getElementById("active-planet");

    //Function to slide icons
     function adjustActive (adjustment) { 
     var current = icons.find(it => it.id === 'active'); 
     var currentIndex = icons.indexOf(current);
     var nextIndex = (currentIndex + adjustment) % icons.length;

     if (nextIndex < 0) nextIndex = icons.length - 1;
    current.removeAttribute('id');
    icons[nextIndex].id = 'active'; 

    // Action to find Orbital Period
    let planet = currentPlanet.dataset.radius;  
    let nextElement = document.getElementById("active");
    let nextElements = nextElement.getAttribute("value")
    let orbitalPeriod = planet / nextElements;

    answerDiv.innerHTML = orbitalPeriod.toFixed(2);

    }

  // Function to slide icons

  function adjustActivePlanet (adjustment) { 
  var current = planetImgs.find(it => it.id === 'active-planet'); 
  var currentIndex = planetImgs.indexOf(current);
  var nextIndex = (currentIndex + adjustment) % icons.length;

  if (nextIndex < 0) nextIndex = planetImgs.length - 1;
  current.removeAttribute('id');
  planetImgs[nextIndex].id = 'active-planet'; 

  }



document.querySelector('#left-arrow').addEventListener('click', e => adjustActive(-1));
document.querySelector('#right-arrow').addEventListener('click', e => adjustActive(1));
document.querySelector('#left-arrow-planet').addEventListener('click', e => adjustActivePlanet(-1));
document.querySelector('#right-arrow-planet').addEventListener('click', e => adjustActivePlanet(1));