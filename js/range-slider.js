console.log("Hello");
const slideValue = document.querySelector(".app-slider-value span");
const inputSlider = document.querySelector(".app-slider-input input");
const progressBar = document.querySelector(".app-range-bar");

inputSlider.oninput = (() => {
  let value = inputSlider.value;
  slideValue.textContent = value;
  slideValue.style.left = `${value}%`;
  progressBar.style.width = `${value}%`;
});

inputSlider.onmousedown = (() => {
  slideValue.classList.add('show');
});

inputSlider.onmouseleave = (() => {
  slideValue.classList.remove('show');
})