var coll = document.getElementById("btn");
var i;

let btn = document.querySelector("#btn")
let contact = document.querySelector(".contact")

contact.classList.add("hide")

btn.addEventListener("click", function () {
  contact.classList.add("show")
  btn.classList.add("hide")
});



const fadeIn = document.querySelector("#logo");

fadeIn.addEventListener("click", fadeinLogo);

function fadeinLogo() {
  CHARACTER.classList = "";
  CHARACTER.classList.add("fadein");
}
