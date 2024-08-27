const scrollElements = document.querySelectorAll(".js-scroll");

const elementInView = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top;

    return (
        elementTop <=
        (window.innerHeight || document.documentElement.clientHeight) / dividend
    );
};

const elementOutofView = (el) => {
    const elementTop = el.getBoundingClientRect().top;

    return (
        elementTop > (window.innerHeight || document.documentElement.clientHeight)
    );
};

const displayScrollElement = (element) => {
    element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
    element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
        if (elementInView(el, 1.25)) {
            displayScrollElement(el);
        } else if (elementOutofView(el)) {
            hideScrollElement(el)
        }
    })
}
  
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
