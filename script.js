let editButton = document.querySelector('.profile__info-editButton');
let popup =  document.querySelector('.popup');
let popupCloseButton =  document.querySelector('.popup__close');
let form = document.querySelector('.popup__form');



function popupOpen() {
    popup.classList.add('popup_opened');
}

function popupClose() {
    popup.classList.remove('popup_opened');
}


editButton.addEventListener('click', popupOpen);
popupCloseButton.addEventListener('click', popupClose);
