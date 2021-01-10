var icons = [...document.querySelectorAll('.icon-container .fa')];

function adjustActive (adjustment) {
  var current = icons.find(it => it.id === 'active');
  var currentIndex = icons.indexOf(current);
  var nextIndex = (currentIndex + adjustment) % icons.length;
  
  if (nextIndex < 0) nextIndex = icons.length - 1;
  
  current.removeAttribute('id');
  icons[nextIndex].id = 'active';
}

document.querySelector('#left-arrow').addEventListener('click', e => adjustActive(-1));
document.querySelector('#right-arrow').addEventListener('click', e => adjustActive(1));


let earth = 7917.5
let answerContainer = document.getElementById("answer-container")

let findOrbitalPeriod = () =>{
    if(document.getElementById('right-arrow').clicked == true){
        let orbitalPeriod = earth/ current; 
        return answerContainer.innerHTML(orbitalPeriod.value)
    }
 }



