$(document).ready(function(){
 var sec = $('section:first-child'),
        nav = $('#navigation');

    window.addEventListener('scroll', function() {

        if (window.scrollY > 116) {
            sec.css('margin-top', '115px');
            nav.addClass('fixedNav');
        } else {
            sec.css('margin-top', '0px');
            nav.removeClass('fixedNav');

        }


    });

});   


