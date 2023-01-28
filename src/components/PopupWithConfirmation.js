import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
    constructor(selector, callback) {
        super(selector);
        this._submitButton = this._popup.querySelector('.popup__form');
        this._callback = callback;
    }
    open(card, cardId) {
        this._card = card;
        this._cardId = cardId;
        super.open();
    }

    setEventListeners() {
        this._submitButton.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._callback(this._card, this._cardId)
        })
        super.setEventListeners();
    }
}