let editButton = document.querySelector('.profile__info-editButton');
let popup =  document.querySelector('.popup');
let popupCloseButton =  document.querySelector('.popup__close');
let form = document.querySelector('.popup__form');



function popupOpen() {
    popup.classList.add('popup_opened');
}

function popupClose() {
    popup.classList.remove('popup_opened');
}

// Находим форму в DOM
let formElement = document.querySelector('.popup__form'); // Воспользуйтесь методом querySelector()
// Находим поля формы в DOM
let nameInput =  document.querySelector('.popup__input_name')// Воспользуйтесь инструментом .querySelector()
let jobInput = document.querySelector('.popup__input_description')
let buttonSave = document.querySelector('.popup__submit')
let titleProfile = document.querySelector('.profile__info-title')
let subtittleProfile = document.querySelector('.profile__info-subtitle')// Воспользуйтесь инструментом .querySelector()

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
    function formSubmitHandler (evt) {
        evt.preventDefault();
        titleProfile.textContent = nameInput.value;
        subtittleProfile.textContent = jobInput.value;// Эта строчка отменяет стандартную отправку формы.
        // Так мы можем определить свою логику отправки.
        // О том, как это делать, расскажем позже.

        // Получите значение полей jobInput и nameInput из свойства value

        // Выберите элементы, куда должны быть вставлены значения полей
        popupClose();
        // Вставьте новые значения с помощью textContent
    }
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);
editButton.addEventListener('click', popupOpen);
popupCloseButton.addEventListener('click', popupClose);
