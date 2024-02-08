addEventListener("scroll", () => {
    if (window.scrollY > 0) {
        navbar.classList.add("navbar-scrolled");
        //btt_span.style.display = "block";
        btt_span.style.opacity = "1";
    } else {
        navbar.classList.remove("navbar-scrolled");
        //btt_span.style.display = "none";
        btt_span.style.opacity = "0";
    }
});