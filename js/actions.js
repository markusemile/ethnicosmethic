window.addEventListener('scroll', scrollFunc);

function scrollFunc() {
    var windowScroll = this.scrollY;

    var $logo = document.getElementsByClassName('home-parallax-1')[0];
    $logo.style.transform = 'translateY(' - windowScroll / 45 + '%)';

    var $backBird = document.getElementsByClassName('home-parallax-2')[0];
    $backBird.style.transform = 'translateY(' + windowScroll / 6 + '%)';

    var $foreBird = document.getElementsByClassName('home-parallax-3')[0];
    $foreBird.style.transform = 'translateY(-' + windowScroll / 6 + '%)';

    var $foreBird = document.getElementsByClassName('slogan')[0];
    $foreBird.style.transform = 'translateY(' + windowScroll / 4 + '%)';

}