const formSug = document.getElementById("formulaire");

formSug.addEventListener("submit", function (e) {
  e.preventDefault();

  document.getElementById("Formsug").classList.add("visible");
});

