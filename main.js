window.addEventListener("scroll", () => { 
    handleScrollAnimation();
});

const scrollToTopBtn = document.getElementById('scrollTop');

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

let clicked = false;

document.getElementById('menu-bar').addEventListener('click', (e) => {
    e.preventDefault();
    if (!clicked) {
        document.getElementById('cont-menu').style.transition = "100ms";
        document.getElementById('cont-menu').style.transform = "translateX(0%)";
        clicked = true;
    } else {
        document.getElementById('cont-menu').style.transition = "100ms";
        document.getElementById('cont-menu').style.transform = "translateX(-200%)";
        clicked = false;
    }
});
