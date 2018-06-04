let $elementAnimate = $('.elementAnimate');
let $window = $(window);
 
function isPartiallyVisible() {
    let windowHeight = $window.height();
    let windowTop = $window.scrollTop();
    let windowBottom = (windowTop + windowHeight);

$.each($elementAnimate, function() {
    let $element = $(this);
    let elementHeight = $element.outerHeight();
    let elementTop = $element.offset().top;
    let elementBottom = (elementTop + elementHeight);

     //check to see if this current container is within viewport

    if ((elementBottom >= windowTop) && (elementTop <= windowBottom)) { 
        $element.addClass('active');
    } else {
        $element.removeClass('active');
        }
    });
}


$window.on('scroll resize', isPartiallyVisible);
$window.trigger('scroll');