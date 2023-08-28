document.addEventListener("DOMContentLoaded", () => {

    // Слайдер

    const galleryContainer = document.querySelector('.gallery-container');
    const galleryControlsContainer = document.querySelector('.gallery-controls');
    const galleryControls = ['prev', 'next'];
    const galleryItems = document.querySelectorAll('.gallery-item');

    class Carousel {
        constructor(container, items, controls) {
            this.carouselContainer = container;
            this.carouselControls = controls;
            this.carouselArray = [...items];
        }

        updateGallery() {
            this.carouselArray.forEach( el => {
                el.classList.remove('gallery-item-1');
                el.classList.remove('gallery-item-2');
                el.classList.remove('gallery-item-3');
            });

            this.carouselArray.slice(0, 3).forEach((el, i) => {
                el.classList.add(`gallery-item-${i+1}`);
            });
        }

        setCurrentState(direction) {
            if(direction.classList == 'gallery-controls-prev') {
                this.carouselArray.unshift(this.carouselArray.pop()); // Если клик на кнопке назад, то последний элемент массива вставляем вперед массивива
            } else {
                this.carouselArray.push(this.carouselArray.shift());
            }
            this.updateGallery();
        }

        setControls() {
            this.carouselControls.forEach(control => {
                galleryControlsContainer.appendChild(document.createElement('button')).className = `gallery-controls-${control}`;
            });
        }

        useControls() {
            const triggers = [...galleryControlsContainer.childNodes];
            triggers.forEach(control => {
                control.addEventListener('click', e => {
                    e.preventDefault();
                    this.setCurrentState(control);
                    control.disabled = true;
                    setTimeout(function() { control.disabled = false }, 400); // Заблокировать кнопку, пока не сработает анимация перемещения слайда
                });
            });
        }
    }




    const mediaQuery = window.matchMedia('(min-width: 993px)');
    if (mediaQuery.matches) {
        const exampleCarousel = new Carousel(galleryContainer, galleryItems, galleryControls);

        exampleCarousel.setControls();
        exampleCarousel.useControls();
        // Установить автопролистывание слайдера
        // setInterval(function() {
        //     document.querySelector('.gallery-controls-next').click();
        // }, 3000);
    }

    const anchors = document.querySelectorAll('.btn');

    for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const blockID = anchor.getAttribute('href').substr(1);
        
        document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
        });
    });
    }

});