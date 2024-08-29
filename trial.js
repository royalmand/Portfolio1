// Function to map a value from one range to another
function mapRange(value, inMin, inMax, outMin, outMax) {
    return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

// Function to handle scrolling and animations
function handleScrollAnimations() {
    const cards = document.querySelectorAll('.card');
    const viewportHeight = window.innerHeight;
    
    cards.forEach((card, index) => {
        const cardRect = card.getBoundingClientRect();
        const cardTop = cardRect.top;
        const cardHeight = cardRect.height;

        // Calculate the progress of the card in the viewport
        const progress = mapRange(cardTop, viewportHeight, -cardHeight, 0, 1);
        
        // Clamp the progress between 0 and 1
        const clampedProgress = Math.max(0, Math.min(1, progress));
        
        // Set the opacity and transform based on the progress
        card.style.opacity = clampedProgress;

        // Apply different transforms for each card
        if (index === 0) { // Card 1: Slide from Left
            card.style.transform = `translateX(${mapRange(clampedProgress, 0, 1, -100, 0)}%)`;
        } else if (index === 1) { // Card 2: Slide from Bottom
            card.style.transform = `translateY(${mapRange(clampedProgress, 0, 1, 100, 0)}%)`;
        } else if (index === 2) { // Card 3: Slide from Right
            card.style.transform = `translateX(${mapRange(clampedProgress, 0, 1, 100, 0)}%)`;
        }
    });

    // Request the next frame for a smooth animation
    requestAnimationFrame(handleScrollAnimations);
}

// Start the scroll animation handler
handleScrollAnimations();
