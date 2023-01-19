import Popup from './Popup.js'

export default class PopupWithForm extends Popup {
    constructor(popupSelector, submitCallback) {
        super(popupSelector)

    }

    _getInputValues() {

}
    setEventListeners() {
        super.setEventListeners()
    }

    closePopup() {
        super.closePopup();
    }


}