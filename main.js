const rightArrow = document.getElementById('right-arrow');
const activeImg = document.querySelector(".active")
const nextImg = activeImg.nextElementSibling;


// Handle left click

rightArrow.addEventListener('click', function(){  //Left arrow button clicked
    
    activeImg.classList.remove("active");       //
    nextImg.classList.add("active");
    
    return nextImg
    
});