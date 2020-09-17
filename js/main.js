const inputSlider = document.getElementById("range-slider");
const usedSpace = document.querySelector(".component__value-used");
const freeSpace = document.querySelector('.component__value-left span');


inputSlider.oninput = function () {
  let currentSpace = inputSlider.value;

  // Show used and free space on the page
  usedSpace.textContent = currentSpace;
  freeSpace.textContent = inputSlider.max - currentSpace;

  // Change background color of range slider with thumb moving
  let currentSpacePercent = currentSpace / 10;
  let thumbPositionPercent;

  // Small fix for background color.
  // At a certain values background color is moving faster or slower
  // Probably some built-in browser behaviour
  if (currentSpace > 570) {
    thumbPositionPercent = currentSpacePercent - 1;
  } else if (currentSpace < 200) {
    thumbPositionPercent = currentSpacePercent + 1;
  } else {
    thumbPositionPercent = currentSpacePercent;
  }

  let sliderBackground = `linear-gradient(90deg, hsl(6, 100%, 80%) 0%, hsl(335, 100%, 65%) ${thumbPositionPercent}%, hsl(229, 57%, 11%) 0%)`;

  inputSlider.style.background = sliderBackground;
}