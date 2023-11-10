const rect = document.getElementById("rect");
const rectPosition = rect.getBoundingClientRect();
let rectWidth = rectPosition.width;

function mapRange(value, fromMin, fromMax, toMin, toMax) {
  const clampedValue = Math.min(Math.max(value, fromMin), fromMax);
  const percentage = (clampedValue - fromMin) / (fromMax - fromMin);
  const newValue = toMin + percentage * (toMax - toMin);
  return Math.floor(newValue);
}

rect.addEventListener("mousemove", function (d) {
  let mousePosition = Math.floor(d.clientX - rectPosition.x);
  if (mousePosition < rectPosition.width / 2) {
    let redColorValue = mapRange(mousePosition, 0, rectWidth / 2, 0, 255);
    rect.style.backgroundColor = `rgb(${redColorValue},0,0)`;
  } else {
    let blueColorValue = mapRange(
      mousePosition,
      rectWidth / 2,
      rectWidth,
      0,
      255
    );
    rect.style.backgroundColor = `rgb(0,0,${blueColorValue})`;
  }
});

rect.addEventListener("mouseleave", function () {
  rect.style.backgroundColor = "white";
});
