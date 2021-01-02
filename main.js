const leftArrow = document.getElementById('left-arrow');
const activeImg = document.querySelector(".active")
const nextImg = activeImg.nextElementSibling;


// Handle left click

leftArrow.addEventListener('click', function(){  //Left arrow button clicked
    
    
    activeImg.classList.remove("active");       //
    nextImg.classList.add("active");
    
    return nextImg
    
});