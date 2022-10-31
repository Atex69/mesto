let editButton = document.querySelector('.profile__info-editButton');
let addButton = document.querySelector('.profile__addButton');
let like = document.querySelector('.element__like');
let popup =  document.querySelector('.popup');
let popupCloseButton =  document.querySelector('.popup__close');


function popupOpen() {
    popup.classList.add('popup_opened');
}

function popupClose() {
    popup.classList.remove('popup_opened');
}

function likeRender() {
    if(document.querySelector("element__description").classList.hasClass("element__like_active")){
        like.classList.remove('element__like_active');
    } else {
        like.classList.add('element__like_active');
    }

}
like.addEventListener('click', likeRender);
editButton.addEventListener('click', popupOpen);
popupCloseButton.addEventListener('click', popupClose);
