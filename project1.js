// -------------------------------
//          SCROLL UP BUTTON
// -------------------------------

const btnscolltop = document.querySelector('#btn2');
btnscolltop.addEventListener('click',function(){
// window.scrollTo(0,0); ///another way to add scroll up menu
window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth"
});
});
// -------------------------------
//              CAROUSEL 
// -------------------------------
const prev  = document.querySelector('.prev');
const next = document.querySelector('.next');
const track = document.querySelector('.track');
let carouselWidth = document.querySelector('.carousel-container').offsetWidth;
window.addEventListener('resize', () => {
  carouselWidth = document.querySelector('.carousel-container').offsetWidth;
})
BUTTON();
function BUTTON(){
let index = 0;
next.addEventListener('click', () => {
  index++;
  if(index>0){
    index=1;
      track.style.transform = `translateX(-${index * carouselWidth}px)`;
  }
})
prev.addEventListener('click', () => {
  index--;
  if(index<1){
  index=0;
  }
  track.style.transform = `translateX(-${index * carouselWidth}px)`;
})
}



// 
let slidePosition = 0;
const slides = document.getElementsByClassName('carousel-inner4');
const totalSlides = slides.length;

document.
  getElementById('carousel__button--next')
  .addEventListener("click", function() {
    moveToNextSlide();
  });
document.
  getElementById('carousel__button--prev')
  .addEventListener("click", function() {
    moveToPrevSlide();
  });

function updateSlidePosition() {
  for (let slide of slides) {
    slide.classList.remove('carousel__item--visible');
    slide.classList.add('carousel__item--hidden');
  }

  slides[slidePosition].classList.add('carousel__item--visible');
}

function moveToNextSlide() {
  if (slidePosition === totalSlides - 1) {
    slidePosition = 0;
  } else {
    slidePosition++;
  }

  updateSlidePosition();
}

function moveToPrevSlide() {
  if (slidePosition === 0) {
    slidePosition = totalSlides - 1;
  } else {
    slidePosition--;
  }

  updateSlidePosition();
}