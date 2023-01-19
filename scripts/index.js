import FormValidator from "../scripts/FormValidator.js";
import {formParameters, initialCards} from "../scripts/cards.js";
import Card from "../scripts/Card.js";

function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', keyHandler);
    popup.addEventListener('mousedown', outsideClickHandler);
}

function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', keyHandler);
    popup.removeEventListener('mousedown', outsideClickHandler);
}

function keyHandler(evt) {
    if (evt.key === 'Escape') {
        const popup = document.querySelector('.popup_opened');
        closePopup(popup);
    }
}

const outsideClickHandler = (e) => {
    if (e.target.classList.contains('popup_opened')) {
        closePopup(e.target);
    }
};

//редактирование профиля
const popupUserQuerySelector = '.popup_type_user';
const popupUser = document.querySelector(popupUserQuerySelector);
const popupCloseButtonUser = document.querySelector('.popup__close_type_user');
const titleProfile = document.querySelector('.profile__info-title');
const subtitleProfile = document.querySelector('.profile__info-subtitle');
const userFormValidator = new FormValidator(formParameters, popupUser);
userFormValidator.enableValidation();


function handleProfileFormSubmit(evt) {
    evt.preventDefault();
    titleProfile.textContent = nameInput.value;
    subtitleProfile.textContent = jobInput.value;
    closePopup(popupUser);
}

const formElementUser = document.querySelector('.popup__form_type_user');
formElementUser.addEventListener('submit', handleProfileFormSubmit);

const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_description');
formElementUser.querySelector(".popup__submit_type_user");
function openPopupProfile() {
    openPopup(popupUser);
    nameInput.value = titleProfile.textContent;
    jobInput.value = subtitleProfile.textContent;
    userFormValidator.toggleButtonState();
}

const closePopupProfile = () => closePopup(popupUser);

const buttonEditProfile = document.querySelector('.profile__info-edit-button');
const buttonOpenCardPopup = document.querySelector('.profile__add-button');
buttonEditProfile.addEventListener('click', openPopupProfile);
buttonOpenCardPopup.addEventListener('click', openPopupPlace);
popupCloseButtonUser.addEventListener('click', closePopupProfile);

//редактирование фотографий
const popupPlaceQuerySelector = '.popup_type_place';
const popupPlace = document.querySelector(popupPlaceQuerySelector);
const popupCloseButtonPlace = document.querySelector('.popup__close_type_place');
const placeTitleInput = document.querySelector('.popup__input_type_title');
const placeLinkInput = document.querySelector('.popup__input_type_link');
const placeFormValidator = new FormValidator(formParameters, popupPlace);
placeFormValidator.enableValidation();


const closePopupPlace = () => closePopup(popupPlace);

popupCloseButtonPlace.addEventListener('click', closePopupPlace);

function handlePlaceFormSubmit(evt) {
    evt.preventDefault();
    createCard({"name": placeTitleInput.value, "link": placeLinkInput.value});
    closePopupPlace();
}

const formElementPlace = document.querySelector('.popup__form_type_place');
formElementPlace.addEventListener('submit', handlePlaceFormSubmit);
formElementPlace.querySelector(".popup__submit_type_place");
function openPopupPlace() {
    openPopup(popupPlace);
    formElementPlace.reset();
    placeFormValidator.toggleButtonState();
}



//открытие попапа фото
const popupImageQuerySelector = '.popup_type_image';
const popupImage = document.querySelector(popupImageQuerySelector);
const popupImageCaption = document.querySelector(".popup__caption");
const popupCloseButtonImage = document.querySelector('.popup__close_type_image');
const popupImageElement = document.querySelector('.popup__image');

const closePopupImage = () => closePopup(popupImage);

const openPopupImage = (cardData) => {
    popupImageElement.src = cardData.link;
    popupImageCaption.textContent = cardData.name;
    popupImageElement.alt = cardData.name;
    openPopup(popupImage);
}

popupCloseButtonImage.addEventListener('click', closePopupImage);

//загрузка карточек
const cardsContainer = document.querySelector('.elements__container');

const createCard = (item) => {
    const card = new Card(item, openPopupImage,'.card-template')
    const rendered = card.render();
    cardsContainer.prepend(rendered);
}
function renderInitialCards() {
    initialCards.forEach(item => createCard(item));
}


renderInitialCards()
