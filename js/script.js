// script.js
const slideshowContainer = document.querySelector(".slideshow-container");
const images = ["asteroid belt.jpg", "astronaut on mars.avif", "clear moon.jpg", "crescent.jpg"]; // Replace with your image filenames
let currentIndex = 0;

function changeBackgroundImage() {
    slideshowContainer.style.backgroundImage = `url(${images[currentIndex]})`;

    // Increment the index to show the next image
    currentIndex = (currentIndex + 1) % images.length;

    // Change background every 5 seconds (adjust as needed)
    setTimeout(changeBackgroundImage, 5000);
}

// Initialize the slideshow
changeBackgroundImage();
