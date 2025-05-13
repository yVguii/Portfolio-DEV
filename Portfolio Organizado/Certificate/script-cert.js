document.addEventListener('DOMContentLoaded', function() {
    // Menu Hamburguer (mesmo código dos projetos)
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const body = document.body;
    
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
        body.classList.toggle('menu-open');
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            body.classList.remove('menu-open');
        });
    });

    // Seu código específico para certificados pode vir aqui
});
document.querySelectorAll('.certificate-card').forEach(card => {
    card.addEventListener('click', function() {
        // Efeito ao clicar no card (opcional)
        this.style.transform = 'scale(0.98)';
        setTimeout(() => {
            this.style.transform = '';
        }, 200);
    });
});