document.addEventListener('DOMContentLoaded', () => {

    console.log("Portfólio carregado! Bem-vindo(a).");
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        header.classList.toggle('scrolled', window.scrollY > 10);
    });
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

    links.forEach(link => link.addEventListener('click', () => navLinks.classList.remove('open')));

    const projectsGrid = document.querySelector('.projects-grid');
    const projectCards = Array.from(projectsGrid.children);

    projectCards.forEach(card => {
        const clone = card.cloneNode(true);
        projectsGrid.appendChild(clone);
    });

    let isPaused = false;

    function autoScroll() {
        if (!isPaused) {
            projectsGrid.scrollLeft += 1; 
            if (projectsGrid.scrollLeft >= projectsGrid.scrollWidth / 2) {
                projectsGrid.scrollLeft = 0;
            }
        }
        requestAnimationFrame(autoScroll); 
    }

    projectsGrid.addEventListener('mouseenter', () => isPaused = true);
    projectsGrid.addEventListener('mouseleave', () => isPaused = false);

    requestAnimationFrame(autoScroll); 
});