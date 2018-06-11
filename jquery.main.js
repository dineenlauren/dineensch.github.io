let $elementFull = $('.elementFull');
let $elementPartial = $('.elementPartial');
let $window = $(window);
 

function partiallyVisible() {
    let windowHeight = $window.height();
    let windowTop = $window.scrollTop();
    let windowBottom = (windowTop + windowHeight);

$.each($elementPartial, function() {
    let $element = $(this);
    let elementHeight = $element.outerHeight();
    let elementTop = $element.offset().top;
    let elementBottom = (elementTop + elementHeight);

    if ((elementBottom >= windowTop) && (elementTop <= windowBottom)) { 
        $element.addClass('active');
    } else {
        $element.removeClass('active');
        }
    });
}

function fullyVisible() {
    let windowHeight = $window.height();
    let windowTop = $window.scrollTop();
    let windowBottom = (windowTop + windowHeight);

$.each($elementFull, function() {
    let $element = $(this);
    let elementHeight = $element.outerHeight();
    let elementTop = $element.offset().top;
    let elementBottom = (elementTop + elementHeight);

    if ((elementTop >= windowTop) && (elementBottom <= windowBottom)) { 
        $element.addClass('active');
    } else {
        $element.removeClass('active');
        }
    });
}

$window.on('scroll resize', partiallyVisible);
$window.on('scroll resize', fullyVisible);
$window.trigger('scroll');

$(function(){
    $(".flip").flip({
        trigger: 'hover'
    });
});