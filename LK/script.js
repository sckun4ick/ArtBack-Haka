// Открытие поп-апа
document.getElementById('money').addEventListener('click', () => {
    const overlay = document.querySelector('.overlay');
    overlay.style.display = 'flex';
    
    requestAnimationFrame(() => {
        overlay.classList.add('active');
        overlay.querySelector('.monetization').classList.add('active');
    });
});

// Закрытие по кнопке назад
document.getElementById('nazad').addEventListener('click', () => {
    const overlay = document.querySelector('.overlay');
    overlay.classList.remove('active');
    overlay.querySelector('.monetization').classList.remove('active');
    
    setTimeout(() => {
        overlay.style.display = 'none';
    }, 400);
});

// Закрытие по клику на оверлей
document.querySelector('.overlay').addEventListener('click', (e) => {
    if(e.target === e.currentTarget){
        const overlay = e.currentTarget;
        overlay.classList.remove('active');
        overlay.querySelector('.monetization').classList.remove('active');
        
        setTimeout(() => {
            overlay.style.display = 'none';
        }, 400);
    }
});

// Переключение табов оплаты
document.querySelectorAll('.vibar a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelectorAll('.vibar a').forEach(l => l.classList.remove('focus'));
        link.classList.add('focus');
    });
});

// Элементы
// const overlay = document.getElementById('monetizationOverlay');
// const moneyBtn = document.getElementById('money');
// const nazadBtn = document.getElementById('nazad');
// const toBalanceBtn = document.getElementById('toBalance');
// const withdrawBtn = document.getElementById('withdrawBtn');
// const addBtn = document.getElementById('addBtn');
// const saveCardBtn = document.getElementById('saveCardBtn');
// const mainScreen = document.querySelector('.main_screen');
// const cardScreen = document.querySelector('.card_screen');

// // Инпуты карты
// const cardNumberInput = document.getElementById('cardNumber');
// const cardDateInput = document.getElementById('cardDate');
// const cardCvcInput = document.getElementById('cardCvc');
// const soglCheck = document.getElementById('soglCheck');

// // Открытие поп-апа
// moneyBtn.addEventListener('click', () => {
//     overlay.style.display = 'flex';
//     requestAnimationFrame(() => {
//         overlay.classList.add('active');
//         overlay.querySelector('.monetization').classList.add('active');
//     });
//     showMainScreen();
//     loadCardData();
// });

// // Закрытие по кнопке назад
// nazadBtn.addEventListener('click', closeOverlay);

// // Возврат к балансу
// toBalanceBtn.addEventListener('click', (e) => {
//     e.preventDefault();
//     showMainScreen();
// });

// // Переход на экран карты при нажатии "Вывести"
// withdrawBtn.addEventListener('click', () => {
//     showCardScreen();
// });

// // Переход на экран карты при нажатии "Пополнить"
// addBtn.addEventListener('click', () => {
//     showCardScreen();
// });

// // Сохранение карты
// saveCardBtn.addEventListener('click', () => {
//     if (!soglCheck.checked) {
//         alert('Примите пользовательское соглашение');
//         return;
//     }

//     const cardData = {
//         number: cardNumberInput.value,
//         date: cardDateInput.value,
//         cvc: cardCvcInput.value
//     };

//     localStorage.setItem('savedCard', JSON.stringify(cardData));
//     alert('Карта сохранена!');
//     showMainScreen();
// });

// // Закрытие по клику на оверлей
// overlay.addEventListener('click', (e) => {
//     if (e.target === overlay) {
//         closeOverlay();
//     }
// });

// // Переключение табов
// document.querySelectorAll('.vibar a').forEach(link => {
//     link.addEventListener('click', (e) => {
//         e.preventDefault();
//         document.querySelectorAll('.vibar a').forEach(l => l.classList.remove('focus'));
//         link.classList.add('focus');
//     });
// });

// // Функции переключения экранов
// function showMainScreen() {
//     cardScreen.classList.remove('active');
//     mainScreen.classList.add('active');
// }

// function showCardScreen() {
//     mainScreen.classList.remove('active');
//     cardScreen.classList.add('active');
//     loadCardData();
// }

