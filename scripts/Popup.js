export default class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector)
    }
    openPopup() {
        this._popup.classList.add('popup_opened');
        document.addEventListener('mousedown', this._handleEscClose);
    }

    closePopup() {
        this._popup.classList.remove('popup_opened');
        document.removeEventListener('mousedown', this._handleEscClose);
    }
    _handleEscClose(e) {
        if (e.key === 'Escape') {
            this.closePopup()
        }
    }
    setEventListeners() {
        this._popup.addEventListener('mousedown', (evt) => {
            if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close')) {
                this.closePopup();
            }
        });
    }


}