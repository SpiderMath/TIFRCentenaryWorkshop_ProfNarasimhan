(function () {
    const carousel = document.querySelector(".archival-carousel");
    if (!carousel) return;

    const track = carousel.querySelector(".carousel-track");
    const slides = carousel.querySelectorAll(".carousel-slide");
    const captionMount = carousel.querySelector(".carousel-caption-text");
    const prevBtn = carousel.querySelector(".carousel-btn-prev");
    const nextBtn = carousel.querySelector(".carousel-btn-next");
    const counterMount = carousel.querySelector(".carousel-counter");

    if (!track || !slides.length) return;

    let currentIndex = 0;
    let timer = null;
    const intervalTime = 5000;

    function updateSlide(index) {
        currentIndex = index;
        track.style.transform = `translateX(-${currentIndex * 100}%)`;

        const activeSlide = slides[currentIndex];
        const caption = activeSlide.getAttribute("data-caption") || "";
        if (captionMount) {
            captionMount.textContent = caption;
        }
        if (counterMount) {
            counterMount.textContent = `${currentIndex + 1} / ${slides.length}`;
        }
    }

    function nextSlide() {
        const next = (currentIndex + 1) % slides.length;
        updateSlide(next);
    }

    function prevSlide() {
        const prev = (currentIndex - 1 + slides.length) % slides.length;
        updateSlide(prev);
    }

    function startTimer() {
        stopTimer();
        timer = setInterval(nextSlide, intervalTime);
    }

    function stopTimer() {
        if (timer) {
            clearInterval(timer);
            timer = null;
        }
    }

    if (nextBtn) {
        nextBtn.addEventListener("click", function () {
            nextSlide();
            startTimer();
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener("click", function () {
            prevSlide();
            startTimer();
        });
    }

    // Pause on mouse hover or keyboard focus
    carousel.addEventListener("mouseenter", stopTimer);
    carousel.addEventListener("mouseleave", startTimer);
    carousel.addEventListener("focusin", stopTimer);
    carousel.addEventListener("focusout", startTimer);

    // Initialize
    updateSlide(0);
    startTimer();
})();
