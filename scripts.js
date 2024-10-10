document.addEventListener("DOMContentLoaded", () => {
    // Lazy loading for images
    const lazyImages = document.querySelectorAll("img");
    lazyImages.forEach(img => {
        img.setAttribute("loading", "lazy");
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
