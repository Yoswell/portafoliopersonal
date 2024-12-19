const var1 = document.getElementById('card-1');
const var2 = document.getElementById('card-2');
const var3 = document.getElementById('card-3');
const var4 = document.getElementById('card-4');
const var5 = document.getElementById('card-5');
const var6 = document.getElementById('card-6');

document.getElementById('but-1').addEventListener('click', (e) => {
    e.preventDefault();
    styles(var2, var3, var4, var5, var6);
    styles_flex(var1);
});

document.getElementById('but-2').addEventListener('click', (e) => {
    e.preventDefault();
    styles(var1, var3, var4, var5, var6);
    styles_flex(var2);
});

document.getElementById('but-3').addEventListener('click', (e) => {
    e.preventDefault();
    styles(var1, var2, var4, var5, var6);
    styles_flex(var3);
});

document.getElementById('but-4').addEventListener('click', (e) => {
    e.preventDefault();
    styles(var1, var2, var3, var5, var6);
    styles_flex(var4);
});

document.getElementById('but-5').addEventListener('click', (e) => {
    e.preventDefault();
    styles(var1, var2, var3, var4, var6);
    styles_flex(var5);
});

document.getElementById('but-6').addEventListener('click', (e) => {
    e.preventDefault();
    styles(var1, var2, var3, var4, var5);
    styles_flex(var6);
});

function styles(...items) {
    items.forEach(x => {
        x.style.display = 'none';
        x.style.transform = 'translateX(-2000%)';
    });
}

function styles_flex(x) {
    x.style.display = 'flex';
    x.style.transform = 'translateX(0%)';
}

const colors_dark = {
    '--color-bg': '#0a0a0b',
    '--color-bg-alt': '#111112',
    '--color-bg-hover': '#2b191d',
    '--color-primary': '#ff4264',
    '--color-border': '#171718',
    '--color-shadow': '#202020',
    '--color-border-two': '#303030',
    '--color-shadow-inset': '#41262c',
    '--color-font-primary': '#fff',
    '--color-font-secondary': '#a3a3a3',
    '--color-accent': '#f7f19f',
    '--color-scrollbar': '#151c22'
}

const colors_light = {
    '--color-bg': '#ffffff',
    '--color-bg-alt': '#f4f4f9',
    '--color-bg-hover': '#f4f4f9',
    '--color-primary': '#ff4264',
    '--color-border': '#f4f4f9',
    '--color-shadow': '#e4e4e9',
    '--color-border-two': '#bbbbbb',
    '--color-shadow-inset': '#ffaabc',
    '--color-font-primary': '#000',
    '--color-font-secondary': '#555',
    '--color-accent': '#86b0ff',
    '--color-scrollbar': '#ccc'
}

let isDarkTheme = true; // Por defecto está en modo oscuro

function setTheme(colors) {
    for (const [key, value] of Object.entries(colors)) {
        document.documentElement.style.setProperty(key, value);
    }
}

document.getElementById('change-theme').addEventListener('click', (e) => {
    e.preventDefault();
    isDarkTheme = !isDarkTheme;
    setTheme(isDarkTheme ? colors_dark : colors_light);
});
