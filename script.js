const toggle = document.getElementById('dark-toggle');
const html = document.documentElement;

toggle.addEventListener('click', () => {
  html.classList.toggle('dark');
  if (html.classList.contains('dark')) {
    toggle.innerHTML = '<i data-feather="sun"></i>';
  } else {
    toggle.innerHTML = '<i data-feather="moon"></i>';
  }
  feather.replace();
  localStorage.setItem('theme', html.classList.contains('dark') ? 'dark' : 'light');
});

// Load the saved theme
if (localStorage.getItem('theme') === 'dark') {
  html.classList.add('dark');
  toggle.innerHTML = '<i data-feather="sun"></i>';
  feather.replace();
} else {
  html.classList.remove('dark');
  toggle.innerHTML = '<i data-feather="moon"></i>';
  feather.replace();
}
