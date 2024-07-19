// JavaScript
// let width_change=document.getElementsByClassName('slider-container');
// let day=document.getElementById('Day-number').innerHTML;
// let day_number=Number(day[4]);
// width_change.style.width=100*day_number+'%';


document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector('.slider-container');
    const slides = document.querySelectorAll('.each-day-column');
    let currentIndex = 0;
  
    document.getElementById('nextBtn').addEventListener('click', function() {
      if (currentIndex < slides.length - 1) {
        currentIndex++;
        updateSliderPosition();
        let day=document.getElementById('Day-number').innerHTML;
        let day_number=Number(day[4]);
        day_number++;
        
        document.getElementById('Day-number').innerHTML=`Day-${day_number}`
      }
    });
  
    document.getElementById('prevBtn').addEventListener('click', function() {
      if (currentIndex > 0) {
        currentIndex--;
        updateSliderPosition();
        let day=document.getElementById('Day-number').innerHTML;
        let day_number=Number(day[4]);
        day_number--;
        
        document.getElementById('Day-number').innerHTML=`Day-${day_number}`
      }
    });
  
    // function updateSliderPosition() {
    //   const slideWidth = slides[currentIndex].clientWidth;
    //   const newTransformValue = -(slideWidth * currentIndex);
    //   slider.style.transform = `translateX(${newTransformValue}px)`;
    // }
    function updateSliderPosition() {
        // Assuming each slide is set to a certain percentage of the slider container's width
        const slidePercentageWidth = 100 / slides.length; // Adjust this based on your actual CSS
        const sliderWidth = slider.clientWidth; // Get the current width of the slider container
        const slideWidth = (sliderWidth * slidePercentageWidth) / 100; // Calculate the width of each slide in pixels
        const newTransformValue = -(slideWidth * currentIndex);
        slider.style.transform = `translateX(${newTransformValue}px)`;
        

      }
  });

