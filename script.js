function moveButton() {
    var noButton = document.getElementById('noButton');
    var x = Math.random() * (window.innerWidth - noButton.offsetWidth - 85);
    var y = Math.random() * (window.innerHeight - noButton.offsetHeight - 48);
    
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
}

// script.js

let audioPlayer = new Audio('https://www.youtube.com/watch?v=CwGbMYLjIpQ');
let isAudioPlaying = true;

function toggleAudio() {
  if (isAudioPlaying) {
    audioPlayer.pause();
  } else {
    audioPlayer.play();
  }
  isAudioPlaying = !isAudioPlaying;
}

