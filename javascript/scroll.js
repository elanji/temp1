// Add this JavaScript code to a file named "scroll.js" and include it in your HTML

window.addEventListener("scroll", function() {
    const header = document.querySelector("header");
    const nav = document.querySelector(".top-nav");
    
    // Calculate the scroll position
    const scrollPos = window.scrollY;

    // Height of the header
    const headerHeight = header.clientHeight;

    if (scrollPos > headerHeight) {
        // Add a class to the nav when scrolled past the header
        nav.classList.add("fixed-nav");
    } else {
        // Remove the class when scrolled back to the top
        nav.classList.remove("fixed-nav");
    }
});
