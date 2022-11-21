let editButton = document.querySelector('.profile__info-edit-button');
let popup = document.querySelector('.popup');
let popupCloseButton = document.querySelector('.popup__close');
let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__input_type_name');
let jobInput = document.querySelector('.popup__input_type_description');
let titleProfile = document.querySelector('.profile__info-title');
let subtitleProfile = document.querySelector('.profile__info-subtitle');

const cardsContainer = document.querySelector('.elements__container')
const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Сочи',
        link: 'https://images.unsplash.com/photo-1668889495576-bbd35db21a66?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];
function createCard(name, link) {
    const cardTemplate = document.querySelector('.card-template').content.querySelector('.element').cloneNode(true)
    cardTemplate.querySelector('.element__title').textContent = name;
    cardTemplate.querySelector('.element__image').src = link;
    cardsContainer.prepend(cardTemplate);
}

function renderInitialCards() {
    initialCards.forEach(item => createCard(item.name, item.link));
}
renderInitialCards()

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
