window.addEventListener('scroll', scrollFunc);

function scrollFunc() {
    var windowScroll = this.scrollY;

    var $logo = document.getElementsByClassName('home-parallax-1')[0];
    $logo.style.transform = 'translateY(' - windowScroll / 45 + '%)';

    var $backBird = document.getElementsByClassName('home-parallax-2')[0];
    $backBird.style.transform = 'translateY(' + windowScroll / 6 + '%)';
    $backBird.style.opacity = 0;
}