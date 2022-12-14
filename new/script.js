const main = document.querySelector("main");
const counterEl = document.querySelector("#counter");
const resetBtn = document.querySelector("#reset");

counter = 0;
colorCounter = 0;

renderCounter();

function increaseCounter() {
  counter++;
  colorCounter++;

  if (colorCounter === 101) {
    colorCounter = 1;
  }
  if (counter === 101) {
    counter = 1;
  }
  main.style.setProperty("--counter", colorCounter + "%");

  renderCounter();
}

main.addEventListener("click", increaseCounter);

resetBtn.addEventListener("click", function () {
  counter = 0;

  main.style.setProperty("--counter", 0 + "%");

  renderCounter();
  resetBtn.blur();
});

function renderCounter() {
  counterEl.innerText = counter;
}

document.addEventListener("keypress", function (e) {
  if (["Enter", " "].includes(e.key)) {
    increaseCounter();
  }
});
