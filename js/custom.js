$(function(){

    //=====SEARCH TOGGLE=====//
    
    $(".active").click(function(){
        $(".search-box").toggle();
        $("input[type='text']").focus();
    });

    $('.banner-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '.prev',
        nextArrow: '.next',
        dots: true,
      });



});