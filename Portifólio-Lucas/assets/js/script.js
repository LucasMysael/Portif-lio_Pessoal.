// Accordion para os cursos e escolaridade
document.querySelectorAll('.resume-item').forEach(item => {
    const header = item.querySelector('.item-header');
    
    header.addEventListener('click', () => {
        // Fecha outros itens
        document.querySelectorAll('.resume-item').forEach(otherItem => {
            if (otherItem !== item && otherItem.classList.contains('active')) {
                otherItem.classList.remove('active');
            }
        });
        
        // Alterna o item atual
        item.classList.toggle('active');
    });
});

// Slideshow para os projetos
function initSlideshow(containerId, interval = 3000) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    const slides = container.querySelectorAll('.slide');
    let currentIndex = 0;
    
    function showSlide(index) {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.classList.add('active');
            } else {
                slide.classList.remove('active');
            }
        });
    }
    
    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }
    
    // Inicia o slideshow
    showSlide(0);
    setInterval(nextSlide, interval);
}

// Inicia todos os slideshows
initSlideshow('slideshow1', 3000);
initSlideshow('slideshow2', 3000);
initSlideshow('slideshow3', 3000);

// Animação das barras de habilidades quando visíveis
const observerOptions = {
    threshold: 0.3,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const skills = entry.target.querySelectorAll('.skill-progress');
            skills.forEach(skill => {
                const width = skill.style.width;
                skill.style.width = '0';
                setTimeout(() => {
                    skill.style.width = width;
                }, 100);
            });
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

const skillsContainer = document.querySelector('.skills-container');
if (skillsContainer) {
    observer.observe(skillsContainer);
}

// Efeito de digitação na página inicial
const nomeElement = document.getElementById('Kauã Restoff');


// Smooth scroll para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        
        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Atualizar ano no footer
const footerYear = document.querySelector('footer p');
if (footerYear) {
    footerYear.innerHTML = `&copy; ${new Date().getFullYear()} Kauã Restoff. Todos os direitos reservados.`;
}