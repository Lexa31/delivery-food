const cartButton = document.querySelector("#cart-button");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");
cartButton.addEventListener("click", toggModal);
close.addEventListener("click", toggModal);

function toggModal() {
  modal.classList.toggle("is-open");
}
new WOW().init();
