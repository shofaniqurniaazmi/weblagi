const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    navbar.classList.add('shadow-md');
  } else {
    navbar.classList.remove('shadow-md');
  }
});

function adjustRings() {
    const bgBlack = document.querySelector('.bg-black');
    const ringContainer = document.getElementById('ring-container');
    const rings = document.querySelectorAll('.ring');
  
    const bgBlackRect = bgBlack.getBoundingClientRect();
    const maxRingSize = Math.min(bgBlackRect.width, bgBlackRect.height) - 40;
    const baseSize = maxRingSize * 0.9;
  
    const centerX = bgBlackRect.left + bgBlackRect.width / 2;
    const centerY = bgBlackRect.top + bgBlackRect.height / 2;
  
    ringContainer.style.left = `${centerX - 40}px`;
    ringContainer.style.bottom = `0`;
  
    rings.forEach((ring, index) => {
      const size = baseSize - index * 50;
      ring.style.width = `${size}px`;
      ring.style.height = `${size}px`;
      ring.style.bottom = `-${size / 2}px`;
      ring.style.left = `-${size / 2}px`;
    });
  }
  
  function adjustImageSize() {
    const images = document.querySelectorAll('.feature-image');
    const windowWidth = window.innerWidth;
  
    images.forEach(image => {
      if (windowWidth < 768) {
        image.style.height = '400px';
      } else if (windowWidth < 1200) {
        image.style.height = '500px';
      } else {
        image.style.height = '600px';
      }
    });
  }
  
  window.addEventListener('load', () => {
    adjustRings();
    adjustImageSize();
  });
  
  window.addEventListener('resize', () => {
    adjustRings();
    adjustImageSize();
  });
  