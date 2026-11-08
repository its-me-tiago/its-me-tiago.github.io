document.getElementById('year').textContent = new Date().getFullYear();

const themeToggle = document.querySelector('.theme-toggle');

themeToggle.addEventListener('click', () => {
  const isLight = document.documentElement.dataset.theme === 'light';
  document.documentElement.dataset.theme = isLight ? 'dark' : 'light';
  themeToggle.textContent = isLight ? '☼' : '☾';
  themeToggle.setAttribute('aria-label', `Switch to ${isLight ? 'light' : 'dark'} theme`);
});
