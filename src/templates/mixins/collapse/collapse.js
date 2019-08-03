import Expo, {TweenMax} from "gsap";
import classie from 'classie';

const innerMenuBtn = document.querySelectorAll('.js-show__btn');
for (let j = 0; j < innerMenuBtn.length; j++) {
  innerMenuBtn[j].addEventListener('click', function (e) {
    e.preventDefault();
    const linkWrapper = this.previousElementSibling;
    const link = linkWrapper.querySelectorAll('.js-show__item');
    let delay = .2;
    for (let i = 0; i < link.length; i++) {
      classie.removeClass(link[i], 'js-show__item');
      TweenMax.fromTo(link[i], .2, {
        visibility: 'hidden',
        opacity: 0,
        x: 20,
      }, {
        visibility: 'visible',
        opacity: 1,
        x: 0,
        delay,
      }, Expo.easeInOut);
      delay += .1
    }
    classie.removeClass(this, 'collapsed');
  })
}

/* $('.js-btn-inner-menu').on('click', function (e) {
  e.preventDefault();
  const link = $(this).prev('.inner-menu').find('.inner-menu__list-item.d-none');
  let delay = .2;
  link.removeClass('d-none');
  for (let i = 0; i < link.length; i++) {
    TweenMax.fromTo(link[i], .2, {
      visibility: 'hidden',
      opacity: 0,
      x: 20,
    }, {
      visibility: 'visible',
      opacity: 1,
      x: 0,
      delay,
    }, Expo.easeInOut);
    delay += .1
  }
  classie.removeClass(this, 'collapsed');
}) */
