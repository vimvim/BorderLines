
$().ready(function() {

    $('#main-wrapper').tubular({videoId: 'lndbYezvjtI'});

    $("#menu-media").click(function(){
        HomeToMedia();
    });
});

function HomeToMedia() {
    // Remove margin-right margin-left from .navigation
    // .message   display: none
    // .border-line   left: 60px;
    // .menu-container  left: 110px;

    $('.navigation').animate({
        'margin-right': '',
        'margin-left': '0'
    }, 500, function() {
        // Animation complete.
    });

    $('.message').animate({
        'opacity': 0
    }, 500, function() {
        // Animation complete.
    });

    $('.border-line').animate({
        'left': 60
    }, 500, function() {
        // Animation complete.
    });

    $(".menu-container").css({
        'top': '50px',
        'bottom': ''
    });

    $("#menu-media").css({
        'margin-bottom': '200px',
        'background-color': 'rgb(202, 0, 0)',
        'color': 'rgb(223, 223, 223)',
        'margin-top': '0px'
    });

    $('.menu-container').animate({
        'left': 110,
        'width': 180
    }, 500, function() {
        // Animation complete.
    });

    $('.title').animate({
        'left': 110
    }, 500, function() {
        // Animation complete.
    });

    $('.favorite-1').animate({
        'top': 80,
        'left': 340
    }, 500, function() {
        // Animation complete.
    });

    $('.favorite-2').animate({
        'top': 80,
        'left': 720
    }, 500, function() {
        // Animation complete.
    });

    $('.favorite-3').animate({
        'top': 80,
        'left': 1100
    }, 500, function() {
        // Animation complete.
    });

    $('.favorite-4').animate({
        'top': 330,
        'left': 340
    }, 500, function() {
        // Animation complete.
    });

    $('.favorite-5').animate({
        'top': 330,
        'left': 720
    }, 500, function() {
        // Animation complete.
    });

    $('.favorite-6').animate({
        'top': 330,
        'left': 1100
    }, 500, function() {
        // Animation complete.
    });

}
