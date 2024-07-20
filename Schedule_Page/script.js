// const originalParents = new Map();

document.addEventListener("DOMContentLoaded", function() {
  const slider = document.querySelector('.slider-container');
  const slides = document.querySelectorAll('.each-day-column');
  let currentIndex = 0;

  document.getElementById('nextBtn').addEventListener('click', function() {
    if (currentIndex < slides.length - 1) {
      currentIndex++;
      updateSliderPosition();
      let day = document.getElementById('Day-number').innerHTML;
      let day_number = Number(day.split('-')[1]);
      day_number++;
      document.getElementById('Day-number').innerHTML = `Day-${day_number}`;
    }
  });

  document.getElementById('prevBtn').addEventListener('click', function() {
    if (currentIndex > 0) {
      currentIndex--;
      updateSliderPosition();
      let day = document.getElementById('Day-number').innerHTML;
      let day_number = Number(day.split('-')[1]);
      day_number--;
      document.getElementById('Day-number').innerHTML = `Day-${day_number}`;
    }
  });

  function updateSliderPosition() {
    const slidePercentageWidth = 100 / slides.length;
    const sliderWidth = slider.clientWidth;
    const slideWidth = (sliderWidth * slidePercentageWidth) / 100;
    const newTransformValue = -(slideWidth * currentIndex);
    slider.style.transform = `translateX(${newTransformValue}px)`;
  }
  
});

// Use a Map to store the original parent of each detail element
// const detailOriginalParentMap = new Map();

// document.querySelectorAll('.each-day-column .event-card').forEach(card => {
//   card.addEventListener('mouseenter', function() {
//     const siblings = this.closest('.each-day-column').querySelectorAll('.event-card');
//     siblings.forEach(sib => {
//       sib.classList.add('blur');
//     });

//     const detail = this.querySelector('.event-detail');
//     if (detail) {
//       detail.classList.add('focused');
//       detailOriginalParentMap.set(detail, this); // Store the original parent using a Map
//       this.closest('.each-day-column').appendChild(detail);
//     }
    
//     detail.style.display = 'block';
//   });

//   card.addEventListener('mouseleave', function() {
//     const siblings = this.closest('.each-day-column').querySelectorAll('.event-card');
//     siblings.forEach(sib => {
//       sib.classList.remove('blur');
//     });

//     const detail = this.querySelector('.event-detail');
//     if (detail) {
//       const originalParent = detailOriginalParentMap.get(detail); // Retrieve the original parent from the Map
//       console.log(originalParent);
//       if (originalParent) {
//         detail.classList.remove('focused');
//         originalParent.appendChild(detail); // Move detail back to the original card
//       }
//     }
    

//   });
// });



// Track the original parent for each .event-detail
// Track the original parent for each .event-detail


// document.querySelectorAll('.event-card').forEach((card, index) => {
//   // Ensure each .event-card has a unique ID
//   if (!card.id) {
//     card.id = `event-card-${index}`;
//   }

//   card.addEventListener('mouseenter', function() {
//     const detail = this.querySelector('.event-detail');
//     if (detail) {
//       // Store the original parent ID on the .event-detail
//       detail.setAttribute('data-original-parent-id', this.id);
//       // Move detail to the .each-day-column
//       const eachDayColumn = this.closest('.each-day-column');
//       if (eachDayColumn) {
//         eachDayColumn.appendChild(detail);
//       }
//     }
//   });

//   card.addEventListener('mouseleave', function() {
//     const detail = document.querySelector('.event-detail[data-original-parent-id="' + this.id + '"]');
//     if (detail) {
//       // Find the original parent using the stored ID
//       const originalParentId = detail.getAttribute('data-original-parent-id');
//       const originalParent = document.getElementById(originalParentId);
//       if (originalParent) {
//         originalParent.appendChild(detail);
//       }
//     }
//   });
// });


// document.querySelectorAll('.event-card').forEach((card, index) => {
//   // Ensure each .event-card has a unique ID
//   if (!card.id) {
//     card.id = `event-card-${index}`;
//   }

//   card.addEventListener('mouseenter', function() {
//     // Add blur class to all .event-card elements
//     document.querySelectorAll('.event-card').forEach((el) => {
//       el.classList.add('blur');
//     });

//     const detail = this.querySelector('.event-detail');
//     if (detail) {
//       // Store the original parent ID on the .event-detail
//       detail.setAttribute('data-original-parent-id', this.id);
//       // Move detail to the .each-day-column
//       const eachDayColumn = this.closest('.each-day-column');
//       if (eachDayColumn) {
//         eachDayColumn.appendChild(detail);
//       }
//     }
//   });

//   card.addEventListener('mouseleave', function() {
//     // Remove blur class from all .event-card elements
//     document.querySelectorAll('.event-card').forEach((el) => {
//       el.classList.remove('blur');
//     });

//     const detail = document.querySelector('.event-detail[data-original-parent-id="' + this.id + '"]');
//     if (detail) {
//       // Find the original parent using the stored ID
//       const originalParentId = detail.getAttribute('data-original-parent-id');
//       const originalParent = document.getElementById(originalParentId);
//       if (originalParent) {
//         originalParent.appendChild(detail);
//       }
//     }
//   });
// });


