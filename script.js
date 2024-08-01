function displayGreeting() {
    const now = new Date();
    const hours = now.getHours();
    let greeting;

    if (hours < 12) {
        greeting = "Good morning!";
    } else if (hours < 18) {
        greeting = "Good afternoon!";
    } else {
        greeting = "Good evening!";
    }

    document.getElementById('greeting').textContent = greeting;
}

let slideIndex = 0;

function showSlides() {
    const slides = document.querySelectorAll('.slide');
    if (slides.length > 0) {
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';  
        }
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }
        slides[slideIndex - 1].style.display = 'block';  
        const slideHeight = slides[0].clientHeight;
        document.querySelector('.slides').style.transform = `translateY(-${(slideIndex - 1) * slideHeight}px)`;
    }
}

function initializePage() {
    displayGreeting();
    showSlides(); // Start the slider
    setInterval(showSlides, 5000); // Change slide every 5 seconds
}

window.onload = initializePage;
