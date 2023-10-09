document.querySelectorAll(".standart_ul").forEach((catalogItemBtn, index) => {
  const label = catalogItemBtn.querySelector("label");
  const checkedP = catalogItemBtn.querySelector("label p");
  const ul = catalogItemBtn.querySelector("ul");
  label.addEventListener("click", (e) => {
    document.querySelectorAll(".standart_ul").forEach((catalogItemBtn, i) => {
      if (i != index) {
        catalogItemBtn.querySelector("ul").classList.remove("visible_ul");
      }
    });
    if (ul.classList.value.includes("visible_ul")) {
      ul.classList.remove("visible_ul");
    } else {
      ul.classList.add("visible_ul");
    }
  });
  ul.addEventListener("click", (e) => {
    console.log(e.target == "li");
  });
});
const filtersShowBtn = document.querySelector(".filters_show button");
const filters = document.querySelector(".filters");
const filtersCloseBtn = document.querySelector(".filters i");
filtersShowBtn.addEventListener("click", () => {
  filters.classList.add("filters_visible");
  disableScroll();
});
filtersCloseBtn.addEventListener("click", () => {
  filters.classList.remove("filters_visible");
  enableScroll();
});
document.querySelector(".activate_btn").addEventListener("click", () => {
  document.querySelector(".activate_btn").classList.toggle("dicactivate_btn");
});
function disableScroll() {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
  window.onscroll = function () {
    window.scrollTo(scrollLeft, scrollTop);
  };
}
function enableScroll() {
  window.onscroll = null;
}
const minRangeInput = document.getElementById("minRangeInput");
const maxRangeInput = document.getElementById("maxRangeInput");
const minValue = document.getElementById("minValue");
const maxValue = document.getElementById("maxValue");

// Установка начальных значений
minValue.textContent = minRangeInput.value;
maxValue.textContent = maxRangeInput.value;

// Обновление значений при изменении ползунков
minRangeInput.addEventListener("input", () => {
  const min = parseInt(minRangeInput.value);
  const max = parseInt(maxRangeInput.value);

  if (min > max) {
    minRangeInput.value = max;
    minValue.textContent = max;
  } else {
    minValue.textContent = min;
  }
});

maxRangeInput.addEventListener("input", () => {
  const min = parseInt(minRangeInput.value);
  const max = parseInt(maxRangeInput.value);

  if (max < min) {
    maxRangeInput.value = min;
    maxValue.textContent = min;
  } else {
    maxValue.textContent = max;
  }
});
