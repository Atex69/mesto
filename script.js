let editButton = document.querySelector('.profile__info-editButton');
let popup = document.querySelector('.popup');
let popupCloseButton = document.querySelector('.popup__close');
let formElement = document.querySelector('.popup__form'); // Воспользуйтесь методом querySelector()
let nameInput = document.querySelector('.popup__input_name')// Воспользуйтесь инструментом .querySelector()
let jobInput = document.querySelector('.popup__input_description')
let titleProfile = document.querySelector('.profile__info-title')
let subtittleProfile = document.querySelector('.profile__info-subtitle')// Воспользуйтесь инструментом .querySelector()

function popupOpen() {
    popup.classList.add('popup_opened');
}

function popupClose() {
    popup.classList.remove('popup_opened');
}

function formSubmitHandler(evt) {
    evt.preventDefault();
    titleProfile.textContent = nameInput.value;
    subtittleProfile.textContent = jobInput.value;
    popupClose();
}

formElement.addEventListener('submit', formSubmitHandler);
editButton.addEventListener('click', popupOpen);
popupCloseButton.addEventListener('click', popupClose);
