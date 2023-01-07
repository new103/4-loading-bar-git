const textEl = document.querySelector(".text");
const progressEl = document.querySelector(".progress");
let idx = 0;

function load() {
  textEl.textContent = `${idx}%`;
  progressEl.style.width = `${idx}%`;
  idx++;

  if (idx <= 100) {
    setTimeout(load, 10);
  }
}

load();
