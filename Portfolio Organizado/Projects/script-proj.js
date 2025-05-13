document.addEventListener('DOMContentLoaded', function() {
    // Menu mobile
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const body = document.body;
    
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
        body.classList.toggle('menu-open');
    });

    // Fechar menu ao clicar em um link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            body.classList.remove('menu-open');
        });
    });

    // Efeito vermelho nas ferramentas ao passar o mouse
    const toolIcons = document.querySelectorAll('.project-tools img');
    
    toolIcons.forEach(icon => {
        icon.addEventListener('mouseover', function() {
            this.style.filter = 'grayscale(0%) brightness(1) hue-rotate(330deg) saturate(5)';
            this.style.transform = 'scale(1.1)';
        });
        
        icon.addEventListener('mouseout', function() {
            this.style.filter = 'grayscale(100%) brightness(0.7)';
            this.style.transform = 'scale(1)';
        });
    });
});
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', function() {
        // Efeito ao clicar no card (opcional)
        this.style.transform = 'scale(0.98)';
        setTimeout(() => {
            this.style.transform = '';
        }, 200);
    });
});