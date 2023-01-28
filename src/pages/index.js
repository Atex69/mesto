import Card from "../components/Card.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import FormValidator from "../components/FormValidator.js";
import {
    buttonEditProfile,
    buttonOpenCardPopup,
    formParameters,
    initialCards,
    popupImageQuerySelector,
    popupPlace,
    popupAvatar,
    popupPlaceQuerySelector,
    popupAvatarQuerySelector,
    popupDeleteQuerySelector,
    popupUser,
    buttonOpenAvatarUpdateForm,
    popupUserQuerySelector
} from "../utils/const.js";

import "./index.css";
import Api from "../components/Api";
import PopupWithConfirmation from "../components/PopupWithConfirmation";

const apiData = {
    url: "https://nomoreparties.co/v1/cohort-57/",
    headers: {
        authorization: "ad54961e-3f85-45c8-ba7a-70af841df2af",
        "Content-Type": "application/json",
    },
};
let id;
const api = new Api(apiData);

Promise
    .all([api.getUserData(), api.getInitialCards()])
    .then(([userData, cards]) => {
        id = userData._id;
        userInfo.setUserInfo({
            profileName: userData.name,
            profileInfo: userData.about,
        });
        userInfo.setAvatar(userData.avatar)
        cardsSection.renderItems(cards.reverse())
    })
    .catch(err => { console.log(`ошибка загрузки данных для инициализации: ${err}`) });

const userInfo = new UserInfo({
    nameSelector: ".profile__info-title",
    infoSelector: ".profile__info-subtitle",
    avatarSelector: ".profile__avatar",
});

function handleProfileFormSubmit(inputValues) {
    userPopup.setSubmitButtonSaveText();
    api.saveUserData(inputValues)
        .then((res) => {
            userInfo.setUserInfo({
                profileName: res.name,
                profileInfo: res.about
            });
            userPopup.close();
        })
        .catch((err) => {
            console.log(`Возникла ошибка: ${err}`)
        })
        .finally(() => userPopup.resetSubmitButtonText())
}

const userPopup = new PopupWithForm(
    popupUserQuerySelector,
    handleProfileFormSubmit
);
userPopup.setEventListeners();

const userFormValidator = new FormValidator(formParameters, popupUser);
userFormValidator.enableValidation();

const handleAvatarSave = inputValues => {
    avatarPopup.setSubmitButtonSaveText();
    api
        .sendAvatar({avatar: inputValues.avatar})
        .then((res) => {
            userInfo.setAvatar(res.avatar);
            avatarPopup.close();
        })
        .catch((err) => {
            console.log(`возникла ошибка: ${err}`)
        })
        .finally(() => avatarPopup.resetSubmitButtonText())
}
const avatarPopup = new PopupWithForm(
    popupAvatarQuerySelector,
    handleAvatarSave
);
avatarPopup.setEventListeners();
const avatarFormValidator = new FormValidator(formParameters, popupAvatar);
avatarFormValidator.enableValidation();

function openPopupProfile() {
    userFormValidator.reset();
    const info = userInfo.getUserInfo();
    userPopup.open(info.profileName, info.profileInfo);
}

const placeAddPopup = new PopupWithForm(
    popupPlaceQuerySelector,
    handlePlaceFormSubmit
);
placeAddPopup.setEventListeners();

const placeFormValidator = new FormValidator(formParameters, popupPlace);
placeFormValidator.enableValidation();

function handlePlaceFormSubmit(inputs) {
    placeAddPopup.setSubmitButtonSaveText();
    api.addNewCard({name: inputs.place, link: inputs.link})
        .then((card) => {
            const cardRendered = createCard(card);
            cardsSection.addItem(cardRendered);
            placeAddPopup.close();
        })
        .catch((err) => {
            console.log(`При добавлении новой карточки возникла ошибка: ${err}`)
        })
        .finally(() => placeAddPopup.resetSubmitButtonText())
}

const handleDelete = (cardElement, cardId) => {
    api.deleteCard(cardId)
        .then(() => {
            cardElement.deleteCard();
            popupDelete.close();
        })
        .catch((err) => {
            console.log(`При удалении карточки возникла ошибка: ${err}`)
        })
}

const popupDelete = new PopupWithConfirmation(popupDeleteQuerySelector, handleDelete);
popupDelete.setEventListeners();

function openPopupPlace() {
    placeAddPopup.open();
    placeFormValidator.reset();
}

const popupWithImage = new PopupWithImage(popupImageQuerySelector);
popupWithImage.setEventListeners();

const createCard = (item) => {
    const authorData = {cardId: item._id, authorId: item.owner._id};
    const card = new Card(item, ".card-template", id, authorData, {
        handleOpenPopupImage: data => {
            popupWithImage.open(data)
        },
        handleDelete: (cardElement, cardId) => {
            popupDelete.open(cardElement, cardId)
        },
        handleLike: (cardId) => {
            api.addLike(cardId)
                .then(res => card.renderLike(res))
                .catch(err => console.log(`возникла ошибка при лайке: ${err}`))
        },
        handleCardDeleteLike: cardId => {
            api.deleteLike(cardId)
                .then(res => card.renderLike(res))
                .catch(err => console.log(`возникла ошибка при дизлайке: ${err}`))
        },
    });
    return card.render();
};
const cardsSection = new Section(
    {
        items: initialCards,
        renderer: (item) => {
            const card = createCard(item);
            cardsSection.addItem(card);
        },
    },
    ".elements__container"
);

buttonEditProfile.addEventListener("click", openPopupProfile);
buttonOpenCardPopup.addEventListener("click", openPopupPlace);
buttonOpenAvatarUpdateForm.addEventListener('click', () => {
    avatarFormValidator.reset();
    avatarPopup.open()
});