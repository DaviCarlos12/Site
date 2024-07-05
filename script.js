
let currentIndex = 0;
let autoSlideInterval;

function moveSlide(index) {
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;

    items[currentIndex].classList.remove('active');
    document.querySelectorAll('.indicator')[currentIndex].classList.remove('active');

    currentIndex = (index + totalItems) % totalItems;

    items[currentIndex].classList.add('active');
    document.querySelectorAll('.indicator')[currentIndex].classList.add('active');

    document.querySelector('.carousel-inner').style.transform = `translateX(-${currentIndex * 100}%)`;

    // Reset the auto slide timer when user manually changes slide
    resetAutoSlide();
}

function autoSlide() {
    moveSlide(currentIndex + 1);
}

function startAutoSlide() {
    autoSlideInterval = setInterval(autoSlide, 3000); // Change every 3 seconds
}

function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

function resetAutoSlide() {
    stopAutoSlide();
    startAutoSlide();
}

// Start the auto slide when the page loads
document.addEventListener('DOMContentLoaded', (event) => {
    startAutoSlide();

    const carousel = document.querySelector('.carousel');
    carousel.addEventListener('mouseenter', stopAutoSlide);
    carousel.addEventListener('mouseleave', startAutoSlide);

    // Attach click event listeners to indicators
    document.querySelectorAll('.indicator').forEach((indicator, index) => {
        indicator.addEventListener('click', () => moveSlide(index));
    });
});

const catalog = document.querySelector('.catalog');
const prevButton = document.querySelector('.catalog-prev');
const nextButton = document.querySelector('.catalog-next');

let currentCatalogIndex = 0;
const itemWidth = 220 + 20; // Largura do item + margem
const totalItems = catalog.children.length;

function showItem(index) {
    const offset = -index * itemWidth;
    catalog.style.transform = `translateX(${offset}px)`;
}

nextButton.addEventListener('click', () => {
    if (currentCatalogIndex < totalItems - 4) { // Ajuste '5' conforme o número de itens visíveis
        currentCatalogIndex++;
        showItem(currentCatalogIndex);
    }
});

prevButton.addEventListener('click', () => {
    if (currentCatalogIndex > 0) {
        currentCatalogIndex--;
        showItem(currentCatalogIndex);
    }
});


const continueWatching = document.querySelector('.continue-watching');
const continuePrevButton = document.querySelector('.continue-watching-prev');
const continueNextButton = document.querySelector('.continue-watching-next');

let currentContinueIndex = 0;
const continueItemWidth = 300 + 20; // Largura do item + margem
const totalContinueItems = continueWatching.children.length;

function showContinueItem(index) {
    const offset = -index * continueItemWidth;
    continueWatching.style.transform = `translateX(${offset}px)`;
}

continueNextButton.addEventListener('click', () => {
    if (currentContinueIndex < totalContinueItems - 3) { // Ajuste '5' conforme o número de itens visíveis
        currentContinueIndex++;
        showContinueItem(currentContinueIndex);
    }
});

continuePrevButton.addEventListener('click', () => {
    if (currentContinueIndex > 0) {
        currentContinueIndex--;
        showContinueItem(currentContinueIndex);
    }
});
