categories = [
    {
        title: "Digital",
        ob_par
    }
]

document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.category-card');

    cards.forEach(function(card) {
        card.addEventListener('click', function(event) {
            // Клик по кнопке закрытия — убираем класс active
            if (event.target.classList.contains('close-btn') || 
                event.target.closest('.close-btn')) {
                this.classList.remove('active');
                event.stopPropagation();
                return;
            }

            // Если карточка уже активна — ничего не делаем
            if (this.classList.contains('active')) {
                return;
            }

            // Убираем active у всех остальных карточек
            cards.forEach(function(otherCard) {
                if (otherCard !== card) {
                    otherCard.classList.remove('active');
                }
            });

            // Добавляем active на текущую карточку
            this.classList.add('active');
        });
    });
});