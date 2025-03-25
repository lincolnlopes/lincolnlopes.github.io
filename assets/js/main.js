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

// Tema escuro/claro
const themeToggle = document.querySelector('.theme-toggle button');
if (themeToggle) {
  // Função para atualizar o ícone do tema
  function updateThemeIcon(isDark) {
    const icon = themeToggle.querySelector('i');
    icon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
    icon.setAttribute('aria-label', isDark ? 'Mudar para tema claro' : 'Mudar para tema escuro');
  }
  
  // Função para atualizar o tema
  function updateTheme(isDark) {
    document.body.classList.toggle('dark-theme', isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    updateThemeIcon(isDark);
    
    // Atualizar meta theme-color
    let metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (!metaThemeColor) {
      metaThemeColor = document.createElement('meta');
      metaThemeColor.name = 'theme-color';
      document.head.appendChild(metaThemeColor);
    }
    metaThemeColor.content = isDark ? '#1a1b1e' : '#ffffff';
  }
  
  // Evento de clique no botão de tema
  themeToggle.addEventListener('click', function() {
    const isDark = !document.body.classList.contains('dark-theme');
    updateTheme(isDark);
  });
  
  // Verificar preferência do usuário
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (savedTheme) {
    updateTheme(savedTheme === 'dark');
  } else if (prefersDark) {
    updateTheme(true);
  }
  
  // Observar mudanças na preferência do sistema
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if (!localStorage.getItem('theme')) {
      updateTheme(e.matches);
    }
  });
} 