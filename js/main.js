// The Environement
const sliderContainer = document.querySelector(".testimonials-slider"); // HTML element = object
const slides = sliderContainer.children; // collection of HTML element = array of objects
const sliderContainerWidth = sliderContainer.offsetWidth;
let itemPerSlide = 0;
const margin = 20;
let slideDots;
// Responsive
const responsive = [
  { breakPoint: { width: 0, item: 1 } }, // if window width > 0 then 1 item show in slide
  { breakPoint: { width: 991, item: 2 } } // if window width > 991 then 2 item show in slide
];

// The functions

function load() {
  // this block of code check the size of the inner width of the window
  // and depend on the window inner width determine the number of item per slide
  for (let i = 0; i < responsive.length; i++) {
    if (window.innerWidth > responsive[i].breakPoint.width) {
      itemPerSlide = responsive[i].breakPoint.item;
    }
  }
  start();
}

function start() {
  // set width of slides
  totalWidth = 0;
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.width = sliderContainerWidth / itemPerSlide - margin + "px";
    slides[i].style.margin = margin / 2 + "px";
    totalWidth += sliderContainerWidth / itemPerSlide;
  }

  // set width of slider container
  sliderContainer.style.width = totalWidth + "px";

  // slides controls
  slideDots = Math.ceil(slides.length / itemPerSlide);
  for (let i = 0; i < slideDots; i++) {
    const div = document.createElement("div");
    div.id = i;
    div.setAttribute("onclick", "controlSlide(this)");
    if (i == 0) {
      div.classList.add("active");
    }
    document.querySelector(".slide-controls").appendChild(div);
  }
}

let currentSlide = 0;
let autoSlide = 0;
function controlSlide(element) {
  currentSlide = element.id;
  changeSlide(currentSlide);
}
function changeSlide() {
  controlButtons = document.querySelector(".slide-controls").children;
  for (let i = 0; i < controlButtons.length; i++) {
    if (controlButtons[i].id == currentSlide) {
      controlButtons[i].classList.add("active");
    } else {
      controlButtons[i].classList.remove("active");
    }
  }
  sliderContainer.style.marginLeft =
    -(sliderContainerWidth * currentSlide) + "px";
}

// let timer = setInterval(functionName, 2000);

window.onload = load();
