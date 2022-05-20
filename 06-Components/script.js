const btns = document.querySelectorAll(".icon");

btns.forEach((btn) =>
  btn.addEventListener("click", function (e) {
    this.closest(".item").classList.toggle("open");
  })
);

// const carouselBtnLeft = document.querySelector(".btn--left");
// const carouselBtnRight = document.querySelector(".btn--right");
// const dots = Array.from(document.querySelectorAll(".dot"));
// let currentDot = 0;
// const numDots = 4;

// carouselBtnLeft.addEventListener("click", function (e) {
//   dots.forEach((dot) => dot.classList.remove("dot--fill"));
//   if (currentDot === 0) {
//     currentDot = numDots;
//     dots
//       .find((dot) => dot.dataset.num === currentDot)
//       .classList.add("dot--fill");
//   } else {
//     currentDot--;
//     dots
//       .find((dot) => dot.dataset.num === currentDot)
//       .classList.add("dot--fill");
//   }
// });
