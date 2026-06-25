// Переключение табов
function switchTab(tabName) {
    // Скрыть все контенты табов
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });
    
    // Убрать активный класс со всех табов
    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Показать выбранный контент
    document.getElementById(tabName).classList.add('active');
    
    // Добавить активный класс нажатому табу
    document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');
    
    // Прокрутить наверх
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Инициализация табов
document.addEventListener('DOMContentLoaded', function() {
    // Обработчики для табов
    document.querySelectorAll('.tab').forEach(tab => {
        tab.addEventListener('click', function() {
            const tabName = this.getAttribute('data-tab');
            switchTab(tabName);
        });
    });

    // Обработчики для кнопок назад
    document.querySelectorAll('.back-button').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            window.history.back();
        });
    });

    // Обработчик для кнопки печати
    document.querySelector('.print-button').addEventListener('click', function() {
        window.print();
    });
});