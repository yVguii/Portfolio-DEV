document.addEventListener('DOMContentLoaded', function() {
    // ===== MENU MOBILE =====
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

    // ===== MÁSCARA DE TELEFONE (BR) =====
    const phoneInput = document.getElementById('phone');
    if (phoneInput) {
        phoneInput.addEventListener('input', function(e) {
            let value = this.value.replace(/\D/g, ''); // Remove tudo que não é número
            let formattedValue = '';

            // Formatação: (XX) XXXXX-XXXX
            if (value.length > 0) {
                formattedValue = `(${value.substring(0, 2)}`;
                
                if (value.length > 2) {
                    formattedValue += `) ${value.substring(2, 7)}`;
                }
                
                if (value.length > 7) {
                    formattedValue += `-${value.substring(7, 11)}`;
                }
            }

            this.value = formattedValue;
        });
    }

    // ===== VALIDAÇÃO DO FORMULÁRIO =====
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        // Mensagens de validação em inglês
        const setEnglishValidationMessages = () => {
            const elements = contactForm.elements;
            
            for (let element of elements) {
                if (element.required) {
                    element.addEventListener('invalid', () => {
                        if (element.validity.valueMissing) {
                            if (element.type === 'email') {
                                element.setCustomValidity('Please enter your email address');
                            } else {
                                element.setCustomValidity('Please fill out this field');
                            }
                        } else if (element.validity.typeMismatch) {
                            element.setCustomValidity('Please include @ in your email address');
                        }
                    });

                    element.addEventListener('input', () => {
                        element.setCustomValidity('');
                    });
                }
            }
        };

        setEnglishValidationMessages();

        // Envio do formulário
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (!contactForm.checkValidity()) {
                alert('Please fill in all required fields correctly.');
                return;
            }

            fetch(contactForm.action, {
                method: 'POST',
                body: new FormData(contactForm),
                headers: { 'Accept': 'application/json' }
            })
            .then(response => {
                if (response.ok) {
                    alert('Message sent successfully! I will contact you soon.');
                    contactForm.reset();
                } else {
                    throw new Error('Failed to send');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Error sending message. Please try again.');
            });
        });
    }
});