'use strict';

imagesLoaded(document.body, { background: true }, function() {});

/*==================================================
=                   Mobile Nav                     =
==================================================*/
const
    navButtonMobile = document.getElementById('navButtonMobile'),
    navMainMobile_1 = document.getElementById('navMainMobile'),
    navMainMobile_2 = document.querySelector('.header-mobile__nav'),
    navMainListMobile = document.querySelectorAll('#navMainMobile ul > li'),
    navBack_1 = document.querySelector('.header-mobile__nav_mask'),
    navButtonLineTop = document.querySelector('.header-mobile__nav_line__top'),
    navButtonLineMiddle = document.querySelector('.header-mobile__nav_line__middle'),
    navButtonLineBottom = document.querySelector('.header-mobile__nav_line__bottom')
;

function navMenuOpenMobile() {

    let tl = new gsap.timeline({
        reversed: true
    });

    tl
        .to(navBack_1, {
            duration: 0.3,
            delay: '-1.1',
            autoAlpha: 1,
            display: 'block',
            zIndex: '9995',
            ease: 'power1'
        })
        .to(navMainMobile_1, {
            duration: 0.3,
            delay: '-1.2',
            x: '0',
            zIndex: '9996',
            ease: 'power2'
        })
        .to(navButtonLineMiddle, {
            duration: 0.2,
            delay: '-0.4',
            rotation: '180deg',
            ease: 'power2'
        })
        .to(navButtonLineTop, {
            duration: 0.2,
            delay: '-0.4',
            rotation: '135deg',
            x: '27%',
            y: '200%',
            scaleX: 0.6,
            ease: 'power2'
        })
        .to(navButtonLineBottom, {
            duration: 0.2,
            delay: '-0.4',
            rotation: '-135deg',
            x: '27%',
            y: '-200%',
            scaleX: 0.6,
            ease: 'power2'
        })
        // .from(navMainListMobile, {
        //     duration: 0.2,
        //     delay: '-0.25',
        //     stagger: 0.01,
        //     x: '10%',
        //     autoAlpha: 0,
        //     ease: 'back'
        // })
    ;

    /*jshint -W030 */
    navButtonMobile.addEventListener('click', function () {
        // tl.play();
        tl.reversed() ? tl.restart() : tl.reverse();
    });

    navBack_1.addEventListener('click', function () {
        tl.reversed() ? tl.restart() : tl.reverse();
    });

}

/*===========  End of Mobile Nav =================*/

function headerMobile() {
    const
        headerMobile = document.querySelector('.header-top--mobile'),
        headerNav = document.querySelector('.header-mobile__nav'),
        headerNavMask = document.querySelector('.header-mobile__nav_mask')
    ;

    document.body.removeChild(headerMobile);
    document.body.removeChild(headerNav);
    document.body.removeChild(headerNavMask);
}

function headerDesktop() {
    const headerDesktop = document.querySelector('.header-top--desktop');
    document.body.removeChild(headerDesktop);
}

function initVendor() {
    headerMobile();
}

function initVendorMobile() {
    headerDesktop();
    navMenuOpenMobile();
}

if (document.body.clientWidth > 820 || screen.width > 820) {
    initVendor();
} else {
    initVendorMobile();
}