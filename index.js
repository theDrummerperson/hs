document.addEventListener('DOMContentLoaded', function () {
    const parallaxElement = document.querySelector('.header-content');

    if (!parallaxElement) {
        console.error('Parallax element not found');
        return;
    }

    const elementHeight = parallaxElement.offsetHeight;

    function parallax() {
        const scrollPos = window.scrollY || window.pageYOffset;
        const transformValue = scrollPos / 40;
        const opacityValue = Math.max(1 - scrollPos / 2000, 0);
        const blurValue = Math.min(scrollPos / 100, 3);

        if (scrollPos < elementHeight) {
            parallaxElement.style.transform = `translate3d(0, -${transformValue}%, 0)`;
            parallaxElement.style.opacity = opacityValue;
            parallaxElement.style.filter = `blur(${blurValue}px)`;
        }
    }

    window.addEventListener('scroll', parallax);
});
