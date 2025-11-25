document.addEventListener('DOMContentLoaded', () => {

    console.log("Portfólio carregado! Bem-vindo(a).");

    // O CSS 'scroll-behavior: smooth;' já cuida da rolagem suave para âncoras.
    // Este arquivo está pronto para futuras interações.

    // Exemplo de futura funcionalidade:
    // Adicionar uma sombra ao header quando a página for rolada
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        header.classList.toggle('scrolled', window.scrollY > 10);
    });

    // Lógica da Galeria de Projetos
    const galleries = document.querySelectorAll('.project-gallery');

    galleries.forEach(gallery => {
        const imageContainer = gallery.querySelector('.gallery-images');
        const prevBtn = gallery.querySelector('.prev-btn');
        const nextBtn = gallery.querySelector('.next-btn');
        const images = gallery.querySelectorAll('.project-image');
        const imageCount = images.length;
        let currentIndex = 0;

        function updateGallery() {
            imageContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
        }

        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + imageCount) % imageCount;
            updateGallery();
        });

        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % imageCount;
            updateGallery();
        });
    });

    // Lógica do Menu Hambúrguer
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('open');
        links.forEach(link => {
            link.classList.toggle('fade');
        });
        hamburger.classList.toggle('toggle');
    });

    // Fecha o menu ao clicar em um link
    links.forEach(link => link.addEventListener('click', () => navLinks.classList.remove('open')));

    // Lógica do Carrossel Automático de Projetos
    const projectsGrid = document.querySelector('.projects-grid');
    const projectCards = Array.from(projectsGrid.children);

    // Clona os cards para criar o efeito de loop infinito
    projectCards.forEach(card => {
        const clone = card.cloneNode(true);
        projectsGrid.appendChild(clone);
    });

    let isPaused = false;

    function autoScroll() {
        if (!isPaused) {
            projectsGrid.scrollLeft += 1; // Ajuste a velocidade aqui (pixels por frame)

            // Se a rolagem passar da metade (onde os clones começam), reseta para o início
            if (projectsGrid.scrollLeft >= projectsGrid.scrollWidth / 2) {
                projectsGrid.scrollLeft = 0;
            }
        }
        requestAnimationFrame(autoScroll); // Cria um loop de animação suave
    }

    projectsGrid.addEventListener('mouseenter', () => isPaused = true);
    projectsGrid.addEventListener('mouseleave', () => isPaused = false);

    requestAnimationFrame(autoScroll); // Inicia a animação
});