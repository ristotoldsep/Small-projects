//array of images to loop through
const images = [
    'images/slide-1.jpg',
    'images/slide-2.jpg',
    'images/slide-3.jpg'
];

let currentImage = 0; //Counter for the current displaying image

//Selecting image to change the src
let sliderImage = document.querySelector('.slider__image');

//Selecting buttons
let prevButton = document.querySelector('.slider__button-prev');
let playButton = document.querySelector('.slider__button-play');
let nextButton = document.querySelector('.slider__button-next');

//Eventlisteners
/* prevButton.addEventListener('click', () => { //ES6 SYNTAX
    prevImage();
}); */
prevButton.addEventListener('click', prevImage); //OLD FUNCTION SYNTAX

nextButton.addEventListener('click', () => {
    nextImage();
});

playButton.addEventListener('click', () => autoplay());

//Functions/methods
const nextImage = () => {
    if (currentImage < images.length - 1) {
        currentImage++; //If current image is not the last image, show next one
    } else {
        currentImage = 0; //If last, go back to beginning;
    }
    sliderImage.src = images[currentImage];
}

/* const prevImage = () => { //ES6 SYNTAX with arrow functions
    //if first image, make index the last 
    if (currentImage == 0) {
        currentImage = images.length - 1;
    } else {
        currentImage--;
    }
    sliderImage.src = images[currentImage];
    //else decrease index
} */

function prevImage() { //OLD SYNTAX
    //if first image, make index the last 
    if (currentImage == 0) {
        currentImage = images.length - 1;
    } else {
        currentImage--;
    }
    sliderImage.src = images[currentImage];
    //else decrease index
}

let interval;
const autoplay = () => {
    if (interval) {
        clearInterval(interval);
        interval = null;
    } else {
        interval = setInterval(() => {
            nextImage();
        }, 1000);
    }

    playButton.children[0].classList.toggle('fa-play');
    playButton.children[0].classList.toggle('fa-pause');
}