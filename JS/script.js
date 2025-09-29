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



function getVisibleCardCount() {
  const containerWidth = document.querySelector('.carousel-container').offsetWidth;
  const cardWidth = cards[0].offsetWidth + 16; 
  return Math.floor(containerWidth / cardWidth);
}


function getCardWidth() {
  const card = document.querySelector('.card');
  return card.offsetWidth + 16;
}

function updateSlider() {
  const cardWidth = getCardWidth();
  track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;

  document.querySelectorAll('#dots span').forEach((dot, i) => {
    dot.classList.toggle('active', i === currentIndex);
  });
}


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


window.addEventListener('resize', () => {
  updateSlider();
});

setupDots();
updateSlider();
