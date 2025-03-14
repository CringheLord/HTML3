function playSoundAndNavigate(soundId, url) {
    var sound = document.getElementById(soundId);
    if (sound) {
        sound.play().then(() => {
            // Wait for the duration of the audio file before navigating
            setTimeout(function() {
                location.href = url;
            }, sound.duration * 1000); // Delay navigation by the audio's duration (in milliseconds)
        }).catch((error) => {
            // Handle errors if audio doesn't play
            console.error("Error playing sound: ", error);
            location.href = url; // Navigate immediately if there's an error
        });
    } else {
        // If sound element is not found, navigate immediately
        location.href = url;
    }
}