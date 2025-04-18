document.addEventListener('DOMContentLoaded', function() {
    const bgm = document.getElementById("bgm");
  
    window.playMusic = function() {
      bgm.play();
      bgm.volume = '0.1';
    }
});  