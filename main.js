document.addEventListener('DOMContentLoaded', () => {
    const section = document.querySelector('.');

    // Definir los colores
    const colors = ['#090909', '#f72b79', '#f72b79'];  // Puedes cambiar estos colores
    // Definir los tamaños
    const sizes = ['30px', '40px', '50px', '60px']; // Tamaños definidos

    // Función para seleccionar un color aleatorio de los tres definidos
    function getRandomColor() {
        const randomIndex = Math.floor(Math.random() * colors.length);
        return colors[randomIndex];
    }

    // Función para seleccionar un tamaño aleatorio de los tamaños definidos
    function getRandomSize() {
        const randomIndex = Math.floor(Math.random() * sizes.length);
        return sizes[randomIndex];
    }

    // Función para crear un SVG de triángulo hueco
    function createTriangleSVG(color, size) {
        return `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" width="${size}" height="${size}">
                <path d="M12 2L22 20H2L12 2Z"></path>
            </svg>
        `;
    }

    // Función para generar figuras geométricas
    function createFigures() {
        const figureTypes = ['triangle'];
        const numberOfFigures = 60; // Ajusta la cantidad de figuras

        for (let i = 0; i < numberOfFigures; i++) {
            const figure = document.createElement('div');
            const figureType = figureTypes[Math.floor(Math.random() * figureTypes.length)];
            figure.classList.add('figure');

            // Color y tamaño aleatorio
            const randomColor = getRandomColor();
            const randomSize = getRandomSize();
            
            // Asigna el SVG según el tipo
            if (figureType === 'triangle') {
                figure.innerHTML = createTriangleSVG(randomColor, randomSize);
            }

            // Posición aleatoria
            figure.style.top = `${Math.random() * 100}%`;
            figure.style.left = `${Math.random() * 100}%`;

            // Rotación aleatoria inicial
            const randomRotation = Math.random() * 360;
            figure.dataset.rotation = randomRotation; // Guardar la rotación en un dataset
            figure.style.transform = `rotate(${randomRotation}deg)`;

            section.appendChild(figure);
        }
    }

    // Función para el efecto Parallax
    function parallaxEffect(e) {
        const figures = document.querySelectorAll('.figure');
        figures.forEach((figure, index) => {
            const speed = (index + 1) * 3; // Ajusta la velocidad de movimiento
            const x = (window.innerWidth - e.pageX * speed) / 2050;
            const y = (window.innerHeight - e.pageY * speed) / 2050;

            // Obtener la rotación original desde el dataset
            const rotation = figure.dataset.rotation;

            // Aplicar tanto la rotación inicial como la traducción del parallax
            figure.style.transform = `rotate(${rotation}deg) translate(${x}px, ${y}px)`;
        });
    }

    // Generar figuras geométricas
    createFigures();

    // Solo aplicar el efecto parallax cuando el mouse esté sobre la sección
    section.addEventListener('mouseenter', () => {
        section.addEventListener('mousemove', parallaxEffect);
    });

    section.addEventListener('mouseleave', () => {
        section.removeEventListener('mousemove', parallaxEffect);
    });
});


function addScrollEffect(elements, animationClass) {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add(animationClass); // Añadir animación al entrar en vista
            } else {
                entry.target.classList.remove(animationClass); // Quitar animación al salir de vista
            }
        });
    });

    elements.forEach(el => observer.observe(el)); // Observar todos los elementos
}


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

    document.getElementById('but-3').style.backgroundColor = '#090909';
    document.getElementById('but-2').style.backgroundColor = '#090909';
    document.getElementById('but-1').style.backgroundColor = '#f72b79';
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

    document.getElementById('but-3').style.backgroundColor = '#090909';
    document.getElementById('but-1').style.backgroundColor = '#090909';
    document.getElementById('but-2').style.backgroundColor = '#f72b79';
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

    document.getElementById('but-1').style.backgroundColor = '#090909';
    document.getElementById('but-2').style.backgroundColor = '#090909';
    document.getElementById('but-3').style.backgroundColor = '#f72b79';
});

document.getElementById('but-4').addEventListener('click', (e) => {
    e.preventDefault();
    const var1 = document.getElementById('card-4');
    const var2 = document.getElementById('card-5');

    var2.style.display = 'none';
    var2.style.transform = 'translateX(-2000%)';
    var2.style.transition = '200ms';

    var1.style.display = 'flex';
    var1.style.transform = 'translateX(0%)';
    var1.style.transition = '200ms';

    document.getElementById('but-5').style.backgroundColor = '#090909';
    document.getElementById('but-4').style.backgroundColor = '#f72b79';
});

document.getElementById('but-5').addEventListener('click', (e) => {
    e.preventDefault();
    const var1 = document.getElementById('card-4');
    const var2 = document.getElementById('card-5');

    var1.style.display = 'none';
    var1.style.transform = 'translateX(-2000%)';
    var1.style.transition = '200ms';

    var2.style.display = 'flex';
    var2.style.transform = 'translateX(0%)';
    var2.style.transition = '200ms';

    document.getElementById('but-4').style.backgroundColor = '#090909';
    document.getElementById('but-5').style.backgroundColor = '#f72b79';
});
