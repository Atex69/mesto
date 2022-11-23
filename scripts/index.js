function openPopup(item) {
    item.classList.add('popup_opened');
}

function closePopup(item) {
    item.classList.remove('popup_opened');
}

//редактирование профиля
const popupUser = document.querySelector('.popup_type_user');
const popupCloseButtonUser = document.querySelector('.popup__close_type_user');
const titleProfile = document.querySelector('.profile__info-title');
const subtitleProfile = document.querySelector('.profile__info-subtitle');

function handleFormSubmit(evt) {
    evt.preventDefault();
    titleProfile.textContent = nameInput.value;
    subtitleProfile.textContent = jobInput.value;
    closePopup(popupUser);
}
const formElementUser = document.querySelector('.popup__form_type_user');
formElementUser.addEventListener('submit', handleFormSubmit);

const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_description');

function openPopupProfile() {
    openPopup(popupUser);
    nameInput.value = titleProfile.textContent;
    jobInput.value = subtitleProfile.textContent;
}

function closePopupProfile() {
    closePopup(popupUser);
}

const buttonEditProfile = document.querySelector('.profile__info-edit-button');
const buttonSaveProfile = document.querySelector('.profile__add-button');
buttonEditProfile.addEventListener('click', openPopupProfile);
buttonSaveProfile.addEventListener('click', openPopupPlace);
popupCloseButtonUser.addEventListener('click', closePopupProfile);

//редактирование фотографий
const popupPlace = document.querySelector('.popup_type_place');
const popupCloseButtonPlace = document.querySelector('.popup__close_type_place');
const placeTitleInput = document.querySelector('.popup__input_type_title');
const placeLinkInput = document.querySelector('.popup__input_type_link');

popupCloseButtonPlace.addEventListener('click', closePopupPlace);

function closePopupPlace() {
    closePopup(popupPlace);
}

function handlePlaceFormPlace(evt) {
    evt.preventDefault();
    let newCard = createCard({"name":placeTitleInput.value , "link":placeLinkInput.value });
    cardsContainer.prepend(newCard);
    closePopupPlace();
}

const formElementPlace = document.querySelector('.popup__form_type_place');
formElementPlace.addEventListener('submit', handlePlaceFormPlace);

function openPopupPlace() {
    openPopup(popupPlace);
    formElementPlace.reset();

}

//открытие попапа фото
const popupImage = document.querySelector('.popup_type_image');
const popupCloseButtonImage = document.querySelector('.popup__close_type_image');

function closePopupImage() {
    closePopup(popupImage);
}

const popupImageElement = document.querySelector('.popup__image');

function openPopupImage(evt) {
    popupImageElement.src = evt.currentTarget.closest('.element__image').src
    popupImageElement.alt = evt.currentTarget.closest('.element__image').alt
    document.querySelector('.popup__caption').textContent = evt.currentTarget.closest('.element__image').alt
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
const template = document.querySelector('.card-template');

function createCard(item) {
    const cardTemplate = template.content.querySelector('.element').cloneNode(true);
    cardTemplate.querySelector('.element__title').textContent = item.name;
    const image = cardTemplate.querySelector('.element__image');
    image.alt = item.name
    image.src = item.link;
    image.addEventListener('click', openPopupImage)
    cardTemplate.querySelector('.element__like').addEventListener('click', handleLikeClick)
    cardTemplate.querySelector('.element__delete-card').addEventListener('click', deleteCard)
    return cardTemplate;
}

function renderInitialCards() {
    initialCards.forEach(item =>{
        let newCard = createCard(item);
        cardsContainer.prepend(newCard) });
}

renderInitialCards()
