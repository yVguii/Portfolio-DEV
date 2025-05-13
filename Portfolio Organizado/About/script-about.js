document.addEventListener('DOMContentLoaded', function() {
    // Tab switching
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tabId = btn.getAttribute('data-tab');
            
            // Remove active class from all buttons and contents
            tabBtns.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button and corresponding content
            btn.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });

    // Mobile menu toggle with scroll lock
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const body = document.body;
    
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
        
        // Toggle scroll lock
        if (navLinks.classList.contains('active')) {
            body.style.overflow = 'hidden';
            body.style.position = 'fixed';
            body.style.width = '100%';
        } else {
            body.style.overflow = '';
            body.style.position = '';
            body.style.width = '';
        }
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            
            // Restore scroll
            body.style.overflow = '';
            body.style.position = '';
            body.style.width = '';
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Close menu if open
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
                body.style.overflow = '';
                body.style.position = '';
                body.style.width = '';
                
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Animate elements when they come into view
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.card, .skill-category');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };

    // Initial check
    animateOnScroll();
    
    // Check on scroll
    window.addEventListener('scroll', animateOnScroll);

    // Skill item hover effect enhancement
    const skillItems = document.querySelectorAll('.skill-item');
    
    skillItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            const tooltip = item.getAttribute('data-tooltip');
            if (tooltip) {
                item.setAttribute('data-tooltip', tooltip);
            }
        });
    });
});

// Original tab function (compatibility with old markup)
function opentab(tabname) {
    var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-contents");

    // Remove 'active-link' from all links
    for (var tablink of tablinks) {
        tablink.classList.remove("active-link");
    }

    // Remove 'active-tab' from all contents
    for (var tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }

    // Add 'active-link' to clicked link
    event.currentTarget.classList.add("active-link");

    // Add 'active-tab' to corresponding content
    document.getElementById(tabname).classList.add("active-tab");
}