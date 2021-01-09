$(document).ready(function(){
    $(".right-arrow").on('click', function(){
        $('.active').removeClass('active')
        $('.active').next().addClass('active');
        $('.not-active').removeClass('not-active')
    
    })
})