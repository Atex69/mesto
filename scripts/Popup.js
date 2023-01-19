export default class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector)
        this._handleEscClose = this._handleEscClose.bind(this)
    }
    openPopup() {
        popup.classList.add('popup_opened');
        document.addEventListener('keydown', keyHandler);
        popup.addEventListener('mousedown', this._handleEscClose);
    }

    closePopup() {
        this.classList.remove('popup_opened');
        document.removeEventListener('keydown', keyHandler);
        this.removeEventListener('mousedown', this._handleEscClose);
    }
    _handleEscClose(e) {
        if (e.key === 'Escape') {
            this.closePopup()
        }
    }


}