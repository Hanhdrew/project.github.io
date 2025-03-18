// Select all elements with the class '.video-card'
const videoCards = document.querySelectorAll('.video-card');

// Intersection Observer for scroll animations
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5,
};

const observerCallback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    } else {
      entry.target.style.opacity = '0';
      entry.target.style.transform = 'translateY(20px)';
    }
  });
};

const observer = new IntersectionObserver(observerCallback, observerOptions);

videoCards.forEach((card) => {
  observer.observe(card);
});

// Select all elements with the class '.video-card-content'
const videoCardContents = document.querySelectorAll('.video-card-content');

// Add touch event listeners for mobile hover effect
videoCardContents.forEach(card => {
  card.addEventListener('touchstart', (event) => {
    event.preventDefault();
    card.classList.add('touch-active');
  });

  card.addEventListener('touchend', () => {
    card.classList.remove('touch-active');
  });
});