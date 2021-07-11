$(function(){

    //=====SEARCH TOGGLE=====//
    
    $(".active").click(function(){
        $(".search-box").toggle();
        $("input[type='text']").focus();
    });

    //=====banner slider=====//
    $('.banner-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '.prev',
        nextArrow: '.next',
        dots: true,
      });

      //=====bottom to top button=====//

      $(window).scroll(function(){

        var scrolling = $(this).scrollTop();

        if(scrolling > 50){
            $(".bottom-to-top").fadeIn(500);
        }
        else{
            $(".bottom-to-top").fadeOut(500); 
        }
        // sticky menu //
        if(scrolling > 100){
            $("#nav").addClass("sticky-bg");
        }
        else{
            $("#nav").removeClass("sticky-bg");
        }
      });

     $(".bottom-to-top").click(function(){
        $('html, body').animate({
            scrollTop:0
        }, 2000);
     });      

           //animation scroll js
   var html_body = $('html, body');
   $('nav a').on('click', function () {
       if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
           var target = $(this.hash);
           target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
           if (target.length) {
               html_body.animate({
                   scrollTop: target.offset().top - 0
               }, 1500,);
               return false;
           }
       }
   });
   


});