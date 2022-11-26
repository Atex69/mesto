function openPopup(popup, closeFunc) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', evt => keyHandler(evt, closeFunc));
    document.addEventListener("mousedown", evt => outsideClickHandler(evt, popup, closeFunc));
}

function closePopup(popup, closeFunc) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', evt => keyHandler(evt, closeFunc));
    document.removeEventListener("mousedown", evt => outsideClickHandler(evt, popup, closeFunc));
}

function keyHandler(evt, closeFunc) {
    if (evt.key === 'Escape') {
        closeFunc()
    }
}

const outsideClickHandler = (e, popup, closeFunc) => {
    const isClosest = e.target.closest(".popup__container");
    if (!isClosest && popup.classList.contains("popup_opened")) {
        closeFunc();
    }
};


//редактирование профиля
const popupUserQuerySelector = '.popup_type_user';
const popupUser = document.querySelector(popupUserQuerySelector);
const popupCloseButtonUser = document.querySelector('.popup__close_type_user');
const titleProfile = document.querySelector('.profile__info-title');
const subtitleProfile = document.querySelector('.profile__info-subtitle');

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
const profileSubmitButton = formElementUser.querySelector(".popup__submit_type_user");

function openPopupProfile() {
    openPopup(popupUser, closePopupProfile);
    nameInput.value = titleProfile.textContent;
    jobInput.value = subtitleProfile.textContent;
    profileSubmitButton.classList.add('popup__submit_disabled');
    profileSubmitButton.setAttribute("disabled", "disabled");
}

const closePopupProfile = () => closePopup(popupUser, closePopupProfile);

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


const closePopupPlace = () => closePopup(popupPlace, closePopupPlace);

popupCloseButtonPlace.addEventListener('click', closePopupPlace);

function handlePlaceFormSubmit(evt) {
    evt.preventDefault();
    const newCard = createCard({"name": placeTitleInput.value, "link": placeLinkInput.value});
    cardsContainer.prepend(newCard);
    closePopupPlace();
}

const formElementPlace = document.querySelector('.popup__form_type_place');
formElementPlace.addEventListener('submit', handlePlaceFormSubmit);
const placeSubmitButton = formElementPlace.querySelector(".popup__submit_type_place");

function openPopupPlace() {
    openPopup(popupPlace, closePopupPlace);
    formElementPlace.reset();
    placeSubmitButton.classList.add('popup__submit_disabled');
    placeSubmitButton.setAttribute("disabled", "disabled");
}


//открытие попапа фото
const popupImageQuerySelector = '.popup_type_image';
const popupImage = document.querySelector(popupImageQuerySelector);
const popupCloseButtonImage = document.querySelector('.popup__close_type_image');

const closePopupImage = () => closePopup(popupImage, closePopupImage);

const popupImageElement = document.querySelector('.popup__image');

function openPopupImage(evt) {
    popupImageElement.src = evt.currentTarget.closest('.element__image').src
    document.querySelector('.popup__caption').textContent = evt.currentTarget.closest('.element__image').alt
    openPopup(popupImage, closePopupImage);
}

popupCloseButtonImage.addEventListener('click', closePopupImage);


function handleLikeClick(event) {
    event.target.classList.toggle('element__like_active')
}

function deleteCard(event) {
    event.currentTarget.closest('.element').remove()
}

//загрузка карточек
const cardsContainer = document.querySelector('.elements__container');
const template = document.querySelector('.card-template').content.querySelector('.element');

function createCard(cardData) {
    const cardTemplate = template.cloneNode(true);
    cardTemplate.querySelector('.element__title').textContent = cardData.name;
    const image = cardTemplate.querySelector('.element__image');
    image.alt = cardData.name
    image.src = cardData.link;
    image.addEventListener('click', openPopupImage)
    cardTemplate.querySelector('.element__like').addEventListener('click', handleLikeClick)
    cardTemplate.querySelector('.element__delete-card').addEventListener('click', deleteCard)
    return cardTemplate;
}

function renderInitialCards() {
    initialCards.forEach(item => {
        const newCard = createCard(item);
        cardsContainer.prepend(newCard)
    });
}

renderInitialCards()
