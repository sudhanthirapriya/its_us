// Wedding date: 16 May 2027
const weddingDate = new Date('May 16, 2027 00:00:00').getTime();

// Animation timeline
window.addEventListener('DOMContentLoaded', () => {
    startOpeningAnimation();
});

function startOpeningAnimation() {
    const photoLeft = document.querySelector('.photo-left');
    const photoRight = document.querySelector('.photo-right');
    const mergedContainer = document.getElementById('merged-container');
    const openingAnimation = document.getElementById('opening-animation');
    const mainContent = document.getElementById('main-content');

    // Step 1: Show photos (already handled by CSS fadeIn)
    
    // Step 2: Move photos together after 3 seconds
    setTimeout(() => {
        photoLeft.style.animation = 'moveRight 2s ease-in-out forwards';
        photoRight.style.animation = 'moveLeft 2s ease-in-out forwards';
        
        // Add keyframes dynamically
        addMoveAnimations();
    }, 3000);

    // Step 3: Show merged container after 5 seconds
    setTimeout(() => {
        mergedContainer.style.animation = 'fadeInScale 1.5s ease-out forwards';
        addFadeInScaleAnimation();
    }, 5000);

    // Step 4: Hide opening animation and show main content after 9 seconds
    setTimeout(() => {
        openingAnimation.style.animation = 'fadeOut 1s ease-out forwards';
        setTimeout(() => {
            openingAnimation.style.display = 'none';
            mainContent.style.display = 'flex';
            startCountdown();
        }, 1000);
    }, 9000);
}

function addMoveAnimations() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes moveRight {
            to {
                transform: translateX(calc(50vw - 150px));
                opacity: 0;
            }
        }
        @keyframes moveLeft {
            to {
                transform: translateX(calc(-50vw + 150px));
                opacity: 0;
            }
        }
        @media (max-width: 768px) {
            @keyframes moveRight {
                to {
                    transform: translateX(calc(50vw - 100px));
                    opacity: 0;
                }
            }
            @keyframes moveLeft {
                to {
                    transform: translateX(calc(-50vw + 100px));
                    opacity: 0;
                }
            }
        }
        @media (max-width: 480px) {
            @keyframes moveRight {
                to {
                    transform: translateX(calc(50vw - 75px));
                    opacity: 0;
                }
            }
            @keyframes moveLeft {
                to {
                    transform: translateX(calc(-50vw + 75px));
                    opacity: 0;
                }
            }
        }
    `;
    document.head.appendChild(style);
}

function addFadeInScaleAnimation() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeInScale {
            from {
                opacity: 0;
                transform: translate(-50%, -50%) scale(0.5);
            }
            to {
                opacity: 1;
                transform: translate(-50%, -50%) scale(1);
            }
        }
        @keyframes fadeOut {
            to {
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

function startCountdown() {
    updateCountdown();
    updateDaysTitle();
    setInterval(updateCountdown, 1000);
}

function updateDaysTitle() {
    const now = new Date().getTime();
    const distance = weddingDate - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    document.getElementById('days-title').textContent = days;
}

function updateCountdown() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    // Calculate time units
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Update DOM
    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;

    // If countdown is finished
    if (distance < 0) {
        clearInterval(updateCountdown);
        document.getElementById('days').textContent = '0';
        document.getElementById('hours').textContent = '0';
        document.getElementById('minutes').textContent = '0';
        document.getElementById('seconds').textContent = '0';
    }
}
