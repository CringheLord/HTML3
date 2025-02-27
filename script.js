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
