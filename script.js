$(document).ready(function () {
  //Mostra/Nascondi sub-menu
  $(".sub-btn").click(function () {
    $(this).next(".sub-menu").slideToggle();
    $(this).find(".dropdown").toggleClass("rotate");
  });

  $("#splash-enter-btn").on("click", function () {
    // Forza il reload di home.html nell'iframe
    $('iframe[name="content-frame"]').attr("src", "home.html");

    // Chiudi tutti i submenu
    $(".sub-menu").slideUp();
    $(".dropdown").removeClass("rotate");

    // Nascondi la splash screen
    $(".splash-screen").css({
      opacity: "0",
      transition: "opacity 0.5s ease",
    });

    // Mostra la pagina principale
    setTimeout(function () {
      $(".splash-screen").hide();
      $(".layout")
        .css({
          display: "flex",
          opacity: "0",
        })
        .animate({ opacity: 1 }, 200);
    }, 500);
  });

  $(".exit-btn").on("click", function () {
    // Nascondi la pagina principale
    $(".layout").css({
      opacity: "0",
      transition: "opacity 0.5s ease",
    });

    // Mostra la splash screen
    setTimeout(function () {
      $(".layout").hide();

      // RESET animazione splash
      const container = document.querySelector(".container");
      const buttonContainer = document.querySelector(
        ".splash-button-container"
      );

      // Rimuovi classi animate
      container.classList.remove("visible", "expanded");
      buttonContainer.classList.remove("visible");

      $(".splash-screen").css({
        display: "flex",
        opacity: "0",
      });

      // Trigger animazione con un piccolo delay
      setTimeout(() => {
        container.classList.add("visible");
      }, 100);

      setTimeout(() => {
        container.classList.add("expanded");
      }, 1000);

      setTimeout(() => {
        buttonContainer.classList.add("visible");
      }, 2000);

      // Fade‑in visivo (opzionale, per accompagnare la transizione)
      setTimeout(() => {
        $(".splash-screen").css({
          opacity: "1",
          transition: "opacity 0.5s ease",
        });
      }, 100);
    }, 500);
  });

  // Animazione Splash Screen
  const container = document.querySelector(".container");
  const buttonContainer = document.querySelector(".splash-button-container");

  // Animazione di entrata
  setTimeout(() => {
    container.classList.add("visible");
  }, 500);

  // Animazione di espansione
  setTimeout(() => {
    container.classList.add("expanded");
  }, 1500);

  // Animazione pulsante dopo espansione
  setTimeout(() => {
    buttonContainer.classList.add("visible");
  }, 2500);
});

//FUNCTION OPEN BUTTON
/*$(document).ready(function () {
  $(".exit-btn").on("click", function (e) {
    e.preventDefault();
    window.close();
  });
});*/
