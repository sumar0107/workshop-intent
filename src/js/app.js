import $ from "jquery";
import bootstrap from 'bootstrap';
// import classie from 'classie';
import sayHello from './lib/sayHello';
import slider from '../templates/mixins/swiper/swiper';
import yaMapInit from "../templates/blocks/map/map";
import showMore from "./lib/show-more";
import stickFunc from "../templates/includes/header/header";
import trSlant from "../templates/blocks/header/main-menu/main-menu";

if (document.querySelector('.js-swiper')) {
  slider();
}
if (document.querySelector('#map')) {
  yaMapInit();
}
if (document.querySelector('.js-show-more')) {
  showMore();
}
trSlant();
sayHello();
document.addEventListener('DOMContentLoaded', () => {
  stickFunc();
});
window.addEventListener('scroll', () => {
  stickFunc();
});

document.addEventListener('DOMContentLoaded', () => {

});

window.addEventListener('resize', () => {

});





