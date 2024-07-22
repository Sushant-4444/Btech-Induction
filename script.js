let index = 0;
function nextSlide() {
  const slides = document.querySelector('.slides');
  const slideWidth = slides.children[0].offsetWidth;
  const viewportWidth = slides.offsetWidth;
  const numSlidesThatFit = Math.floor(viewportWidth / slideWidth);

  index = (index + 1) % slides.children.length;
  slides.style.transform = `translateX(-${index * slideWidth*1.05}px)`;

  // Adjusted condition to hide the Next button
  if (index >= slides.children.length - numSlidesThatFit) {
    document.querySelector('.next-1').style.display = 'none';
  } else {
    document.querySelector('.next-1').style.display = 'block';
  }

  // Make the Prev button visible if we move away from the first slide
  if (index > 0) {
    document.querySelector('.prev-1').style.display = 'block';
  }
}

function prevSlide() {
  const slides = document.querySelector('.slides');
  const slideWidth = slides.children[0].offsetWidth;
  const viewportWidth = slides.offsetWidth;
  const numSlidesThatFit = Math.floor(viewportWidth / slideWidth);

  if (index > 0) {
    index = (index - 1) % slides.children.length;
    slides.style.transform = `translateX(-${index * slideWidth*1.05}px)`;
  }

  // Update the visibility of the Prev button
  if (index === 0) {
    document.querySelector('.prev-1').style.display = 'none';
  } else {
    document.querySelector('.prev-1').style.display = 'block';
  }

  // Ensure the Next button is visible when going back, unless it's the last slide
  if (index < slides.children.length - numSlidesThatFit) {
    document.querySelector('.next-1').style.display = 'block';
  }
}
// Call this function when initializing your slider to ensure the Prev button is initially hidden if the first slide is shown
function initializeSlider() {
  if (index === 0) {
    document.querySelector('.prev-1').style.display = 'none';
  }
  // Add any other initialization logic here
}