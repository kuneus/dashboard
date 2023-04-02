

//toggle light/dark theme
function setTheme() {
    const root = document.documentElement;
    const newTheme = root.className === 'dark' ? 'light' : 'dark';
    root.className = newTheme;
};
document.querySelector('.dark-theme').addEventListener('click', setTheme);
//default dark mode
setTheme();