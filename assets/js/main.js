// Menu Mobile
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  if (mobileMenuToggle && navLinks) {
    mobileMenuToggle.addEventListener('click', function() {
      navLinks.classList.toggle('active');
      
      // Animar o ícone do menu
      const spans = this.querySelectorAll('span');
      spans.forEach(span => span.classList.toggle('active'));
    });
  }
  
  // Fechar menu ao clicar fora
  document.addEventListener('click', function(event) {
    if (!event.target.closest('.main-nav') && navLinks.classList.contains('active')) {
      navLinks.classList.remove('active');
      const spans = mobileMenuToggle.querySelectorAll('span');
      spans.forEach(span => span.classList.remove('active'));
    }
  });
});

// Função para alternar o tema
function toggleTheme() {
  const html = document.documentElement;
  const currentTheme = html.getAttribute('data-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  
  html.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  
  // Atualiza o ícone do botão
  const themeToggleIcon = document.querySelector('#theme-toggle i');
  if (themeToggleIcon) {
    themeToggleIcon.className = newTheme === 'light' ? 'fas fa-sun' : 'fas fa-moon';
  }
}

// Função para definir o tema inicial
function setInitialTheme() {
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = savedTheme || (prefersDark ? 'dark' : 'light');
  
  document.documentElement.setAttribute('data-theme', theme);
  
  // Atualiza o ícone do botão
  const themeToggleIcon = document.querySelector('#theme-toggle i');
  if (themeToggleIcon) {
    themeToggleIcon.className = theme === 'light' ? 'fas fa-sun' : 'fas fa-moon';
  }
}

// Adiciona o evento de clique ao botão de tema
document.addEventListener('DOMContentLoaded', () => {
  setInitialTheme();
  
  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
  }
  
  // Adiciona o evento de clique ao botão do menu mobile
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  if (mobileMenuToggle && navLinks) {
    mobileMenuToggle.addEventListener('click', () => {
      mobileMenuToggle.classList.toggle('active');
      navLinks.classList.toggle('active');
    });
  }
  
  // Fecha o menu mobile quando um link é clicado
  const navLinksItems = document.querySelectorAll('.nav-links a');
  navLinksItems.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenuToggle.classList.remove('active');
      navLinks.classList.remove('active');
    });
  });
}); 