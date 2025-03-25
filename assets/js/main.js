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
  themeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
    const isDark = document.body.classList.contains('dark-theme');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    
    // Atualizar ícone
    const icon = this.querySelector('i');
    icon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
  });
  
  // Verificar tema salvo
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
    const icon = themeToggle.querySelector('i');
    icon.className = 'fas fa-sun';
  }
} 