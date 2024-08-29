// Copy the partnership protocols
let copy = document.querySelector(".logos-slide").cloneNode(true);
document.querySelector(".content-two").appendChild(copy);

// Function to check if the element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top <= window.innerHeight && rect.bottom >= 0
    );
}

// Function to add 'active' class when element is in the viewport
function onScrollAnimation() {
    const silk = document.querySelector(".silk");
    const zeronym = document.querySelector(".zeronym");
    const misthi = document.querySelector(".misthi");

    if (isInViewport(silk)) {
        silk.classList.add("silk-active");
    }
    if (isInViewport(zeronym)) {
        zeronym.classList.add("zeronym-active");
    }
    if (isInViewport(misthi)) {
        misthi.classList.add("misthi-active");
    }
}

// Attach the function to the scroll event
window.addEventListener("scroll", onScrollAnimation);