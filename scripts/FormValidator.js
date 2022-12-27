export default class FormValidator {
    constructor(data, formElement) {
        this._input = data.inputSelector;
    }
    _showInputError = (formElement, inputElement, errorMessage, params) => {
        const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.add(this._inputErrorClass);
        errorElement.textContent = errorMessage;
        errorElement.classList.add(this._errorClass);
    };

    _hideInputError = (formElement, inputElement) => {
        const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.remove(this._inputErrorClass);
        errorElement.classList.remove(this._errorClass);
        errorElement.textContent = '';
    };


    _checkInputValidity = (formElement, inputElement) => {
        if (!inputElement.validity.valid) {
            this._showInputError(formElement, inputElement, inputElement.validationMessage);
        } else {
            this._hideInputError(formElement, inputElement);
        }
    };



    _setButtonDisabled(buttonElement) {
        buttonElement.classList.add(this.inactiveButtonClass);
        buttonElement.setAttribute("disabled", "disabled");
    }



    _setButtonEnabled(buttonElement) {
        buttonElement.classList.remove(this.inactiveButtonClass);
        buttonElement.removeAttribute("disabled");
    }


    _toggleButtonState = (inputList, buttonElement, params) => {
        if (hasInvalidInput(inputList)) {
            setButtonDisabled(buttonElement, params);
        } else {
            setButtonEnabled(buttonElement, params);
        }
    }

    _setEventListeners = (formElement, params) => {
        const inputList = Array.from(this._formElement.querySelectorAll('.popup__input'));
        const buttonElement = this._formElement.querySelector('.popup__submit');
        toggleButtonState(inputList, buttonElement, params);
        inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', function () {
                toggleButtonState(inputList, buttonElement, params);
                checkInputValidity(formElement, inputElement, params);
            });
        });
    };


    hasInvalidInput = (inputList) => {
        return inputList.some((inputElement) => {
            return !inputElement.validity.valid;
        });
    }


    enableValidation = params => {
        const formList = Array.from(document.querySelectorAll(params.formSelector));
        formList.forEach((formElement) => {
            setEventListeners(formElement, params);
        });
    }


};