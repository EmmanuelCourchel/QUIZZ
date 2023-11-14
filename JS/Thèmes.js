// const culture = document.getElementById("culture");
// const sport = document.getElementById("sport");
// const video = document.getElementById("Video");
// const musique = document.getElementById("Musique");

// culture.addEventListener("mouseover", function (e) {
//   document.getElementById("titre1").classList.toggle("invisible");

// });

document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll("#culture, #sport, #video, #music");
    const textesCaches = document.querySelectorAll("#textecaché1, #textecaché2, #textecaché3, #textecaché4");

    images.forEach(function(image, index) {
        image.addEventListener("mouseenter", function() {
            textesCaches[index].style.opacity = 1; // Apparaître
        });

        image.addEventListener("mouseleave", function() {
            textesCaches[index].style.opacity = 0; // Disparaître
        });
    });
});
