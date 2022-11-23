const editButton = document.querySelector('.profile__info-edit-button');
const popup = document.querySelector('.popup');
const popupCloseButton = document.querySelector('.popup__close');
const formElement = document.querySelector('.popup__form');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_description');
const titleProfile = document.querySelector('.profile__info-title');
const subtitleProfile = document.querySelector('.profile__info-subtitle');
const cardsContainer = document.querySelector('.elements__container');
const addButton = document.querySelector('.profile__add-button');
const formElementPlace = document.querySelector('.popup__form_type_place');
const popupPlace = document.querySelector('.popup_type_place');
const popupImage = document.querySelector('.popup_type_image');
const popupCloseButtonPlace = document.querySelector('.popup__close_type_place');
const popupCloseButtonImage = document.querySelector('.popup__close_type_image');
const placeTitleInput = document.querySelector('.popup__input_type_title');
const placeLinkInput = document.querySelector('.popup__input_type_link');
const cardImage = document.querySelector('.element__image')
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
    cardTemplate.querySelector('.element__like').addEventListener('click', pushLike)
    cardTemplate.querySelector('.element__delete-card').addEventListener('click', cardDelete)
    cardTemplate.querySelector('.element__image').addEventListener('click', popupOpenImage)
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

function popupOpenPlace() {
    popupPlace.classList.add('popup_opened');
    placeTitleInput.value = '';
    placeLinkInput.value= '';
}

function popupClosePlace() {
    popupPlace.classList.remove('popup_opened');
}
function popupOpenImage(evt) {
    document.querySelector('.popup__image').src = evt.currentTarget.closest('.element__image').src
    document.querySelector('.popup__caption').textContent = evt.currentTarget.closest('.element__image').alt
    document.querySelector('.popup__image').alt = evt.currentTarget.closest('.element__image').alt
    popupImage.classList.add('popup_opened');
}



function popupCloseImage() {
    popupImage.classList.remove('popup_opened');
}


function formSubmitHandler(evt) {
    evt.preventDefault();
    titleProfile.textContent = nameInput.value;
    subtitleProfile.textContent = jobInput.value;
    popupClose();
}
function formSubmitHandlerPlace(evt) {
    evt.preventDefault();
    createCard(placeTitleInput.value, placeLinkInput.value);
    popupClosePlace();
}

function pushLike(event) {
    event.target.classList.toggle('element__like_active')
}

function cardDelete(event) {
    event.currentTarget.closest('.element').remove()
}



formElement.addEventListener('submit', formSubmitHandler);
formElementPlace.addEventListener('submit', formSubmitHandlerPlace);
editButton.addEventListener('click', popupOpen);
addButton.addEventListener('click', popupOpenPlace);
popupCloseButton.addEventListener('click', popupClose);
popupCloseButtonPlace.addEventListener('click', popupClosePlace);
popupCloseButtonImage.addEventListener('click', popupCloseImage);

