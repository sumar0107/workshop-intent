import Swiper from 'swiper';
import classie from 'classie';

function wiziwigSwiper() {
  const swiperSliderAll = document.getElementsByClassName('js-swiper')
  for (let i = 0; swiperSliderAll.length > i; i++) {
    const swiperSliderAllWrapper = swiperSliderAll[i].parentNode
    const swiperSliderAllBtnPrev = swiperSliderAllWrapper.querySelector('.js-swiper-button-prev')
    const swiperSliderAllBtnNext = swiperSliderAllWrapper.querySelector('.js-swiper-button-next')
    const swiperSliderAllPagination = swiperSliderAllWrapper.querySelector('.swiper-pagination')
    classie.addClass(swiperSliderAllBtnPrev, `js-swiper-button-prev-${i}`)
    classie.addClass(swiperSliderAllBtnNext, `js-swiper-button-next-${i}`)
    classie.addClass(swiperSliderAllPagination, `js-swiper-pagination-${i}`)
    const swiperSlidesPerView = (swiperSliderAll[i].hasAttribute('data-item')) ? swiperSliderAll[i].getAttribute('data-item') : 1;
    const swiperSpaceBetween = (swiperSliderAll[i].hasAttribute('data-item')) ? 0 : 120;
    const swiperSpaceBetweenXs = (swiperSliderAll[i].hasAttribute('data-item')) ? 0 : 10;
    let swiperBbreakpoints
    console.log(swiperSlidesPerView);
    if (+swiperSlidesPerView === 4) {
      swiperBbreakpoints = {
        991: {
          slidesPerView: 3,
        },
        767: {
          slidesPerView: 2,
          spaceBetween: swiperSpaceBetweenXs
        },
        480: {
          slidesPerView: 1,
          spaceBetween: swiperSpaceBetweenXs
        },
      }
    } else {
      swiperBbreakpoints = {
        767: {
          slidesPerView: 1,
          spaceBetween: swiperSpaceBetweenXs
        }
      }
    }
    const swiperOptions = {
      direction: 'horizontal',
      mousewheel: {
        forceToAxis: true,
      },
      autoHeight: true,
      slidesPerView: swiperSlidesPerView,
      loop: true,
      spaceBetween: swiperSpaceBetween,
      // effect: 'fade',
      pagination: {
        el: `.js-swiper-pagination-${i}`,
        clickable: true,
        renderBullet(index, className) {
          return `<span class="${className}">${index + 1}</span>`;
        },
      },
      navigation: {
        nextEl: `.js-swiper-button-next-${i}`,
        prevEl: `.js-swiper-button-prev-${i}`
      },
      breakpoints: swiperBbreakpoints,
    }
    const swiper = new Swiper(swiperSliderAll[i], swiperOptions);

  }
};

module.exports = wiziwigSwiper;
