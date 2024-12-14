document.addEventListener('DOMContentLoaded', () => {
    const appearLeftElements = document.querySelectorAll('.appear-left');
    const bubbleElements = document.querySelectorAll('.bubble');

    addScrollEffect(appearLeftElements, 'visible-left');
    addScrollEffect(bubbleElements, 'visible-bubble');
});


document.addEventListener('DOMContentLoaded', () => {
    const skillsContainer = document.querySelector('.skills');

    skillsContainer.addEventListener('mouseenter', () => {
        skillsContainer.style.animationPlayState = 'paused';
    });

    skillsContainer.addEventListener('mouseleave', () => {
        skillsContainer.style.animationPlayState = 'running';
    });
});

document.getElementById('but-1').addEventListener('click', (e) => {
    e.preventDefault();
    const var1 = document.getElementById('card-1');
    const var2 = document.getElementById('card-2');
    const var3 = document.getElementById('card-3');

    var2.style.display = 'none';
    var2.style.transform = 'translateX(-2000%)';
    var2.style.transition = '200ms';

    var3.style.display = 'none';
    var3.style.transform = 'translateX(-2000%)';
    var3.style.transition = '200ms';

    var1.style.display = 'flex';
    var1.style.transform = 'translateX(0%)';
    var1.style.transition = '200ms';

    document.getElementById('but-3').style.backgroundColor = '#2b191d';
    document.getElementById('but-2').style.backgroundColor = '#2b191d';
    document.getElementById('but-1').style.backgroundColor = '#ff4264';
});

document.getElementById('but-2').addEventListener('click', (e) => {
    e.preventDefault();
    const var1 = document.getElementById('card-1');
    const var2 = document.getElementById('card-2');
    const var3 = document.getElementById('card-3');

    var1.style.display = 'none';
    var1.style.transform = 'translateX(-2000%)';
    var1.style.transition = '200ms';

    var3.style.display = 'none';
    var3.style.transform = 'translateX(-2000%)';
    var3.style.transition = '200ms';

    var2.style.display = 'flex';
    var2.style.transform = 'translateX(0%)';
    var2.style.transition = '200ms';

    document.getElementById('but-3').style.backgroundColor = '#2b191d';
    document.getElementById('but-1').style.backgroundColor = '#2b191d';
    document.getElementById('but-2').style.backgroundColor = '#ff4264';
});

document.getElementById('but-3').addEventListener('click', (e) => {
    e.preventDefault();
    const var1 = document.getElementById('card-1');
    const var2 = document.getElementById('card-2');
    const var3 = document.getElementById('card-3');

    var1.style.display = 'none';
    var1.style.transform = 'translateX(-2000%)';
    var1.style.transition = '200ms';

    var2.style.display = 'none';
    var2.style.transform = 'translateX(-2000%)';
    var2.style.transition = '200ms';

    var3.style.display = 'flex';
    var3.style.transform = 'translateX(0%)';
    var3.style.transition = '200ms';

    document.getElementById('but-1').style.backgroundColor = '#2b191d';
    document.getElementById('but-2').style.backgroundColor = '#2b191d';
    document.getElementById('but-3').style.backgroundColor = '#ff4264';
});
