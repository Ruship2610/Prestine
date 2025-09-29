const track = document.getElementById('carousel-track');
const cards = document.querySelectorAll('.card');
const dotsContainer = document.getElementById('dots');
const menuBtn = document.querySelector('.hamBurger');
const closeBtn = document.querySelector('.close-button');
console.log(menuBtn);

let currentIndex = 0;
const totalSlides = cards.length;

    menuBtn.addEventListener('click', () => {
      console.log("hiiii");
      document.querySelector(".mobile-overlay").style.right = 0;
    });

    closeBtn.addEventListener('click', () => {
      document.querySelector(".mobile-overlay").style.right = "-100%";
      
    });


// Dynamically get visible card count
function getVisibleCardCount() {
  const containerWidth = document.querySelector('.carousel-container').offsetWidth;
  const cardWidth = cards[0].offsetWidth + 16; // +gap
  return Math.floor(containerWidth / cardWidth);
}

// Get current card width (includes margin/gap)
function getCardWidth() {
  const card = document.querySelector('.card');
  return card.offsetWidth + 16; // add gap
}

// Update carousel position
function updateSlider() {
  const cardWidth = getCardWidth();
  track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;

  // Update active dot
  document.querySelectorAll('#dots span').forEach((dot, i) => {
    dot.classList.toggle('active', i === currentIndex);
  });
}

// Setup dots and handlers
function setupDots() {
  dotsContainer.innerHTML = '';
  for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement('span');
    dot.addEventListener('click', () => {
      currentIndex = i;
      updateSlider();
    });
    dotsContainer.appendChild(dot);
  }
}

// Reset on resize
window.addEventListener('resize', () => {
  updateSlider();
});

setupDots();
updateSlider();
