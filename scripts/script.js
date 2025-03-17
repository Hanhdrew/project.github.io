// Select the video card content element
const videoCardContent = document.querySelector('.video-card-content');

// Function to apply hover/active styles
function applyHoverStyles() {
  videoCardContent.style.transform = 'scale(1.05)';
  videoCardContent.style.color = 'var(--clr-highlight)';
  videoCardContent.style.border = '3px solid var(--clr-highlight)';
}

// Function to remove hover/active styles
function removeHoverStyles() {
  videoCardContent.style.transform = 'scale(1)';
  videoCardContent.style.color = ''; // Reset to default
  videoCardContent.style.border = ''; // Reset to default
}

// Add event listeners for touch devices
videoCardContent.addEventListener('touchstart', applyHoverStyles);
videoCardContent.addEventListener('touchend', removeHoverStyles);

// Check if the device supports touch events
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