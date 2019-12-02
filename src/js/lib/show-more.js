const showMore = () => {
  let showMoreBtn = [...document.querySelectorAll('.js-show-more')];
  showMoreBtn.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      let showMoreBtnText = item.querySelector('span');
      let showMoreBtnIcon = item.querySelector('.icon');
      let showMoreWrapper = item.closest('.js-show-more-wrapper');
      let showMoreText = showMoreWrapper.querySelector('.js-show-more-text');

      if (showMoreText.style.display !== 'none') {
        showMoreBtnText.innerHTML = 'Подробнее:';
        showMoreText.style.display = 'none';
        showMoreBtnIcon.style.display = 'block';
      } else {
        showMoreText.style.display = "none";
        showMoreBtnText.innerHTML = 'Скрыть';
        showMoreText.style.display = 'inline';
        showMoreBtnIcon.style.display = 'none';
      }
    })
  })
};
export default showMore
