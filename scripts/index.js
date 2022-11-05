let editButton = document.querySelector('.profile__info-edit-button');
let popup = document.querySelector('.popup');
let popupCloseButton = document.querySelector('.popup__close');
let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__item_type_name');
let jobInput = document.querySelector('.popup__item_type_description');
let titleProfile = document.querySelector('.profile__info-title');
let subtitleProfile = document.querySelector('.profile__info-subtitle');

function popupOpen() {
    popup.classList.add('popup_opened');
    nameInput.value = titleProfile.textContent;
    jobInput.value= subtitleProfile.textContent;
}

function popupClose() {
    popup.classList.remove('popup_opened');
}

function formSubmitHandler(evt) {
    evt.preventDefault();
    titleProfile.textContent = nameInput.value;
    subtitleProfile.textContent = jobInput.value;
    popupClose();
}

formElement.addEventListener('submit', formSubmitHandler);
editButton.addEventListener('click', popupOpen);
popupCloseButton.addEventListener('click', popupClose);
