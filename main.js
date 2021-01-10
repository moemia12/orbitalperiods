$(document).ready(function(){
    $(".right-arrow").on('click', function(){
        let currentImg = $('.active');
        let nextImg = currentImg.next();

        if(nextImg.length){
            currentImg.removeClass('active').css('z-index', -10);
            nextImg.addClass('active').css('z-index', 10);
        }
    
    })

    $(".left-arrow").on('click', function(){
        let currentImg = $('.active');
        let prevImg = currentImg.prev();

        if(prevImg.length){
            currentImg.removeClass('active').css('z-index', -10);
            prevImg.addClass('active').css('z-index', 10);
        }
    
    })
})

