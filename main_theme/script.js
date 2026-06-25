

document.addEventListener('DOMContentLoaded', () => {
  const track = document.getElementById('sliderTrack');
  const text = document.getElementById('sliderText');

  // Если элементы не найдены в HTML, скрипт не упадет с ошибкой, а предупредит в консоль
  if (!track || !text) {
    console.warn("Слайдер: Элементы 'sliderTrack' или 'sliderText' не найдены в HTML!");
    return;
  }

  // Твои цвета для текста под каждую картинку
  const textColors = [
  '#38394B', // Серый/синеватый под 1-е фото
  '#FF00AA', // Насыщенный розовый под 2-е фото
  '#C6C1C1'  // Светло-серый под 3-е фото
    ];
  const totalSlides = track.children.length;
  let currentIndex = 0;

  // Задаем стартовый цвет первой картинки
  text.style.color = textColors[currentIndex];

  // Запуск интервала
  setInterval(() => {
    // Вычисляем следующий индекс слайда
    currentIndex = (currentIndex + 1) % totalSlides;
    
    // Сдвиг ленты влево (проверь, чтобы в SCSS у .slider-track не было !important на transform)
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
    
    // Плавная смена цвета текста
    text.style.color = textColors[currentIndex];
  }, 10000); // 10 секунд
});

window.addEventListener('scroll', () => {
  const bg = document.querySelector('.promo-section__bg');
  if (bg) {
    const scrollPosition = window.scrollY;
    // 0.12 — коэффициент скорости. Подберите под себя, чтобы движение было "едва заметным"
    bg.style.transform = `translateY(-${scrollPosition * 0.12}px)`;
  }
});

// ЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫ

document.addEventListener('DOMContentLoaded', () => {
  const slider = document.getElementById('verticalSlider');
  const slides = document.querySelectorAll('.evaluation-section__slide');
  const paginationContainer = document.getElementById('sliderPagination');
  const totalSlides = slides.length;
  let currentIndex = 0;
  let slideInterval;

  // 1. Генерация рандомных оценок от 7.0/10 до 10.0/10
  slides.forEach(slide => {
    const ratingElement = slide.querySelector('.evaluation-section__rating');
    if (ratingElement) {
      // Генерируем случайное число от 7.0 до 10.0 с одним знаком после запятой
      const randomRating = (Math.random() * (10.0 - 7.0) + 7.0).toFixed(1);
      ratingElement.textContent = `${randomRating}/10`;
    }
  });

  // 2. Генерация точек пагинации
  for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (i === 0) dot.classList.add('dot--active');
    
    // Клик по конкретной точке
    dot.addEventListener('click', (e) => {
      e.stopPropagation(); // Стопаем всплытие, чтобы не срабатывал клик по обертке
      currentIndex = i;
      updateSlider();
      startAutoPlay();
    });
    
    paginationContainer.appendChild(dot);
  }

  const dots = paginationContainer.querySelectorAll('.dot');

  // 3. Обновление положения слайдера и точек (с учетом адаптива)
  function updateSlider() {
    const isMobile = window.innerWidth <= 1024;

    if (isMobile) {
      // На мобильных двигаем по горизонтали (X) на ширину экрана
      slider.style.transform = `translateX(-${currentIndex * 100}vw)`;
    } else {
      // На десктопе двигаем по вертикали (Y) на высоту экрана
      slider.style.transform = `translateY(-${currentIndex * 100}vh)`;
    }

    // Обновляем активную точку
    dots.forEach((dot, index) => {
      if (index === currentIndex) {
        dot.classList.add('dot--active');
      } else {
        dot.classList.add('dot--active'); // Исправление: убираем активный класс у остальных
        dot.classList.remove('dot--active');
      }
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlider();
  }

  // 4. Автопрокрутка 5 секунд
  function startAutoPlay() {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 5000);
  }

  // Клик по слайдеру для перехода к следующему
  const sliderWrapper = document.querySelector('.evaluation-section__slider-wrapper');
  sliderWrapper.addEventListener('click', () => {
    nextSlide();
    startAutoPlay();
  });

  // Корректное переключение при изменении размеров экрана (резком ресайзе)
  window.addEventListener('resize', updateSlider);

  // Запуск
  startAutoPlay();
});
