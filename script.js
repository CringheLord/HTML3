$(document).ready(function(){
    //Mostra/Nascondi sub-menu 
    $('.sub-btn').click(function() {
        $(this).next('.sub-menu').slideToggle();
        $(this).find('.dropdown').toggleClass('rotate');
    });

    $("#splash-enter-btn").on("click", function() {
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


    // Animazione Splash Screen
    const container = document.querySelector('.container');
    const buttonContainer = document.querySelector('.splash-button-container');

    // Add entrance animation
    setTimeout(() => {
        container.classList.add('visible');
    }, 500);

    // Add expansion animation
    setTimeout(() => {
        container.classList.add('expanded');
    }, 1500);

    // Show button after expansion animation
    setTimeout(() => {
        buttonContainer.classList.add('visible');
    }, 2500);
 
});