document.addEventListener('DOMContentLoaded', function() {
    const detailsBtn = document.getElementById('detailsBtn');
    const expandedContent = document.getElementById('expandedContent');
    const promoCard = document.getElementById('promoCard');
    const imageBlock = document.querySelector('.image_block');
    const textBlock = document.querySelector('.text_block');
    
    if (detailsBtn && expandedContent && promoCard) {
        detailsBtn.addEventListener('click', function() {
            // Добавляем класс для разворачивания
            promoCard.classList.add('expanded');
            
            // Показываем дополнительный контент
            setTimeout(() => {
                expandedContent.classList.add('active');
            }, 300);
        });
    }
    
    // Обработчик для кнопки "Свернуть"
    const collapseBtn = document.getElementById('collapseBtn');
    if (collapseBtn && expandedContent && promoCard) {
        collapseBtn.addEventListener('click', function() {
            // Скрываем дополнительный контент
            expandedContent.classList.remove('active');
            
            // Сворачиваем карточку
            setTimeout(() => {
                promoCard.classList.remove('expanded');
            }, 300);
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const regOverlay = document.getElementById('regOverlay');
    const openRegBtn = document.querySelector('.participate_btn');
    const closeRegBtn = document.getElementById('closeRegBtn');

    function openRegOverlay() {
        if (regOverlay) {
            regOverlay.style.display = 'flex';
            setTimeout(() => {
                regOverlay.classList.add('active');
                regOverlay.querySelector('.container_reg').classList.add('active');
            }, 10);
        }
    }

    function closeRegOverlay() {
        if (regOverlay) {
            regOverlay.classList.remove('active');
            const container = regOverlay.querySelector('.container_reg');
            if (container) container.classList.remove('active');
            setTimeout(() => {
                regOverlay.style.display = 'none';
            }, 400);
        }
    }

    if (openRegBtn) {
        openRegBtn.addEventListener('click', openRegOverlay);
    }

    if (closeRegBtn) {
        closeRegBtn.addEventListener('click', closeRegOverlay);
    }

    if (regOverlay) {
        regOverlay.addEventListener('click', (e) => {
            if (e.target === regOverlay) {
                closeRegOverlay();
            }
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && regOverlay) {
            closeRegOverlay();
        }
    });

    const form = document.querySelector('.registration-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Регистрация успешна!');
            closeRegOverlay();
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const filterBtns = document.querySelectorAll('.filter_btn');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        });
    });
});