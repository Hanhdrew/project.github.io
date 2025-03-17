const videoCards = document.querySelectorAll('.video-card');

const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

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

      if (isTouchDevice) {
        entry.target.style.transform = 'translateY(0) scale(1.05)';
        entry.target.style.color = 'var(--clr-highlight)';
        entry.target.style.border = '3px solid var(--clr-highlight)';
      }
    } else {
      entry.target.style.opacity = '0';
      entry.target.style.transform = 'translateY(20px)';

      if (isTouchDevice) {
        entry.target.style.transform = 'translateY(20px) scale(1)';
        entry.target.style.color = ''; 
        entry.target.style.border = ''; 
      }
    }
  });
};

const observer = new IntersectionObserver(observerCallback, observerOptions);

videoCards.forEach((card) => {
  observer.observe(card);
});