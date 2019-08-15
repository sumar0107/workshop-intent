import Swiper from 'swiper';
import classie from 'classie';

function slider() {
  const sliderAll = document.querySelectorAll('.js-swiper')
  for (let i = 0; sliderAll.length > i; i++) {
    const sliderAllWrapper = sliderAll[i].parentNode
    const sliderAllBtnPrev = sliderAllWrapper.querySelector('.js-swiper-button-prev')
    const sliderAllBtnNext = sliderAllWrapper.querySelector('.js-swiper-button-next')
    const sliderAllPagination = sliderAllWrapper.querySelector('.swiper-pagination')
    classie.addClass(sliderAllBtnPrev, `js-swiper-button-prev-${i}`)
    classie.addClass(sliderAllBtnNext, `js-swiper-button-next-${i}`)
    classie.addClass(sliderAllPagination, `js-swiper-pagination-${i}`)
    const sliderOptions = {
      direction: 'horizontal',
      mousewheel: {
        forceToAxis: true,
      },
      autoHeight: false,
      slidesPerView: 1,
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      spaceBetween: 0,
      effect: 'fade',
      pagination: {
        el: `.js-swiper-pagination-${i}`,
        clickable: true
      },
      navigation: {
        nextEl: `.js-swiper-button-next-${i}`,
        prevEl: `.js-swiper-button-prev-${i}`
      }
    }
    document.addEventListener('DOMContentLoaded', () => {
      const mySlider = new Swiper(sliderAll[i], sliderOptions);
    });


  }
};

export default slider;
