let lastScrollTop = 0;
const topBar = document.getElementById("top-bar");

window.addEventListener("scroll", () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        topBar.classList.add("hidden"); // Hide on scroll down
    } else {
        topBar.classList.remove("hidden"); // Show on scroll up
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Avoid negative scroll values
});
