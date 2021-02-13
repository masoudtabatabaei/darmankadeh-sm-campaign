$(document).on("click", "#scroll_bottom", function (event) {
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $('.cta_content').offset().top
    }, 800);
});