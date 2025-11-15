 
    window.addEventListener("scroll", function () {
      const nav = document.querySelector(".nav-scroll");
      if (window.scrollY > 50) {
        nav.classList.add("scrolled");
      } else {
        nav.classList.remove("scrolled");
      }
    });

    // Mobile menu toggle
    const menuBtn = document.getElementById("menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");

    menuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
      menuBtn.classList.toggle("open");
    });



  const video = document.getElementById("heroVideo");

    video.addEventListener("click", () => {
      if (video.muted) {
        video.muted = false;
      } else {
        video.muted = true;
      }
    });