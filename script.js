
    document.addEventListener('DOMContentLoaded', function () {
        const sliderContainer = document.querySelector('.slider-container');
        const slides = document.querySelectorAll('.slider-container img');
        let currentIndex = 0;

        function showSlide(index) {
            const newTransformValue = -index * 100 + '%';
            sliderContainer.style.transform = 'translateX(' + newTransformValue + ')';
        }

        function nextSlide() {
            currentIndex = (currentIndex + 1) % slides.length;
            showSlide(currentIndex);
        }

        function prevSlide() {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            showSlide(currentIndex);
        }

        // Comment out the setInterval line to disable auto-sliding
        // setInterval(nextSlide, 3000);

        // Add click event listeners to arrow buttons
        document.querySelector('.right-arrow').addEventListener('click', nextSlide);
        document.querySelector('.left-arrow').addEventListener('click', prevSlide);
    });

