const colors_dark = {
    '--color-bg': '#050507',
    '--color-bg-alt': '#0c0c0e',
    '--color-bg-hover': '#180f10',
    '--color-primary': '#8446e7',
    '--color-border': '#171718',
    '--color-shadow': '#303030',
    '--color-border-tree': '#303030',
    '--color-shadow-inset': '#41365e',
    '--color-shadow-inset-two': '#5c4881',
    '--color-font-primary': '#fff',
    '--color-font-secondary': '#83878b',
    '--color-accent': '#8446e7',
    '--color-scrollbar': '#151c22',
    '--color-blur-white': '#0a0a0a9c',
    '--color-blur-purple': '#683196',
    '--color-blur-pink': '#3d2329',
    '--color-font-terciary': '#ae94de',
    '--color-bg-light': '#ae94de'
}

const colors_light = {
    '--color-bg': '#ffffff',
    '--color-bg-alt': '#f1f1f5',
    '--color-bg-hover': '#f4f4f9',
    '--color-primary': '#7b97d1',
    '--color-border': '#e4e4e9',
    '--color-shadow': '#c4c4c9',
    '--color-border-two': '#e4e4e9',
    '--color-border-tree': '#dddddd',
    '--color-shadow-inset': '#7b97d1',
    '--color-shadow-inset-two': '#7b97d1',
    '--color-font-primary': '#000',
    '--color-font-secondary': '#555',
    '--color-accent': '#7b97d1',
    '--color-scrollbar': '#ccc',
    '--color-blur-white': '#fdfdfd9c',
    '--color-blur-purple': '#6e4f88',
    '--color-blur-pink': '#db90a2',
    '--color-font-terciary': '#41365e',
    '--color-bg-hover-light': '#eee5ff'
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
