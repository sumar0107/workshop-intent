
// eslint-disable-next-line no-unused-vars
const STICK = 54;
const stickFunc = () => {
  const header = document.querySelector('.header');
  if (window.pageYOffset > STICK) {
    header.classList.add('head-effect')
  } else {
    header.classList.remove('head-effect')
  }

}
export default stickFunc
