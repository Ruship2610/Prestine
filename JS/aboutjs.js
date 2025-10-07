const menuBtn= document.querySelector(".hamburger")
const closeBtn = document.querySelector('.close-button');
const accordation = document.querySelectorAll('.accordion');
console.log(menuBtn);

menuBtn.addEventListener('click', () => {
    document.getElementsByClassName("mobile-overlay")[0].style.right = 0;
    document.getElementsByClassName("mobile-overlay")[0].style.display = "block";
    document.getElementsByTagName("body")[0].style.overflow = "hidden";
  });

  closeBtn.addEventListener('click', () => {
    document.getElementsByClassName("mobile-overlay")[0].style.right = "-100%";
    document.getElementsByTagName("body")[0].style.overflow = "auto";
  });


  

const titles = document.querySelectorAll('.accordion-title');

titles.forEach(title => {
  title.addEventListener('click', () => {
    const currentDetails = title.parentElement.nextElementSibling;
    const currentAccordation = title.closest('.accordation');

 
    document.querySelectorAll('.question-details').forEach(detail => {
      if (detail !== currentDetails) {
        detail.classList.remove('active');
      }
    });

    document.querySelectorAll('.accordation').forEach(acc => {
      if (acc !== currentAccordation) {
        acc.classList.remove('active');
      }
    });

    const isOpen = currentDetails.classList.contains('active');

    if (!isOpen) {
      currentDetails.classList.add('active');
      currentAccordation.classList.add('active'); 
    } else {
      currentDetails.classList.remove('active');
      currentAccordation.classList.remove('active');
    }
  });
});