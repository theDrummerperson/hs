document.addEventListener('DOMContentLoaded', function() {
    const parallaxElement = document.querySelector('.parallax-bg'); 
    const elementHeight = parallaxElement.offsetHeight;

    function parallax() {
        let scrollPos = window.pageYOffset; 
        let transformValue = scrollPos / 40;
        let opacityValue = 1 - (scrollPos / 2000);
        let blurValue = Math.min(scrollPos / 100, 3);

        if (scrollPos < elementHeight) {
            parallaxElement.style.transform = `translate3d(0, -${transformValue}%, 0)`;
            parallaxElement.style.opacity = opacityValue;
            parallaxElement.style.filter = `blur(${blurValue}px)`; 
        }
    }

    window.addEventListener('scroll', parallax); 
});


function parallax() {
    var scrollPos = $(window).scrollTop();
    $('.parallax-bg').css({
        'transform': 'translate3d(0, -' + (scrollPos / 40) + '%, 0)',
        'opacity': 1 - (scrollPos / 2000),
        '-webkit-filter': 'blur(' + Math.min(scrollPos / 100, 3) + 'px)'
    });
}

$(window).scroll(parallax);
