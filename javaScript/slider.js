const slideList = [
  "../images/slider1.jpg",
  "../images/slider2.jpg",
  "../images/slider3.jpg",
];
const homeSlideList = [
  "images/slider1.jpg",
  "images/slider2.jpg",
  "images/slider3.jpg",
];
const slider = document.querySelector("header");
const homeSlider = document.querySelector(".home");
let active = 0;
const changeSlide = () => {
  active++;
  if (active === homeSlideList.length) {
    active = 0;
  }
  slider.style.backgroundImage = `url(${slideList[active]})`;
  homeSlider.style.backgroundImage = `url(${homeSlideList[active]})`;
};
setInterval(changeSlide, 7000);
