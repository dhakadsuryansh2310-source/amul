// Scroll to products section on button click
function scrollToProducts() {
    const productsSection = document.querySelector('.prd');
    if (productsSection) {
        productsSection.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
        });
    }
}

// Glowing effect that follows pointer in navigation bar
const innernav = document.getElementById('innernav');
const navGlow = document.querySelector('#innernav .nav-glow');
if (innernav && navGlow) {
    innernav.addEventListener('mousemove', function(e) {
        const rect = innernav.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        navGlow.style.left = x + 'px';
        navGlow.style.top = y + 'px';
        navGlow.style.opacity = '0.7';
    });
    innernav.addEventListener('mouseleave', function() {
        navGlow.style.opacity = '0';
    });
}
// Dropdown menus now display on hover only (CSS handles this)
// When the intro video ends, fade in the image overlay and then the text overlay on top
document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('introVideo');
    const imgOverlay = document.getElementById('videoImageOverlay');
    const textOverlay = document.getElementById('div1');

    if (!video) return;

    video.addEventListener('ended', () => {
        // Fade in image
        if (imgOverlay) {
            imgOverlay.style.opacity = '1';
            imgOverlay.style.pointerEvents = 'auto';
        }

        // Slight delay then show text overlay (so image is visible behind it)
        if (textOverlay) {
            setTimeout(() => {
                textOverlay.classList.add('visible');
            }, 200); // 200ms delay
        }
    });
});

// Wide slideshow logic
                (function() {
                    const slides = document.querySelectorAll('#gallary .slide');
                    const prevBtn = document.querySelector('#gallary .slide-btn.prev');
                    const nextBtn = document.querySelector('#gallary .slide-btn.next');
                    let current = 0;
                    function showSlide(idx) {
                        slides.forEach((slide, i) => {
                            slide.classList.toggle('active', i === idx);
                        });
                    }
                    prevBtn.addEventListener('click', () => {
                        current = (current - 1 + slides.length) % slides.length;
                        showSlide(current);
                    });
                    nextBtn.addEventListener('click', () => {
                        current = (current + 1) % slides.length;
                        showSlide(current);
                    });
                    // Optional: auto-slide every 5s
                    setInterval(() => {
                        current = (current + 1) % slides.length;
                        showSlide(current);
                    }, 5000);
                })();