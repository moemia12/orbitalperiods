let rightArrow = document.getElementById('right-arrow');
let activeImg = document.querySelector(".active");
let nextImg = activeImg.nextElementSibling;


// Handle left click

rightArrow.addEventListener('click', function(){  //Left arrow button clicked
    

   activeImg.classList.remove("active");       //
   nextImg.classList.add("active");
    
    return nextImg
});

$(document).ready(function(){
    $(".right-arrow").on('click', function(){
        $('.active').removeClass('active');
        $('.not-active').addClass('active')
    })
})