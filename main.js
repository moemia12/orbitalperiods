const rightArrow = document.getElementById('right-arrow');

// Handle right click

rightArrow.onclick = () =>{
    const activeImg = document.querySelector(i.active)
    const nextImg = activeImg.nextElementSibling;

    if(activeImg && nextImg){
        activeImg.classList.remove('active');
        nextImg.classList.add('active');
    }
};