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

    // Efeito de digitação para as profissões
    function typeWriter() {
        const textElement = document.querySelector('.typing-effect');
        const professions = ["Software Engineer", "Network Analyst", "Web Developer","I'm Freelancer", "I'm From Brazil", "I'm Have 19 Years"];
        let i = 0;
        let isDeleting = false;
        let currentProfession = 0;
        let typingSpeed = 100;
        
        function type() {
            const currentText = professions[currentProfession];
            
            if (isDeleting) {
                textElement.textContent = currentText.substring(0, i - 1);
                i--;
                typingSpeed = 50;
            } else {
                textElement.textContent = currentText.substring(0, i + 1);
                i++;
                typingSpeed = 100;
            }
            
            if (!isDeleting && i === currentText.length) {
                typingSpeed = 2000; // Pausa no texto completo
                isDeleting = true;
            } else if (isDeleting && i === 0) {
                isDeleting = false;
                currentProfession = (currentProfession + 1) % professions.length;
                typingSpeed = 200;
            }
            
            setTimeout(type, typingSpeed);
        }
        
        type();
    }

    // Inicia o efeito de digitação
    typeWriter();

    // Efeito vermelho nas ferramentas ao passar o mouse
    const toolIcons = document.querySelectorAll('.project-tools img');
    
    if (toolIcons) {
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
    }
});