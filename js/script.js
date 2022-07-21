$(document).ready(function(){

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:40,
        autoplay:true,
        smartSpeed:1500,
        nav:true,
        dots:true,
        navText: [ '', ' ' ],

        responsive:{
            0:{
                items:1
            },

            1000:{
                items:1
            }
        }
    });
});