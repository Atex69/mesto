import Popup from './Popup.js'

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._popupImage = this._popup.querySelector('.popup__image')
        this._popupCaption = this._popup.querySelector('.popup__caption')
    }
    openPopup(values) {
        super.openPopup();
        this._popupImage.alt = values.name;
        this._popupImage.src = values.link;
        this._popupCaption.textContent = values.name;

    }
}