// Smooth hover efekti için
document.addEventListener('DOMContentLoaded', function() {
    const card = document.querySelector('.card');
    
    card.addEventListener('mousemove', (e) => {
        const x = (window.innerWidth / 2 - e.pageX) / 25;
        const y = (window.innerHeight / 2 - e.pageY) / 25;
        card.style.transform = `translateY(-2px) rotateY(${x}deg) rotateX(${y}deg)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) rotateY(0) rotateX(0)';
    });
});
