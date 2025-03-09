$(document).ready(function(){
    //Mostra/Nascondi sub-menu 
    $('.sub-btn').click(function() {
        $(this).next('.sub-menu').slideToggle();
        $(this).find('.dropdown').toggleClass('rotate');
    });

    $(".enter_btn").on("click", function() {
        // Nascondi la splash screen
        $(".splash-screen").css({
            "opacity": "0",
            "transition": "opacity 0.5s ease"
        });
    
        // Mostra la pagina principale
        setTimeout(function() {
            $(".splash-screen").hide();
            $(".layout").css({
                "display": "flex",
                "opacity": "1"
            });
        }, 500);
    });

    $(".exit-btn").on("click", function() {
        // Nascondi la splash screen
        $(".layout").css({
            "opacity": "0",
            "transition": "opacity 0.5s ease"
        });
    
        // Mostra la pagina principale
        setTimeout(function() {
            $(".layout").hide();
            $(".splash-screen").css({
                "display": "flex",
                "opacity": "1"
            });
        }, 500);
    });
 
});

/* 
<script src="script.js"></script>   Dentro le slide o pagine con suoni

// Function to play sound
function playSound(soundFile) {
    let audio = new Audio(soundFile);
    audio.play();
}


modifiche bottoni:

<button class="button" onclick="playSound('click-sound.mp3'); location.href='slide_5.html';">
    Indietro
</button>
<button class="button" onclick="playSound('click-sound.mp3'); location.href='slide_7.html';">
    Avanti
</button>


*/
