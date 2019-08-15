import $ from "jquery";
import bootstrap from 'bootstrap';
// import classie from 'classie';
import sayHello from './lib/sayHello';
import slider from '../templates/mixins/swiper/swiper';
import mobileMenu from "../templates/blocks/header/mobile-menu/mobile-menu";
import yaMapInit from "../templates/blocks/map/map";
import showMore from "./lib/show-more";

if (document.querySelector('.js-swiper')) {
  slider();
}
if (document.querySelector('#js-menu-hamburger')) {
  mobileMenu();
}
if (document.querySelector('#map')) {
  yaMapInit();
}
if (document.querySelector('.js-show-more')) {
  showMore();
}

sayHello();


document.addEventListener('DOMContentLoaded', () => {

});

window.addEventListener('resize', () => {

});





