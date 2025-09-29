const ctaButton = document.querySelector('.cta-button');
if (ctaButton) {
    ctaButton.addEventListener('click', () => {
        console.log('CTA button clicked!');
        document.querySelector('.overlay-modal').style.display = 'flex';
    });
}

const closeButton = document.querySelector('.close-button');
if (closeButton) {
    closeButton.addEventListener('click', () => {
        document.querySelector('.overlay-modal').style.display = 'none';
    });
}

const menuButton = document.querySelector('.menu-button');
menuButton.addEventListener('click', () => {
    const menuOverlay = document.querySelector('.menu-overlay');
    if (menuOverlay.style.display === 'flex') {
        menuOverlay.style.display = 'none';
    } else {
        menuOverlay.style.display = 'flex';
    }
});

// Close the side navigation when clicking outside of it
window.addEventListener('click', (event) => {
    const menuOverlay = document.querySelector('.menu-overlay');
    if (event.target !== menuOverlay && !menuOverlay.contains(event.target) && event.target !== menuButton) {
        menuOverlay.style.display = 'none';
    }
});

// Close the side navigation when clicking a link inside it
const menuLinks = document.querySelectorAll('.menu-overlay a');
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.menu-overlay').style.display = 'none';
    });
});

const closeMenuButton = document.querySelector('.close-menu');
if (closeMenuButton) {
    closeMenuButton.addEventListener('click', () => {
        document.querySelector('.menu-overlay').style.display = 'none';
    });
}