    /* Индекс слайда по умолчанию */
    let slideIndex = 1;
    let timer = null;
    showSlides(slideIndex);
    
    afterTime(3000); // Устанавливаем считчик...
    /* Функция увеличивает индекс на 1, показывает следующй слайд*/
    function plusSlide() {
        showSlides(slideIndex += 1);
    }
    
    /* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
    function minusSlide() {
        showSlides(slideIndex -= 1);
    }
    
    /* Устанавливает текущий слайд */
    function currentSlide(n) {
        console.log(n);
        showSlides(slideIndex = n);
    }
    
    /* Основная функция сладера */
    function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("item");
        let dots = document.getElementsByClassName("slider-dots_item");
    
        if (n && n > slides.length) {
            slideIndex = 1;
        }
        if (n && n < 1) {
            slideIndex = slides.length;
        }
    
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].classList.remove("active");
            // dots[i].className = dots[i].className.replace("active", "");
        }
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }
    
        if (slideIndex <= 0) slideIndex = slides.length; // проверяем на кнопке back
    
        slides[slideIndex-1].style.display = "block";
        dots[slideIndex-1].classList.add("active");
        // dots[slideIndex - 1].className += " active";
    
        afterTime(2000); // Сбрасываем и устанавливаем счетчик...
    }
    
    function afterTime(delay) { // Сам счетчик..
        clearInterval(timer);
        timer = setInterval(() => {
            slideIndex++;
            showSlides();
        }, delay);
    }	