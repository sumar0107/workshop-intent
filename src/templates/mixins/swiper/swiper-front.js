import Swiper from 'swiper';
import classie from 'classie';

function frontSwiper() {
  const swiperSliderAll = document.getElementsByClassName('js-swiper-front')
  for (let i = 0; swiperSliderAll.length > i; i++) {
    const swiperSliderAllWrapper = swiperSliderAll[i].parentNode
    const swiperSliderAllBtnPrev = swiperSliderAllWrapper.querySelector('.js-swiper-button-prev')
    const swiperSliderAllBtnNext = swiperSliderAllWrapper.querySelector('.js-swiper-button-next')
    const swiperSliderAllPagination = swiperSliderAllWrapper.querySelector('.swiper-pagination')
    classie.addClass(swiperSliderAllBtnPrev, `js-swiper-button-front-prev-${i}`)
    classie.addClass(swiperSliderAllBtnNext, `js-swiper-button-front-next-${i}`)
    classie.addClass(swiperSliderAllPagination, `js-swiper-pagination-front-${i}`)
    const swiperSlidesPerView = (swiperSliderAll[i].hasAttribute('data-item')) ? swiperSliderAll[i].getAttribute('data-item') : 1;
    const swiperSpaceBetween = (swiperSliderAll[i].hasAttribute('data-item')) ? 0 : 120;
    const swiperSpaceBetweenXs = (swiperSliderAll[i].hasAttribute('data-item')) ? 0 : 10;
    const swiperOptions = {
      direction: 'horizontal',
      mousewheel: {
        forceToAxis: true,
      },
      autoHeight: false,
      slidesPerView: swiperSlidesPerView,
      slidesPerColumn: 2,
      loop: false,
      spaceBetween: swiperSpaceBetween,
      // effect: 'fade',
      pagination: {
        el: `.js-swiper-pagination-front-${i}`,
        clickable: true,
        renderBullet(index, className) {
          return `<span class="${className}">${index + 1}</span>`;
        },
      },
      navigation: {
        nextEl: `.js-swiper-button-front-next-${i}`,
        prevEl: `.js-swiper-button-front-prev-${i}`
      },
      breakpoints: {
        767: {
          slidesPerView: 1,
          slidesPerColumn: 2,
          spaceBetween: swiperSpaceBetweenXs
        },
        // 991: {
        //   slidesPerView: 1,
        //   spaceBetween: 10
        // },
      }
    }
    const swiper = new Swiper(swiperSliderAll[i], swiperOptions);

  }
};
module.exports = frontSwiper;
