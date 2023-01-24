import Popup from './Popup.js'

export default class PopupWithForm extends Popup {
    constructor(popup, submitHandler) {
        super(popup);
        this._form = this._popup.querySelector(".popup__form");
        this._submitHandler = submitHandler;
        this._inputList = this._form.querySelectorAll(".popup__input");
    }

    _getInputValues() {
        this._formValues = {};
        this._inputList.forEach((input) => {
            this._formValues[input.name] = input.value;
        });
        return this._formValues;
    }

    setEventListeners() {
        super.setEventListeners();
        const submitButton = this._form.querySelector(".popup__submit");
        this._form.addEventListener("submit", (e) => {
            if (submitButton.classList.contains("popup__submit_disabled")) {
                return false;
            } else {
                e.preventDefault();
                this._submitHandler(this._getInputValues());
                this.closePopup();
            }
        });
    }

    openPopup(...inputValues) {
        if (arguments.length > 0) {
            inputValues.forEach((value, i) => {
                if (this._inputList[i] !== undefined) this._inputList[i].value = value;
            });
        }
        super.openPopup();
    }

    closePopup() {
        super.closePopup();
        this._form.reset();
    }
};