document.addEventListener('DOMContentLoaded', function() {
  var video = document.getElementById('myVideo');
  var videoContainer = document.getElementById('video-container');
  var content = document.getElementById('content');

  // Afficher la vidéo en plein écran
  video.play();
  
  // Masquer la vidéo et afficher le contenu après la fin de la vidéo
  video.onended = function() {
    videoContainer.style.display = 'none';
    content.style.display = 'block';
  };
});
