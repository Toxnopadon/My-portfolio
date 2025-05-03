function audioplay() {
    const audio = document.getElementById("bgmusic");
    audio.volume = 0.03;
}

window.addEventListener("DOMContentLoaded", audioplay);