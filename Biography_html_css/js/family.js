const gallery = document.querySelector('.gallery');
const galleryBox = gallery.querySelector('.images');
const imgArr = gallery.querySelectorAll('.item .kid');
const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');
const dotBar = gallery.querySelectorAll('.dot-bar li');

const imgArrLen = imgArr.length - 1;
let i = 0;
let setIntervalTime = setInterval(() => { rightArrow.click(); }, 4000);

// Move image function
function moveImage() {
  galleryBox.style.left = `${-imgArr[i].offsetLeft}px`;
  document.querySelector('.act').classList.remove('act');
  dotBar[i].classList.add('act');
  clearInterval(setIntervalTime);
  setIntervalTime = setInterval(() => { rightArrow.click(); }, 4000);
}

// Applied event to arrow buttons
rightArrow.addEventListener('click', (e) => {
  e.preventDefault();
  if (i + 1 <= imgArrLen) {
    i += 1;
  } else {
    i = 0;
  }
  moveImage();
});

leftArrow.addEventListener('click', (e) => {
  e.preventDefault();
  i -= 1;
  if (i < 0) {
    i = imgArrLen;
  }
  moveImage();
});

// Applied move images to dots

for (let index = 0; index <= imgArrLen; ++index) {
  dotBar[index].addEventListener('click', () => {
    i = index;
    moveImage();
  });
}
