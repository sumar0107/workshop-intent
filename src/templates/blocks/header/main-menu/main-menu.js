import {TweenLite} from "gsap/TweenLite";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import 'waypoints/lib/jquery.waypoints';
import SuperSlide from "superslide.js";
import classie from "classie";


const trSlant = () => {
  const $links = $('.js-menu-link');
  const $el = $('.scrollnav-selector');
  const wpOffset = 60;
  const menuHamburger = document.querySelector('#js-menu-hamburger');
  const myMenu = new SuperSlide({
    slider: document.getElementById('menu'),
    content: document.getElementById('wrapper'),
    animation: 'slideRight',
    allowDrag: true,
    slideContent: true,
    allowContentInteraction: true,
    closeOnBlur: true,
    width: '80vw',
    onOpen() {
      classie.add(menuHamburger, 'is-active')
    },
    onClose() {
      classie.remove(menuHamburger, 'is-active')
    },
    beforeOpen() {
      classie.add(this.slider, 'menu-open')
    },
    beforeClose() {
      classie.remove(this.slider, 'menu-open')
    }
  });

  // down
  $el.waypoint(function (direction) {
    if (direction === 'down') {
      $links.removeClass('active');
      // form the selector dynamically.
      // "this" keyword refers waypoint object and the element is located at "this.element"
      // using "this.element.id", get the nav anchor you want to target
      // example: "nav a[href='#landing']"
      const $selector = $(`a.js-menu-link[href='#${this.element.id}']`);
      $selector.addClass('active');
    }
  }, {
    offset: wpOffset
  });
  // up

  $el.waypoint(function (direction) {
    if (direction === 'up') {
      $links.removeClass('active');
      const $selector = $(`a.js-menu-link[href='#${this.element.id}']`);
      $selector.addClass('active');
    }
  }, {
    offset: -wpOffset
  });

  $links.on('click', (event) => {
    event.preventDefault();
    TweenLite.to(window, 1, {
      scrollTo: {
        y: $(event.target.closest('.js-menu-link')).attr('href'),
        offsetY: wpOffset,
        autoKill: false
      },
      onComplete() {
        if (event.target.closest('.mobile-menu__list-link')) {
          myMenu.toggle()
        }
      }
    });

  });


  // Promise resolves once menu is open
  // var openPromise = myMenu.open();
  menuHamburger.addEventListener('click', () => {
    myMenu.toggle()
  })
};

export default trSlant;



