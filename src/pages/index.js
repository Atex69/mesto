import Card from "../components/Card.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import FormValidator from "../components/FormValidator.js";
import {formParameters, initialCards} from "../utils/const.js";
import {
    popupUserQuerySelector,
    popupPlaceQuerySelector,
    popupImageQuerySelector,
    buttonEditProfile,
    buttonOpenCardPopup,
    cardsContainer,
    formElementPlace,
    popupPlace,
    popupUser
} from "../utils/const.js";

import "./index.css";

const userInfo = new UserInfo({
    nameSelector: ".profile__info-title",
    infoSelector: ".profile__info-subtitle",
});
const userPopup = new PopupWithForm(popupUserQuerySelector, handleProfileFormSubmit);
userPopup.setEventListeners();
const userFormValidator = new FormValidator(formParameters, popupUser);
userFormValidator.enableValidation();
function handleProfileFormSubmit(inputValues) {
    userInfo.setUserInfo({profileName: inputValues.name, profileInfo: inputValues.description})
}
function openPopupProfile() {
    const info = userInfo.getUserInfo();
    userPopup.openPopup(info.profileName, info.profileInfo);
}

const placeAddPopup = new PopupWithForm(popupPlaceQuerySelector, handlePlaceFormSubmit);
placeAddPopup.setEventListeners();

const placeFormValidator = new FormValidator(formParameters, popupPlace);
placeFormValidator.enableValidation();

//редактирование фотографий
function handlePlaceFormSubmit(inputs) {
    createCard({"name": inputs.place, "link": inputs.link});
    placeAddPopup.closePopup();
}

function openPopupPlace() {
    placeAddPopup.openPopup();
    formElementPlace.reset();
    placeFormValidator.toggleButtonState();
}


let popupWithImage = new PopupWithImage(popupImageQuerySelector);
popupWithImage.setEventListeners();

//загрузка карточек
const openPopupImage = (cardData) => {
    popupWithImage.openPopup(cardData);
}

const createCard = (item) => {
    const card = new Card(item, openPopupImage, '.card-template')
    const rendered = card.render();
    cardsContainer.prepend(rendered);
}

buttonEditProfile.addEventListener('click', openPopupProfile);
buttonOpenCardPopup.addEventListener('click', openPopupPlace);
function renderInitialCards() {
    initialCards.forEach(item => createCard(item));
}

renderInitialCards()
