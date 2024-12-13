document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.carousel__item');
    const dots = document.querySelectorAll('.carousel__nav-item');
    const container = document.querySelector('.carousel__container');

    function setActiveDot(index) {
        dots.forEach(dot => dot.classList.remove('active'));
        dots[index].classList.add('active');
    }

    container.addEventListener('scroll', () => {
        const scrollLeft = container.scrollLeft;
        const itemWidth = container.clientWidth;
        const index = Math.round(scrollLeft / itemWidth);
        setActiveDot(index);
    });
});