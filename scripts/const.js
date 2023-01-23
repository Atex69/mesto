import FormValidator from  '../scripts/formValidator.js';
import {formParameters} from "../scripts/cards.js";
const formElementPlace = document.querySelector('.popup__form_type_place');
const popupUserQuerySelector = '.popup_type_user';
const popupUser = document.querySelector(popupUserQuerySelector);
const popupCloseButtonUser = document.querySelector('.popup__close_type_user');
const titleProfile = document.querySelector('.profile__info-title');
const subtitleProfile = document.querySelector('.profile__info-subtitle');
const formElementUser = document.querySelector('.popup__form_type_user');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_description');
const buttonEditProfile = document.querySelector('.profile__info-edit-button');
const buttonOpenCardPopup = document.querySelector('.profile__add-button');
const popupPlaceQuerySelector = '.popup_type_place';
const popupPlace = document.querySelector(popupPlaceQuerySelector);
const popupCloseButtonPlace = document.querySelector('.popup__close_type_place');
const placeTitleInput = document.querySelector('.popup__input_type_title');
const placeLinkInput = document.querySelector('.popup__input_type_link');
const popupImageQuerySelector = '.popup_type_image';
const popupImage = document.querySelector(popupImageQuerySelector);
const popupImageCaption = document.querySelector(".popup__caption");
const popupCloseButtonImage = document.querySelector('.popup__close_type_image');
const popupImageElement = document.querySelector('.popup__image');
const cardsContainer = document.querySelector('.elements__container');
export {
    formElementPlace,
    popupUserQuerySelector,
    popupUser,
    popupCloseButtonUser,
    titleProfile,
    subtitleProfile,
    formElementUser,
    nameInput,
    jobInput,
    buttonEditProfile,
    buttonOpenCardPopup,
    popupPlaceQuerySelector,
    popupPlace,
    popupCloseButtonPlace,
    placeTitleInput,
    placeLinkInput,
    popupImageQuerySelector,
    popupImage,
    popupImageCaption,
    popupCloseButtonImage,
    popupImageElement,
    cardsContainer,
};