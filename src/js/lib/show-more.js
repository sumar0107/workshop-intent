const showMore = () => {
  let showMoreBtn = document.querySelectorAll('.js-show-more');

  for (let i = 0; i < showMoreBtn.length; i++) {
    showMoreBtn[i].addEventListener('click', (e) => {
      e.preventDefault();
      let showMoreBtnText = showMoreBtn[i].querySelector('span');
      let showMoreBtnIcon = showMoreBtn[i].querySelector('.icon');
      let showMoreWrapper = showMoreBtn[i].closest('.js-show-more-wrapper');
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
  }
};
export default showMore
