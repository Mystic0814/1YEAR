// Enter button functionality
document.getElementById('enter-btn').addEventListener('click', function() {
    document.getElementById('landing-page').style.display = 'none';
    document.getElementById('gallery-page').style.display = 'block';
});

// Back button functionality
document.getElementById('back-btn').addEventListener('click', function() {
    document.getElementById('gallery-page').style.display = 'none';
    document.getElementById('landing-page').style.display = 'block';
});

// Modal functionality for image expansion
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const modalCaption = document.getElementById('modal-caption');
const closeModal = document.getElementsByClassName('close')[0];
const galleryImages = document.querySelectorAll('.gallery-image');
const imageCaptions = document.querySelectorAll('.image-caption');

// Add click event to each gallery image
galleryImages.forEach(function(image, index) {
    image.addEventListener('click', function() {
        modal.style.display = 'flex';
        modalImg.src = this.src;
        modalCaption.textContent = imageCaptions[index].textContent; // Get the corresponding caption
    });
});

// Close modal when clicking on 'X'
closeModal.onclick = function() {
    modal.style.display = 'none';
};

// Close modal when clicking outside the image
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
};

// Slideshow functionality
let slideIndex = 0;
showSlides();

function showSlides() {
    const slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.opacity = 0; // Hide all slides
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; } // Loop back to first slide
    slides[slideIndex - 1].style.opacity = 1; // Show current slide
    setTimeout(showSlides, 5000); // Change slide every 5 seconds
}
