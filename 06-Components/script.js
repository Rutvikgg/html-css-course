const btns = document.querySelectorAll(".icon");

btns.forEach((btn) =>
  btn.addEventListener("click", function (e) {
    this.closest(".item").classList.toggle("open");
  })
);
