import './styles.scss';

import './fonts/sf-burlington-script.italic.ttf';

document.addEventListener('DOMContentLoaded', initPage);

function initPage() {
  const toTopButton = document.querySelector('.to-top-button');

  window.addEventListener('scroll', () => {
    console.log(window.screenTop);
    if (window.scrollY > 100) {
      toTopButton.classList.add('to-top-button--show');
    } else {
      toTopButton.classList.remove('to-top-button--show');
    }
  })
}
