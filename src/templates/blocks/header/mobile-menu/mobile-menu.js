import SuperSlide from "superslide.js";
import classie from 'classie';


const mobileMenu = () => {
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

  // Promise resolves once menu is open
  // var openPromise = myMenu.open();
  menuHamburger.addEventListener('click', () => {
    myMenu.toggle()
  })
};
export default mobileMenu
