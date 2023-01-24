import Section from "../components/Section.js";
import Card from "../components/Card.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import  FormValidator  from "../components/FormValidator.js";
import {formParameters, initialCards} from "../components/const.js";
import {
    buttonEditProfile,
    buttonOpenCardPopup, cardsContainer,
    formElementPlace,
    formElementUser,
    jobInput,
    nameInput,
    popupCloseButtonImage,
    popupCloseButtonPlace,
    popupCloseButtonUser,
    popupImage,
    popupImageCaption,
    popupImageElement,
    popupPlace,
    popupUser,
    subtitleProfile,
    titleProfile,
} from "../utils/const.js";

import "../pages/index.css";


function handleProfileFormSubmit(evt) {
    evt.preventDefault();
    titleProfile.textContent = nameInput.value;
    subtitleProfile.textContent = jobInput.value;
    closePopup(popupUser);
}



function openPopupProfile() {
    openPopup(popupUser);
    nameInput.value = titleProfile.textContent;
    jobInput.value = subtitleProfile.textContent;
    userFormValidator.toggleButtonState();
}

const placeFormValidator = new FormValidator(formParameters, popupPlace);
formElementUser.querySelector(".popup__submit_type_user");
formElementUser.addEventListener('submit', handleProfileFormSubmit);
buttonEditProfile.addEventListener('click', openPopupProfile);
buttonOpenCardPopup.addEventListener('click', openPopupPlace);
popupCloseButtonUser.addEventListener('click', closePopupProfile);

//редактирование фотографий

placeFormValidator.enableValidation();


const closePopupPlace = () => closePopup(popupPlace);

popupCloseButtonPlace.addEventListener('click', closePopupPlace);

function handlePlaceFormSubmit(evt) {
    evt.preventDefault();
    createCard({"name": placeTitleInput.value, "link": placeLinkInput.value});
    closePopupPlace();
}

const closePopupProfile = () => closePopup(popupUser);
formElementPlace.addEventListener('submit', handlePlaceFormSubmit);
formElementPlace.querySelector(".popup__submit_type_place");
function openPopupPlace() {
    openPopup(popupPlace);
    formElementPlace.reset();
    placeFormValidator.toggleButtonState();
}

const closePopupImage = () => closePopup(popupImage);
const userFormValidator = new FormValidator(formParameters, popupUser);

userFormValidator.enableValidation();

//открытие попапа фото

const outsideClickHandler = (e) => {
    if (e.target.classList.contains('popup_opened')) {
        closePopup(e.target);
    }
};
popupCloseButtonImage.addEventListener('click', closePopupImage);

//загрузка карточек
const openPopupImage = (cardData) => {
    popupImageElement.src = cardData.link;
    popupImageCaption.textContent = cardData.name;
    popupImageElement.alt = cardData.name;
    openPopup(popupImage);
}

const createCard = (item) => {
    const card = new Card(item, openPopupImage,'.card-template')
    const rendered = card.render();
    console.log(rendered)
    cardsContainer.prepend(rendered);
}
function renderInitialCards() {
    initialCards.forEach(item => createCard(item));
}


renderInitialCards()