// // Загрузка сохранённой карты
// function loadCardData() {
//     const saved = localStorage.getItem('savedCard');
//     if (saved) {
//         const data = JSON.parse(saved);
//         cardNumberInput.value = data.number || '';
//         cardDateInput.value = data.date || '';
//         cardCvcInput.value = data.cvc || '';
//     }
// }

// // Закрытие оверлея
// function closeOverlay() {
//     overlay.classList.remove('active');
//     overlay.querySelector('.monetization').classList.remove('active');
//     setTimeout(() => {
//         overlay.style.display = 'none';
//     }, 400);
// }

// Элементы
document.addEventListener('DOMContentLoaded', function() {
    
    // ========== МОНЕТИЗАЦИЯ ==========
    const monetizationOverlay = document.getElementById('monetizationOverlay');
    const moneyBtn = document.getElementById('money');
    const nazadBtn = document.getElementById('nazad');
    const toBalanceBtn = document.getElementById('toBalance');
    const withdrawBtn = document.getElementById('withdrawBtn');
    const addBtn = document.getElementById('addBtn');
    const saveCardBtn = document.getElementById('saveCardBtn');
    const mainScreen = document.querySelector('.monetization .main_screen');
    const cardScreen = document.querySelector('.monetization .card_screen');
    const cardNumberInput = document.getElementById('cardNumber');
    const cardDateInput = document.getElementById('cardDate');
    const cardCvcInput = document.getElementById('cardCvc');
    const soglCheck = document.getElementById('soglCheck');

    // Открытие монетизации
    if (moneyBtn && monetizationOverlay) {
        moneyBtn.addEventListener('click', () => {
            closeProfileOverlay();
            monetizationOverlay.style.display = 'flex';
            setTimeout(() => {
                monetizationOverlay.classList.add('active');
                monetizationOverlay.querySelector('.monetization').classList.add('active');
            }, 10);
            showMainScreen();
            loadCardData();
        });
    }

    // Закрытие монетизации
    if (nazadBtn && monetizationOverlay) {
        nazadBtn.addEventListener('click', closeMonetizationOverlay);
    }

    if (monetizationOverlay) {
        monetizationOverlay.addEventListener('click', (e) => {
            if (e.target === monetizationOverlay) closeMonetizationOverlay();
        });
    }

    // Возврат к балансу
    if (toBalanceBtn) {
        toBalanceBtn.addEventListener('click', (e) => {
            e.preventDefault();
            showMainScreen();
        });
    }

    // Переход на экран карты
    if (withdrawBtn) {
        withdrawBtn.addEventListener('click', showCardScreen);
    }

    if (addBtn) {
        addBtn.addEventListener('click', showCardScreen);
    }

    // Сохранение карты
    if (saveCardBtn) {
        saveCardBtn.addEventListener('click', () => {
            if (!soglCheck.checked) {
                alert('Примите пользовательское соглашение');
                return;
            }
            const cardData = {
                number: cardNumberInput.value,
                date: cardDateInput.value,
                cvc: cardCvcInput.value
            };
            localStorage.setItem('savedCard', JSON.stringify(cardData));
            alert('Карта сохранена!');
            showMainScreen();
        });
    }

    // Переключение табов
    document.querySelectorAll('.vibar a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelectorAll('.vibar a').forEach(l => l.classList.remove('focus'));
            link.classList.add('focus');
        });
    });

    function showMainScreen() {
        if (mainScreen && cardScreen) {
            mainScreen.classList.add('active');
            cardScreen.classList.remove('active');
        }
    }

    function showCardScreen() {
        if (mainScreen && cardScreen) {
            mainScreen.classList.remove('active');
            cardScreen.classList.add('active');
            loadCardData();
        }
    }

    function loadCardData() {
        const saved = localStorage.getItem('savedCard');
        if (saved && cardNumberInput && cardDateInput) {
            const data = JSON.parse(saved);
            cardNumberInput.value = data.number || '';
            cardDateInput.value = data.date || '';
            cardCvcInput.value = '';
        }
    }

    function closeMonetizationOverlay() {
        if (monetizationOverlay) {
            monetizationOverlay.classList.remove('active');
            const monetization = monetizationOverlay.querySelector('.monetization');
            if (monetization) monetization.classList.remove('active');
            setTimeout(() => {
                monetizationOverlay.style.display = 'none';
            }, 400);
        }
    }

    // ========== НАСТРОЙКИ ПРОФИЛЯ ==========
    const profileOverlay = document.getElementById('profileOverlay');
    const settingsBtn = document.getElementById('settings');
    const profileNazadBtn = document.getElementById('profileNazad');
    const saveProfileBtn = document.getElementById('saveProfileBtn');
    const changePassBtn = document.getElementById('changePassBtn');
    const saveDataBtn = document.getElementById('saveDataBtn');

    const nickInput = document.getElementById('nickInput');
    const usernameInput = document.getElementById('usernameInput');
    const descInput = document.getElementById('descInput');
    const emailInput = document.getElementById('emailInput');
    const passwordInput = document.getElementById('passwordInput');

    // Открытие настроек профиля
    if (settingsBtn && profileOverlay) {
        settingsBtn.addEventListener('click', () => {
            closeMonetizationOverlay();
            profileOverlay.style.display = 'flex';
            setTimeout(() => {
                profileOverlay.classList.add('active');
                profileOverlay.querySelector('.profile_settings').classList.add('active');
            }, 10);
            loadProfileData();
        });
    }

    // Закрытие настроек профиля
    if (profileNazadBtn && profileOverlay) {
        profileNazadBtn.addEventListener('click', closeProfileOverlay);
    }

    if (profileOverlay) {
        profileOverlay.addEventListener('click', (e) => {
            if (e.target === profileOverlay) closeProfileOverlay();
        });
    }

    // Сохранение профиля
    if (saveProfileBtn) {
        saveProfileBtn.addEventListener('click', () => {
            const profileData = {
                nick: nickInput.value,
                username: usernameInput.value,
                desc: descInput.value
            };
            localStorage.setItem('profileData', JSON.stringify(profileData));
            updateProfileCard();
            alert('Профиль сохранён!');
        });
    }

    // Смена пароля
    if (changePassBtn) {
        changePassBtn.addEventListener('click', () => {
            const newPass = passwordInput.value;
            if (!newPass) {
                alert('Введите новый пароль');
                return;
            }
            localStorage.setItem('userPassword', newPass);
            passwordInput.value = '';
            alert('Пароль изменён!');
        });
    }

    // Сохранение персональных данных
    if (saveDataBtn) {
        saveDataBtn.addEventListener('click', () => {
            const personalData = {
                email: emailInput.value
            };
            localStorage.setItem('personalData', JSON.stringify(personalData));
            alert('Данные сохранены!');
        });
    }

    function loadProfileData() {
        const profile = localStorage.getItem('profileData');
        if (profile && nickInput && usernameInput && descInput) {
            const data = JSON.parse(profile);
            nickInput.value = data.nick || '';
            usernameInput.value = data.username || '';
            descInput.value = data.desc || '';
        }

        const personal = localStorage.getItem('personalData');
        if (personal && emailInput) {
            const data = JSON.parse(personal);
            emailInput.value = data.email || '';
        }
    }

    function updateProfileCard() {
        const profile = localStorage.getItem('profileData');
        if (profile) {
            const data = JSON.parse(profile);
            const nickEl = document.getElementById('nick');
            const usernameEl = document.getElementById('username');
            const descEl = document.getElementById('descp');

            if (nickEl) nickEl.textContent = data.nick || 'Nickname';
            if (usernameEl) usernameEl.textContent = data.username ? '@' + data.username : '@username';
            if (descEl) descEl.textContent = data.desc || 'Lorem ipsum dolor sit amet consectetur.';
        }
    }

    function closeProfileOverlay() {
        if (profileOverlay) {
            profileOverlay.classList.remove('active');
            const profileSettings = profileOverlay.querySelector('.profile_settings');
            if (profileSettings) profileSettings.classList.remove('active');
            setTimeout(() => {
                profileOverlay.style.display = 'none';
            }, 400);
        }
    }

});