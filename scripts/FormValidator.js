export default class FormValidator {

    constructor(data, formElement) {
        this._formElement = formElement;
        this._inputSelector = data.inputSelector;
        this._submitSelector = data.submitSelector;
        this._inputErrorClass = data.inputErrorClass;
        this._errorClass = data.errorClass;
        this._inactiveButtonClass = data.inactiveButtonClass;

        this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
        this._buttonElement = this._formElement.querySelector(this._submitSelector);
    }

    _showInputError = (inputElement, errorMessage) => {
        const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.add(this._inputErrorClass);
        errorElement.textContent = errorMessage;
        errorElement.classList.add(this._errorClass);
    };

    _hideInputError = (inputElement) => {
        const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.remove(this._inputErrorClass);
        errorElement.classList.remove(this._errorClass);
        errorElement.textContent = '';
    };

    _checkInputValidity = (inputElement) => {
        if (!inputElement.validity.valid) {
            this._showInputError(inputElement, inputElement.validationMessage);
        } else {
            this._hideInputError(inputElement);
        }
    };

    _setButtonDisabled() {
        this._buttonElement.classList.add(this._inactiveButtonClass);
        this._buttonElement.setAttribute("disabled", "disabled");
    }


    _setButtonEnabled() {
        this._buttonElement.classList.remove(this._inactiveButtonClass);
        this._buttonElement.removeAttribute("disabled");
    }


    _toggleButtonState = () => {
        if (this._hasInvalidInput(this._inputList)) {
            this._setButtonDisabled(this._buttonElement);
        } else {
            this._setButtonEnabled(this._buttonElement);
        }
    }

    _setEventListeners = () => {
        this._toggleButtonState();
        this._inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._toggleButtonState();
                this._checkInputValidity(inputElement);
            });
        });
    };

    _hasInvalidInput = (inputList) => {
        return inputList.some((inputElement) => {
            return !inputElement.validity.valid;
        });
    }

    enableValidation = () => {
        this._setEventListeners();
    }


};