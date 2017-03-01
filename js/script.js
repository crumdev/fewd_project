/*
 * Toggle mobile menu as active when clicked
 */
$(function(){
    $('#nav-toggle').click(function(){
        if($(this).hasClass("is-active")){
            $(this).removeClass("is-active");
            $('.nav-menu').removeClass("is-active");
        } else {
            $(this).addClass("is-active");
            $('.nav-menu').addClass("is-active");
        }
    });
});

