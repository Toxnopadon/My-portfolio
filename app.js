const words = ["I am a student.", "I will be an engineer.", "I will change the world."];
const speed = 100; // ความเร็วการพิมพ์ทีละตัว (ms)
const eraseSpeed = 100 // ความเร็วการลบ (ms)
const delayBetweenWords = 1250; // หน่วงระหว่างคำ

let i = 0; // index คำ
let j = 0; // index ตัวอักษร
let isDeleting = false;
const element = document.getElementById("typewriter");

function type() {
  const currentWord = words[i];
  if (isDeleting) {
    j--;
    element.textContent = currentWord.substring(0, j);
    if (j === 0) {
      isDeleting = false;
      i = (i + 1) % words.length;
      setTimeout(type, speed);
    } else {
      setTimeout(type, eraseSpeed);
    }
  } else {
    j++;
    element.textContent = currentWord.substring(0, j);
    if (j === currentWord.length) {
      isDeleting = true;
      setTimeout(type, delayBetweenWords);
    } else {
      setTimeout(type, speed);
    }
  }
}

type();


function audioplay() {
  const audio = document.getElementById("bgmusic");
  audio.volume = 0.05;
}

window.addEventListener("DOMContentLoaded", audioplay);