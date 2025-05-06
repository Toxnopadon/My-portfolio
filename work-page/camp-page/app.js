function audioplay() {
    const audio = document.getElementById("bgmusic");
    audio.volume = 0.05;
  }
  
  window.addEventListener("DOMContentLoaded", audioplay);

  // ควบคุม navbar
window.addEventListener("DOMContentLoaded", audioplay);

function handleSelect(select) {
  const url = select.value;
  if (url) {
    window.location.href = url;
  }
}
