const videoCardContent = document.querySelector('.video-card-content');

function applyHoverStyles() {
  videoCardContent.style.transform = 'scale(1.05)';
  videoCardContent.style.color = 'var(--clr-highlight)';
  videoCardContent.style.border = '3px solid var(--clr-highlight)';
}

function removeHoverStyles() {
  videoCardContent.style.transform = 'scale(1)';
  videoCardContent.style.color = ''; 
  videoCardContent.style.border = ''; 
}

videoCardContent.addEventListener('touchstart', applyHoverStyles);
videoCardContent.addEventListener('touchend', removeHoverStyles);

const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

if (isTouchDevice) {
  const videoCardContent = document.querySelector('.video-card-content');

  function applyHoverStyles() {
    videoCardContent.style.transform = 'scale(1.05)';
    videoCardContent.style.color = 'var(--clr-highlight)';
    videoCardContent.style.border = '3px solid var(--clr-highlight)';
  }

  function removeHoverStyles() {
    videoCardContent.style.transform = 'scale(1)';
    videoCardContent.style.color = '';
    videoCardContent.style.border = '';
  }

  videoCardContent.addEventListener('touchstart', applyHoverStyles);
  videoCardContent.addEventListener('touchend', removeHoverStyles);
}

const videoCards = document.querySelectorAll('.video-card');

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