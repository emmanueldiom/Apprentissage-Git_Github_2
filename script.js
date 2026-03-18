// ===== BOUTON CTA =====
const btn = document.getElementById("cta");

btn.addEventListener("click", () => {
    document.querySelector(".features").scrollIntoView({
        behavior: "smooth"
    });
});


// ===== ANIMATION APPARITION =====
const boxes = document.querySelectorAll(".box");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = "translateY(0)";
        }
    });
});

boxes.forEach(box => {
    box.style.opacity = 0;
    box.style.transform = "translateY(50px)";
    observer.observe(box);
});


// ===== EFFET NAVBAR AU SCROLL =====
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.style.background = "rgba(0,0,0,0.5)";
    } else {
        navbar.style.background = "transparent";
    }
});