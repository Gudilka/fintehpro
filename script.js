// Плавная прокрутка для ссылок
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Обработка формы
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    const data = Object.fromEntries(formData);
    
    console.log('Данные формы:', data);
    
    // Показываем сообщение об успехе
    alert('Спасибо за ваш запрос! Мы свяжемся с вами в ближайшее время.');
    
    // Очищаем форму
    this.reset();
});

// Плавное появление элементов при прокрутке
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Применяем subtle анимацию к карточкам
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.showcase-card, .case-card, .trust-item, .faq-item');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(10px)';
        card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
        card.style.transitionDelay = `${index * 0.05}s`;
        observer.observe(card);
    });
});
