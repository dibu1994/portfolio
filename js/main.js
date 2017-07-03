$(function(){

    $(".menu-btn").click(function(e){
        $(".menu").toggleClass("open");
                e.stopPropagation();

    });

    $(".apps-container").on('click',function(e){
    $(".menu").removeClass("open");
                e.stopPropagation();
    });

});