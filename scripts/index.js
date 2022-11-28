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
    openPopup(popupUser);
    nameInput.value = titleProfile.textContent;
    jobInput.value = subtitleProfile.textContent;
    profileSubmitButton.classList.add('popup__submit_disabled');
    profileSubmitButton.setAttribute("disabled", "disabled");
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


const closePopupPlace = () => closePopup(popupPlace);

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
    openPopup(popupPlace);
    formElementPlace.reset();
    placeSubmitButton.classList.add('popup__submit_disabled');
    placeSubmitButton.setAttribute("disabled", "disabled");
}


//открытие попапа фото
const popupImageQuerySelector = '.popup_type_image';
const popupImage = document.querySelector(popupImageQuerySelector);
const popupImageCaption = document.querySelector(".popup__caption");
const popupCloseButtonImage = document.querySelector('.popup__close_type_image');
const popupImageElement = document.querySelector('.popup__image');

const closePopupImage = () => closePopup(popupImage);

function openPopupImage(cardData) {
    popupImageElement.src = cardData.link;
    popupImageCaption.textContent = cardData.name;
    popupImageElement.alt = cardData.name;
    openPopup(popupImage);
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
    image.alt = cardData.name;
    image.src = cardData.link;
    image.addEventListener('click', () => openPopupImage(cardData))
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
