const colors_dark = {
    '--color-bg': '#060607',
    '--color-bg-alt': '#111112',
    '--color-bg-hover': '#180f10',
    '--color-primary': '#ff4264',
    '--color-border': '#171718',
    '--color-shadow': '#303030',
    '--color-border-two': '#171718',
    '--color-border-tree': '#252525',
    '--color-shadow-inset': '#41262c',
    '--color-shadow-inset-two': '#814855',
    '--color-font-primary': '#fff',
    '--color-font-secondary': '#a3a3a3',
    '--color-accent': '#ff4264',
    '--color-scrollbar': '#151c22',
    '--color-blur-white': '#0a0a0a9c',
    '--color-blur-purple': '#1f0a30',
    '--color-blur-pink': '#3d2329'
}

const colors_light = {
    '--color-bg': '#ffffff',
    '--color-bg-alt': '#e4e4e9',
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
    '--color-blur-pink': '#db90a2'
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