// document.querySelectorAll('.event-card').forEach((card, index) => {
//   // Ensure each .event-card has a unique ID
//   if (!card.id) {
//     card.id = `event-card-${index}`;
//   }

//   let leaveTimeout; // Declare a variable for the timeout outside the event listeners

//   card.addEventListener('mouseenter', function() {
//     clearTimeout(leaveTimeout); // Clear the timeout when mouse enters the card
//     // Add blur class to all .event-card elements
//     document.querySelectorAll('.event-card').forEach((el) => {
//       el.classList.add('blur');
//     });

//     const detail = this.querySelector('.event-detail');
//     if (detail) {
//       // Store the original parent ID on the .event-detail
//       detail.setAttribute('data-original-parent-id', this.id);
//       // Move detail to the .each-day-column
//       const eachDayColumn = this.closest('.each-day-column');
//       if (eachDayColumn) {
//         eachDayColumn.appendChild(detail);
//       }
//       detail.style.display = 'block'; // Ensure the detail is visible
//     }
//   });

//   card.addEventListener('mouseleave', function() {
//     // Start a timeout when mouse leaves the card
//     leaveTimeout = setTimeout(() => {
//       // Remove blur class from all .event-card elements
//       document.querySelectorAll('.event-card').forEach((el) => {
//         el.classList.remove('blur');
//       });

//       const detail = document.querySelector('.event-detail[data-original-parent-id="' + this.id + '"]');
//       if (detail) {
//         // Find the original parent using the stored ID
//         const originalParentId = detail.getAttribute('data-original-parent-id');
//         const originalParent = document.getElementById(originalParentId);
//         if (originalParent) {
//           originalParent.appendChild(detail);
//           detail.style.display = 'none'; // Hide the detail
//         }
//       }
//     }, 300); // Delay before hiding the detail, adjust as needed
//   });

//   // Add an event listener to .event-detail to prevent it from hiding if the mouse is over it
//   document.querySelectorAll('.event-detail').forEach(detail => {
//     detail.addEventListener('mouseenter', () => clearTimeout(leaveTimeout));
//     detail.addEventListener('mouseleave', () => {
//       detail.style.display = 'none'; // Hide the detail when mouse leaves
//       document.querySelectorAll('.event-card').forEach((el) => {
//         el.classList.remove('blur');
//       });
//     });
//   });
// });



document.querySelectorAll('.event-card').forEach((card, index) => {
  // Ensure each .event-card has a unique ID
  if (!card.id) {
    card.id = `event-card-${index}`;
  }

  let leaveTimeout; // Declare a variable for the timeout outside the event listeners

  card.addEventListener('mouseenter', function() {
    clearTimeout(leaveTimeout); // Clear the timeout when mouse enters the card
    // Add blur class to all .event-card elements
    document.querySelectorAll('.event-card').forEach((el) => {
      el.classList.add('blur');
    });

    const detail = this.querySelector('.event-detail');
    if (detail) {
      // Store the original parent ID on the .event-detail
      detail.setAttribute('data-original-parent-id', this.id);
      // Move detail to the .each-day-column
      const eachDayColumn = this.closest('.each-day-column');
      if (eachDayColumn) {
        eachDayColumn.appendChild(detail);
      }
      detail.style.display = 'block'; // Ensure the detail is visible
    }
  });


  card.addEventListener('mouseleave', function() {
    // Start a timeout when mouse leaves the card
    leaveTimeout = setTimeout(() => {
      // Remove blur class from all .event-card elements
      document.querySelectorAll('.event-card').forEach((el) => {
        el.classList.remove('blur');
      });

      const detail = document.querySelector('.event-detail[data-original-parent-id="' + this.id + '"]');
      if (detail && !detail.matches(':hover')) { // Check if mouse is not over .event-detail
        // Find the original parent using the stored ID
        const originalParentId = detail.getAttribute('data-original-parent-id');
        const originalParent = document.getElementById(originalParentId);
        if (originalParent) {
          originalParent.appendChild(detail);
          detail.style.display = 'none'; // Hide the detail
        }
      }
    }, 5); // Delay before hiding the detail, adjust as needed
  });

  // Add an event listener to .event-detail to prevent it from hiding if the mouse is over it
  document.querySelectorAll('.event-detail').forEach(detail => {
    detail.addEventListener('mouseenter', () => clearTimeout(leaveTimeout));
    detail.addEventListener('mouseleave', () => {
      // Hide the detail when mouse leaves
      const originalParentId = detail.getAttribute('data-original-parent-id');
      const originalParent = document.getElementById(originalParentId);
      if (originalParent) {
        originalParent.appendChild(detail);
        detail.style.display = 'none'; // Hide the detail
      }
      // Remove blur class from all .event-card elements
      document.querySelectorAll('.event-card').forEach((el) => {
        el.classList.remove('blur');
      });
    });
  });
});