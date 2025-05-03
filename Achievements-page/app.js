function audioplay() {
    const audio = document.getElementById("bgmusic");
    audio.volume = 0.05;
  }
  
  window.addEventListener("DOMContentLoaded", audioplay);