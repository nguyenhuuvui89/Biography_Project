const gallery = document.querySelector('.collection');
const leftArrow = document.querySelector('.fa-circle-arrow-left');
const rightArrow = document.querySelector('.fa-circle-arrow-right');

rightArrow.addEventListener('click', () => {
  gallery.style.scrollBehavior = 'smooth';
  const unit = window.innerWidth / 100; // calculate 1vw
  gallery.scrollLeft += 65.1 * unit; // when scroll will scroll 65,1 vw
});

leftArrow.addEventListener('click', () => {
  gallery.style.scrollBehavior = 'smooth';
  const unit = window.innerWidth / 100; // calculate 1vw
  gallery.scrollLeft -= 65.1 * unit; // when scroll will scroll 65,1 vw
});

// -----click button to show more articles----

const btnShow = document.querySelector('.btn-show');
const article2 = document.querySelector('.article-part2');
let show = false;
function clickShow() {
  if (!show) {
    article2.style.display = 'flex';
    show = true;
    btnShow.innerHTML = 'Show Less';
  } else {
    article2.style.display = 'none';
    show = false;
    btnShow.innerHTML = 'Show More';
  }
}

btnShow.addEventListener('click', clickShow);
