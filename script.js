//navigation

$("#js-news").click(function () {
    $('html, body').animate({
        scrollTop: $(".title-news").offset().top
    }, 700);
});
$("#js-projects").click(function () {
    $('html, body').animate({
        scrollTop: $(".about-us").offset().top
    }, 700);
});
$("#js-projects-scroll").click(function () {
    $('html, body').animate({
        scrollTop: $(".about-us").offset().top
    }, 700);
});

$("#js-footer").click(function () {
    $('html, body').animate({
        scrollTop: $(".footer").offset().top
    }, 700);
});
$("#js-fotter-logo").click(function () {
    $('html, body').animate({
        scrollTop: $(".wrapper").offset().top
    }, 700);
});

//slider-news

$('.news__cards').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    dots: true
});