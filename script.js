//toogle js code start
const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", navToggle);

function navToggle() {
    navToggler.classList.toggle("active");
    const nav = document.querySelector(".nav");
    nav.classList.toggle("open");
    if (nav.classList.contains("open")) {
        nav.style.maxHeight = nav.scrollHeight + "px";
    }
    else {
        nav.removeAttribute("style");
    }
}
//toogle js code end

//slider js code
const initSlider = () => {
    const imageList = document.querySelector(".slider-wrapper .image-list");
    const [prevBtn, nextBtn] = document.querySelectorAll(".slider-wrapper .slide-button");
    const thumb = document.querySelector(".slider-container .slider-scrollbar .scrollbar-thumb");
    const maxScroll = imageList.scrollWidth - imageList.clientWidth;

    const updateUI = () => {
        const thumbPos = (imageList.scrollLeft / maxScroll) * (thumb.parentElement.clientWidth - thumb.offsetWidth);
        thumb.style.left = `${thumbPos}px`;
        prevBtn.style.display = imageList.scrollLeft > 0 ? "flex" : "none";
        nextBtn.style.display = imageList.scrollLeft < maxScroll ? "flex" : "none";
    };

    thumb.onmousedown = (e) => {
        const startX = e.clientX, startLeft = thumb.offsetLeft;
        document.onmousemove = (e) => {
            const newLeft = Math.min(Math.max(0, startLeft + e.clientX - startX), thumb.parentElement.clientWidth - thumb.offsetWidth);
            thumb.style.left = `${newLeft}px`;
            imageList.scrollLeft = (newLeft / (thumb.parentElement.clientWidth - thumb.offsetWidth)) * maxScroll;
        };
        document.onmouseup = () => document.onmousemove = null;
    };
    prevBtn.onclick = () => imageList.scrollBy({ left: -imageList.clientWidth, behavior: "smooth" });
    nextBtn.onclick = () => imageList.scrollBy({ left: imageList.clientWidth, behavior: "smooth" });
    imageList.onscroll = updateUI;
    updateUI();
};

window.onload = window.onresize = initSlider;

//loader js start

window.addEventListener('load', function () {
    const loader = document.querySelector('.loader');
    loader.classList.add('fade-out');
});

//loader js end

//animation js start

document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll("section, div, article");

    elements.forEach((el) => {
        if (
            !el.closest("nav") &&
            !el.closest("header") &&
            !el.closest("footer") &&
            !el.classList.contains("image-section") &&
            !el.classList.contains("text-overlay")
        ) {
            el.classList.add("animate-slide");
        }
    });

    function revealOnScroll() {
        elements.forEach((element) => {
            if (element.classList.contains("animate-slide")) {
                const rect = element.getBoundingClientRect();
                if (rect.top < window.innerHeight - 50) {
                    element.classList.add("show");
                } else {
                    element.classList.remove("show");
                }
            }
        });
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();
});
// animation js end

