import Swiper from 'swiper';
import classie from 'classie';

function mobileSwiper() {
  const swiperSliderAll = document.getElementsByClassName('js-swiper-mobile')
  for (let i = 0; swiperSliderAll.length > i; i++) {
    const swiperSliderAllWrapper = swiperSliderAll[i].parentNode
    const swiperSliderAllPagination = swiperSliderAllWrapper.querySelector('.swiper-pagination')
    classie.addClass(swiperSliderAllPagination, `js-swiper-pagination-mobile-${i}`)
    const swiperOptions = {
      direction: 'horizontal',
      mousewheel: {
        forceToAxis: true,
      },
      autoHeight: true,
      slidesPerView: 1,
      loop: true,
      spaceBetween: 120,
      // effect: 'fade',
      pagination: {
        el: `.js-swiper-pagination-mobile-${i}`,
        clickable: true,
        renderBullet(index, className) {
          return `<span class="${className}">${index + 1}</span>`;
        },
      },
      breakpoints: {
        480: {
          slidesPerView: 1,
          spaceBetween: 0
        },
        767: {
          slidesPerView: 2,
          spaceBetween: 0
        },
        // 991: {
        //   slidesPerView: 1,
        //   spaceBetween: 10
        // },
      }
    }
    // breakpoint where swiper will be destroyed
    // and switches to a dual-column layout
    const breakpoint = window.matchMedia('(min-width: 48rem)');
    let slider;

    const enableSwiper = () => {
      slider = new Swiper(swiperSliderAll[i], swiperOptions);
    }
    const breakpointChecker = () => {
      // if larger viewport and multi-row layout needed
      if (breakpoint.matches === true) {

        // clean up old instances and inline styles when available
        if (slider !== undefined) slider.destroy(true, true);


        // else if a small viewport and single column layout needed
      } else if (breakpoint.matches === false) {

        // fire small viewport version of swiper
        return enableSwiper();

      }
      // or/and do nothing
      return false;
    };
    // keep an eye on viewport size changes
    breakpoint.addListener(breakpointChecker);

    // kickstart
    breakpointChecker();
  }
};

module.exports = mobileSwiper;

