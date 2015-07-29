var elementPosition = $('#sticky-nav').offset();

$(document).scroll(function() {
    if($(window).scrollTop() > elementPosition.top){
        $('#sticky-nav').addClass('navbar-fixed-top');
    } else {
        $('#sticky-nav').removeClass('navbar-fixed-top');
    }
});

var maids = $('.maids li')

maids.on("click", function() {
  console.log("hithere")
})
