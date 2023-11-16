const formulaireMDP = document.getElementById("formulaire");

formulaireMDP.addEventListener("submit", function (e) {
  e.preventDefault();

document.getElementById("confirmation").classList.add("visible");
});