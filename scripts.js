// Copy the partnership protocols
let copy = document.querySelector(".logos-slide").cloneNode(true);
document.querySelector(".content-two").appendChild(copy);

var moment = require('moment'); // require

var dateAccess = new Date();
var date = moment(dateAccess).format('MMMM Do YYYY, h:mm:ss a');


// // Function to map a value from one range to another
// function mapRange(value, inMin, inMax, outMin, outMax) {
//     return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
// }

// // Function to handle scrolling and animations
// function handleScrollAnimations() {
//     const cards = document.querySelectorAll('.card');
//     const viewportHeight = window.innerHeight;
    
//     cards.forEach((card, index) => {
//         const cardRect = card.getBoundingClientRect();
//         const cardTop = cardRect.top;
//         const cardHeight = cardRect.height;

//         // Adjust animation speed by reducing the input range
//         const speedMultiplier = 0.1;  // Reduced value to make the animation faster

//         // Calculate the progress of the card in the viewport
//         const progress = mapRange(cardTop, viewportHeight * (1 + speedMultiplier), -cardHeight * (1 + speedMultiplier), 0, 1);
        
//         // Clamp the progress between 0 and 1
//         const clampedProgress = Math.max(0, Math.min(1, progress));
        
//         // Set the opacity based on the progress
//         card.style.opacity = clampedProgress;

//         // Apply different animations for each card
//         if (index === 0) { // Card 1: Slide from Left
//             card.style.transform = `translateX(${mapRange(clampedProgress, 0, 1, -100, 0)}%)`;
//         } else if (index === 1) { // Card 2: Fade In
//             card.style.opacity = clampedProgress; // Only change opacity for fade effect
//             card.style.transform = `translateY(${mapRange(clampedProgress, 0, 1, 50, 0)}px)`; // Adjust position slightly for a smooth appearance
//         } else if (index === 2) { // Card 3: Slide from Right
//             card.style.transform = `translateX(${mapRange(clampedProgress, 0, 1, 100, 0)}%)`;
//         }
        
//         // Stop the animation when the card is fully visible
//         if (clampedProgress === 1) {
//             return;
//         }
//     });

//     // Request the next frame for a smooth animation
//     requestAnimationFrame(handleScrollAnimations);
// }

// // Start the scroll animation handler
// handleScrollAnimations();