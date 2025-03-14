function playSound(soundId) {
    var sound = document.getElementById(soundId);
    if (sound) {
        sound.play();
    }
}