var elementPosition = $('#sticky-nav').offset();

$(document).scroll(function() {
    if($(window).scrollTop() > elementPosition.top){
        $('#sticky-nav').addClass('navbar-fixed-top');
    } else {
        $('#sticky-nav').removeClass('navbar-fixed-top');
    }
});

var party = $('.wed-party-mem li')

party.on("click", function() {
  $(this).closest('li').children().slideToggle();
})
